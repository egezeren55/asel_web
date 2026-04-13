// Bu dosya backend ekibi için hazırlanmıştır.
// Örnek kullanım: 'fetch' veya 'axios' kullanarak backend endpointinize bağlayın.

import domeCameraImg from '../assets/dome_camera.png';
import bulletCameraImg from '../assets/bullet_camera.png';
import alarmSystemImg from '../assets/alarm_system.png';
import fingerprintReaderImg from '../assets/fingerprint_reader.png';
import smartPanelImg from '../assets/smart_panel.png';
import smokeDetectorImg from '../assets/smoke_detector.png';

export interface Product {
  id: string | number;
  name: string;
  category: string;
  price: string;
  image: string;
}

// TODO(Backend): Bu mock verisini silin ve veritabanından veri döndüren `https://api.aselteknoloji.com/v1/products` vb. bir istekle değiştirin.
const mockProducts: Product[] = [
  { id: 1, name: 'Dome IP Kamera 4MP', category: 'Kamera', price: 'Teklif Alın', image: domeCameraImg },
  { id: 2, name: 'Bullet AHD Kamera 2MP', category: 'Kamera', price: 'Teklif Alın', image: bulletCameraImg },
  { id: 3, name: 'Kablosuz Hırsız Alarm Seti', category: 'Alarm', price: 'Teklif Alın', image: alarmSystemImg },
  { id: 4, name: 'Parmak İzi Okuyucu', category: 'Erişim Kontrol', price: 'Teklif Alın', image: fingerprintReaderImg },
  { id: 5, name: 'Akıllı Ev Yönetim Paneli', category: 'Akıllı Ev', price: 'Teklif Alın', image: smartPanelImg },
  { id: 6, name: 'Yangın Duman Dedektörü', category: 'Alarm', price: 'Teklif Alın', image: smokeDetectorImg },
];

export const getProducts = async (): Promise<Product[]> => {
  // Simüle edilmiş network gecikmesi (silinecek)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 800);
  });
};
