
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://static.readdy.ai/image/723f306fe6a878821c9bf6a4a28db8eb/176e39cdbb33ad19c02e106064289573.png"
                alt="BTI Tecnologia da Informação"
                className="h-12 w-auto mr-3"
              />
              <span className="ml-2 text-lg font-semibold">
                Tecnologia da Informação
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Soluções completas em tecnologia da informação para impulsionar o crescimento do seu negócio com segurança e eficiência.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/bti-tecnologia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-linkedin-fill text-xl"></i>
                </div>
              </a>
              <a 
                href="https://www.facebook.com/btitecnologia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-facebook-fill text-xl"></i>
                </div>
              </a>
              <a 
                href="https://www.instagram.com/btitecnologia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-instagram-fill text-xl"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="/servicos" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Desenvolvimento de Software</a></li>
              <li><a href="/servicos" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Infraestrutura e Cloud</a></li>
              <li><a href="/servicos" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Segurança da Informação</a></li>
              <li><a href="/servicos" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Consultoria em TI</a></li>
              <li><a href="/servicos" className="text-gray-300 hover:text-white transition-colors cursor-pointer">CFTV e Controle de Acesso</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line text-blue-400"></i>
                </div>
                <a 
                  href="tel:+551531994299" 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  (15) 3199-4299
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line text-blue-400"></i>
                </div>
                <a 
                  href="mailto:contato@bueno.inf.br" 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  contato@bueno.inf.br
                </a>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-2 mt-1">
                  <i className="ri-map-pin-line text-blue-400"></i>
                </div>
                <span className="text-gray-300">Sorocaba, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BTI Tecnologia da Informação. Todos os direitos reservados.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-sm transition-colors mt-2 md:mt-0 cursor-pointer"
          >
            Nossa paixão por tecnologia é o que nos move. Feito com ❤️
          </a>
        </div>
      </div>
    </footer>
  );
}
