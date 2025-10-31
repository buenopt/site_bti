
import { Link } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';
import Button from '../../../components/base/Button';

const HeroSection = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload da imagem crítica
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = 'https://readdy.ai/api/search-image?query=Modern%20technology%20office%20environment%20with%20servers%2C%20computers%2C%20and%20blue%20LED%20lighting%2C%20professional%20IT%20workspace%20with%20clean%20minimalist%20design%2C%20corporate%20technology%20center%20with%20blue%20ambient%20lighting%2C%20high-tech%20data%20center%20atmosphere&width=1920&height=1080&seq=hero-bg-blue&orientation=landscape';
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image com lazy loading otimizado */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: isLoaded ? `url('https://readdy.ai/api/search-image?query=Modern%20technology%20office%20environment%20with%20servers%2C%20computers%2C%20and%20blue%20LED%20lighting%2C%20professional%20IT%20workspace%20with%20clean%20minimalist%20design%2C%20corporate%20technology%20center%20with%20blue%20ambient%20lighting%2C%20high-tech%20data%20center%20atmosphere&width=1920&height=1080&seq=hero-bg-blue&orientation=landscape')` : 'none',
          willChange: 'opacity',
          transform: 'translateZ(0)'
        }}
      />
      
      {/* Fallback background */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700"></div>
      )}
      
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/70"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center container-fixed">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight preload-critical">
            Transformamos <span className="text-blue-300">ideias</span> em 
            <br />soluções <span className="text-blue-300">tecnológicas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Há mais de 17 anos oferecendo soluções inteligentes em TI para empresas que buscam inovação e crescimento sustentável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://wa.me/551531994299?text=Olá! Gostaria de solicitar um orçamento para serviços de TI."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="primary" size="lg" onClick={() => {}}>
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                Solicitar Orçamento
              </Button>
            </a>
            
            <Link to="/servicos" className="inline-block">
              <Button variant="secondary" size="lg" onClick={() => {}}>
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-arrow-right-line"></i>
                </div>
                Conhecer Serviços
              </Button>
            </Link>
          </div>
          
          {/* Stats com otimização de layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center container-fixed">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+17</div>
              <div className="text-blue-200 text-sm md:text-base">Anos de Experiência</div>
            </div>
            <div className="text-center container-fixed">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+350</div>
              <div className="text-blue-200 text-sm md:text-base">Clientes Atendidos</div>
            </div>
            <div className="text-center container-fixed">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+40k</div>
              <div className="text-blue-200 text-sm md:text-base">Horas de Atendimento</div>
            </div>
            <div className="text-center container-fixed">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+10</div>
              <div className="text-blue-200 text-sm md:text-base">Cidades em 3 Estados</div>
            </div>
          </div>
          
          {/* Scroll Indicator otimizado */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce will-change-transform">
            <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-300 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
