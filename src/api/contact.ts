// Bu dosya backend ekibi için iletişim form operasyonlarını içerir.

export interface ContactFormPayload {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export const submitContactForm = async (payload: ContactFormPayload): Promise<{ success: boolean; message: string }> => {
  // TODO(Backend): Bu alanı kendi POST API (örn: `fetch('/api/contact', { ... })`) bağlantınızla değiştirin.
  console.log("Backend'e gönderilen form verisi:", payload);
  
  // Simüle edilmiş network gecikmesi (silinecek)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Mesajınız başarıyla iletildi.' });
    }, 1000);
  });
};

export const subscribeNewsletter = async (email: string): Promise<{ success: boolean }> => {
  // TODO(Backend): E-Bülten veritabanı kayıt endpointiniz buraya gelecek.
  console.log("Backend'e giden Bülten Email:", email);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 600);
  });
};
