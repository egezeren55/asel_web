import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getProducts, type Product } from '../api/products';

const categories = ['Tümü', 'Kamera', 'Alarm', 'Akıllı Ev', 'Erişim Kontrol'];

const Products = () => {
  const [activeTab, setActiveTab] = useState('Tümü');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Ürünler yüklenirken hata oluştu:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = activeTab === 'Tümü' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ürünlerimiz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-light text-lg max-w-2xl mx-auto"
          >
            Sektörün en güvenilir ve dayanıklı donanımlarını sizin için tek çatı altında topladık.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-7xl">
        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex flex-col flex-wrap items-center justify-center py-32 space-y-4">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
            <p className="text-gray-500 font-medium">Sistem yükleniyor...</p>
          </div>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 overflow-hidden group transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[4/3] bg-white relative overflow-hidden flex items-center justify-center p-4">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2">{product.category}</span>
                    <h3 className="text-lg font-bold text-secondary-dark mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-semibold text-gray-800">{product.price}</span>
                      <button className="text-primary hover:text-primary-dark font-medium transition-colors text-sm border border-primary/20 px-3 py-1.5 rounded-lg hover:bg-primary/5">
                        İncele
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center text-gray-500 py-20 font-medium">
                Bu kategoride ürün bulunamadı.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
