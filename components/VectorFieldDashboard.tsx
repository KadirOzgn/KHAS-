
import React, { useMemo, useEffect, useState } from 'react';
import { Droplet, Sparkles } from 'lucide-react';

const VectorFieldDashboard: React.FC = () => {
  const [dimensions, setDimensions] = useState({ rows: 18, cols: 36 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDimensions({ rows: 15, cols: 30 });
      } else if (window.innerWidth < 1024) {
        setDimensions({ rows: 18, cols: 50 });
      } else {
        setDimensions({ rows: 24, cols: 90 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const vectors = useMemo(() => {
    return Array.from({ length: dimensions.rows * dimensions.cols }).map((_, i) => {
      const row = Math.floor(i / dimensions.cols);
      const col = i % dimensions.cols;
      
      const centerX = dimensions.cols / 2;
      const distanceFromCenter = col - centerX;
      const spreadAngle = (distanceFromCenter / centerX) * 35;
      const baseAngle = 90 + spreadAngle;
      const waveX = Math.sin(col * 0.15 + row * 0.1) * 10;
      const waveY = Math.cos(row * 0.3) * 6;
      const angle = baseAngle + waveX + waveY;
      
      let arrowColor = "rgba(255, 255, 255, 0.4)";
      if (row < dimensions.rows * 0.35) {
        arrowColor = `rgba(252, 165, 165, ${0.2 + Math.random() * 0.3})`;
      } else if (row > dimensions.rows * 0.6) {
        arrowColor = `rgba(147, 197, 253, ${0.2 + Math.random() * 0.4})`;
      } else {
        arrowColor = `rgba(255, 255, 255, ${0.15 + Math.random() * 0.3})`;
      }

      const opacity = 0.1 + (Math.random() * 0.5);
      const delay = (row * 0.08 + Math.abs(distanceFromCenter) * 0.03).toFixed(2);
      
      return { angle, opacity, row, col, delay, arrowColor };
    });
  }, [dimensions]);

  return (
    <div className="w-full bg-[#0a1120] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
      <div className="flex flex-1 min-h-[400px] md:min-h-[550px] lg:min-h-[650px] flex-col lg:flex-row">
        
        {/* Main Heatmap Area */}
        <div className="relative lg:flex-[6] overflow-hidden bg-[#1e293b] border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="w-full h-full relative">
            {/* Heatmap Background Layer */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 w-full h-[35%] bg-gradient-to-b from-[#7f1d1d] via-[#991b1b] to-[#78350f]"></div>
              <div className="absolute top-[35%] w-full h-[20%] bg-gradient-to-b from-[#78350f] via-[#334155] to-[#1e3a8a]"></div>
              <div className="absolute bottom-0 w-full h-[45%] bg-gradient-to-t from-[#0c1a44] via-[#1e3a8a] to-[#1e3a8a]"></div>
              <div className="absolute bottom-0 left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse"></div>
            </div>
            
            <div className="absolute inset-0 z-10 grid grid-cols-[auto_1fr] h-full">
              {/* Depth Scale */}
              <div className="w-12 md:w-20 flex flex-col justify-between py-6 md:py-12 text-[7px] md:text-[10px] font-black text-white/40 text-center uppercase tracking-tighter bg-black/40 backdrop-blur-md border-r border-white/5">
                <span className="text-red-400">— 5cm</span>
                <span>— 15cm</span>
                <span className="text-blue-300">— 25cm</span>
                <span>— 35cm</span>
                <span className="text-slate-500">— 45cm</span>
              </div>
              
              {/* Scalable Vector Field */}
              <div 
                className="relative grid p-2 md:p-4 gap-0.5 md:gap-1 overflow-hidden"
                style={{ 
                  gridTemplateColumns: `repeat(${dimensions.cols}, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${dimensions.rows}, minmax(0, 1fr))`
                }}
              >
                <style>
                  {`
                    @keyframes waterFlowHeavy {
                      0% { transform: scaleX(1) translateY(0); opacity: 0.3; }
                      50% { transform: scaleX(1.4) translateY(2px); opacity: 0.8; }
                      100% { transform: scaleX(1) translateY(0); opacity: 0.3; }
                    }
                    .dense-vector {
                      animation: waterFlowHeavy 3s infinite ease-in-out;
                      will-change: transform, opacity;
                    }
                  `}
                </style>
                {vectors.map((v, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <div 
                      className="dense-vector w-full h-[1px] md:h-[1.5px] rounded-full transform"
                      style={{ 
                        transform: `rotate(${v.angle}deg)`,
                        opacity: v.opacity,
                        backgroundColor: v.arrowColor,
                        animationDelay: `${v.delay}s`
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Panel */}
        <div className="w-full lg:w-[320px] xl:w-[380px] bg-[#0a121e] p-5 md:p-8 space-y-4 md:space-y-6 flex flex-col justify-center shrink-0">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gradyen Analizi</p>
            <div className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[8px] font-bold animate-pulse">CANLI</div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2 md:gap-4">
            {[
              { range: '0-10 cm', val: 12, active: false },
              { range: '10-20 cm', val: 38, active: false },
              { range: '20-30 cm', val: 82, active: true },
              { range: '30-40 cm', val: 32, active: false }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`p-3 md:p-4 rounded-xl border transition-all duration-500 ${
                  item.active 
                  ? 'bg-blue-600/10 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                  : 'bg-white/5 border-white/5'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Droplet className={`w-3 h-3 ${item.active ? 'text-blue-400' : 'text-slate-500'}`} />
                  <span className={`text-[9px] md:text-[11px] font-black uppercase ${item.active ? 'text-blue-200' : 'text-slate-500'}`}>{item.range}</span>
                </div>
                <div className="flex justify-between items-end">
                   <span className={`text-sm md:text-xl font-black ${item.active ? 'text-white' : 'text-slate-600'}`}>%{item.val}</span>
                   <span className={`text-[8px] font-bold ${item.active ? 'text-blue-400' : 'text-slate-700'}`}>NEM</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
             <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-emerald-400 w-3 h-3" />
                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">AI İçgörü</span>
             </div>
             <p className="text-[10px] md:text-xs font-semibold text-slate-400 leading-relaxed italic">
               "Gradyen akışı 25cm derinlikte stabil."
             </p>
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="hidden md:flex h-16 border-t border-white/10 text-[9px] font-black tracking-[0.2em]">
        <div className="flex-[4] flex items-stretch bg-black/20">
          {['KRİTİK', 'YETERSİZ', 'OPTIMAL', 'DOYGUN'].map((label, i) => (
            <div key={i} className={`flex-1 flex items-center justify-center border-r border-white/5 ${i === 2 ? 'bg-blue-900/20 text-blue-400' : 'text-slate-600'}`}>{label}</div>
          ))}
        </div>
        <div className="flex-[6] bg-emerald-900/30 flex items-center justify-between px-8 text-emerald-300">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></div>
            <span className="uppercase italic">SİSTEM AKTİF - VERİMLİLİK OPTİMİZE</span>
          </div>
          <div className="px-3 py-1 rounded-full border border-emerald-500/30 text-[8px]">CANLI ANALİZ</div>
        </div>
      </div>
    </div>
  );
};

export default VectorFieldDashboard;
