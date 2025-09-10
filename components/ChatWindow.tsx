'use client';

import { useEffect, useRef } from 'react';
import { Message } from '@/lib/types';
import MessageBubble from './MessageBubble';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export default function ChatWindow({ messages, isLoading, error }: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
      {messages.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Welcome to ChatGPT Replica
            </h2>
            <p className="text-gray-400 text-lg">
              Start a conversation with AI powered by Mistral. Ask questions, get creative, or just chat!
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <MessageBubble
              key={message.id}
              message={message}
              isLast={index === messages.length - 1}
            />
          ))}
        </div>
      )}

      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center py-4"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm">AI is thinking...</span>
          </div>
        </motion.div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-red-900/30 border border-red-800 rounded-lg p-4">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        </motion.div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}