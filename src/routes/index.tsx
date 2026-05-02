import { createFileRoute } from '@tanstack/react-router';
import { AboutSection } from './-about-section';
import { ProjectsSection } from './-projects-section';
import { ContactSection } from './-contact-section';
import { StarCanvas } from '../components/Earth3D';
import { Computer3D } from '../components/Computer3D';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col w-full">

      {/* ── Hero ── */}
      <section id="hero" className="relative w-full overflow-hidden bg-gradient-hero">
        <StarCanvas />
        <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-8 py-24 md:py-32" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

            {/* Left: Text */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border-primary-glow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-zinc-300">Open to Internship &amp; Engineering Opportunities</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.95]">
                <span className="text-white block">Hi, I'm</span>
                <span className="text-gradient-primary block mt-1 pb-4">Logeshwaran.</span>
              </h1>

              <div className="mt-8 flex flex-col gap-5">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Software Developer
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl font-medium">
                  Dedicated and passionate technology enthusiast with hands-on experience in building software
                  projects, solving problems, and working with modern tools and technologies. Strong foundation in
                  Java, FullStack Development, Data Structures &amp; Algorithms, and problem-solving. Committed to
                  writing clean, efficient code and contributing effectively to team-driven development environments.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="px-7 py-3.5 rounded-xl bg-gradient-primary text-white font-semibold shadow-glow hover:opacity-90 hover:-translate-y-0.5 transition-all text-sm font-secondary">
                  View Projects →
                </a>
                <a href="#contact" className="px-7 py-3.5 rounded-xl glass border-primary-glow text-white font-semibold hover:bg-white/10 transition-all text-sm font-secondary">
                  Let's Connect
                </a>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
                {[
                  { val: '8.34', label: 'CGPA' },
                  { val: '3+', label: 'Projects' },
                  { val: '12+', label: 'Certifications' },
                  { val: '2027', label: 'Graduating' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div className="text-3xl font-bold text-white">{val}</div>
                    <div className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-mono">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D Computer */}
            <div className="order-1 lg:order-2 flex items-center justify-center relative" style={{ minHeight: 'clamp(300px, 40vh, 550px)' }}>
              <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full" />
              <Computer3D />
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #050507)' }} />
      </section>

      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

