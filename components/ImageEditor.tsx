import React, { useState, useCallback } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { motion } from 'framer-motion';
import { UploadIcon, SparklesIcon } from './icons';

const ImageEditor: React.FC = () => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageBase64, setImageBase64] = useState<string | null>(null);
    const [prompt, setPrompt] = useState<string>('');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result as string);
            };
            reader.readAsDataURL(file);
            setGeneratedImage(null);
            setError(null);
        }
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

    const handleGenerate = async () => {
        if (!imageFile || !prompt) {
            setError("Please upload an image and provide an editing prompt.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const { mimeType, data: base64ImageData } = await fileToBase64(imageFile);

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: {
                    parts: [
                        {
                            inlineData: {
                                data: base64ImageData,
                                mimeType: mimeType,
                            },
                        },
                        { text: prompt },
                    ],
                },
                config: {
                    responseModalities: [Modality.IMAGE],
                },
            });
            
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    const base64ImageBytes: string = part.inlineData.data;
                    const imageUrl = `data:${part.inlineData.mimeType};base64,${base64ImageBytes}`;
                    setGeneratedImage(imageUrl);
                }
            }

        } catch (err) {
            console.error(err);
            setError("Failed to generate image. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Input */}
                <div className="flex flex-col gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">1. Upload Image</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <UploadIcon className="mx-auto h-12 w-12 text-gray-500" />
                                <div className="flex text-sm text-gray-500">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-blue-400 hover:text-blue-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 focus-within:ring-blue-500 px-1">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                {imageFile && <p className="text-sm text-green-400 pt-2">{imageFile.name}</p>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="prompt" className="block text-sm font-medium text-gray-400">2. Describe Your Edit</label>
                        <textarea
                            id="prompt"
                            rows={3}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., Add a retro filter, make the sky dramatic"
                            className="mt-1 py-3 px-4 block w-full shadow-sm bg-gray-800 border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>
                    <motion.button
                        onClick={handleGenerate}
                        disabled={isLoading || !imageFile || !prompt}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                         {isLoading ? 'Generating...' : 'Generate'}
                         <SparklesIcon />
                    </motion.button>
                     {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                {/* Right Column: Output */}
                <div className="flex flex-col gap-4">
                    <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden border border-gray-700">
                        {imageBase64 && !generatedImage && <img src={imageBase64} alt="Original" className="max-h-full max-w-full" />}
                        {generatedImage && <img src={generatedImage} alt="Generated" className="max-h-full max-w-full" />}
                        {!imageBase64 && !generatedImage && <p className="text-gray-500">Your images will appear here</p>}
                        {isLoading && (
                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                            </div>
                        )}
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                        {generatedImage ? 'Generated Image' : 'Original Image'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageEditor;
