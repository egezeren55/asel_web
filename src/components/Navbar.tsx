import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'ANA SAYFA', path: '/' },
    { name: 'KURUMSAL', path: '/kurumsal' },
    { name: 'HİZMETLERİMİZ', path: '/hizmetler' },
    { name: 'ÜRÜNLERİMİZ', path: '/urunler' },
    { name: 'İLETİŞİM', path: '/iletisim' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300">

      {/* Main Navbar */}
      <nav className={`${isScrolled ? 'glass-nav py-3' : 'bg-white/95 py-4'} shadow-sm transition-all duration-300`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/src/assets/logo.jpg" alt="Asel Teknoloji Logo" className="h-10 md:h-12 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-secondary-dark'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/iletisim" className="btn-primary ml-4 shadow-md py-2.5 px-5">
                Teklif Alın
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-dark hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="container mx-auto py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-2 text-sm font-semibold ${
                    location.pathname === link.path ? 'text-primary' : 'text-secondary-dark'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
