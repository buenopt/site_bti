
export default function DifferentialsSection() {
  const differentials = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Inovação Constante',
      description: 'Sempre atualizados com as últimas tecnologias e tendências do mercado para oferecer soluções modernas.'
    },
    {
      icon: 'ri-team-line',
      title: 'Equipe Especializada',
      description: 'Profissionais certificados e experientes, prontos para enfrentar qualquer desafio tecnológico.'
    },
    {
      icon: 'ri-time-line',
      title: 'Agilidade na Entrega',
      description: 'Metodologias ágeis que garantem entregas rápidas sem comprometer a qualidade dos projetos.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Suporte Dedicado',
      description: 'Atendimento personalizado e suporte técnico disponível 24/7 para garantir sua tranquilidade.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a BTI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos diferenciais fazem toda a diferença na transformação digital da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                <i className={`${item.icon} text-3xl text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Transformação Digital que Gera Resultados
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Há mais de 17 anos, ajudamos empresas de todos os portes a alcançarem seus objetivos através da tecnologia. Nossa abordagem consultiva garante que cada solução seja perfeitamente alinhada às necessidades específicas do seu negócio.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">+17</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">+350</div>
                  <div className="text-sm text-gray-600">Clientes Atendidos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">+40k</div>
                  <div className="text-sm text-gray-600">Horas de Atendimento</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">+10</div>
                  <div className="text-sm text-gray-600">Cidades em 3 Estados</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20IT%20team%20working%20together%20in%20modern%20office%20environment%2C%20diverse%20group%20of%20technology%20specialists%20collaborating%20on%20computers%20and%20servers%2C%20corporate%20technology%20workspace%20with%20blue%20ambient%20lighting%2C%20teamwork%20and%20innovation%20in%20information%20technology&width=600&height=400&seq=team-work-blue&orientation=landscape"
                alt="Equipe BTI trabalhando"
                className="rounded-xl shadow-lg object-cover w-full h-80"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
