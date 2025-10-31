
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/seo/SEOHead';

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "BTI Tecnologia",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}`,
      "foundingDate": "2008",
      "description": "Desde 2008, a BTI Tecnologia da Informação atua como parceira estratégica de empresas em Sorocaba/SP e região",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sorocaba",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "numberOfEmployees": "10-50",
      "areaServed": [
        {
          "@type": "State",
          "name": "São Paulo"
        },
        {
          "@type": "State",
          "name": "Minas Gerais"
        },
        {
          "@type": "State",
          "name": "Paraná"
        }
      ]
    }
  };

  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Inovação',
      description:
        'Buscamos constantemente novas tecnologias e metodologias para oferecer soluções de ponta aos nossos clientes.',
      gradient: 'from-blue-500 to-blue-600',
      image:
        'https://readdy.ai/api/search-image?query=Innovation%20technology%20concept%20with%20modern%20digital%20solutions%2C%20futuristic%20blue%20lighting%2C%20creative%20workspace%20with%20advanced%20computers%20and%20holographic%20displays%2C%20Brazilian%20tech%20company%20environment%20with%20innovative%20atmosphere%20and%20cutting-edge%20technology&width=300&height=200&seq=innovation-tech-bti&orientation=landscape',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Segurança',
      description:
        'Priorizamos a proteção dos dados e sistemas dos nossos clientes com os mais altos padrões de segurança.',
      gradient: 'from-blue-600 to-blue-700',
      image:
        'https://readdy.ai/api/search-image?query=Cybersecurity%20and%20data%20protection%20concept%20with%20digital%20shield%2C%20secure%20network%20connections%2C%20blue%20corporate%20colors%2C%20modern%20security%20systems%2C%20encrypted%20data%20visualization%2C%20professional%20IT%20security%20environment&width=300&height=200&seq=security-tech-bti&orientation=landscape',
    },
    {
      icon: 'ri-team-line',
      title: 'Parceria',
      description:
        'Construímos relacionamentos duradouros baseados na confiança, transparência e resultados consistentes.',
      gradient: 'from-blue-700 to-blue-800',
      image:
        'https://readdy.ai/api/search-image?query=Business%20partnership%20and%20teamwork%20concept%2C%20professional%20handshake%2C%20collaborative%20meeting%20room%20with%20blue%20corporate%20colors%2C%20Brazilian%20business%20environment%2C%20trust%20and%20cooperation%20atmosphere%2C%20modern%20office%20setting&width=300&height=200&seq=partnership-bti&orientation=landscape',
    },
    {
      icon: 'ri-award-line',
      title: 'Excelência',
      description:
        'Comprometemo-nos com a qualidade superior em todos os projetos e serviços que desenvolvemos.',
      gradient: 'from-blue-500 to-blue-700',
      image:
        'https://readdy.ai/api/search-image?query=Excellence%20and%20quality%20achievement%20concept%2C%20golden%20trophy%20with%20blue%20corporate%20colors%2C%20professional%20certification%2C%20high-quality%20technology%20services%2C%20award-winning%20IT%20company%2C%20premium%20business%20environment&width=300&height=200&seq=excellence-bti&orientation=landscape',
    },
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Fundação da BTI',
      description:
        'Início das atividades em Sorocaba/SP com foco em soluções de TI para pequenas empresas.',
      icon: 'ri-rocket-line',
    },
    {
      year: '2012',
      title: 'Expansão Regional',
      description:
        'Ampliação dos serviços para atender empresas de médio porte em todo o estado de São Paulo.',
      icon: 'ri-map-pin-line',
    },
    {
      year: '2016',
      title: 'Certificações',
      description:
        'Conquista de certificações ISO e parcerias estratégicas com grandes fornecedores de tecnologia.',
      icon: 'ri-award-line',
    },
    {
      year: '2020',
      title: 'Transformação Digital',
      description:
        'Liderança em projetos de transformação digital durante a pandemia, ajudando empresas a se adaptarem.',
      icon: 'ri-computer-line',
    },
    {
      year: '2025',
      title: 'Presente',
      description:
        'Diversos projetos entregues e presença consolidada em 3 estados brasileiros.',
      icon: 'ri-trophy-line',
    },
  ];

  const coverage = [
    {
      state: 'São Paulo',
      icon: 'ri-building-line',
      color: 'blue',
    },
    {
      state: 'Minas Gerais',
      icon: 'ri-mountain-line',
      color: 'cyan',
    },
    {
      state: 'Paraná',
      icon: 'ri-map-pin-line',
      color: 'teal',
    },
  ];

  // Helper to handle image load errors gracefully
  const handleImgError = (e) => {
    e.target.src =
      'https://via.placeholder.com/300x200?text=Image+unavailable';
    e.target.alt = 'Placeholder image';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Sobre a BTI Tecnologia - História e Valores | Sorocaba, SP"
        description="Conheça a história da BTI Tecnologia, empresa de TI em Sorocaba desde 2008. Nossos valores, missão e visão para transformar empresas através da tecnologia. Mais de 17 anos de experiência e 350+ clientes atendidos."
        keywords="sobre BTI, história empresa TI, valores BTI Tecnologia, missão visão, empresa Sorocaba, tecnologia informação"
        canonical={`${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}/sobre`}
        ogImage={`${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}/og-about.jpg`}
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-information-line text-blue-600"></i>
                </div>
                <span className="text-sm font-medium text-blue-700">
                  Sobre a BTI
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transformando empresas através da{' '}
                <span className="text-blue-600"> tecnologia</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Desde 2008, a BTI Tecnologia da Informação atua como parceira
                estratégica de empresas em Sorocaba/SP e região, oferecendo
                soluções inteligentes que facilitam processos e impulsionam o
                crescimento dos negócios.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    17+
                  </div>
                  <div className="text-sm text-gray-600">
                    Anos de Experiência
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    350+
                  </div>
                  <div className="text-sm text-gray-600">
                    Clientes Atendidos
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20technology%20office%20in%20Sorocaba%20Brazil%20with%20professional%20team%20working%20on%20computers%2C%20collaborative%20workspace%20with%20blue%20corporate%20colors%2C%20glass%20meeting%20rooms%2C%20contemporary%20design%20with%20technological%20equipment%2C%20Brazilian%20business%20environment%20with%20modern%20architecture%20and%20natural%20lighting&width=600&height=400&seq=about-office-sorocaba&orientation=landscape"
                alt="Escritório BTI em Sorocaba"
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
                onError={handleImgError}
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-blue-600">Princípios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os valores que guiam nossa jornada e definem nossa identidade como
              empresa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 text-center group hover:shadow-lg transition-all duration-300">
              <div className="relative mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Mission%20and%20target%20concept%20with%20arrow%20hitting%20bullseye%2C%20blue%20corporate%20colors%2C%20professional%20business%20goal%20achievement%2C%20strategic%20planning%20visualization%2C%20modern%20minimalist%20design%20with%20clean%20background&width=300&height=200&seq=mission-bti&orientation=landscape"
                  alt="Missão BTI"
                  className="w-full h-32 object-cover rounded-xl mb-4"
                  onError={handleImgError}
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="ri-target-line text-lg text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Facilitar a transformação digital das empresas através de
                soluções tecnológicas inteligentes, promovendo eficiência,
                segurança e crescimento sustentável dos nossos clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 text-center group hover:shadow-lg transition-all duration-300">
              <div className="relative mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Vision%20and%20future%20concept%20with%20telescope%20looking%20at%20bright%20horizon%2C%20blue%20corporate%20colors%20leadership%20and%20innovation%20visualization%20modern%20business%20perspective%20with%20clear%20sky%20and%20bright%20future%20ahead&width=300&height=200&seq=vision-bti&orientation=landscape"
                  alt="Visão BTI"
                  className="w-full h-32 object-cover rounded-xl mb-4"
                  onError={handleImgError}
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="ri-eye-line text-lg text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a principal referência em soluções de TI na
                região, sendo a primeira escolha das empresas que buscam
                inovação e excelência tecnológica.
              </p>
            </div>

            {/* Values Header */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 text-center group hover:shadow-lg transition-all duration-300">
              <div className="relative mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Values%20and%20principles%20concept%20with%20heart%20symbol%2C%20blue%20corporate%20colors%2C%20ethical%20business%20foundation%2C%20trust%20and%20integrity%20visualization%2C%20modern%20professional%20environment%20with%20warm%20human%20touch&width=300&height=200&seq=values-bti&orientation=landscape"
                  alt="Valores BTI"
                  className="w-full h-32 object-cover rounded-xl mb-4"
                  onError={handleImgError}
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="ri-heart-line text-lg text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Princípios fundamentais que orientam nossas decisões e
                relacionamentos, garantindo ética, qualidade e compromisso em
                tudo que fazemos.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="relative mb-4">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-24 object-cover rounded-lg mb-3"
                    onError={handleImgError}
                  />
                  <div
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <i className={`${value.icon} text-sm text-white`}></i>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa <span className="text-blue-600">Trajetória</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma jornada de crescimento e inovação que nos trouxe até aqui
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-8`}
                >
                  <div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    } text-center lg:text-left`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <i className={`${item.icon} text-lg text-white`}></i>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Credibility Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Credibilidade e <span className="text-blue-600">Confiança</span>
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Com mais de 17 anos de atuação no mercado, a BTI conquistou a confiança de centenas de empresas através de soluções tecnológicas eficientes e atendimento personalizado. Nossa experiência sólida e equipe especializada garantem resultados consistentes e duradouros.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">350+</div>
                    <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">40k+</div>
                    <div className="text-sm text-gray-600">Horas de Atendimento</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20celebrating%20success%2C%20Brazilian%20corporate%20environment%20with%20blue%20colors%2C%20handshake%20and%20partnership%20concept%2C%20modern%20office%20setting%20with%20certificates%20and%20awards%2C%20credibility%20and%20trust%20visualization&width=400&height=300&seq=credibility-bti&orientation=landscape"
                  alt="Credibilidade BTI"
                  className="rounded-xl shadow-lg object-cover w-full h-64"
                  onError={handleImgError}
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Pronto para transformar seu negócio?
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  Entre em contato conosco e descubra como podemos ajudar sua
                  empresa a crescer
                </p>
                <a
                  href="/contato"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-message-3-line"></i>
                  </div>
                  Falar Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
