
import React, { useState, useRef, useEffect } from 'react';
import { useTokens } from '@/contexts/TokenContext';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Bot, User, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { tokens, consumeTokens } = useTokens();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // Check if user has enough tokens
    if (tokens < 5) {
      toast.error('Insufficient tokens! Please upgrade to continue chatting.');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Consume tokens
    const success = await consumeTokens(5);
    if (!success) {
      setIsLoading(false);
      return;
    }

    // Simulate AI response (replace with actual AI API call)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you said: "${userMessage.content}". This is a demo response. In a real implementation, this would be connected to an AI service like OpenAI's GPT.`,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="max-w-4xl mx-auto p-4">
        {/* Token Warning */}
        {tokens < 20 && (
          <Card className="bg-yellow-500/10 border-yellow-500/20 mb-4">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 text-yellow-400">
                <AlertCircle className="w-5 h-5" />
                <span>
                  {tokens < 5 
                    ? 'No tokens remaining! Upgrade to continue chatting.'
                    : `Low tokens remaining: ${tokens}. Each message costs 5 tokens.`
                  }
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Chat Messages */}
        <Card className="bg-slate-900/50 border-slate-800 mb-4">
          <CardContent className="p-0">
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                      message.sender === 'user' ? 'order-2' : 'order-1'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user'
                          ? 'bg-blue-500 order-2'
                          : 'bg-slate-700 order-1'
                      }`}
                    >
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-slate-300" />
                      )}
                    </div>
                    
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white order-1'
                          : 'bg-slate-800 text-slate-50 order-2'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-slate-300" />
                    </div>
                    <div className="bg-slate-800 text-slate-50 px-4 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
        </Card>

        {/* Message Input */}
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-4">
            <div className="flex space-x-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-slate-800/50 border-slate-700 text-slate-50 focus:border-blue-500 focus:ring-blue-500/20"
                disabled={isLoading || tokens < 5}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim() || tokens < 5}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-2 text-xs text-slate-400 text-center">
              Each message costs 5 tokens • {tokens} tokens remaining
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
