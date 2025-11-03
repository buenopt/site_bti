
import { memo } from 'react';
import SEOHead from '../../components/seo/SEOHead';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import DifferentialsSection from './components/DifferentialsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

const Home = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BTI Tecnologia da Informação",
    "url": `${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}`,
    "logo": `${import.meta.env.VITE_SITE_URL || 'https://bueno.inf.br'}/logo.png`,
    "description": "A BTI oferece desenvolvimento de software, infraestrutura em nuvem, segurança da informação, CFTV e consultoria de TI em Sorocaba, atendendo empresas em todo o Brasil.",
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sorocaba",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-15-3199-4299",
      "contactType": "customer service",
      "availableLanguage": "Portuguese",
      "email": "contato@bueno.inf.br"
    },
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
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de TI BTI Tecnologia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento de Software",
            "description": "Criamos soluções personalizadas para automatizar processos e otimizar a gestão do seu negócio"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Infraestrutura e Cloud",
            "description": "Modernize sua infraestrutura com soluções em nuvem seguras, escaláveis e econômicas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Segurança da Informação",
            "description": "Proteja seus dados e sistemas com as melhores práticas de segurança digital"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CFTV e Controle de Acesso", 
            "description": "Sistemas completos de segurança eletrônica para proteger seu patrimônio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoria em TI",
            "description": "Orientação estratégica para alinhar a tecnologia aos objetivos do seu negócio"
          }
        }
      ]
    },
    "sameAs": [
      "https://buenotibr.blogspot.com/"
    ]
  };

  return (
    <>
      <SEOHead 
        title="BTI – Soluções Completas em TI em Sorocaba"
        description="A BTI oferece desenvolvimento de software, infraestrutura em nuvem, segurança da informação, CFTV e consultoria de TI em Sorocaba, atendendo empresas em todo o Brasil. Transforme seu negócio com tecnologia de ponta."
        keywords="tecnologia da informação Sorocaba, empresa de TI Sorocaba, desenvolvimento de software, infraestrutura em nuvem, segurança da informação, CFTV Sorocaba, consultoria de TI, suporte de TI, Sorocaba TI"
        canonical="/"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DifferentialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
});

Home.displayName = 'Home';

export default Home;
