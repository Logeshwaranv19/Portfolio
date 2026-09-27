import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    ['#about', 'About'],
    ['#experience', 'Experience'],
    ['#projects', 'Projects'],
    ['#contact', 'Contact'],
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050507]/90 backdrop-blur-xl border-b border-purple-500/15">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between h-16 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8.5 h-8.5 rounded-full p-[1.5px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-glow shrink-0 overflow-hidden">
            <img src="/images/profile.png" alt="Logeshwaran V" className="w-full h-full object-cover object-[center_85%] scale-125 rounded-full group-hover:scale-135 transition-transform duration-300" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-white">
            Logeshwaran<span className="text-purple-400"> V.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0c14]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-4 space-y-1 animate-slide-up shadow-2xl">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-zinc-300 hover:text-white px-4 py-3 rounded-xl hover:bg-purple-500/10 transition-all"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
