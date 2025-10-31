
import { useState, useRef, useEffect, memo, useCallback } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchpriority?: 'high' | 'low' | 'auto';
  placeholder?: string;
  aspectRatio?: string;
}

const LazyImage = memo(({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchpriority = 'auto',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
  aspectRatio = '16/9'
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '100px 0px',
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const containerStyle = {
    aspectRatio: aspectRatio,
    backgroundColor: '#f8f9fa'
  };

  return (
    <div 
      className={`relative overflow-hidden container-fixed ${className}`}
      style={containerStyle}
    >
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 loading-skeleton"
          aria-hidden="true"
        />
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 flex items-center justify-center">
            <i className="ri-image-line text-gray-400 text-2xl"></i>
          </div>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={isInView ? src : placeholder}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={loading}
          decoding={decoding}
          fetchPriority={fetchpriority}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          style={{ 
            contentVisibility: 'auto',
            containIntrinsicSize: '1px 400px'
          }}
        />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
