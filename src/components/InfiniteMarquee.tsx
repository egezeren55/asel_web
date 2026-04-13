const tags = [
  "KESİNTİSİZ 7/24 KAYIT",
  "AKILLI OTOMASYON",
  "HIZLI MÜDAHALE",
  "YAPAY ZEKA DESTEKLİ",
  "YÜKSEK ÇÖZÜNÜRLÜK",
  "PROFESYONEL EKİP"
];

const InfiniteMarquee = () => {
  return (
    <div className="bg-secondary text-primary-light py-4 overflow-hidden border-y border-gray-800 flex relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-secondary to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-secondary to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap min-w-max">
        {/* Render twice for seamless loop */}
        {[...tags, ...tags, ...tags, ...tags].map((tag, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-8" />
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-300">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
