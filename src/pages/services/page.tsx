
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/seo/SEOHead';

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "BTI Tecnologia",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}`
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de TI BTI Tecnologia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento de Software",
            "description": "Criamos soluções personalizadas para automatizar processos e otimizar a gestão do seu negócio",
            "provider": {
              "@type": "Organization",
              "name": "BTI Tecnologia"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infraestrutura e Cloud",
            "description": "Modernize sua infraestrutura com soluções em nuvem seguras, escaláveis e econômicas",
            "provider": {
              "@type": "Organization",
              "name": "BTI Tecnologia"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Segurança da Informação",
            "description": "Proteja seus dados e sistemas com as melhores práticas de segurança digital",
            "provider": {
              "@type": "Organization",
              "name": "BTI Tecnologia"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoria em TI",
            "description": "Orientação estratégica para alinhar a tecnologia aos objetivos do seu negócio",
            "provider": {
              "@type": "Organization",
              "name": "BTI Tecnologia"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Suporte Técnico",
            "description": "Suporte especializado para manter seus sistemas funcionando com máxima eficiência",
            "provider": {
              "@type": "Organization",
              "name": "BTI Tecnologia"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CFTV e Controle de Acesso",
            "description": "Sistemas completos de segurança eletrônica para proteger seu patrimônio",
            "provider": {
              "@type": "Organization",
              "name": "BTI Tecnologia"
            }
          }
        }
      ]
    },
    "areaServed": {
      "@type": "State",
      "name": "São Paulo"
    }
  };

  const services = [
    {
      icon: 'ri-code-line',
      title: 'Desenvolvimento de Software',
      description: 'Criamos soluções personalizadas para automatizar processos e otimizar a gestão do seu negócio.',
      detailedDescription: 'Desenvolvemos sistemas sob medida que se adaptam perfeitamente às necessidades específicas da sua empresa. Nossa equipe especializada utiliza as mais modernas tecnologias para criar soluções robustas, escaláveis e seguras.',
      features: ['Sistemas Web Responsivos', 'Aplicativos Mobile Nativos', 'APIs e Integrações', 'Plataformas E-commerce'],
      benefits: ['Automação de processos', 'Redução de custos operacionais', 'Melhoria na produtividade', 'Integração com sistemas existentes'],
      gradient: 'from-blue-500 to-blue-600',
      image: 'https://readdy.ai/api/search-image?query=Software%20development%20team%20coding%20on%20multiple%20monitors%2C%20modern%20programming%20environment%20with%20blue%20corporate%20colors%2C%20Brazilian%20developers%20working%20on%20custom%20applications%2C%20clean%20code%20on%20screens%2C%20collaborative%20workspace%20with%20latest%20technology&width=400&height=300&seq=dev-software-bti&orientation=landscape',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre desenvolvimento de software personalizado para minha empresa.'
    },
    {
      icon: 'ri-palette-line',
      title: 'Design e Desenvolvimento Web',
      description: 'Criamos sites modernos, responsivos e otimizados para SEO que convertem visitantes em clientes.',
      detailedDescription: 'Desenvolvemos sites profissionais com design moderno e funcionalidades avançadas. Nossa abordagem combina experiência do usuário excepcional com otimização para mecanismos de busca, garantindo que sua empresa seja encontrada online.',
      features: ['Sites Responsivos e Modernos', 'Otimização SEO Completa', 'Design UX/UI Profissional', 'E-commerce e Lojas Virtuais'],
      benefits: ['Aumento da visibilidade online', 'Melhoria na conversão de leads', 'Posicionamento no Google', 'Presença digital profissional'],
      gradient: 'from-purple-500 to-purple-600',
      image: 'https://readdy.ai/api/search-image?query=Modern%20website%20design%20on%20computer%20screen%20showing%20responsive%20layout%2C%20professional%20web%20development%20workspace%20with%20design%20tools%2C%20Brazilian%20web%20agency%20creating%20beautiful%20websites%2C%20SEO%20optimization%20dashboard%2C%20clean%20modern%20interface%20design&width=400&height=300&seq=web-design-bti&orientation=landscape',
      whatsappMessage: 'Olá! Preciso de um site profissional para minha empresa. Vocês fazem design e SEO?'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Infraestrutura e Cloud',
      description: 'Modernize sua infraestrutura com soluções em nuvem seguras, escaláveis e econômicas.',
      detailedDescription: 'Migre para a nuvem com segurança e eficiência. Oferecemos consultoria completa para modernizar sua infraestrutura, garantindo alta disponibilidade, backup automático e redução significativa de custos.',
      features: ['Migração para AWS/Azure/Google Cloud', 'Backup Automático e Disaster Recovery', 'Monitoramento 24/7', 'Otimização de Custos'],
      benefits: ['Redução de até 40% nos custos de TI', 'Acesso remoto seguro', 'Escalabilidade automática', 'Backup garantido'],
      gradient: 'from-indigo-500 to-indigo-600',
      image: 'https://readdy.ai/api/search-image?query=Cloud%20infrastructure%20and%20data%20center%20with%20blue%20lighting%2C%20modern%20server%20racks%2C%20network%20connections%2C%20Brazilian%20technology%20company%2C%20secure%20cloud%20computing%20environment%2C%20professional%20IT%20infrastructure%20with%20monitoring%20systems&width=400&height=300&seq=cloud-infra-bti&orientation=landscape',
      whatsappMessage: 'Olá! Tenho interesse em migrar minha empresa para a nuvem. Podem me ajudar?'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Segurança da Informação',
      description: 'Proteja seus dados e sistemas com as melhores práticas de segurança digital.',
      detailedDescription: 'Implementamos camadas robustas de proteção para seus dados e sistemas. Nossa abordagem inclui auditoria completa, implementação de políticas de segurança e treinamento da equipe para prevenir ataques cibernéticos.',
      features: ['Auditoria de Segurança Completa', 'Firewall Avançado e Antivírus', 'Políticas de Segurança LGPD', 'Treinamento Anti-Phishing'],
      benefits: ['Proteção contra ransomware', 'Conformidade com LGPD', 'Redução de riscos', 'Tranquilidade para focar no negócio'],
      gradient: 'from-cyan-500 to-cyan-600',
      image: 'https://readdy.ai/api/search-image?query=Cybersecurity%20shield%20protecting%20digital%20data%2C%20blue%20corporate%20colors%2C%20secure%20network%20visualization%2C%20Brazilian%20IT%20security%20company%2C%20encrypted%20data%20streams%2C%20professional%20security%20monitoring%20center%20with%20multiple%20screens&width=400&height=300&seq=security-info-bti&orientation=landscape',
      whatsappMessage: 'Olá! Preciso melhorar a segurança da informação na minha empresa. Vocês fazem auditoria?'
    },
    {
      icon: 'ri-user-settings-line',
      title: 'Consultoria em TI',
      description: 'Orientação estratégica para alinhar a tecnologia aos objetivos do seu negócio.',
      detailedDescription: 'Nossa consultoria especializada ajuda sua empresa a tomar as melhores decisões tecnológicas. Analisamos seus processos atuais e criamos um roadmap estratégico para maximizar o retorno sobre investimento em TI.',
      features: ['Planejamento Estratégico de TI', 'Análise de Processos e Workflows', 'Seleção de Tecnologias Adequadas', 'Gestão de Projetos Ágil'],
      benefits: ['Decisões tecnológicas assertivas', 'ROI maximizado', 'Processos otimizados', 'Roadmap claro de evolução'],
      gradient: 'from-teal-500 to-teal-600',
      image: 'https://readdy.ai/api/search-image?query=IT%20consulting%20meeting%20with%20business%20executives%2C%20professional%20presentation%20on%20large%20screen%2C%20blue%20corporate%20colors%2C%20Brazilian%20business%20environment%2C%20strategic%20planning%20session%2C%20modern%20conference%20room%20with%20technology%20focus&width=400&height=300&seq=consulting-it-bti&orientation=landscape',
      whatsappMessage: 'Olá! Gostaria de uma consultoria para definir a estratégia de TI da minha empresa.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Suporte Técnico',
      description: 'Suporte especializado para manter seus sistemas funcionando com máxima eficiência.',
      detailedDescription: 'Oferecemos suporte técnico completo com atendimento rápido e eficiente. Nossa equipe está preparada para resolver problemas remotamente ou presencialmente, garantindo que sua operação nunca pare.',
      features: ['Suporte Remoto Imediato', 'Manutenção Preventiva Mensal', 'Help Desk Especializado', 'Atendimento Prioritário SLA'],
      benefits: ['Tempo de resposta < 2 horas', 'Disponibilidade 99.9%', 'Redução de downtime', 'Equipe sempre atualizada'],
      gradient: 'from-orange-500 to-orange-600',
      image: 'https://readdy.ai/api/search-image?query=Technical%20support%20team%20helping%20clients%20remotely%2C%20multiple%20monitors%20showing%20system%20diagnostics%2C%20blue%20corporate%20colors%2C%20Brazilian%20IT%20support%20center%2C%20professional%20help%20desk%20environment%20with%20headsets%20and%20modern%20technology&width=400&height=300&seq=support-tech-bti&orientation=landscape',
      whatsappMessage: 'Olá! Preciso de suporte técnico para minha empresa. Qual é o tempo de resposta de vocês?'
    },
    {
      icon: 'ri-video-line',
      title: 'CFTV e Controle de Acesso',
      description: 'Sistemas completos de segurança eletrônica para proteger seu patrimônio e controlar acessos.',
      detailedDescription: 'Implementamos soluções completas de CFTV com câmeras de alta definição, controle de acesso biométrico e por cartão, portões automáticos e sistemas integrados de monitoramento. Proteja seu negócio com tecnologia de ponta.',
      features: ['Câmeras IP Full HD e 4K', 'Controle de Acesso Biométrico', 'Portões e Cancelas Automáticas', 'Monitoramento Remoto 24h'],
      benefits: ['Proteção total do patrimônio', 'Controle rigoroso de entrada/saída', 'Redução de furtos e invasões', 'Histórico completo de acessos'],
      gradient: 'from-slate-500 to-slate-600',
      image: 'https://readdy.ai/api/search-image?query=CCTV%20security%20cameras%20and%20access%20control%20system%2C%20modern%20surveillance%20technology%20with%20blue%20corporate%20colors%2C%20Brazilian%20security%20company%20installation%2C%20biometric%20access%20control%2C%20professional%20monitoring%20center%20with%20multiple%20screens&width=400&height=300&seq=cftv-access-bti&orientation=landscape',
      whatsappMessage: 'Olá! Preciso de um sistema de CFTV e controle de acesso para minha empresa. Vocês fazem orçamento?'
    }
  ];

  const benefits = [
    {
      icon: 'ri-time-line',
      title: 'Agilidade',
      description: 'Implementação rápida e eficiente',
      color: 'blue'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Segurança',
      description: 'Proteção total dos seus dados',
      color: 'indigo'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Economia',
      description: 'Redução de custos operacionais',
      color: 'cyan'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Suporte 24/7',
      description: 'Atendimento sempre disponível',
      color: 'teal'
    }
  ];

  const whatsappNumber = "551531994299";

  const sendWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="BTI Tecnologia | Soluções em TI para Empresas"
        description="Conheça todos os serviços de TI da BTI Tecnologia em Sorocaba: desenvolvimento de software, infraestrutura cloud, segurança da informação, consultoria TI, suporte técnico e CFTV. Soluções completas para sua empresa."
        keywords="serviços TI Sorocaba, desenvolvimento software personalizado, infraestrutura cloud, segurança informação, consultoria TI, suporte técnico, CFTV controle acesso"
        canonical={`${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}/servicos`}
        ogImage={`${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}/og-services.jpg`}
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-service-line text-blue-600"></i>
              </div>
              <span className="text-sm font-medium text-blue-700">Nossos Serviços</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluções em <span className="text-blue-600">Tecnologia</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Oferecemos um portfólio completo de serviços para transformar digitalmente o seu negócio
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => sendWhatsApp('Olá! Gostaria de conhecer melhor os serviços da BTI e solicitar um orçamento.')}
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                Solicitar Orçamento
              </button>
              <a 
                href="/contato" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-message-3-line mr-2"></i>
                Falar Conosco
              </a>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-lg text-white`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Landing Page Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-full mb-6`}>
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className={`${service.icon} text-white`}></i>
                    </div>
                    <span className="text-sm font-medium">Serviço Especializado</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">O que oferecemos:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefícios para sua empresa:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-gray-600">
                          <div className="w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                            <i className="ri-check-line text-green-500 text-sm"></i>
                          </div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => sendWhatsApp(service.whatsappMessage)}
                      className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-whatsapp-line mr-2"></i>
                      Conversar no WhatsApp
                    </button>
                    <a 
                      href="/contato" 
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap`}
                    >
                      <i className="ri-mail-line mr-2"></i>
                      Solicitar Proposta
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                  <div className="relative group">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay with icon */}
                    <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                        <i className={`${service.icon} text-3xl text-white`}></i>
                      </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como <span className="text-blue-600">Trabalhamos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa metodologia garante resultados eficientes e alinhados às suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Análise',
                description: 'Entendemos suas necessidades e objetivos',
                icon: 'ri-search-line',
                color: 'blue'
              },
              {
                step: '02',
                title: 'Planejamento',
                description: 'Criamos uma estratégia personalizada',
                icon: 'ri-file-list-3-line',
                color: 'indigo'
              },
              {
                step: '03',
                title: 'Implementação',
                description: 'Executamos a solução com qualidade',
                icon: 'ri-tools-line',
                color: 'cyan'
              },
              {
                step: '04',
                title: 'Suporte',
                description: 'Acompanhamos e otimizamos continuamente',
                icon: 'ri-customer-service-line',
                color: 'teal'
              }
            ].map((process, index) => (
              <div 
                key={index} 
                className="group text-center"
              >
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className={`${process.icon} text-2xl text-white`}></i>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-gray-700">{process.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco agora mesmo e descubra como nossas soluções podem impulsionar o crescimento da sua empresa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => sendWhatsApp('Olá! Vi os serviços da BTI e gostaria de agendar uma conversa para entender como vocês podem ajudar minha empresa.')}
                  className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-whatsapp-line mr-2"></i>
                  Falar no WhatsApp
                </button>
                <a 
                  href="/contato" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                >
                  <i className="ri-message-3-line mr-2"></i>
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Tools Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-tools-line text-blue-600"></i>
              </div>
              <span className="text-sm font-medium text-blue-700">Ferramentas de Suporte</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Central de <span className="text-blue-600">Atendimento</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse nossas ferramentas de suporte para abrir chamados e permitir acesso remoto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Chamados */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="ri-customer-service-2-line text-3xl text-white"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Abrir Chamado
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Precisa de suporte técnico? Abra um chamado em nossa central de atendimento e nossa equipe entrará em contato rapidamente.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center text-gray-600">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-time-line text-orange-500"></i>
                    </div>
                    <span className="text-sm">Resposta em até 2 horas</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-shield-check-line text-orange-500"></i>
                    </div>
                    <span className="text-sm">Suporte especializado</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-history-line text-orange-500"></i>
                    </div>
                    <span className="text-sm">Histórico de atendimentos</span>
                  </div>
                </div>

                <a 
                  href="https://bit.ly/btichamados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  Abrir Chamado
                </a>
              </div>
            </div>

            {/* AnyDesk */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="ri-remote-control-line text-3xl text-white"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AnyDesk
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Baixe o AnyDesk para permitir que nossa equipe acesse seu computador remotamente e resolva problemas com mais agilidade.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center text-gray-600">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-download-line text-red-500"></i>
                    </div>
                    <span className="text-sm">Download gratuito</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-shield-line text-red-500"></i>
                    </div>
                    <span className="text-sm">Conexão segura</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-speed-line text-red-500"></i>
                    </div>
                    <span className="text-sm">Suporte mais rápido</span>
                  </div>
                </div>

                <a 
                  href="https://anydesk.com/pt/downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                >
                  <i className="ri-download-line mr-2"></i>
                  Baixar AnyDesk
                </a>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Como funciona o atendimento remoto?
              </h3>
              <p className="text-gray-600">
                Siga estes passos simples para receber suporte técnico remoto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Abra um chamado</h4>
                <p className="text-sm text-gray-600">
                  Acesse nossa central e descreva o problema que está enfrentando
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Baixe o AnyDesk</h4>
                <p className="text-sm text-gray-600">
                  Instale o aplicativo em seu computador para acesso remoto
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Receba o suporte</h4>
                <p className="text-sm text-gray-600">
                  Nossa equipe acessará seu computador e resolverá o problema
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
