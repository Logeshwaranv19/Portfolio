import { SkillGems } from '../components/SkillGems';
import { Award, GraduationCap, Trophy, ExternalLink } from 'lucide-react';

const certifications = [
  { title: "Acquiring Data", year: "2026", issuer: "NASSCOM", category: "Data Science", link: "https://drive.google.com/file/d/1bfDikio6nIn5DFVBupnXrUaPe6sihIQU/view?usp=sharing" },
  { title: "Angular Framework Development", year: "2026", issuer: "Infosys Springboard", category: "Framework", link: "https://drive.google.com/file/d/1tn95ANOjwpdSwnkNNR-CXj7V9i3jBQip/view?usp=sharing" },
  { title: "Bootstrap 5 Responsive Design", year: "2026", issuer: "Infosys Springboard", category: "Frontend", link: "https://drive.google.com/file/d/1hHIJcEQdoqwp8cWxKSwbBuInipyDOXuj/view?usp=sharing" },
  { title: "Cloud Computing Fundamentals", year: "2026", issuer: "NASSCOM", category: "Cloud", link: "https://drive.google.com/file/d/1ABPfW1JAVQcb6RIw5ceR5kjTQdoA0NBL/view?usp=sharing" },
  { title: "CSS3 Fundamentals", year: "2026", issuer: "Infosys Springboard", category: "Frontend", link: "https://drive.google.com/file/d/1mc9NgsXb5XWEgjQ0CBbj6BAu-6Xbdv7o/view?usp=sharing" },
  { title: "Data Processing & Visualization", year: "2026", issuer: "NASSCOM", category: "Data Science", link: "https://drive.google.com/file/d/136If1xLliQQIe87YTZ_dssxi9C2qSgv-/view?usp=sharing" },
  { title: "Data Science for Beginners", year: "2026", issuer: "NASSCOM", category: "Data Science", link: "https://drive.google.com/file/d/16jGOe2ZWyMlrUHbEOcXT70zXuALSRCPb/view?usp=sharing" },
  { title: "Design Thinking", year: "2023", issuer: "NPTEL", category: "Design", link: "https://drive.google.com/file/d/1Fj1c_etoemAXUp4MaUGHvBjZFGuKC7sk/view?usp=sharing" },
  { title: "Digital 101", year: "2026", issuer: "NASSCOM", category: "Digital", link: "https://drive.google.com/file/d/1obehWibBTZpDAC84gbZDUo1019NzaI9p/view?usp=sharing" },
  { title: "Foundational Course on Applied ML & AI", year: "2026", issuer: "CII", category: "AI / ML", link: "https://drive.google.com/file/d/1zU_-jp1231TBenxdwqTOBUvRYgjAzYRL/view?usp=sharing" },
  { title: "HTML5 Fundamentals", year: "2026", issuer: "Infosys Springboard", category: "Frontend", link: "https://drive.google.com/file/d/17y660_v0itQPun_nOIMrlB5Y-45E6k4l/view?usp=sharing" },
  { title: "Introduction to IoT", year: "2025", issuer: "NPTEL", category: "IoT", link: "https://drive.google.com/file/d/1z2QvLcAHryEk3N62sMBb6bW_PzThqOXD/view?usp=sharing" },
  { title: "Java Programming", year: "2024", issuer: "NPTEL", category: "Programming", link: "https://drive.google.com/file/d/1WW-6ImfYJA8gdNK2GsTy3qJAkH1qroAC/view?usp=sharing" },
  { title: "JavaScript Essentials", year: "2026", issuer: "Infosys Springboard", category: "Frontend", link: "https://drive.google.com/file/d/1hS1m-9Hv6bcmUp36hkyQfgfu0UCbTKJN/view?usp=drive_link" },
  { title: "TypeScript Mastery", year: "2026", issuer: "Infosys Springboard", category: "Programming", link: "https://drive.google.com/file/d/1T-pCcqmdcEQksqgDnCb8oiOdraKvjqZv/view?usp=sharing" },
  { title: "Machine Learning", year: "2026", issuer: "NASSCOM", category: "AI / ML", link: "https://drive.google.com/file/d/1QdkE86u9I5HN7BOJVKngAmTFCFu98iPW/view?usp=sharing" },
  { title: "SQL Database Development", year: "2026", issuer: "CodeChef", category: "Database", link: "https://drive.google.com/file/d/1IVxTNDQ3IMiOfUAmf35K2e1Jl1lxbz6n/view?usp=sharing" },
  { title: "GitHub & Version Control", year: "2026", issuer: "CodeChef", category: "DevOps", link: "https://drive.google.com/file/d/1sJIE9SkmmAE-MCNlB5ZXdWk1bIo-EH6z/view?usp=sharing" },
];

