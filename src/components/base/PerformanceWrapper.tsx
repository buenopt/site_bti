
import { memo, ReactNode, useEffect, useState } from 'react';

interface PerformanceWrapperProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const PerformanceWrapper = memo(({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}: PerformanceWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return (
    <div 
      ref={setRef}
      className={`${className} ${isVisible ? 'animate-in' : 'opacity-0'}`}
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '1px 200px'
      }}
    >
      {isVisible ? children : <div className="h-48 bg-gray-50 animate-pulse" />}
    </div>
  );
});

PerformanceWrapper.displayName = 'PerformanceWrapper';

export default PerformanceWrapper;
