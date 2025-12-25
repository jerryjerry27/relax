
import React from 'react';

const Changelog: React.FC = () => {
  return (
    <section id="changelog" className="py-20 px-6 max-w-[1400px] mx-auto">
      <div className="text-center mb-24">
        <p className="text-trae-green font-bold mb-4">更新日志</p>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          TRAE IDE 的<span className="text-trae-green">新增</span>功能
        </h2>
        <p className="text-slate-400 text-lg">TRAE 的更新、变更和改进。</p>
        <button className="mt-10 px-8 py-3 border border-slate-700 hover:bg-white/5 text-white font-bold transition-all rounded-sm">
          了解更多
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative pl-12">
          {/* Vertical Dashed Line */}
          <div className="changelog-line"></div>

          {/* Entry 1 */}
          <div className="relative mb-20">
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-white rounded-sm border-2 border-black z-10"></div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <p className="text-trae-green text-xl font-bold mb-2">2025-12-22</p>
                <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded font-mono">版本 3.5.9</span>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  为确保命令安全执行，TRAE 已升级 AI 生成命令的运行工作流程。您可以在设置中心配置以下三种命令执行模式之一（目前正在逐步推出）：
                </p>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full shrink-0"></span>
                    <span>带允许列表的沙箱（默认启用）：命令会在经过风险评估的安全沙箱内自动执行。包含在允许列表中的命令会绕过沙箱直接执行。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full shrink-0"></span>
                    <span>手动运行：所有命令在执行前都需要手动确认。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full shrink-0"></span>
                    <span>自动运行：所有命令均在沙箱外自动执行。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Entry 2 */}
          <div className="relative mb-20 opacity-60">
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-slate-700 rounded-sm border-2 border-black z-10"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <p className="text-slate-400 text-xl font-bold mb-2">2025-12-15</p>
                <span className="px-2 py-1 bg-slate-800 text-slate-500 text-xs rounded font-mono">版本 3.5.0</span>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-400 text-lg leading-relaxed">
                  引入原生 Gemini 2.5 集成，大幅提升代码生成的逻辑性和长上下文处理能力。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Changelog;
