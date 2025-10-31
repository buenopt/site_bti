
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/seo/SEOHead';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import DifferentialsSection from './components/DifferentialsSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BTI Tecnologia",
    "url": `${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}`,
    "logo": `${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}/logo.png`,
    "description": "A BTI Tecnologia oferece soluções completas em TI para empresas, incluindo consultoria especializada, suporte técnico, desenvolvimento de software, infraestrutura em nuvem, segurança da informação e sistemas de CFTV.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sorocaba",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-15-31994299",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/company/buenotibr",
      "https://www.facebook.com/buenotibr",
      "https://www.instagram.com/buenotibr"
    ],
    "areaServed": {
      "@type": "State",
      "name": "São Paulo"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de TI",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento de Software",
            "description": "Criamos soluções personalizadas para automatizar processos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infraestrutura e Cloud",
            "description": "Modernize sua infraestrutura com soluções em nuvem"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Segurança da Informação",
            "description": "Proteja seus dados e sistemas com as melhores práticas"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="BTI Tecnologia | Soluções em TI para Empresas"
        description="A BTI Tecnologia oferece soluções completas em TI para empresas, incluindo consultoria especializada, suporte técnico, desenvolvimento de software, infraestrutura em nuvem, segurança da informação e sistemas de CFTV. Atuamos com inovação, confiabilidade e foco na performance do seu negócio. Conte com especialistas em tecnologia corporativa, automação, monitoramento e serviços gerenciados para impulsionar resultados."
        keywords="BTI Tecnologia, soluções em TI, consultoria de TI, suporte técnico, desenvolvimento de software, infraestrutura em nuvem, segurança da informação, CFTV, serviços gerenciados, inovação em tecnologia"
        canonical={`${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}/`}
        ogImage={`${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}/og-image.jpg`}
        structuredData={structuredData}
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DifferentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
