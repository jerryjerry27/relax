
import React from 'react';

const Features: React.FC = () => {
  const featureList = [
    {
      title: "Context-Aware Coding",
      description: "Trae analyzes your entire codebase to provide suggestions that actually work in your specific architecture.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with AI and human teammates in the same workspace with shared state and history.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Intelligent Debugging",
      description: "Auto-detect logic errors and performance bottlenecks before you even hit 'Run'.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to supercharge your development workflow with AI.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((feature, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-all cursor-default group border border-slate-800">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
