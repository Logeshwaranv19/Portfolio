const skills = [
  { name: 'Java', icon: '☕', color: '#f89820', bg: '#1a0f00', glow: 'rgba(248,152,32,0.4)' },
  { name: 'Python', icon: '🐍', color: '#4b8bbe', bg: '#001020', glow: 'rgba(75,139,190,0.4)' },
  { name: 'JavaScript', icon: 'JS', color: '#f7df1e', bg: '#1a1600', glow: 'rgba(247,223,30,0.4)' },
  { name: 'C++', icon: 'C++', color: '#00599c', bg: '#000d1a', glow: 'rgba(0,89,156,0.4)' },
  { name: 'React', icon: '⚛', color: '#61dafb', bg: '#001824', glow: 'rgba(97,218,251,0.4)' },
  { name: 'Bootstrap', icon: 'B', color: '#7952b3', bg: '#10071a', glow: 'rgba(121,82,179,0.4)' },
  { name: 'Node.js', icon: 'Node', color: '#339933', bg: '#001a00', glow: 'rgba(51,153,51,0.4)' },
  { name: 'MongoDB', icon: '🍃', color: '#4db33d', bg: '#001500', glow: 'rgba(77,179,61,0.4)' },
  { name: 'Git', icon: 'Git', color: '#f05032', bg: '#1a0500', glow: 'rgba(240,80,50,0.4)' },
  { name: 'DSA', icon: '⚙', color: '#a78bfa', bg: '#0d0014', glow: 'rgba(167,139,250,0.4)' },
  { name: 'OOP', icon: '{}', color: '#7c3aed', bg: '#0a0014', glow: 'rgba(124,58,237,0.4)' },
  { name: 'DBMS', icon: '🗄', color: '#34d399', bg: '#001610', glow: 'rgba(52,211,153,0.4)' },
];

function Gem({ name, icon, color, bg, glow, delay }: { name: string; icon: string; color: string; bg: string; glow: string; delay: number }) {
  const clipPath = 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';
  return (
    <div 
      className="group"
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 10, 
        animation: `gemFloat 6s ease-in-out infinite`, 
        animationDelay: `${delay}s` 
      }}
    >
      <div style={{ position: 'relative', width: 78, height: 78, cursor: 'pointer' }} className="transition-transform duration-500 group-hover:scale-110">
        <div style={{ 
          position: 'absolute', inset: 0, clipPath, 
          background: 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(30,32,48,0.9) 40%, rgba(10,11,20,0.95) 100%)',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 15px ${glow}`
        }} className="transition-all duration-500 group-hover:shadow-[0_0_30px_5px] group-hover:shadow-purple-500/30" />
        
        <div style={{ 
          position: 'absolute', inset: 0, clipPath, 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)', 
          pointerEvents: 'none' 
        }} />

        <div style={{ 
          position: 'absolute', inset: 16, borderRadius: '50%', 
          background: bg, 
          border: `1px solid ${color}60`, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          boxShadow: `inset 0 0 15px ${glow}, 0 0 10px ${glow}` 
        }} className="transition-all duration-500 group-hover:border-white group-hover:scale-105">
          <span style={{ 
            fontSize: icon.length > 2 ? 11 : 20, 
            fontFamily: 'ui-monospace, monospace', 
            fontWeight: 800, 
            color, 
            lineHeight: 1, 
            textShadow: `0 0 12px ${glow}`, 
            letterSpacing: icon.length > 2 ? '-0.5px' : 0 
          }} className="transition-colors duration-500 group-hover:text-white">{icon}</span>
        </div>

        <div style={{ position: 'absolute', inset: 0, clipPath, background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6) 100%)', pointerEvents: 'none' }} />
      </div>
      
      <span className="transition-colors duration-300 group-hover:text-white" style={{ fontSize: 10, fontWeight: 600, color: '#52525b', fontFamily: 'ui-monospace, monospace', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{name}</span>
    </div>
  );
}

export function SkillGems() {
  return (
    <div className="relative">
      <style>{`
        @keyframes gemFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(1.5deg); }
          66% { transform: translateY(-6px) rotate(-1.5deg); }
        }
      `}</style>

      <div className="relative flex flex-wrap gap-8 md:gap-12 justify-center row-gap-16 max-w-6xl mx-auto py-8">
        {skills.map((s, i) => (
          <Gem key={s.name} {...s} delay={i * 0.15} />
        ))}
      </div>
    </div>
  );
}
