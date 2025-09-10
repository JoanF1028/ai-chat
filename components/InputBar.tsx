'use client';

import { useState, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

interface InputBarProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export default function InputBar({ onSendMessage, isLoading }: InputBarProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-end space-x-3">
          <div className="flex-1">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
              className="min-h-[52px] max-h-32 bg-gray-800 border-gray-700 text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              disabled={isLoading}
            />
          </div>
          <Button
            onClick={handleSubmit}
            disabled={!input.trim() || isLoading}
            size="icon"
            className="h-[52px] w-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 mt-2 text-center">
          ChatGPT Replica can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
}