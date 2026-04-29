import { useEffect, useRef } from 'react';

function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const stars: { x: number; y: number; r: number; vx: number; vy: number; opacity: number; twinkleSpeed: number; twinklePhase: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate stars
    for (let i = 0; i < 3500; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() < 0.05 ? Math.random() * 2 + 1 : Math.random() * 1.2 + 0.2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.04 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;

      for (const s of stars) {
        s.twinklePhase += s.twinkleSpeed;
        const alpha = s.opacity * (0.5 + 0.5 * Math.sin(s.twinklePhase));

        // Large pinkish stars
        if (s.r > 1.8) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220,200,255,${alpha * 0.7})`;
          ctx.fill();
          // Glow
          const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
          grd.addColorStop(0, `rgba(200,170,255,${alpha * 0.3})`);
          grd.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        }

        // Drift
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -10) s.x = canvas.width + 10;
        if (s.x > canvas.width + 10) s.x = -10;
        if (s.y < -10) s.y = canvas.height + 10;
        if (s.y > canvas.height + 10) s.y = -10;
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />;
}

export function Earth3D() {
  return (
    <div style={{ position: 'relative', width: 320, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      {/* Outer atmosphere glow */}
      <div style={{
        position: 'absolute', inset: -28, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(80,140,255,0.12) 60%, transparent 80%)',
        filter: 'blur(12px)',
        animation: 'earthPulse 5s ease-in-out infinite',
      }} />

      {/* 3D cage rings + sphere container */}
      <div style={{ position: 'relative', width: 240, height: 240, transformStyle: 'preserve-3d', perspective: 600 }}>

        {/* The Earth sphere */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: `
            radial-gradient(circle at 38% 35%,
              #1a4a7a 0%,
              #0d3060 20%,
              #0a2045 40%,
              #051530 65%,
              #020a1a 100%
            )
          `,
          boxShadow: `
            inset -40px -30px 80px rgba(0,0,0,0.9),
            inset 15px 15px 50px rgba(30,100,200,0.25),
            0 0 50px rgba(50,100,220,0.15),
            0 0 100px rgba(40,80,180,0.08)
          `,
          overflow: 'hidden',
          animation: 'earthRotate 25s linear infinite',
        }}>
          {/* Continent Africa + Europe */}
          <div style={{ position: 'absolute', top: '22%', left: '48%', width: 52, height: 68, borderRadius: '40% 55% 55% 45%', background: 'rgba(30,120,40,0.65)', filter: 'blur(2.5px)', transform: 'rotate(-10deg)' }} />
          {/* Americas */}
          <div style={{ position: 'absolute', top: '18%', left: '12%', width: 45, height: 75, borderRadius: '50% 45% 55% 45%', background: 'rgba(25,110,35,0.55)', filter: 'blur(2px)', transform: 'rotate(5deg)' }} />
          {/* Asia */}
          <div style={{ position: 'absolute', top: '15%', left: '60%', width: 70, height: 55, borderRadius: '50% 60% 45% 55%', background: 'rgba(28,115,38,0.6)', filter: 'blur(2.5px)' }} />
          {/* Australia */}
          <div style={{ position: 'absolute', top: '60%', left: '68%', width: 35, height: 28, borderRadius: '50%', background: 'rgba(24,100,30,0.5)', filter: 'blur(2px)' }} />
          {/* Antarctica */}
          <div style={{ position: 'absolute', bottom: '-5%', left: '20%', width: 120, height: 30, borderRadius: '50%', background: 'rgba(200,220,240,0.3)', filter: 'blur(4px)' }} />

          {/* City lights (golden dots) */}
          {[[22,32],[48,28],[55,35],[65,33],[28,42],[42,45],[70,48],[15,55],[52,60],[60,58],[25,65]].map(([l,t], i) => (
            <div key={i} style={{ position: 'absolute', top: `${t}%`, left: `${l}%`, width: i % 3 === 0 ? 4 : 2.5, height: i % 3 === 0 ? 4 : 2.5, borderRadius: '50%', background: '#ffc200', boxShadow: '0 0 6px #ffc200, 0 0 3px #ff9900', opacity: 0.85 }} />
          ))}

          {/* Atmosphere shimmer */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 35% 30%, rgba(120,180,255,0.12) 0%, transparent 60%)' }} />
          {/* Night-side shadow */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg, transparent 30%, rgba(0,0,0,0.85) 75%)' }} />
          {/* Cloud wisps */}
          <div style={{ position: 'absolute', top: '35%', left: '5%', width: 80, height: 12, borderRadius: 10, background: 'rgba(255,255,255,0.07)', filter: 'blur(3px)', transform: 'rotate(-5deg)' }} />
          <div style={{ position: 'absolute', top: '55%', left: '35%', width: 60, height: 10, borderRadius: 10, background: 'rgba(255,255,255,0.06)', filter: 'blur(3px)', transform: 'rotate(8deg)' }} />
        </div>

        {/* Ring 1 — nearly horizontal */}
        <div style={{ position: 'absolute', inset: -12, borderRadius: '50%', border: '2px solid rgba(130,110,200,0.55)', transform: 'rotateX(82deg) rotateZ(20deg)', animation: 'ring1 12s linear infinite', transformStyle: 'preserve-3d', boxShadow: '0 0 8px rgba(130,110,200,0.3)' }} />

        {/* Ring 2 — tilted more */}
        <div style={{ position: 'absolute', inset: -18, borderRadius: '50%', border: '1.5px solid rgba(110,140,200,0.4)', transform: 'rotateX(65deg) rotateZ(-35deg)', animation: 'ring2 18s linear infinite reverse', transformStyle: 'preserve-3d' }} />

        {/* Ring 3 — nearly vertical */}
        <div style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: '1.5px solid rgba(150,120,220,0.45)', transform: 'rotateX(15deg) rotateZ(50deg)', animation: 'ring1 9s linear infinite', transformStyle: 'preserve-3d', boxShadow: '0 0 6px rgba(150,120,220,0.2)' }} />

        {/* Ring 4 */}
        <div style={{ position: 'absolute', inset: -24, borderRadius: '50%', border: '1px solid rgba(100,130,190,0.3)', transform: 'rotateX(75deg) rotateZ(80deg)', animation: 'ring2 22s linear infinite', transformStyle: 'preserve-3d' }} />

        {/* Ring 5 */}
        <div style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: '1.5px solid rgba(140,100,210,0.4)', transform: 'rotateX(50deg) rotateZ(-70deg)', animation: 'ring1 15s linear infinite reverse', transformStyle: 'preserve-3d' }} />

      </div>

      <style>{`
        @keyframes earthRotate {
          from { background-position: 0% 50%; filter: hue-rotate(0deg); }
          to { filter: hue-rotate(5deg); }
        }
        @keyframes earthPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }
        @keyframes ring1 {
          from { transform: rotateX(82deg) rotateZ(20deg) rotateY(0deg); }
          to { transform: rotateX(82deg) rotateZ(20deg) rotateY(360deg); }
        }
        @keyframes ring2 {
          from { transform: rotateX(65deg) rotateZ(-35deg) rotateY(0deg); }
          to { transform: rotateX(65deg) rotateZ(-35deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}

export { StarCanvas };
