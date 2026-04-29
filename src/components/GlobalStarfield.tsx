import { useEffect, useRef } from 'react';

export function GlobalStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const stars: { x: number; y: number; r: number; vx: number; vy: number; opacity: number; twinkleSpeed: number; twinklePhase: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate more stars for the full screen
    for (let i = 0; i < 4000; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() < 0.05 ? Math.random() * 1.5 + 0.8 : Math.random() * 0.8 + 0.1,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        s.twinklePhase += s.twinkleSpeed;
        const alpha = s.opacity * (0.4 + 0.6 * Math.sin(s.twinklePhase));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        
        // Occasional color variation for depth
        if (s.r > 1.2) {
          ctx.fillStyle = `rgba(180, 200, 255, ${alpha})`;
          ctx.fill();
          // Subtle glow for larger stars
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'rgba(124, 58, 237, 0.4)';
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Slow drift
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]" 
      style={{ background: 'transparent' }}
    />
  );
}
