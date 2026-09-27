import { useEffect, useRef } from 'react';

export function GlobalStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 800 : 1800;
    const stars: { x: number; y: number; r: number; vx: number; vy: number; opacity: number; phase: number; speed: number; color: string }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    };
    window.addEventListener('resize', handleResize);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const colors = [
      '255, 255, 255',   // White
      '216, 180, 254',   // Purple glow
      '192, 132, 252',   // Deep Violet
      '165, 243, 252',   // Cyan tint
    ];

    // Generate dense, vibrant starfield
    for (let i = 0; i < starCount; i++) {
      const isLarge = Math.random() < 0.15;
      const colorIndex = Math.floor(Math.random() * colors.length);
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: isLarge ? Math.random() * 1.8 + 1.2 : Math.random() * 1.0 + 0.3,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        opacity: Math.random() * 0.65 + 0.35,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.035 + 0.008,
        color: colors[colorIndex],
      });
    }

    const draw = () => {
      animId = requestAnimationFrame(draw);

      if (!isVisible) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.phase += s.speed;
        const alpha = s.opacity * (0.35 + 0.65 * Math.sin(s.phase));

        ctx.fillStyle = `rgba(${s.color}, ${alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]" 
      style={{ background: 'transparent', transform: 'translateZ(0)' }}
    />
  );
}
