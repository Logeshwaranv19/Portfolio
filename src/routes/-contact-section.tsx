import { useState } from 'react';
import { sendEmail } from '../server/contact';
import { Mail, Phone, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { StarCanvas } from '../components/Earth3D';

const channels = [
  { label: "Email", value: "logeshwaranv19@gmail.com", href: "mailto:logeshwaranv19@gmail.com", icon: <Mail size={18} /> },
  { label: "Phone", value: "+91 8870 549 017", href: "tel:+918870549017", icon: <Phone size={18} /> },
  { label: "GitHub", value: "Logeshwaranv19", href: "https://github.com/Logeshwaranv19", icon: <Github size={18} /> },
  { label: "LinkedIn", value: "Logeshwaran V", href: "https://www.linkedin.com/in/logeshwaran-v-08020432b/", icon: <Linkedin size={18} /> },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };
    try {
      const res = await sendEmail({ data });
      if (res.success) {
        setSubmitStatus({ type: 'success', msg: "Message sent! I'll get back to you soon." });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({ type: 'error', msg: res.error || 'Failed to send message.' });
      }
    } catch {
      setSubmitStatus({ type: 'error', msg: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full relative overflow-hidden bg-[#050507]">
      {/* Neural Architecture */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Dynamic Mesh Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none animate-pulse-slow delay-1000" />

      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

      <div className="relative mx-auto max-w-[1100px] px-6 py-32">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            <h3 className="text-2xl font-bold text-white px-4">Get In Touch</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">Let's build something <span className="text-gradient-primary">legendary</span>.</h2>
          </div>
          <p className="mt-6 text-zinc-500 text-base max-w-lg mx-auto leading-relaxed text-center">
            Open to internships, collaborations, and exciting ideas. Drop me a message or reach out on any platform.
          </p>
        </div>

        {/* 3D Floating Envelope Scene */}
        <div className="flex justify-center mb-16">
          <style>{`
            @keyframes float3d {
              0%, 100% { transform: perspective(600px) rotateX(15deg) rotateY(-20deg) translateY(0px); }
              50% { transform: perspective(600px) rotateX(15deg) rotateY(-20deg) translateY(-18px); }
            }
            @keyframes orbitX {
              0% { transform: rotateX(0deg) rotateY(0deg) translateZ(90px); }
              100% { transform: rotateX(360deg) rotateY(360deg) translateZ(90px); }
            }
            @keyframes orbitY {
              0% { transform: rotateY(0deg) rotateX(60deg) translateZ(110px); }
              100% { transform: rotateY(-360deg) rotateX(60deg) translateZ(110px); }
            }
            @keyframes spinRing {
              0% { transform: rotateX(75deg) rotateZ(0deg); }
              100% { transform: rotateX(75deg) rotateZ(360deg); }
            }
            @keyframes spinRing2 {
              0% { transform: rotateX(45deg) rotateZ(0deg) rotateY(30deg); }
              100% { transform: rotateX(45deg) rotateZ(-360deg) rotateY(30deg); }
            }
            @keyframes lidOpen {
              0%, 60%, 100% { transform: perspective(600px) rotateX(0deg); }
              30% { transform: perspective(600px) rotateX(-30deg); }
            }
            @keyframes pulse3d {
              0%, 100% { opacity: 0.4; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.08); }
            }
          `}</style>

          <div style={{ perspective: '800px', width: '280px', height: '280px', position: 'relative' }}>
            {/* Outer orbit ring 1 */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transformStyle: 'preserve-3d', animation: 'spinRing 6s linear infinite',
            }}>
              <div style={{
                width: '220px', height: '220px', borderRadius: '50%',
                border: '1.5px solid rgba(139,92,246,0.35)',
                boxShadow: '0 0 12px rgba(139,92,246,0.2)',
              }} />
            </div>
            {/* Outer orbit ring 2 */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transformStyle: 'preserve-3d', animation: 'spinRing2 9s linear infinite',
            }}>
              <div style={{
                width: '260px', height: '260px', borderRadius: '50%',
                border: '1px solid rgba(99,102,241,0.25)',
              }} />
            </div>

            {/* Orbiting dot 1 */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transformStyle: 'preserve-3d', animation: 'orbitX 4s linear infinite',
            }}>
              <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: 'radial-gradient(circle, #a78bfa, #7c3aed)',
                boxShadow: '0 0 10px rgba(167,139,250,0.8)',
              }} />
            </div>
            {/* Orbiting dot 2 */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transformStyle: 'preserve-3d', animation: 'orbitY 7s linear infinite',
            }}>
              <div style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: 'radial-gradient(circle, #818cf8, #4f46e5)',
                boxShadow: '0 0 8px rgba(129,140,248,0.8)',
              }} />
            </div>

            {/* 3D Envelope — main body */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              animation: 'float3d 4s ease-in-out infinite',
              transformStyle: 'preserve-3d',
            }}>
              {/* Shadow beneath */}
              <div style={{
                position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)',
                width: '110px', height: '18px', borderRadius: '50%',
                background: 'rgba(124,58,237,0.25)', filter: 'blur(12px)',
                animation: 'pulse3d 4s ease-in-out infinite',
              }} />

              {/* Envelope body */}
              <div style={{
                width: '120px', height: '80px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
                border: '1.5px solid rgba(139,92,246,0.5)',
                boxShadow: '0 20px 60px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Envelope flap (lid) */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '45px', overflow: 'hidden',
                  transformOrigin: 'top center', animation: 'lidOpen 5s ease-in-out infinite',
                }}>
                  {/* Triangle flap shape */}
                  <div style={{
                    width: 0, height: 0,
                    borderLeft: '60px solid transparent',
                    borderRight: '60px solid transparent',
                    borderTop: '45px solid rgba(99,102,241,0.7)',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  }} />
                </div>
                {/* V fold lines */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, top: 0,
                  background: 'linear-gradient(135deg, transparent 49.5%, rgba(139,92,246,0.3) 49.5%, rgba(139,92,246,0.3) 50.5%, transparent 50.5%)',
                }} />
                {/* Inner glow */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(ellipse at 50% 70%, rgba(139,92,246,0.15) 0%, transparent 70%)',
                }} />
                {/* @ symbol */}
                <div style={{
                  position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)',
                  fontSize: '22px', color: 'rgba(167,139,250,0.7)', fontWeight: 900, lineHeight: 1,
                }}>@</div>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300 h-full w-full"
            >
              <span className="text-purple-400 group-hover:scale-110 transition-transform shrink-0">{c.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none mb-1.5">{c.label}</div>
                <div className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors truncate">{c.value}</div>
              </div>
              <ArrowUpRight size={14} className="text-zinc-700 group-hover:text-purple-400 transition-colors shrink-0" />
            </a>
          ))}
        </div>

        {/* Divider with availability */}
        <div className="flex items-center gap-4 mb-16 max-w-2xl mx-auto">
          <div className="h-px flex-1 bg-white/5" />
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/15">
            <span className="relative flex">
              <span className="animate-ping absolute w-2 h-2 rounded-full bg-emerald-400 opacity-60" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold text-emerald-400">Available for opportunities</span>
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Contact Form — Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-purple-500/20 shadow-[0_0_80px_-10px_rgba(139,92,246,0.35)] backdrop-blur-2xl p-10 md:p-14">
            {/* Card layered background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#13102a] via-[#0c0c18] to-[#0a0a14]" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Edge highlights */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

            <div className="relative">
              <p className="text-center text-sm text-zinc-400 mb-10">Fill out the form below and I'll respond promptly.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Name & Email side-by-side */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="group/input">
                    <label className="block text-[10px] font-bold text-zinc-500 group-focus-within/input:text-purple-400 uppercase tracking-[0.2em] mb-2.5 transition-colors">Name</label>
                    <div className="relative">
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-[1px] opacity-0 group-focus-within/input:opacity-100 transition-opacity" />
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within/input:text-purple-400 transition-colors">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                        </span>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0c0c14]/80 border border-white/5 text-white text-sm placeholder-zinc-700 outline-none focus:bg-[#0c0c14] transition-all"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="group/input">
                    <label className="block text-[10px] font-bold text-zinc-500 group-focus-within/input:text-purple-400 uppercase tracking-[0.2em] mb-2.5 transition-colors">Email</label>
                    <div className="relative">
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-[1px] opacity-0 group-focus-within/input:opacity-100 transition-opacity" />
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within/input:text-purple-400 transition-colors">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" /></svg>
                        </span>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0c0c14]/80 border border-white/5 text-white text-sm placeholder-zinc-700 outline-none focus:bg-[#0c0c14] transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="group/input">
                  <label className="block text-[10px] font-bold text-zinc-500 group-focus-within/input:text-purple-400 uppercase tracking-[0.2em] mb-2.5 transition-colors">Message</label>
                  <div className="relative">
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-[1px] opacity-0 group-focus-within/input:opacity-100 transition-opacity" />
                    <div className="relative">
                      <span className="absolute left-4 top-4 text-zinc-600 group-focus-within/input:text-purple-400 transition-colors">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      </span>
                      <textarea
                        name="message"
                        required
                        placeholder="Tell me about your project or idea..."
                        rows={5}
                        className="w-full pl-11 pr-4 py-4 rounded-xl bg-[#0c0c14]/80 border border-white/5 text-white text-sm placeholder-zinc-700 outline-none focus:bg-[#0c0c14] transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Status */}
                {submitStatus && (
                  <div className={`flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-bold border animate-slide-up ${submitStatus.type === 'success' ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/5 text-rose-400 border-rose-500/20'}`}>
                    <span className={`w-2 h-2 rounded-full shrink-0 ${submitStatus.type === 'success' ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-rose-400 shadow-[0_0_8px_#fb7185]'}`} />
                    {submitStatus.msg}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex items-center justify-center gap-3 w-full py-4 mt-2 rounded-xl font-black text-xs uppercase tracking-widest text-white overflow-hidden transition-all active:scale-[0.98] disabled:opacity-70 shadow-2xl"
                >
                  {/* Button Background & Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:from-purple-500 group-hover:to-indigo-500 transition-all duration-500" />

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 w-[200%] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send</span>
                        <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

