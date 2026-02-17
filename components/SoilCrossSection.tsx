
import React, { useState, useEffect } from 'react';

const SoilCrossSection: React.FC = () => {
  const [waterLevel, setWaterLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaterLevel((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl glass-card">
      {/* Surface */}
      <div className="absolute top-0 left-0 w-full h-12 bg-emerald-900/40 border-b border-emerald-500/30 flex items-center px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Yüzey Katmanı</span>
      </div>

      {/* Root Zone */}
      <div className="absolute top-12 left-0 w-full h-64 bg-amber-900/10 border-b border-white/5">
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-30 pointer-events-none">
           <svg viewBox="0 0 200 200" className="w-48 h-48 text-emerald-600">
             <path fill="currentColor" d="M100 20 C100 20 80 80 40 100 C80 120 100 180 100 180 C100 180 120 120 160 100 C120 80 100 20 100 20" />
           </svg>
           <span className="text-[10px] uppercase font-bold text-emerald-500">Kritik Kök Bölgesi</span>
        </div>
      </div>

      {/* Leaching Zone */}
      <div className="absolute top-[316px] left-0 w-full h-full bg-slate-900/40">
        <div className="p-6">
          <span className="text-[10px] uppercase font-bold text-slate-500">Süzülme Alanı (Kayma Riski)</span>
        </div>
      </div>

      {/* Water Simulation */}
      <div 
        className="absolute left-0 w-full bg-cyan-500/20 transition-all duration-300"
        style={{ 
          top: '48px', 
          height: `${waterLevel}%`,
          maxHeight: 'calc(100% - 48px)',
          boxShadow: '0 0 40px rgba(34, 211, 238, 0.2)'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 animate-pulse"></div>
        {/* Droplets */}
        <div className="flex flex-wrap gap-12 p-8 opacity-40">
           {[...Array(12)].map((_, i) => (
             <div key={i} className="w-1 h-8 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
           ))}
        </div>
      </div>

      {/* Sensors */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4 w-4 h-[400px] bg-slate-800 rounded-full border border-slate-700 shadow-xl flex flex-col justify-around py-8">
        {[10, 20, 30, 40, 60, 100].map((depth) => (
          <div key={depth} className="relative group">
            <div className="w-6 h-6 -ml-1 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] border-2 border-white cursor-pointer hover:scale-125 transition-transform flex items-center justify-center text-[8px] font-bold">
              {depth}
            </div>
            <div className="absolute left-10 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 px-2 py-1 rounded text-[10px] whitespace-nowrap">
              KHAS-Node {depth}cm
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoilCrossSection;
