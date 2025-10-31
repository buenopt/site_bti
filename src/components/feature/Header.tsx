
import { useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 gpu-accelerated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center preload-critical">
            <img 
              src="https://static.readdy.ai/image/723f306fe6a878821c9bf6a4a28db8eb/176e39cdbb33ad19c02e106064289573.png"
              alt="BTI Tecnologia da Informação"
              className="h-10 w-auto"
              loading="eager"
              decoding="sync"
              fetchpriority="high"
              width="40"
              height="40"
            />
            <span className="ml-3 text-xl font-bold text-gray-900">
              BTI Tecnologia da Informação
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 will-change-transform ${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://wa.me/551531994299?text=Olá! Gostaria de solicitar um orçamento para serviços de TI da BTI."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors duration-200 whitespace-nowrap cursor-pointer will-change-transform"
                aria-label="Contato via WhatsApp"
              >
                <i className="ri-whatsapp-line mr-2" aria-hidden="true"></i>
                WhatsApp
              </a>
              <Link 
                to="/contato" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap will-change-transform"
                aria-label="Página de contato"
              >
                <i className="ri-phone-line mr-2" aria-hidden="true"></i>
                Contato
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`} aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white" role="navigation">
            <div className="px-4 py-4 space-y-3">
              <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Início
              </Link>
              <Link to="/sobre" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Sobre
              </Link>
              <Link to="/servicos" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Serviços
              </Link>
              <Link to="/contato" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Contato
              </Link>
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <a 
                  href="https://wa.me/551531994299?text=Olá! Gostaria de solicitar um orçamento para serviços de TI da BTI."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  aria-label="Contato via WhatsApp"
                >
                  <i className="ri-whatsapp-line mr-2" aria-hidden="true"></i>
                  WhatsApp
                </a>
                <Link 
                  to="/contato" 
                  className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
                  aria-label="Página de contato"
                >
                  <i className="ri-phone-line mr-2" aria-hidden="true"></i>
                  Contato
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
