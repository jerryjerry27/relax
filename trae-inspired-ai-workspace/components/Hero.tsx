
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 max-w-[1400px] mx-auto relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Side: Large Headline */}
        <div className="lg:w-3/5">
          <div className="flex items-center space-x-2 mb-8 group cursor-pointer">
            <span className="text-trae-green">⚡</span>
            <span className="text-[14px] font-medium text-slate-400 group-hover:text-white transition-colors">TRAE SOLO 通常可用。</span>
            <span className="text-trae-green text-[14px] font-bold">立即探索 ›</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] tracking-tight">
            T他R是A一名E工程师 <br />
            <span className="text-slate-500">使用TRAE加快发货速度</span>
          </h1>
        </div>

        {/* Right Side: Description & Buttons */}
        <div className="lg:w-1/3 pt-4">
          <p className="text-xl text-slate-300 mb-4 font-medium">理解。执行。交付。</p>
          <p className="text-lg text-slate-400 mb-12 leading-relaxed">
            TRAE 是您的 10 倍人工智能工程师，可以独立为您构建软件解决方案。
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch gap-4">
            <button className="px-8 py-4 bg-trae-green hover:opacity-90 text-black rounded-md font-bold text-lg transition-all flex-1 text-center">
              下载 TRAE
            </button>
            <button className="px-8 py-4 border border-slate-700 hover:bg-white/5 text-white rounded-md font-bold text-lg transition-all flex-1 text-center">
              探索 SOLO
            </button>
          </div>
          
          <div className="mt-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">所有下载 ›</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
