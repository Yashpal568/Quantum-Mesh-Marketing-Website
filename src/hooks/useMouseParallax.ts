import { useState, useEffect, useRef } from 'react';

interface ParallaxValues {
  rotateX: number;
  rotateY: number;
  translateX: number;
  translateY: number;
}

export function useMouseParallax(maxRotateX = 4, maxRotateY = 6) {
  const [coords, setCoords] = useState<ParallaxValues>({
    rotateX: 0,
    rotateY: 0,
    translateX: 0,
    translateY: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(hover: none)').matches;

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if cursor is roughly within / near the hero area
      if (
        x < -100 ||
        x > rect.width + 100 ||
        y < -100 ||
        y > rect.height + 100
      ) {
        setCoords({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
        return;
      }

      // Normalized coordinates from -1 to 1
      const normalizedX = (x / rect.width - 0.5) * 2;
      const normalizedY = (y / rect.height - 0.5) * 2;

      // Clamped rotation values:
      // When moving mouse up (negative Y), device tilts up (positive rotateX)
      const rotX = Math.max(-maxRotateX, Math.min(maxRotateX, -normalizedY * maxRotateX));
      const rotY = Math.max(-maxRotateY, Math.min(maxRotateY, normalizedX * maxRotateY));

      const transX = normalizedX * 8;
      const transY = normalizedY * 8;

      setCoords({
        rotateX: Number(rotX.toFixed(2)),
        rotateY: Number(rotY.toFixed(2)),
        translateX: Number(transX.toFixed(2)),
        translateY: Number(transY.toFixed(2)),
      });
    };

    const handleMouseLeave = () => {
      setCoords({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxRotateX, maxRotateY]);

  return { containerRef, ...coords };
}