const hackathonCertificates = [
  { title: "Academic Excellence Award", year: "2024", issuer: "Academic Honor", category: "Academic Honor", type: "Academic Certificate", link: "https://drive.google.com/file/d/1w-VJTD3RSiZ5q76IG_ku8PAO3S1SZTpY/view?usp=sharing" },
  { title: "Tata Elxsi Hackathon", year: "2026", issuer: "Tata Elxsi", category: "Participation", type: "Participation Certificate", link: "https://drive.google.com/file/d/1P5yHRflTy2d6Ck8mUOOxX5dSymUnVJij/view?usp=sharing" },
  { title: "Hackvega Hackathon", year: "2026", issuer: "Hackvega", category: "Participation", type: "Participation Certificate", link: "https://drive.google.com/file/d/1n0rD5W4CQvp8PdMV8b5By8uqcrdPnlug/view?usp=sharing" },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full relative overflow-hidden bg-[#050507]">
      {/* Premium Atmospheric Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 py-16 sm:py-32">
        {/* Top Section: Photo + Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16 sm:mb-24">
          {/* Photo Card Column */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Glow Backdrops */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 group-hover:duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-[2.5rem] blur-md opacity-40" />

              {/* Main Card Frame */}
              <div className="relative bg-[#0c0c14]/90 border border-white/10 rounded-[2.2rem] p-3.5 sm:p-4 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 overflow-hidden">
                {/* Decorative corner glows */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-[1.6rem] overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500 shadow-inner">
                  <img
                    src="/images/profile.png"
                    alt="Logeshwaran V"
                    className="w-full h-full object-cover object-[center_90%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14]/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Floating Status Pill */}
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050507]/80 backdrop-blur-md border border-white/15 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-semibold text-zinc-200">Open to Work</span>
                  </div>
                </div>

                {/* Profile Info Footer */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#080811]/90 border border-white/10 shadow-xl flex flex-col gap-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-white font-extrabold text-xl tracking-tight">Logeshwaran V</h3>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold uppercase tracking-wider shrink-0">
                      B.Tech IT
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-medium">Software Developer &amp; Full-Stack Enthusiast</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pt-2.5 border-t border-white/5 text-[11px] text-zinc-400 font-mono">
                    <span className="text-purple-400 font-semibold flex items-center gap-1">
                      <span>📍</span> Tamil Nadu, India
                    </span>
                    <span className="text-zinc-300 font-semibold flex items-center gap-1">
                      <span>🎓</span> Sona College of Technology
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Background &amp; Profile
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Passionate about <span className="text-gradient-primary">software development.</span>
            </h2>

            <div className="text-zinc-400 leading-relaxed text-base sm:text-lg space-y-5 font-medium">
              <p>
                I’m <span className="text-white font-semibold">Logeshwaran</span>, an aspiring Software Engineer with strong experience in full-stack development and building scalable web applications. I specialize in developing efficient, user-focused software solutions using modern technologies across frontend and backend.
              </p>
              <p>
                My experience includes designing and developing end-to-end applications, implementing responsive user interfaces, building RESTful APIs, managing databases, and deploying production-ready projects. I am passionate about solving complex technical problems, writing clean and maintainable code, and continuously improving system performance and user experience.
              </p>
              <p>
                Through hands-on projects and real-world development experience, I have strengthened my problem-solving, debugging, and software engineering skills while continuously expanding my knowledge of modern architecture, scalable systems, and emerging technologies.
              </p>
              <p>
                I am seeking opportunities to contribute my technical skills, collaborate with innovative teams, and grow as a software engineer while building impactful digital products.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Stack */}
        <div className="flex flex-col gap-24">
          {/* Skills */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
              <h3 className="text-2xl font-bold text-white px-4">Skills & Stack</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            </div>
            <SkillGems />
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              <h3 className="text-2xl font-bold text-white tracking-tight px-4">Education</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            </div>

            <div className="relative">
              {/* Central Glowing Spine */}
              <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
              <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent opacity-50" />

              <div className="space-y-16">
                {[
                  {
                    year: "2021 — 2022",
                    title: "Higher Secondary First Year",
                    place: "Bharathiyar Matric Higher Secondary School",
                    detail: "Scored 85%",
                    badge: null,
                  },
                  {
                    year: "2022 — 2023",
                    title: "Higher Secondary Second Year",
                    place: "Bharathiyar Matric Higher Secondary School",
                    detail: "Scored 87%",
                    badge: null,
                  },
                  {
                    year: "2023 — 2027",
                    title: "B.Tech, Information Technology",
                    place: "Sona College of Technology",
                    detail: "CGPA: 8.25",
                    badge: "Current",
                  }
                ].map((t, idx) => (
                  <div key={t.title} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                    {/* Interactive Timeline Dot */}
                    <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-[#050507] border border-white/10 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(124,58,237,0.15)] group">
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#a855f7]" />
                      <div className="absolute inset-0 rounded-full border border-purple-500/50 scale-75 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                    </div>

                    {/* Content Card */}
                    <div className="w-full md:w-[45%] pl-12 md:pl-0 group">
                      <div className="relative">
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-[2rem] blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700" />
                        <div className="relative bg-[#0c0c14]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 md:p-8 hover:bg-[#0c0c14]/70 transition-all duration-500 shadow-2xl">

                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                              <GraduationCap className="w-6 h-6 text-purple-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg md:text-xl font-bold text-white leading-tight mb-1 group-hover:text-purple-400 transition-colors">{t.title}</h4>
                              <p className="text-sm text-zinc-500 font-medium">{t.place}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-[10px] font-black text-purple-400 bg-purple-500/5 px-3 py-1 rounded-md border border-purple-500/10 uppercase tracking-widest">
                              {t.year}
                            </span>
                            {t.badge && (
                              <span className="px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                                {t.badge}
                              </span>
                            )}
                          </div>

                          <p className="text-sm text-zinc-400 leading-relaxed font-medium border-l-2 border-purple-500/20 pl-4">
                            {t.detail}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Spacer */}
                    <div className="hidden md:block w-[10%]" />
                    <div className="hidden md:block w-[45%]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Honors & Hackathon Awards */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Honors & Hackathon Certificates</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hackathonCertificates.map((h) => (
                <a
                  key={h.title}
                  href={h.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative cursor-pointer block"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-purple-500/30 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-[3px]" />
                  <div className="relative h-full bg-[#0c0c14]/80 backdrop-blur-md border border-amber-500/20 rounded-2xl p-6 transition-all duration-500 group-hover:bg-[#0c0c14] group-hover:-translate-y-1 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:bg-amber-500/25 transition-all">
                        <Trophy className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-all" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20">{h.issuer}</span>
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{h.category}</span>
                        </div>
                        <h4 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">{h.title}</h4>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">{h.type || h.category}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-amber-400 font-bold">{h.year}</span>
                        <div className="w-1 h-1 rounded-full bg-amber-500/50" />
                        <span className="text-[10px] font-bold text-amber-400 flex items-center gap-1 group-hover:underline">
                          View Certificate <ExternalLink size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Technical & Course Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              <h3 className="text-2xl font-bold text-white tracking-tight px-4">Course & Skill Certifications ({certifications.length})</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((c) => (
                <a 
                  key={c.title} 
                  href={c.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group relative cursor-pointer block"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px]" />
                  <div className="relative h-full bg-[#0c0c14]/60 backdrop-blur-md border border-white/5 rounded-2xl p-5 transition-all duration-500 group-hover:bg-[#0c0c14]/90 group-hover:-translate-y-1 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                        <Award className="w-5 h-5 text-purple-400 group-hover:text-white group-hover:scale-110 transition-all" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[9px] font-black text-purple-400 uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-purple-500/5 border border-purple-500/10">{c.issuer}</span>
                          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{c.category}</span>
                        </div>
                        <h4 className="text-[13px] font-bold text-white leading-tight group-hover:text-purple-300 transition-colors">{c.title}</h4>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono text-zinc-600 font-bold tracking-tighter uppercase">Issue Year</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-purple-400/80 font-bold">{c.year}</span>
                        <div className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span className="text-[9px] font-bold text-purple-500/50 uppercase group-hover:text-purple-400 transition-colors">View →</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
