
import { useState } from 'react';
import Button from '../../../components/base/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação para impedir envio vazio
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Criar mensagem formatada para WhatsApp
      const whatsappMessage = `*Nova mensagem do site BTI Tecnologia*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Empresa:* ${formData.company || 'Não informado'}
*Telefone:* ${formData.phone || 'Não informado'}
*Serviço de interesse:* ${formData.service || 'Não especificado'}

*Mensagem:*
${formData.message}`;

      // Abrir WhatsApp com a mensagem
      const whatsappUrl = `https://wa.me/551531994299?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      // Mostrar sucesso e limpar formulário
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar suas ideias em soluções tecnológicas eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Fale conosco
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-xl text-blue-700"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Telefone</h4>
                  <p className="text-gray-600">(15) 3199-4299</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta, 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-xl text-blue-700"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@bueno.inf.br</p>
                  <p className="text-sm text-gray-500">Resposta em até 2 horas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-xl text-blue-700"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Endereço</h4>
                  <p className="text-gray-600">Sorocaba, SP - Brasil</p>
                  <p className="text-sm text-gray-500">Atendimento presencial com agendamento</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Atendimento Especializado
              </h4>
              <p className="text-blue-700 text-sm">
                Nossa equipe está pronta para entender suas necessidades e propor a melhor solução tecnológica para seu negócio.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} data-readdy-form id="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-5...focus:border-transparent text-sm pr-8"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="desenvolvimento">Desenvolvimento de Software</option>
                  <option value="infraestrutura">Infraestrutura e Cloud</option>
                  <option value="seguranca">Segurança da Informação</option>
                  <option value="consultoria">Consultoria em TI</option>
                  <option value="suporte">Suporte Técnico</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 caracteres
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-sm">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">
                    Por favor, preencha todos os campos obrigatórios antes de enviar.
                  </p>
                </div>
              )}

              <Button 
                variant="primary" 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-loader-4-line animate-spin"></i>
                    </div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-whatsapp-line"></i>
                    </div>
                    Enviar via WhatsApp
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
