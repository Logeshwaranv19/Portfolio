import { SkillGems } from '../components/SkillGems';
import { Award, Calendar, CheckCircle2, GraduationCap } from 'lucide-react';

const certifications = [
  { title: "NPTEL Design Thinking", year: "2023", issuer: "NPTEL", category: "Design" },
  { title: "Python ", year: "2023", issuer: "Infosys Springboard", category: "Python" },
  { title: "NPTEL Java Programming", year: "2024", issuer: "NPTEL", category: "Programming" },
  { title: "NPTEL Introduction to IoT", year: "2025", issuer: "NPTEL", category: "IoT" },
  { title: "NASSCOM Digital 101", year: "2026", issuer: "NASSCOM", category: "Digital" },
  { title: "NASSCOM Data Preprocessing", year: "2026", issuer: "NASSCOM", category: "Data Science" },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full relative overflow-hidden bg-[#050507]">
      {/* Premium Atmospheric Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-8 py-32">
        {/* Heading */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Background
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Passionate about <span className="text-gradient-primary">software development.</span>
          </h2>
          <div className="mt-8 text-zinc-400 max-w-4xl leading-relaxed text-lg space-y-6">
            <p>
              I’m <span className="text-white font-medium">Logeshwaran</span>, an aspiring Software Engineer with strong experience in full-stack development and building scalable web applications. I specialize in developing efficient, user-focused software solutions using modern technologies across the frontend and backend.
            </p>
            <p>
              My experience includes designing and developing end-to-end applications, implementing responsive user interfaces, building RESTful APIs, managing databases, and deploying production-ready projects. I am passionate about solving complex technical problems, writing clean and maintainable code, and continuously improving system performance and user experience.
            </p>
            <p>
              Through hands-on projects and real-world development experience, I have strengthened my problem-solving, debugging, and software engineering skills. I am continuously expanding my knowledge of modern development practices, scalable architecture, and emerging technologies.
            </p>
            <p>
              I am seeking opportunities to contribute my technical skills, collaborate with innovative teams, and grow as a software engineer while building impactful digital products.
            </p>
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
                    detail: "CGPA: 8.35",
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

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              <h3 className="text-2xl font-bold text-white tracking-tight px-4">Certifications</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((c) => (
                <div key={c.title} className="group relative">
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
                      <span className="text-[10px] font-mono text-purple-400/80 font-bold">{c.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
