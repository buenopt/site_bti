
import { StrictMode, startTransition } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Otimização de performance
const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

// Remove loading skeleton
const loadingSkeleton = container.querySelector('.loading-skeleton');
if (loadingSkeleton) {
  loadingSkeleton.remove();
}

const root = createRoot(container, {
  // Habilita concurrent features para melhor performance
  identifierPrefix: 'bti-'
});

// Use startTransition para renderização não bloqueante
startTransition(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});

// Preload de recursos críticos após o carregamento inicial
if (typeof window !== 'undefined') {
  // Preload de imagens críticas
  const criticalImages = [
    'https://static.readdy.ai/image/723f306fe6a878821c9bf6a4a28db8eb/176e39cdbb33ad19c02e106064289573.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Otimização de scroll
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Scroll handling aqui se necessário
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Cleanup
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', handleScroll);
  });
}
