import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion } from 'framer-motion';
import { UploadIcon, VideoCreationIcon } from './icons';

const loadingMessages = [
    "Contacting the visual cortex...",
    "Warming up the generation engine...",
    "Gathering stardust and pixels...",
    "Compositing frames of your vision...",
    "Rendering your masterpiece...",
    "This can take a few minutes...",
];

const VideoGenerator: React.FC = () => {
    const [apiKeySelected, setApiKeySelected] = useState<boolean>(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageBase64, setImageBase64] = useState<string | null>(null);
    const [prompt, setPrompt] = useState<string>('');
    const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
    const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loadingMessage, setLoadingMessage] = useState<string>(loadingMessages[0]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkApiKey = async () => {
            const hasKey = await window.aistudio.hasSelectedApiKey();
            setApiKeySelected(hasKey);
        };
        checkApiKey();
    }, []);

    useEffect(() => {
        let interval: number;
        if (isLoading) {
            let i = 0;
            interval = window.setInterval(() => {
                i = (i + 1) % loadingMessages.length;
                setLoadingMessage(loadingMessages[i]);
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isLoading]);

    const handleSelectKey = async () => {
        await window.aistudio.openSelectKey();
        // Assume success after opening dialog to avoid race condition
        setApiKeySelected(true);
    };

    const fileToBase64 = (file: File): Promise<{mimeType: string, data: string}> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result as string;
                const mimeType = result.split(',')[0].split(':')[1].split(';')[0];
                const data = result.split(',')[1];
                resolve({ mimeType, data });
            };
            reader.onerror = (error) => reject(error);
        });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result as string);
            };
            reader.readAsDataURL(file);
            setGeneratedVideoUrl(null);
            setError(null);
        }
    };

    const handleGenerate = async () => {
        if (!imageFile || !prompt) {
            setError("Please upload an image and provide a prompt.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setGeneratedVideoUrl(null);
        setLoadingMessage(loadingMessages[0]);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const { data: base64EncodeString, mimeType } = await fileToBase64(imageFile);

            let operation = await ai.models.generateVideos({
                model: 'veo-3.1-fast-generate-preview',
                prompt: prompt,
                image: { imageBytes: base64EncodeString, mimeType: mimeType },
                config: {
                    numberOfVideos: 1,
                    resolution: '720p',
                    aspectRatio: aspectRatio,
                }
            });

            while (!operation.done) {
                await new Promise(resolve => setTimeout(resolve, 10000));
                operation = await ai.operations.getVideosOperation({ operation: operation });
            }
            
            if (operation.error) {
                // FIX: Cast operation.error.message to a string to handle cases where it might be of type 'unknown'.
                throw new Error(String(operation.error.message));
            }

            const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
            if (downloadLink) {
                 const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
                 const videoBlob = await response.blob();
                 setGeneratedVideoUrl(URL.createObjectURL(videoBlob));
            } else {
                 throw new Error("Video generation completed but no download link was found.");
            }

        } catch (err: any) {
            console.error(err);
            let errorMessage = "Failed to generate video. Please try again.";
            if (err.message?.includes("Requested entity was not found")) {
                errorMessage = "API Key not valid. Please select a valid API key and try again.";
                setApiKeySelected(false);
            }
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };
    
    if (!apiKeySelected) {
        return (
            <div className="text-center py-16 px-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">API Key Required</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-6">
                    Video generation with Veo requires a project with billing enabled. Please select your API key to continue.
                    Read more about billing at <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ai.google.dev</a>.
                </p>
                <motion.button
                    onClick={handleSelectKey}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                    Select API Key
                </motion.button>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Left Column: Input */}
                 <div className="flex flex-col gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">1. Upload Starting Image</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <UploadIcon className="mx-auto h-12 w-12 text-gray-500" />
                                <div className="flex text-sm text-gray-500">
                                    <label htmlFor="video-file-upload" className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-blue-400 hover:text-blue-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 focus-within:ring-blue-500 px-1">
                                        <span>Upload a file</span>
                                        <input id="video-file-upload" name="video-file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                                    </label>
                                </div>
                                {imageFile && <p className="text-sm text-green-400 pt-2">{imageFile.name}</p>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="video-prompt" className="block text-sm font-medium text-gray-400">2. Describe Your Video</label>
                        <textarea
                            id="video-prompt"
                            rows={3}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., A cinematic shot of this object on a beach at sunset"
                            className="mt-1 py-3 px-4 block w-full shadow-sm bg-gray-800 border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>
                     <div>
                        <label htmlFor="aspect-ratio" className="block text-sm font-medium text-gray-400">3. Aspect Ratio</label>
                        <select
                            id="aspect-ratio"
                            value={aspectRatio}
                            onChange={(e) => setAspectRatio(e.target.value as '16:9' | '9:16')}
                            className="mt-1 block w-full pl-3 pr-10 py-3 text-base bg-gray-800 border-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        >
                            <option value="16:9">16:9 (Landscape)</option>
                            <option value="9:16">9:16 (Portrait)</option>
                        </select>
                    </div>
                    <motion.button
                        onClick={handleGenerate}
                        disabled={isLoading || !imageFile || !prompt}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                         {isLoading ? 'Generating...' : 'Generate Video'}
                         <VideoCreationIcon />
                    </motion.button>
                     {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                {/* Right Column: Output */}
                <div className="flex flex-col gap-4">
                    <div className={`aspect-video bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden border border-gray-700 relative ${aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-[16/9]'}`}>
                       {generatedVideoUrl && <video src={generatedVideoUrl} controls autoPlay loop className="w-full h-full object-cover" />}
                       {!generatedVideoUrl && imageBase64 && <img src={imageBase64} alt="Original" className="max-h-full max-w-full" />}
                       {!generatedVideoUrl && !imageBase64 && <p className="text-gray-500 p-4 text-center">Your video will appear here</p>}
                       {isLoading && (
                            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center p-4">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mb-4"></div>
                                <p className="text-white font-semibold">{loadingMessage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGenerator;