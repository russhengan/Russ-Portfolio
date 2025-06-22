import { useEffect, useRef } from 'react';

const GlowingCursor = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const offsetX = 48;
      const offsetY = 48;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${clientX - offsetX}px, ${clientY - offsetY}px, 0)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      {/* Glowing gradient aura below the native cursor */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-40 rounded-full blur-3xl transition-transform duration-75 ease-out animate-pulse"
        style={{
          background: `radial-gradient(circle at center, #f9a8d4, #64748b, #a78bfa)`,
          opacity: 0.5,
        }}
      />
    </>
  );
};

export default GlowingCursor;
