import { MapPin, Phone, Mail, ChevronRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { subscribeNewsletter } from '../api/contact';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await subscribeNewsletter(email);
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  return (
    <footer className="bg-secondary-dark text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <img src="/src/assets/logo.jpg" alt="Asel Teknoloji" className="h-12 mb-6 object-contain bg-white rounded p-1" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Asel Teknoloji, güvenlik sistemleri ve yazılım alanlarında yenilikçi ve güvenilir çözümler sunan, müşteri memnuniyetini ön planda tutan bir teknoloji şirketidir.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Hızlı Bağlantılar
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Ana Sayfa', path: '/' },
                { name: 'Hakkımızda', path: '/kurumsal' },
                { name: 'Hizmetlerimiz', path: '/hizmetler' },
                { name: 'Ürünlerimiz', path: '/urunler' },
                { name: 'İletişim', path: '/iletisim' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm max-w-fit">
                    <ChevronRight size={14} className="text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Hizmetlerimiz
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                'HD Kamera Sistemleri',
                'IP Kamera Sistemleri',
                'Hırsız Alarm Sistemleri',
                'Yangın Algılama Sistemleri',
              ].map((service) => (
                <li key={service}>
                  <Link to="/hizmetler" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-primary" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              İletişim
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">Samsun, Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:03624004545" className="text-sm text-gray-400 hover:text-white transition-colors">0362 400 45 45</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:info@aselteknoloji.com" className="text-sm text-gray-400 hover:text-white transition-colors">info@aselteknoloji.com</a>
              </li>
            </ul>
            
            {/* E-Bülten */}
            <div className="mt-6">
              <h4 className="text-sm text-white font-medium mb-3">E-Bülten'e Üye Olun</h4>
              <form onSubmit={handleSubscribe} className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email adresiniz..." 
                  disabled={status === 'loading' || status === 'success'}
                  className="bg-gray-800 border border-gray-700 text-sm text-white px-4 py-2 rounded-l w-full focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  required
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className="bg-primary text-white px-4 py-2 rounded-r hover:bg-primary-dark transition-colors disabled:opacity-80 min-w-[50px] flex items-center justify-center"
                >
                  {status === 'loading' ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : status === 'success' ? (
                    <span>✓</span>
                  ) : (
                    <span>Gönder</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Asel Teknoloji - Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link to="#" className="hover:text-white transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
