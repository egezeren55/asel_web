import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShieldCheck, Clock } from 'lucide-react';

import hero1 from '../assets/hero_1.jpg';
import hero2 from '../assets/hero_2.jpg';
import hero3 from '../assets/hero_3.jpg';
import hero4 from '../assets/hero_4.jpg';
import hero5 from '../assets/hero_5.jpg';
import hero6 from '../assets/hero_6.jpg';

const slides = [
  { id: 1, image: hero1, title: 'Güvenliğiniz Bizim İşimiz', subtitle: 'En güncel teknolojilerle yaşam alanlarınızı güvence altına alıyoruz.' },
  { id: 2, image: hero2, title: 'Akıllı Çözümler', subtitle: 'Geleceğin teknolojilerini bugünden evinize ve iş yerinize taşıyın.' },
  { id: 3, image: hero3, title: 'Profesyonel Kameralar', subtitle: '7/24 kesintisiz, yüksek çözünürlüklü kayıt ve izleme sistemleri.' },
  { id: 4, image: hero4, title: '7/24 Teknik Destek', subtitle: 'Satış sonrası kesintisiz hizmet ve anında teknik müdahale garantisi.' },
  { id: 5, image: hero5, title: 'Hırsız Alarm Sistemleri', subtitle: 'Hassas algılama yeteneği ile tam koruma ve anında bildirim.' },
  { id: 6, image: hero6, title: 'Yangın Algılama', subtitle: 'Olası tehlikeleri saniyeler içinde tespit eden akıllı sistemler.' },
];

// Helper to animate text line by line / character by character
const TextReveal = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="block"
    >
      {text}
    </motion.span>
  );
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Slower timer for Ken Burns effect impact
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Touch Swipe Handlers for Mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-secondary-dark"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          // Ken burns effect: image slowly scales up over 8 seconds.
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1 }, 
            scale: { duration: 8, ease: "linear" } 
          }}
          className="absolute inset-0"
        >
          {/* Heavy Gradient Overlay for Dark/Premium feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark via-secondary-dark/70 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-secondary-dark/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-primary-dark/20 mix-blend-overlay z-10" />
          
          <img 
            src={slides[current].image} 
            alt={slides[current].title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                exit: { opacity: 0 }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 border border-white/20 text-primary-light font-medium text-sm backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> GELECEĞİN TEKNOLOJİSİ
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight overflow-hidden text-glow">
                <TextReveal text={slides[current].title} />
              </h1>

              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl"
              >
                {slides[current].subtitle}
              </motion.p>
              
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-4"
              >
                <button className="w-full md:w-auto relative group overflow-hidden px-8 py-4 bg-primary text-white rounded-lg font-medium tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,0.5)]">
                  <span className="relative z-10">Bizimle İletişime Geçin</span>
                  {/* Sweep gradient effect on button */}
                  <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-out" />
                </button>
                <button className="w-full md:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white backdrop-blur-lg border border-white/10 rounded-lg font-medium transition-all duration-300 hover:border-white/30">
                  Hizmetleri İncele
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Trust Badges (Glassmorphism effect) bottom right */}
      <div className="hidden lg:flex absolute z-30 bottom-12 right-12 gap-4">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl w-48 shadow-2xl skew-y-1 transform transition-transform hover:scale-105 hover:skew-y-0">
          <ShieldCheck size={28} className="text-primary mb-2" />
          <h4 className="text-white font-bold text-lg mb-1">10+ Yıl</h4>
          <p className="text-gray-400 text-xs">Sektörel Tecrübe</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl w-48 shadow-2xl -skew-y-1 transform transition-transform hover:scale-105 hover:skew-y-0">
          <Clock size={28} className="text-primary mb-2" />
          <h4 className="text-white font-bold text-lg mb-1">7/24</h4>
          <p className="text-gray-400 text-xs">Kesintisiz Destek</p>
        </div>
      </div>

      {/* Modern Slide Indicators */}
      <div className="absolute z-20 bottom-12 left-1/2 -translate-x-1/2 flex gap-4 items-center">
        <button onClick={prevSlide} className="text-white/50 hover:text-white transition-colors"><ChevronLeft size={24} /></button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === current ? 'w-12 bg-primary shadow-[0_0_10px_rgba(14,165,233,0.8)]' : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="text-white/50 hover:text-white transition-colors"><ChevronRight size={24} /></button>
      </div>
    </div>
  );
};

export default HeroSlider;
