import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';
import { ChatbotIcon, SendIcon } from './icons';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: "Hello! I'm Axis AI. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = () => {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const chatInstance = ai.chats.create({
                model: 'gemini-2.5-flash',
                 config: {
                    systemInstruction: `You are Axis AI, the official, helpful, and friendly chatbot for CobaltAxis. Your purpose is to provide accurate, brand-focused replies based on the following rules and official information.

**About CobaltAxis:**
- We are a modern, future-focused digital agency based in India.
- We craft immersive web experiences by blending design, technology, and intelligence.
- Our mission is to make businesses smarter and bolder through innovative digital solutions.
- Our vision is about making businesses smarter, building bold digital solutions, and using AI for growth.
- Our leadership team is: Hari Vamshi (CEO), Mani Pratheek (Technical Lead), and Shashi Kumar (Operations Manager).

**Our Services:**
- Custom Websites: High-performance, scalable, modern web designs integrated with your brand.
- AI Receptionists: Intelligent, multilingual virtual assistants available 24/7 with analytics.
- AI Automation Agents: Custom automation for workflow optimization.
- Video Editing: Professional editing for brand and social content.
- Brand Strategy & Growth: Data-driven marketing to build your brand.
- AI-Powered Chatbots: Enhance customer engagement with custom chatbots.

**How to Reply:**
- Always introduce our services, company values, and team expertise using the information above.
- Only provide CobaltAxis-related business info. Never share or speculate about unrelated, external entities.
- Maintain a professional, welcoming, and solution-oriented tone.
- Respect privacy. Do not request sensitive information.
- When in doubt, refer users to our official website or suggest they book a free consultation for personalized help.
- Do not make any medical, legal, or financial claims.`,
                },
            });
            setChat(chatInstance);
        };
        initChat();
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: input });
            const botMessage: Message = { sender: 'bot', text: response.text };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Gemini API error:", error);
            const errorMessage: Message = { sender: 'bot', text: "Sorry, I'm having trouble connecting. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chatbot Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg pulse-animation"
                aria-label="Toggle Chatbot"
            >
                <ChatbotIcon className="w-8 h-8" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed bottom-28 right-8 z-50 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-black/50 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 bg-gray-900/80 border-b border-gray-700 flex-shrink-0">
                            <h3 className="text-lg font-bold text-white">Axis AI</h3>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto chatbot-scrollbar">
                            <div className="flex flex-col gap-4">
                                {messages.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-xl ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}>
                                            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                                {isLoading && (
                                     <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex justify-start"
                                    >
                                        <div className="px-4 py-2 rounded-xl bg-gray-800 text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Form */}
                        <div className="p-4 bg-gray-900/80 border-t border-gray-700 flex-shrink-0">
                            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask something..."
                                    className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
                                >
                                    <SendIcon className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;