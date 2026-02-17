
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea
} from 'recharts';
import { RefreshCcw, Download } from 'lucide-react';

const data = [
  { time: '22/01 13:45', moisture: 33.5 },
  { time: '22/01 15:00', moisture: 33.7 },
  { time: '22/01 17:00', moisture: 34.2 },
  { time: '22/01 23:30', moisture: 35.0 },
  { time: '23/01 02:45', moisture: 48.0 }, 
  { time: '23/01 06:00', moisture: 49.0 }, 
  { time: '23/01 12:30', moisture: 42.0 },
  { time: '24/01 01:30', moisture: 35.5 },
  { time: '24/01 11:15', moisture: 34.0 },
  { time: '25/01 16:30', moisture: 41.0 }, 
  { time: '25/01 21:00', moisture: 24.0 }, 
  { time: '26/01 10:00', moisture: 28.5 },
  { time: '27/01 15:15', moisture: 32.8 },
  { time: '28/01 01:00', moisture: 49.5 }, 
  { time: '28/01 04:15', moisture: 51.0 },
  { time: '28/01 10:45', moisture: 45.0 },
  { time: '29/01 03:00', moisture: 36.5 },
  { time: '29/01 14:11', moisture: 36.2 },
];

const GradientChart: React.FC = () => {
  const TERMINATION_LEVEL = 43;
  const IRRIGATION_TIME_LEVEL = 25.5;

  return (
    <div className="w-full bg-[#0a1120] rounded-[1.5rem] md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.7)] overflow-hidden text-slate-100 border border-white/10 backdrop-blur-xl">
      <div className="p-6 md:p-10 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center bg-white/5 gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-xl md:text-2xl font-black text-white">Sensör Verisi</h3>
          <p className="text-[10px] md:text-sm font-bold text-emerald-400 uppercase tracking-widest">Gradyen Nem Analizi</p>
        </div>
        <div className="flex gap-3 md:gap-4">
          <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/5 border border-white/10 text-white rounded-xl md:rounded-2xl shadow-lg hover:bg-white/10 transition-all active:scale-90">
            <RefreshCcw size={18} />
          </button>
          <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-emerald-600 text-white rounded-xl md:rounded-2xl shadow-lg hover:bg-emerald-500 transition-all active:scale-90">
            <Download size={18} />
          </button>
        </div>
      </div>

      <div className="p-4 md:p-10 h-[400px] md:h-[650px] relative">
        <div className="absolute top-6 md:top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 z-20">
            <div className="w-6 md:w-10 h-0.5 md:h-1 bg-white/20 rounded"></div>
            <span className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">7 Günlük Nem Projeksiyonu</span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 60, right: 10, left: -20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#475569" 
              fontSize={8}
              tickLine={false}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              dy={5}
              interval={2}
            />
            <YAxis 
              stroke="#475569" 
              fontSize={9}
              fontWeight={700}
              tickLine={false}
              axisLine={false}
              domain={[20, 52]}
              ticks={[20, 25.5, 30, 43, 50]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0f172a', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '10px',
                fontWeight: 'bold',
                padding: '12px',
              }}
            />
            
            <ReferenceArea y1={TERMINATION_LEVEL} y2={52} fill="#ef4444" fillOpacity={0.08} /> 
            <ReferenceArea y1={IRRIGATION_TIME_LEVEL} y2={TERMINATION_LEVEL} fill="#3b82f6" fillOpacity={0.08} /> 
            <ReferenceArea y1={20} y2={IRRIGATION_TIME_LEVEL} fill="#eab308" fillOpacity={0.08} /> 

            <ReferenceLine 
              y={TERMINATION_LEVEL} 
              stroke="#ef4444" 
              strokeDasharray="4 4" 
              label={{ 
                value: 'STOP', 
                position: 'insideBottomRight', 
                fill: '#ef4444', 
                fontSize: 8, 
                fontWeight: 900,
              }} 
            />
            <ReferenceLine 
              y={IRRIGATION_TIME_LEVEL} 
              stroke="#3b82f6" 
              strokeDasharray="4 4" 
              label={{ 
                value: 'START', 
                position: 'insideTopRight', 
                fill: '#3b82f6', 
                fontSize: 8, 
                fontWeight: 900,
              }} 
            />

            <Area 
              type="monotone" 
              dataKey="moisture" 
              stroke="#10b981" 
              strokeWidth={3}
              fill="url(#colorMoisture)"
              dot={(props: any) => {
                  const { cx, cy, payload } = props;
                  let color = '#10b981'; 
                  if (payload.moisture > TERMINATION_LEVEL) color = '#ef4444'; 
                  else if (payload.moisture < IRRIGATION_TIME_LEVEL) color = '#eab308';
                  
                  return (
                    <circle 
                        cx={cx} 
                        cy={cy} 
                        r={window.innerWidth < 768 ? 3 : 5} 
                        fill={color} 
                        stroke="#0a1120" 
                        strokeWidth={window.innerWidth < 768 ? 1 : 2}
                    />
                  );
              }}
            />
            <defs>
              <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
        
        {/* Right Side Zone Labels - Responsive visibility */}
        <div className="hidden md:flex absolute top-[100px] bottom-[140px] right-6 w-24 flex-col justify-between pointer-events-none opacity-50">
            <div className="flex flex-col items-end">
               <span className="text-[8px] font-black text-red-500 uppercase tracking-tighter bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">Aşırı</span>
            </div>
            <div className="flex flex-col items-end">
               <span className="text-[8px] font-black text-blue-400 uppercase tracking-tighter bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">Optimal</span>
            </div>
            <div className="flex flex-col items-end">
               <span className="text-[8px] font-black text-yellow-500 uppercase tracking-tighter bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-500/20">Stress</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GradientChart;
