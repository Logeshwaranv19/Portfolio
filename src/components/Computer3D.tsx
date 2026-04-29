export function Computer3D() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[550px] select-none">
      {/* ─── SCENE AMBIENCE ─── */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[60px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.3) 0%, transparent 75%)', 
          filter: 'blur(40px)',
          animation: 'pulseGlow 4s ease-in-out infinite'
        }}
      />

      {/* 3D Scene Wrapper */}

      <div style={{ perspective: '1200px', perspectiveOrigin: '50% 50%' }}>
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(10deg) rotateY(-18deg)',
            animation: 'floatMain 8s ease-in-out infinite',
          }}
        >
          {/* ─── MONITOR ASSEMBLY ─── */}
          <div style={{ transformStyle: 'preserve-3d', position: 'relative', transform: 'translateZ(20px)' }}>
            
            {/* Monitor Back Plate (provides depth) */}
            <div style={{
              position: 'absolute', inset: 0,
              width: 400, height: 260,
              background: '#0a0a14',
              borderRadius: 16,
              transform: 'translateZ(-15px)',
              border: '1px solid rgba(124,58,237,0.2)',
            }} />

            {/* Monitor Body */}
            <div style={{
              width: 400,
              height: 260,
              borderRadius: 16,
              background: 'linear-gradient(145deg, #13111c 0%, #07070b 100%)',
              border: '2.5px solid rgba(124,58,237,0.4)',
              boxShadow: `
                0 0 50px rgba(124,58,237,0.2), 
                inset 0 0 20px rgba(124,58,237,0.1),
                inset 0 1px 1px rgba(255,255,255,0.1)
              `,
              position: 'relative',
              overflow: 'hidden',
              transformStyle: 'preserve-3d',
            }}>
              {/* Internal Screen Bezel */}
              <div style={{
                position: 'absolute', inset: 12,
                borderRadius: 10,
                background: '#020204',
                border: '1px solid #1a1a2e',
                overflow: 'hidden',
                boxShadow: 'inset 0 0 30px rgba(0,0,0,1)',
              }}>
                {/* Code Content */}
                <div style={{ padding: '14px 18px', fontFamily: 'ui-monospace, monospace', fontSize: 11, lineHeight: 1.8, opacity: 0.9 }}>
                  <div className="flex gap-2 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                  </div>
                  <div><span style={{ color: '#c084fc' }}>class</span><span style={{ color: '#e879f9' }}> Developer</span><span style={{ color: '#f4f4f5' }}> {'{'}</span></div>
                  <div className="pl-5"><span style={{ color: '#c084fc' }}>constructor</span><span style={{ color: '#f4f4f5' }}>(name) {'{'}</span></div>
                  <div className="pl-10"><span style={{ color: '#c084fc' }}>this</span><span style={{ color: '#f4f4f5' }}>.name = name;</span></div>
                  <div className="pl-5"><span style={{ color: '#f4f4f5' }}>{'}'}</span></div>
                  <div className="pl-5"><span style={{ color: '#fbbf24' }}>code</span><span style={{ color: '#f4f4f5' }}>() {'{'}</span></div>
                  <div className="pl-10"><span style={{ color: '#c084fc' }}>return</span><span style={{ color: '#2dd4bf' }}> "Logeshwaran V "</span><span style={{ color: '#f4f4f5' }}>;</span></div>
                  <div className="pl-5"><span style={{ color: '#f4f4f5' }}>{'}'}</span></div>
                  <div><span style={{ color: '#f4f4f5' }}>{'}'}</span></div>
                  
                  {/* Cursor */}
                  <div className="mt-4 w-2 h-4 bg-purple-500 animate-pulse shadow-[0_0_8px_#a855f7]" />
                </div>

                {/* Glass Reflection */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%, rgba(255,255,255,0.02) 50%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
                
                {/* CRT/Scanline Overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.02), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.02))',
                  backgroundSize: '100% 3px, 3px 100%',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Status Indicator */}
              <div style={{
                position: 'absolute', bottom: 4, right: 16,
                width: 6, height: 6, borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 10px #10b981',
              }} />
            </div>
          </div>

          {/* ─── NECK / STAND ─── */}
          <div style={{ transformStyle: 'preserve-3d', position: 'relative', display: 'flex', justifyContent: 'center', transform: 'translateY(-2px)' }}>
            <div style={{
              width: 40, height: 60,
              background: 'linear-gradient(to right, #13111c, #07070b)',
              border: '1px solid rgba(124,58,237,0.2)',
              transform: 'translateZ(-5px) rotateX(-5deg)',
            }} />
          </div>

          {/* ─── BASE / KEYBOARD UNIT ─── */}
          <div style={{ transformStyle: 'preserve-3d', position: 'relative', transform: 'translateY(-5px)' }}>
            {/* Main Base Unit */}
            <div style={{
              width: 320, height: 18,
              marginLeft: 40,
              borderRadius: '8px 8px 14px 14px',
              background: 'linear-gradient(to bottom, #13111c, #07070b)',
              border: '1.5px solid rgba(124,58,237,0.3)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(124,58,237,0.1)',
              transform: 'rotateX(15deg)',
            }}>
              {/* Keyboard Grid (Subtle Texture) */}
              <div className="absolute inset-1.5 rounded-lg opacity-20" style={{ 
                backgroundImage: 'radial-gradient(circle, #7c3aed 0.5px, transparent 0.5px)',
                backgroundSize: '12px 12px'
              }} />
              
              {/* Touchpad Area */}
              <div style={{
                position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                width: 70, height: 8,
                background: 'rgba(124,58,237,0.05)',
                border: '1px solid rgba(124,58,237,0.2)',
                borderRadius: 4,
              }} />
            </div>

            {/* Glowing Accent Beneath Base */}
            <div style={{
              position: 'absolute', bottom: -2, left: 60,
              width: 280, height: 2,
              background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)',
              boxShadow: '0 0 15px #7c3aed',
              opacity: 0.6,
              transform: 'rotateX(15deg)',
            }} />
          </div>

          {/* Floating UI Windows around the scene */}
        </div>
      </div>

      <style>{`
        @keyframes floatMain {
          0%, 100% { transform: rotateX(10deg) rotateY(-18deg) translateY(0px) rotateZ(0deg); }
          33% { transform: rotateX(12deg) rotateY(-20deg) translateY(-15px) rotateZ(1deg); }
          66% { transform: rotateX(8deg) rotateY(-16deg) translateY(-5px) rotateZ(-1deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.6; transform: translateX(-50%) scale(1.2); }
        }
        @keyframes spinRing {
          from { transform: rotateX(75deg) rotateY(15deg) rotateZ(0deg); }
          to { transform: rotateX(75deg) rotateY(15deg) rotateZ(360deg); }
        }
      `}</style>
    </div>
  );
}

