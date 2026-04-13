import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { submitContactForm } from '../api/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setSubmitted(true);
        setFormData({ fullName: '', phone: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Submission failed', error);
      alert('Mesaj gönderilemedi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gray-50">
      <div className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            İletişim
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-light text-lg max-w-2xl mx-auto"
          >
            Soru, görüş veya proje fiyatlandırmaları için bizimle iletişime geçmekten çekinmeyin.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-secondary-dark mb-8">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-dark mb-1">Adres</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">Samsun, Türkiye (Merkez Ofis)</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-dark mb-1">Telefon</h4>
                    <a href="tel:03624004545" className="text-gray-600 hover:text-primary transition-colors text-sm">0362 400 45 45</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-dark mb-1">E-Posta</h4>
                    <a href="mailto:info@aselteknoloji.com" className="text-gray-600 hover:text-primary transition-colors text-sm">info@aselteknoloji.com</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm h-full"
            >
              <h3 className="text-2xl font-bold text-secondary-dark mb-8">Bize Mesaj Gönderin</h3>
              
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 py-8">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">Mesajınız Alındı</h4>
                  <p className="text-gray-500 text-center max-w-sm">Talebiniz başarıyla bize ulaştı. En kısa sürede sağladığınız iletişim bilgilerinden dönüş yapacağız.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-primary font-medium hover:underline">Yeni Mesaj Gönder</button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Adınız Soyadınız</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                        placeholder="Ad Soyad" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Telefon Numaranız</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                        placeholder="05XX XXX XX XX" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">E-Posta Adresiniz</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                      placeholder="ornek@mail.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Mesajınız</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5} 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" 
                      placeholder="Size nasıl yardımcı olabiliriz?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send size={18} />
                        Mesajı Gönder
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Google Map */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-3xl overflow-hidden h-[400px] border border-gray-100 shadow-sm relative shadow-inner"
        >
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            title="Harita - Asel Teknoloji"
            src="https://maps.google.com/maps?q=Asel%20Teknoloji,%20Samsun&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            style={{ border: 0, filter: 'contrast(1.05) grayscale(0.2)' }} 
            allowFullScreen 
            aria-hidden="false" 
            tabIndex={0}
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
