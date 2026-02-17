
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Menu, 
  X,
  Waves,
  ArrowRight,
  Sparkles,
  Target,
  CheckCircle2,
  Map,
  Activity,
  Cpu,
  Droplets,
  Microscope,
  Box,
  Layers
} from 'lucide-react';
import GradientChart from './components/GradientChart';
import VectorFieldDashboard from './components/VectorFieldDashboard';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020802] text-slate-100 selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#020802]/95 backdrop-blur-2xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-4 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <img src="https://smartmoles.com/assets/logo/smartmoles-logo.png" alt="SmartMoles Logo" className="h-8 md:h-12 w-auto brightness-110 hover:scale-105 transition-transform cursor-pointer" />
          
          <div className="hidden md:flex items-center gap-10 font-bold text-slate-300">

            <a 
              href="https://smartmoles.com/iletisim"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-black transition-all hover:scale-105 shadow-lg shadow-emerald-900/20 text-sm"
            >
              İLETİŞİME GEÇ
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-[#020802] border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 py-8 shadow-2xl' : 'max-h-0'}`}>
           <div className="px-8 flex flex-col gap-6">
             <a href="https://smartmoles.com/iletisim" className="bg-emerald-600 text-white py-4 rounded-xl text-center font-black uppercase tracking-widest text-sm">İletişime Geç</a>
           </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020802] via-emerald-950/20 to-[#020802] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Agriculture Technology" 
            className="w-full h-full object-cover opacity-30 brightness-[0.2]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-20">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mx-auto lg:mx-0">
              <Cpu className="text-emerald-400 w-4 h-4" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-emerald-300">Precision Agriculture v4.0</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[1] lg:leading-[0.85] tracking-tighter uppercase">
              Gradyen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 italic drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">FÜZYONU</span>
              <br /> Analitiği.
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Toprağın görünmez katmanlarını yüksek çözünürlüklü dijital verilere dönüştürüyoruz. Karar verin, tahmin etmeyin.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                href="https://smartmoles.com/urunlerimiz/smartmoles-sensoru"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 bg-emerald-600 text-white px-10 py-6 rounded-2xl font-black text-lg transition-all hover:bg-emerald-500 shadow-[0_20px_40px_rgba(5,150,105,0.2)]"
              >
                KEŞFET <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-600/10 blur-[150px] rounded-full animate-pulse"></div>
            <img 
              src="https://smartmoles.com/assets/images/product/smartmoles-com-smartmoles-sensor-urun-gorseli-01.webp" 
              alt="KHAS Pro Sensor"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-[0_40px_100px_rgba(0,0,0,0.7)] hover:scale-105 transition-all duration-1000 rotate-3 group-hover:rotate-0"
            />
          </div>
        </div>
      </section>

      {/* Section: WHY (Sinek Method) */}
      <section id="neden" className="py-24 md:py-48 bg-[#030a03] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_rgba(16,185,129,0.05),_transparent_50%)]"></div>
        
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-24 items-center relative z-10">
          <div className="space-y-12 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.5em]">Vizyonumuz</span>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight uppercase">
                İnanıyoruz ki;<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">GERÇEK VERİMLİLİK</span><br />
                Veriyi Görebilmektir.
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-medium italic">
                "Toprağın içini görmeden sulama yapmak, bir tahminden öteye geçemez. SmartMoles ile her damlanın kök bölgesindeki yolculuğuna şahitlik edin."
              </p>
              <div className="h-1 w-24 bg-emerald-600 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-left max-w-sm mx-auto lg:mx-0">
               <div>
                  <h4 className="text-white font-black text-3xl md:text-4xl tracking-tighter">%80</h4>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Su Tasarrufu</p>
               </div>
               <div>
                  <h4 className="text-emerald-500 font-black text-3xl md:text-4xl tracking-tighter">X2</h4>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Hasat Verimi</p>
               </div>
            </div>
          </div>

          {/* Scaled Visual Component */}
          <div className="relative group/viz transition-all duration-1000 w-full lg:scale-105 xl:scale-110">
            <VectorFieldDashboard />
          </div>
        </div>
      </section>

      {/* Section: HOW (Gradient Fusion Architecture) */}
      <section id="nasil" className="py-24 md:py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6 mb-24 md:mb-32">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Microscope className="text-blue-400 w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300">Yapay Zeka Destekli Füzyon</span>
          </div>
          <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">GRADYEN FÜZYON <br /><span className="text-emerald-500 italic">MİMARİSİ</span></h3>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium">Bitkinizin gerçek ihtiyacını, toprağın fiziksel değişimlerinden okuyan 3 aşamalı derin teknoloji.</p>
        </div>

        {/* Phase Flow Diagram Layout */}
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 relative">
          <PhaseCard 
            phase="01"
            title="Dinamik Kalibrasyon"
            desc="Sensör toprağın fiziksel yapısını ve kök ağını milimetrik hassasiyetle haritalandırarak hatasız bir başlangıç yapar."
            icon={<Target />}
            color="emerald"
            img="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800"
          />
          <PhaseCard 
            phase="02"
            title="Pozitif Gradyen"
            desc="Sulamadaki suyun aşağı doğru süzülme hızını (flux) ve emilimini analiz eder."
            icon={<Waves />}
            color="blue"
            isHighlighted
            img="https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800"
          />
          <PhaseCard 
            phase="03"
            title="Ters Gradyen"
            desc="Bitki tüketimini (evapotranspirasyon) ve riskli süzülmeyi anında raporlar."
            icon={<Activity />}
            color="red"
            img="https://images.unsplash.com/photo-1504194104404-433180773017?auto=format&fit=crop&q=80&w=800"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-32 md:mt-48">
          <GradientChart />
        </div>
      </section>

      {/* Section: WHAT */}
      <section className="py-24 md:py-48 bg-emerald-950/20 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative p-12 glass-card rounded-[4rem] border-white/10 group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 to-blue-600/10 opacity-30"></div>
             <img src="https://smartmoles.com/assets/images/product/smartmoles-com-smartmoles-sensor-urun-gorseli-01.webp" className="w-full drop-shadow-2xl group-hover:scale-110 transition-all duration-1000 transform -rotate-6 group-hover:rotate-0" />
          </div>
          <div className="space-y-12">
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none italic">KHAS SERİSİ <br /><span className="text-emerald-500">DONANIM GÜCÜ</span></h3>
            
            <div className="space-y-8">
              <BenefitItem title="SmartRoot Imaging" desc="10cm - 120cm arası derinlikte kök aktivite haritalandırması." icon={<Target className="text-emerald-400" />} />
              <BenefitItem title="Fusion AI Node" desc="Gradyen algoritmalarını donanım seviyesinde koşan işlemci mimarisi." icon={<Cpu className="text-blue-400" />} />
              <BenefitItem title="Cloud Sync" desc="LORA / GSM üzerinden dünya genelinde kesintisiz veri aktarımı." icon={<ShieldCheck className="text-amber-500" />} />
            </div>
            
            <a 
              href="https://smartmoles.com/urunlerimiz/smartmoles-sensoru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-white text-black py-8 rounded-3xl font-black text-xl hover:bg-emerald-500 hover:text-white transition-all shadow-2xl active:scale-95"
            >
              TEKNİK DOKÜMANTASYON
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#010501] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
           <div className="space-y-6 max-w-lg">
              <img src="https://smartmoles.com/assets/logo/smartmoles-logo.png" alt="SmartMoles" className="h-10 mx-auto md:mx-0" />
              <p className="text-slate-500 text-sm font-medium leading-relaxed">Toprağın dijital dilini konuşan, sürdürülebilir tarım teknolojileri lideri.</p>
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-700 text-xs font-black uppercase tracking-widest">© 2026 SmartMoles. TÜM HAKLARI SAKLIDIR.</p>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/smartmoles/?hl=tr" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors">INSTAGRAM</a>
            <a href="https://tr.linkedin.com/company/smartmoles" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors">LINKEDIN</a>
            <a href="https://www.youtube.com/channel/UCzGd2wGkWrDlLTj6UQ00vkA" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors">YOUTUBE</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const PhaseCard: React.FC<{ phase: string, title: string, desc: string, icon: React.ReactNode, color: string, isHighlighted?: boolean, img: string }> = ({ phase, title, desc, icon, color, isHighlighted, img }) => (
  <div className={`relative h-[550px] rounded-[3rem] overflow-hidden group border transition-all duration-700 ${isHighlighted ? 'border-emerald-500 bg-[#051a05] shadow-[0_0_80px_rgba(16,185,129,0.15)] scale-105 z-10' : 'border-white/10 bg-[#0a0f0a] hover:border-white/30 z-0'}`}>
    
    <div className="absolute inset-0 z-0">
      <img src={img} className="w-full h-full object-cover opacity-20 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-40" alt={title} />
      <div className={`absolute inset-0 bg-gradient-to-t from-[#020802] via-[#020802]/80 to-transparent ${color === 'red' ? 'group-hover:via-red-950/40' : color === 'blue' ? 'group-hover:via-blue-950/40' : 'group-hover:via-emerald-950/40'} transition-all duration-1000`}></div>
    </div>

    <div className="relative z-10 p-10 h-full flex flex-col justify-between">
      <div className="space-y-8">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 ${isHighlighted ? 'bg-emerald-500 text-white border-emerald-400 shadow-xl' : 'bg-white/5 text-slate-400 border-white/10 group-hover:text-white group-hover:bg-white/10'}`}>
          {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
        </div>
        <div>
           <span className={`text-[10px] font-black uppercase tracking-[0.4em] mb-3 block ${isHighlighted ? 'text-emerald-400' : 'text-slate-500'}`}>FAZ {phase}</span>
           <h4 className="text-3xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">{title}</h4>
        </div>
      </div>
      
      <div className="space-y-6">
        <p className="text-base text-slate-300 font-medium leading-relaxed transition-all duration-700 opacity-80 group-hover:opacity-100">
          {desc}
        </p>
        <div className="flex gap-1 h-1.5 w-full">
           {[...Array(12)].map((_, i) => (
             <div key={i} className={`flex-1 rounded-full ${isHighlighted ? 'bg-emerald-500/40' : 'bg-white/10'} group-hover:bg-emerald-500 transition-all`} style={{ transitionDelay: `${i*50}ms` }}></div>
           ))}
        </div>
      </div>
    </div>
  </div>
);

const BenefitItem: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-6 group items-start">
    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-500 shadow-lg">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 28 })}
    </div>
    <div className="pt-2">
      <h4 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tighter mb-1">{title}</h4>
      <p className="text-sm text-slate-500 font-semibold leading-snug">{desc}</p>
    </div>
  </div>
);

export default App;
