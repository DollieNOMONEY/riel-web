// app/ai/page.tsx

"use client"; // This must be a Client Component to use state and handle events

import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse, type ChatMessage } from '@/app/actions'; // Import our new types and server action

// --- SVG Icon Components (no changes here) ---
const PaperClipIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.122 2.122l7.81-7.81" /></svg>
);
const MicIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5a6 6 0 00-12 0v1.5a6 6 0 006 6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0" /></svg>
);
const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" /></svg>
);
const LoadingIcon = () => (
    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );


export default function RielAIPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the bottom when new messages are added
  useEffect(() => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight);
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newUserMessage: ChatMessage = { role: 'user', content: input };
    const newMessages = [...messages, newUserMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const result = await getAIResponse(newMessages);
    
    if (result.message) {
      setMessages(prev => [...prev, { role: 'assistant', content: result.message! }]);
    } else if (result.error) {
      // Handle error: show a message to the user
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${result.error}` }]);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white font-sans">
      
      {/* --- Chat History --- */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
           <div className="flex h-full items-center justify-center">
            <h1 className="text-5xl font-bold text-blue-600">
              Welcome
            </h1>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-lg px-4 py-2 rounded-xl ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                {msg.content}
              </div>
            </div>
          ))
        )}
         {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 rounded-xl px-4 py-2">
                 <span className="animate-pulse">...</span>
              </div>
            </div>
          )}
      </div>

      {/* --- Chat Input Area --- */}
      <div className="p-4 w-full max-w-4xl mx-auto border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="relative flex items-center">
          <div className="flex w-full items-center rounded-full border border-gray-200 bg-gray-50 p-2 shadow-sm">
            <button type="button" className="p-2 text-gray-400 hover:text-blue-600">
              <PaperClipIcon className="h-6 w-6" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Riel AI"
              className="flex-1 bg-transparent px-4 border-none focus:outline-none placeholder-gray-500"
              disabled={isLoading}
            />
            <button type="button" className="p-2 text-gray-400 hover:text-blue-600">
              <MicIcon className="h-6 w-6" />
            </button>
          </div>
          <button
            type="submit"
            className="ml-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
            aria-label="Send message"
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? <LoadingIcon /> : <ArrowUpIcon className="h-6 w-6" />}
          </button>
        </form>
      </div>
    </div>
  );
}