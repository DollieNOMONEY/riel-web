"use client";

import React, { useState, useRef, useEffect } from 'react';
import { type ChatMessage } from '@/app/lib/definitions';
import { useSession, signOut as nextAuthSignOut } from 'next-auth/react';
import { signOutAction, getAIResponse } from '@/app/lib/actions';
import Link from 'next/link';
// import { getAIResponse, type ChatMessage } from '@/app/actions';
import Navigation from '@/components/Navigation';

// --- SVG Icon Components (Keep them as they are) ---
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
  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
);
const ThinkingIndicator = () => (
  <div className="flex items-center justify-start">
    <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-4 py-3">
      <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
    </div>
  </div>
);
const FormattedMessage = ({ content }: { content: any }) => {
  if (typeof content === 'string') {
    const boldRegex = /\*\*(.*?)\*\*/g;
    const parts = content.split(boldRegex);
    return (<>{parts.map((part, index) => index % 2 === 1 ? <strong key={index}>{part}</strong> : part)}</>);
  }
  return (
    <div className="space-y-2">
      {content.map((item: any, index: number) => {
        if (item.type === 'text' && item.text) {
          return <p key={index}>{item.text}</p>;
        }
        if (item.type === 'image_url') {
          return <img key={index} src={item.image_url.url} alt="User attachment" className="mt-2 rounded-lg max-w-xs" />;
        }
        return null;
      })}
    </div>
  );
};




export default function RielAIPage() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [attachedImage, setAttachedImage] = useState<{ data: string; type: string; } | null>(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight);
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && !attachedImage) return;

    const userMessageContent: any[] = [];
    if (input.trim()) {
        userMessageContent.push({ type: 'text', text: input });
    }
    if (attachedImage) {
      userMessageContent.push({ type: 'image_url', image_url: { url: attachedImage.data } });
    }

    const newUserMessage: ChatMessage = { role: 'user', content: userMessageContent };
    
    const newMessagesForState = [...messages, newUserMessage];
    setMessages(newMessagesForState);
    setInput('');
    setIsLoading(true);
    setAttachedImage(null);

    // ✨ FIX: Call getAIResponse with the correct, single argument
    const result = await getAIResponse(newMessagesForState);
    
    setIsLoading(false);
    
    if (result.message) {
      setMessages(prev => [...prev, { role: 'assistant', content: result.message! }]);
    } else if (result.error) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${result.error}` }]);
    }
  };


  const handleSignOut = async (event: React.FormEvent) => {
    event.preventDefault();
    await signOutAction();
    await nextAuthSignOut({ redirectTo: "/" });
  };

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setAttachedImage({ data: base64String, type: file.type });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-dvh bg-white font-sans">
        {/* <header className="p-4 border-b flex justify-between items-center max-w-4xl mx-auto w-full">
            <h1 className="[font-family:var(--font-bebas-neue)] font-bold text-3xl">
              R<span className='text-blue-500'>IE</span>L WEB
            </h1>
            <div>
              {status === 'loading' && <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"></div>}
              {status === 'authenticated' && (
                <div className="flex items-center gap-4">
                  <span className="text-sm">{session?.user?.name}</span>
                  <form onSubmit={handleSignOut}>
                      <button type="submit" className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-300">
                          Log Out
                      </button>
                  </form>
                </div>
              )}
              {status === 'unauthenticated' && <Link href="/login" className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700">Sign In</Link>}
            </div>
        </header> */}

      <Navigation/>
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4 w-full max-w-4xl mx-auto">
        {messages.length === 0 ? (
           <div className="flex h-full items-center justify-center">
            <h1 className="text-7xl font-bold text-blue-600">Sursdey!</h1>
           </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-lg px-4 py-2 rounded-xl whitespace-pre-wrap ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                <FormattedMessage content={msg.content} />
              </div>
            </div>
          ))
        )}
        {isLoading && <ThinkingIndicator />}
      </div>

      <div className="p-4 w-full max-w-4xl mx-auto border-t border-gray-200">
        {attachedImage && (
          <div className="relative w-24 h-24 mb-2 p-1 border rounded-md">
            <img src={attachedImage.data} alt="Attachment preview" className="w-full h-full object-cover rounded-md" />
            <button
              onClick={() => setAttachedImage(null)}
              className="absolute -top-2 -right-2 bg-gray-700 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs"
            >
              &times;
            </button>
          </div>
        )}
        <form onSubmit={handleSendMessage} className="relative flex items-center">
          <div className="flex w-full items-center rounded-full border border-gray-200 bg-gray-50 p-2 shadow-sm">
            <button type="button" onClick={handleAttachmentClick} className="p-2 text-gray-400 hover:text-blue-600">
              <PaperClipIcon className="h-6 w-6" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Riel AI"
              className="flex-1 bg-transparent px-4 border-none focus:outline-none placeholder-text-gray-500"
              disabled={isLoading}
            />
            <button type="button" className="p-2 text-gray-400 hover:text-blue-600"><MicIcon className="h-6 w-6" /></button>
          </div>
          <button
            type="submit"
            className="ml-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
            aria-label="Send message"
            disabled={isLoading || (!input.trim() && !attachedImage)}
          >
            {isLoading ? <LoadingIcon /> : <ArrowUpIcon className="h-6 w-6" />}
          </button>
        </form>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
}
