import { motion } from 'framer-motion';
import { Video, ShieldAlert, Flame, BellRing, Server, Wifi, Cpu, Settings } from 'lucide-react';

const servicesList = [
  {
    title: 'HD Kamera Sistemleri',
    description: 'AHD çözünürlüklü kameralar ile gece/gündüz net izleme ve uzaktan erişim imkanı sağlayan sistemlerin projelendirilmesi ve kurulumu.',
    icon: <Video size={32} />
  },
  {
    title: 'IP Kamera Sistemleri',
    description: 'Geniş alanlarda network üzerinden haberleşen, yapay zeka destekli yüz ve plaka tanıma özellikli IP tabanlı kamera sistemleri.',
    icon: <ShieldAlert size={32} />
  },
  {
    title: 'Hırsız Alarm Sistemleri',
    description: 'Kablosuz be kablolu ev/iş yeri alarm sistemleri. Mobil uygulama üzerinden kontrol, anlık bildirim ve polis merkezi entegrasyonu.',
    icon: <BellRing size={32} />
  },
  {
    title: 'Yangın Algılama Sistemleri',
    description: 'Erken müdahale için duman, ısı ve gaz algılayıcı sensörler içeren yönetmeliklere uygun yangın ihbar sistemleri.',
    icon: <Flame size={32} />
  },
  {
    title: 'Network & Ağ Altyapısı',
    description: 'Kurumsal firmalar için uçtan uca kablolama, sunucu kabinet kurulumu ve fiber optik sonlandırma hizmetleri.',
    icon: <Server size={32} />
  },
  {
    title: 'Geçiş Kontrol Sistemleri',
    description: 'Kartlı geçiş (PDKS), parmak izi okuyuculu, turnike sistemleri ve plaka tanıma (OTOPARK) sistemleri.',
    icon: <Wifi size={32} />
  },
  {
    title: 'Görüntülü Diafon Sistemleri',
    description: 'Siteler ve apartmanlar için daireler arası iletişim sağlayan akıllı, yüksek çözünürlüklü dijital diafon sistemleri.',
    icon: <Cpu size={32} />
  },
  {
    title: 'Bakım ve Teknik Servis',
    description: 'Mevcut sistemleriniz için periyodik bakım anlaşmaları, arıza tespiti ve 7/24 kesintisiz destek hizmeti.',
    icon: <Settings size={32} />
  }
];

const Services = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-gray-50">
      <div className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hizmetlerimiz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-light text-lg max-w-2xl mx-auto"
          >
            İhtiyaçlarınıza özel olarak projelendirilen yüksek teknolojik güvenlik çözümleri ve zayıf akım hizmetleri.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-default flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-secondary-dark group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary-dark mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all duration-200">
                  Bilgi Alın <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
