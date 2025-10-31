
import { Link } from 'react-router-dom';
import { memo } from 'react';

const ServicesSection = memo(() => {
  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Desenvolvimento de Software',
      description: 'Criamos soluções personalizadas para automatizar processos e otimizar a gestão do seu negócio.',
      features: ['Sistemas Web', 'Aplicativos Mobile', 'APIs e Integrações', 'E-commerce']
    },
    {
      icon: 'ri-cloud-line',
      title: 'Infraestrutura e Cloud',
      description: 'Modernize sua infraestrutura com soluções em nuvem seguras, escaláveis e econômicas.',
      features: ['Migração para Cloud', 'Backup e Disaster Recovery', 'Monitoramento 24/7', 'Otimização de Custos']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Segurança da Informação',
      description: 'Proteja seus dados e sistemas com as melhores práticas de segurança digital.',
      features: ['Auditoria de Segurança', 'Firewall e Antivírus', 'Políticas de Segurança', 'Treinamento de Equipe']
    },
    {
      icon: 'ri-user-settings-line',
      title: 'Consultoria em TI',
      description: 'Orientação estratégica para alinhar a tecnologia aos objetivos do seu negócio.',
      features: ['Planejamento Estratégico', 'Análise de Processos', 'Governança de TI', 'Transformação Digital']
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Suporte Técnico',
      description: 'Suporte especializado para manter seus sistemas funcionando com máxima eficiência.',
      features: ['Suporte 24/7', 'Manutenção Preventiva', 'Help Desk', 'Treinamento de Usuários']
    },
    {
      icon: 'ri-video-line',
      title: 'CFTV e Controle de Acesso',
      description: 'Sistemas completos de segurança eletrônica para proteger seu patrimônio e controlar acessos.',
      features: ['Câmeras IP Full HD', 'Controle Biométrico', 'Portões Automáticos', 'Monitoramento 24h']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 container-fixed">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia da informação para impulsionar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover-optimized p-8 border border-gray-100 group container-fixed"
              style={{ 
                willChange: 'transform, box-shadow',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <i className={`${service.icon} text-2xl text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-blue-600"></i>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/servicos" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Saiba mais
                <div className="w-4 h-4 flex items-center justify-center ml-2">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/servicos" className="inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer hover-optimized">
              Ver Todos os Serviços
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
