import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: 'rgba(5,5,7,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(124,58,237,0.15)' }}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-sm shadow-glow">L</div>
          <span className="font-semibold text-sm tracking-tight text-white">Logeshwaran<span className="text-purple-400"> V.</span></span>
        </Link>
        <nav className="flex items-center gap-1">
          {[['#about','About'],['#projects','Projects'],['#contact','Contact']].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
