'use client';

import { useChat } from '@/hooks/useChat';
import Navbar from '@/components/Navbar';
import ChatWindow from '@/components/ChatWindow';
import InputBar from '@/components/InputBar';

export default function Home() {
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gray-950">
      <Navbar onClearChat={clearChat} messageCount={messages.length} />
      
      <main className="flex-1 flex flex-col pt-16 pb-32">
        <ChatWindow 
          messages={messages} 
          isLoading={isLoading} 
          error={error} 
        />
      </main>
      
      <InputBar onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}