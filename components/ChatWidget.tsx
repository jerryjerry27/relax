
import React, { useState, useRef, useEffect } from 'react';
import { streamAIResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '你好！我是 Trae-Bot。今天我能帮你构建什么？',
      timestamp: Date.now(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const assistantMsgId = (Date.now() + 1).toString();
    const assistantMsg: Message = {
      id: assistantMsgId,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, assistantMsg]);

    try {
      await streamAIResponse(input, (chunk) => {
        setMessages(prev => 
          prev.map(m => m.id === assistantMsgId ? { ...m, content: m.content + chunk } : m)
        );
      });
    } catch (error) {
      setMessages(prev => 
        prev.map(m => m.id === assistantMsgId ? { ...m, content: "抱歉，出错了。请检查 API 配置。" } : m)
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mb-20">
      <div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col h-[650px]">
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-black">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 bg-trae-green rounded-full shadow-[0_0_8px_rgba(0,242,145,0.6)]" />
            <span className="font-bold text-sm tracking-widest text-slate-300 uppercase">Adaptive Trae Session</span>
          </div>
          <div className="flex space-x-4 text-xs font-mono text-slate-500">
            <span>MODEL: GEMINI-3-FLASH</span>
            <span>LATENCY: 42MS</span>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg px-6 py-4 ${
                msg.role === 'user' 
                  ? 'bg-trae-green/10 text-trae-green border border-trae-green/20' 
                  : 'bg-white/5 text-slate-200 border border-white/5'
              }`}>
                <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                {msg.content === '' && msg.role === 'assistant' && (
                   <div className="flex space-x-1 py-2">
                     <div className="w-1.5 h-1.5 bg-trae-green rounded-full animate-pulse" />
                     <div className="w-1.5 h-1.5 bg-trae-green rounded-full animate-pulse delay-75" />
                     <div className="w-1.5 h-1.5 bg-trae-green rounded-full animate-pulse delay-150" />
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-black border-t border-white/5">
          <div className="relative flex items-center group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="问问 Trae 如何优化您的代码..."
              className="w-full bg-[#111] border border-white/10 rounded-lg py-5 pl-8 pr-20 text-white placeholder-slate-600 focus:outline-none focus:border-trae-green/50 focus:ring-1 focus:ring-trae-green/20 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={`absolute right-4 p-3 rounded-md transition-all ${
                isLoading || !input.trim() 
                  ? 'text-slate-700' 
                  : 'text-black bg-trae-green hover:scale-105 active:scale-95'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
