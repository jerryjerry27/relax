
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="4" fill="#00f291"/>
              <circle cx="10" cy="16" r="2" fill="black"/>
              <circle cx="22" cy="16" r="2" fill="black"/>
            </svg>
            <span className="text-2xl font-bold tracking-tighter text-white">TRAE</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">产品</a>
            <a href="#" className="hover:text-white transition-colors">定价</a>
            <a href="#" className="hover:text-white transition-colors">博客</a>
            <a href="#" className="hover:text-white transition-colors">文档</a>
            <a href="#changelog" className="hover:text-white transition-colors">更新日志</a>
            <a href="#" className="hover:text-white transition-colors">社区</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-md text-[14px] font-medium transition-all">
            登录
          </button>
          <button className="px-6 py-2.5 bg-trae-green hover:opacity-90 text-black rounded-md text-[14px] font-bold transition-all">
            下载
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
