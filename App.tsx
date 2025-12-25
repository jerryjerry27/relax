
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/FeatureSection';
import ChatWidget from './components/ChatWidget';
import Changelog from './components/Changelog';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-trae-green selection:text-black">
      <Navbar />
      
      <main>
        {/* Dynamic Entry Animation Container */}
        <div className="animate-in fade-in duration-1000">
          <Hero />
          
          {/* Workspace Preview Section */}
          <section className="px-6 py-20 bg-gradient-to-b from-black to-slate-900/20">
            <div className="max-w-[1400px] mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-white">
                    与 <span className="text-trae-green">智能</span> 协同工作
                  </h2>
                  <p className="text-slate-400 mt-4 text-lg">在实时 AI 交互中感受前所未有的开发体验。</p>
               </div>
               {/* Re-themed ChatWidget will naturally inherit the black/green vibes */}
               <ChatWidget />
            </div>
          </section>

          <Changelog />
          
          <Features />

          {/* CTA Section */}
          <section className="py-32 px-6 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">
                准备好提升您的 <span className="text-trae-green underline decoration-wavy underline-offset-8">产出</span> 了吗？
              </h2>
              <div className="flex justify-center gap-6">
                 <button className="px-12 py-5 bg-trae-green text-black font-bold text-xl rounded-md transition-all hover:scale-105">
                   免费开始使用
                 </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-trae-green rounded-md" />
              <span className="text-2xl font-bold text-white">TRAE</span>
            </div>
            <p className="text-slate-500 max-w-sm">
              适应性强的人工智能开发环境，真正理解您的流程。
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">产品</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-trae-green transition-colors">功能特性</a></li>
              <li><a href="#" className="hover:text-trae-green transition-colors">更新日志</a></li>
              <li><a href="#" className="hover:text-trae-green transition-colors">路线图</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">公司</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-trae-green transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-trae-green transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-trae-green transition-colors">服务条款</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-20 pt-10 border-t border-white/5 text-slate-600 text-xs flex justify-between">
          <span>© 2024 Trae AI Inc. 采用先进的 Gemini 技术构建。</span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
