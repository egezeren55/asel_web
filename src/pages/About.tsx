import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Kurumsal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-light text-lg"
          >
            Samsun'un ve bölgenin güven veren teknoloji firması.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        {/* Hakkımızda */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <Users size={24} />
            </div>
            <h2 className="text-3xl font-bold text-secondary-dark">Biz Kimiz?</h2>
          </div>
          <div className="prose max-w-none text-gray-600 leading-relaxed text-lg space-y-4">
            <p>
              Asel Teknoloji, güvenlik sistemleri, zayıf akım teknolojileri ve kurumsal IT çözümleri alanlarında uzmanlaşmış öncü bir teknoloji şirketidir. Yılların verdiği bilgi birikimi ve tecrübeyle kamu kurumlarına, özel sektöre ve bireysel kullanıcılara anahtar teslim projeler sunuyoruz.
            </p>
            <p>
              Kendimizi sürekli geliştirerek güncel teknolojiyi yakından takip ediyor; akıllı ev, yüksek çözünürlüklü kamera, erken yangın ihbar ve iletişim sistemleri gibi alanlarda Samsun başta olmak üzere çevre illerde hizmet veriyoruz.
            </p>
          </div>
        </motion.div>

        {/* Misyon & Vizyon */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-secondary-dark mb-4">Misyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Müşterilerimizin teknolojik altyapı ve güvenlik ihtiyaçlarını en yüksek kalite standartlarında, ekonomik ve uzun ömürlü çözümlerle karşılamak. Kurulum öncesi analizden, kurulum sonrası kesintisiz teknik desteğe kadar dürüstlük ve şeffaflıkla çalışmak.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-secondary/30">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-2xl font-bold text-secondary-dark mb-4">Vizyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Değişen ve gelişen teknoloji dünyasında yenilikçi adımlarla sektörün yön belirleyici firması olmak. "Her zaman en iyi çözüm" parolasıyla Karadeniz bölgesinden tüm Türkiye'ye kaliteli hizmet ağını genişleterek, %100 güvenli alanlar inşa etmek.
            </p>
          </motion.div>
        </div>

        {/* Değerlerimiz */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl font-bold text-secondary-dark mb-8">Temel Değerlerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Güvenilirlik', 'Yenilikçilik', 'Müşteri Odaklılık', 'Kalite ve Şeffaflık'].map((deger, index) => (
              <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm font-medium text-gray-700">
                {deger}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
