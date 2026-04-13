import HeroSlider from '../components/HeroSlider';
import InfiniteMarquee from '../components/InfiniteMarquee';
import { ShieldAlert, Video, BellRing, Flame, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const bentoServices = [
  {
    id: 1,
    title: 'HD Yüksek Çözünürlüklü Kameralar',
    description: 'Keskin görüntü ve detaylı analiz ile mekanlarınızda kör nokta bırakmıyoruz.',
    className: 'md:col-span-2 md:row-span-2 bg-gray-900 text-white min-h-[350px] md:min-h-0',
    hasCameraSimulation: true,
    icon: <Video size={48} className="text-primary-light/80" />
  },
  {
    id: 2,
    title: 'Akıllı Yangın Algılama',
    description: 'En küçük dumanı bile hisseden hassas sensörler.',
    className: 'md:col-span-1 md:row-span-1 bg-white border border-gray-100/50 shadow-sm min-h-[280px] md:min-h-0',
    icon: <Flame size={32} className="text-red-500" />
  },
  {
    id: 3,
    title: 'Gelişmiş Alarm',
    description: 'Evinizi izinsiz girişlere karşı 7/24 koruyan akıllı alarm sistemleri.',
    className: 'md:col-span-1 md:row-span-1 bg-gray-50 border border-gray-100 min-h-[280px] md:min-h-0',
    icon: <BellRing size={32} className="text-secondary-dark" />
  },
  {
    id: 4,
    title: 'Endüstriyel IP Çözümler',
    description: 'Büyük fabrikalar ve kompleks tesisler için devasa ağ tabanlı güvenlik donanımları ve yapay zeka analizleri.',
    className: 'md:col-span-2 md:row-span-1 bg-gradient-to-r from-primary to-primary-dark text-white',
    icon: <ShieldAlert size={32} className="text-white/80" />
  }
];

const CameraSimulation = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-gray-900 overflow-hidden flex items-center justify-center pointer-events-none z-0">
      {/* CCTV static noise overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      {/* Scanning Line */}
      <motion.div 
        animate={{ y: ['-100%', '1000%'] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-2 bg-primary/20 shadow-[0_0_20px_rgba(14,165,233,0.5)] z-20"
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* REC Indicator */}
      <div className="absolute top-8 right-8 flex items-center gap-2 z-20">
        <motion.div 
          animate={{ opacity: [1, 0, 1] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
        />
        <span className="text-red-500 font-mono font-bold tracking-widest text-sm">REC</span>
      </div>

      {/* Camera Focus AI UI UI UI */}
      <div className="w-[80%] h-[80%] border border-white/5 relative z-20">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-primary/50 rounded-full" />
        </div>
      </div>
      
      {/* Datetime Overlay */}
      <div className="absolute bottom-8 left-8 text-white/30 font-mono text-xs z-20">
        CAM-01 | ASEL HQ | LIVE: 1080p
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSlider />
      <InfiniteMarquee />
      
      {/* Premium Bento Grid Services Section */}
      <section className="py-24 relative overflow-hidden bg-gray-50">
        {/* Soft neon glow in background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-0 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="flex items-center gap-2 text-sm font-bold text-primary tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-primary" /> Çözümlerimiz
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-dark leading-tight tracking-tight mt-2 md:mt-0">
                Her İhtiyaca Yönelik <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Teknolojik Altyapı</span>
              </h3>
            </div>
            <button className="flex items-center gap-2 group font-semibold text-secondary-dark hover:text-primary transition-colors">
              Tüm Hizmetleri İncele 
              <span className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all transform group-hover:translate-x-2 shadow-sm">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {bentoServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-[2rem] p-8 overflow-hidden group hover:scale-[1.02] transition-transform duration-500 ${service.className}`}
              >
                {/* Background Video or Glow effect */}
                {service.hasCameraSimulation ? (
                  <>
                    <CameraSimulation />
                    <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-colors duration-700 z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10 pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 z-0" />
                )}
                
                <div className="h-full flex flex-col justify-between relative z-20">
                  <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h4>
                    <p className={`leading-relaxed text-sm lg:text-base ${service.className.includes('text-white') ? 'text-gray-300' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernized About CTA Section */}
      <section className="py-24 bg-secondary-dark text-white relative overflow-hidden">
        {/* Animated Background Mesh/Glow */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[140%] bg-gradient-to-c from-primary/30 to-transparent blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm backdrop-blur-sm">
              Geleceği Birlikte İnşa Edelim
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Güvenli Gelecek İçin <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">Asel Teknoloji</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl">
              Samsun ve çevre illerde yılların verdiği tecrübe ile kamera sistemleri, alarm sistemleri ve zayıf akım teknolojilerinde devrim yaratıyoruz. Klasik yöntemleri değil, yenilikçi ve dijital çözümleri sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium transition-all duration-300 shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_50px_rgba(14,165,233,0.5)]">
                Şirket Profili
              </button>
            </div>
          </div>
          
          <div className="lg:w-5/12 w-full mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
              >
                <div className="text-5xl font-extrabold text-primary-light mb-3 tracking-tighter">10+</div>
                <div className="text-gray-400 font-medium">Yıllık Zirve Tecrübesi</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl mt-8"
              >
                <div className="text-5xl font-extrabold text-primary-light mb-3 tracking-tighter">500+</div>
                <div className="text-gray-400 font-medium">Başarılı Kurumsal Proje</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
              >
                <div className="text-5xl font-extrabold text-primary-light mb-3 tracking-tighter">%100</div>
                <div className="text-gray-400 font-medium">Müşteri Memnuniyeti</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl mt-8"
              >
                <div className="text-5xl font-extrabold text-primary-light mb-3 tracking-tighter">7/24</div>
                <div className="text-gray-400 font-medium">Aktif Saha Desteği</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
