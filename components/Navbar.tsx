'use client';

import { MessageCircle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onClearChat: () => void;
  messageCount: number;
}

export default function Navbar({ onClearChat, messageCount }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">ChatGPT Replica</h1>
              <p className="text-xs text-gray-400">Powered by Mistral AI</p>
            </div>
          </div>
          
          {messageCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearChat}
              className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Chat
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}