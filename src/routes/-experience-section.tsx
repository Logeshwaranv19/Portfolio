import { Briefcase, Calendar, CheckCircle2, Building2, ShieldCheck, Layers, ExternalLink } from 'lucide-react';

export function ExperienceSection() {
  const techStack = [
    'Python',
    'FastAPI',
    'SQLAlchemy',
    'PostgreSQL',
    'Pydantic',
    'JWT Auth',
    'REST APIs',
    'Git & GitHub',
    'Full-Stack Dev',
  ];

  const highlights = [
    'Developed BuildTrack, a full-stack web application for construction project management, site monitoring, resource & workforce allocation, procurement, and real-time reporting.',
    'Worked primarily on backend engineering using Python, FastAPI, SQLAlchemy, PostgreSQL, Pydantic, and JWT Authentication.',
    'Designed & implemented Role-Based Access Control (RBAC) for 6 user roles: Administrator, Project Manager, Site Engineer, Contractor, Worker, and Client.',
    'Developed & integrated high-performance REST APIs with frontend for live project dashboard synchronization.',
    'Collaborated in a team environment using Git & GitHub for version control, code reviews, and structured SDLC workflows.',
    'Executed database schema design, migration queries, API integration testing, validation, and debugging.',
    'Strengthened core domain knowledge in software engineering architecture, teamwork, problem-solving, and cloud deployment.',
  ];

  const rbacRoles = [
    'Administrator',
    'Project Manager',
    'Site Engineer',
    'Contractor',
    'Worker',
    'Client',
  ];

  return (
    <section id="experience" className="w-full relative overflow-hidden bg-[#050507] py-32 border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-widest uppercase mb-6">
            <Briefcase className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Internship <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-base font-medium">
            Hands-on industry experience building scalable enterprise software solutions and collaborating in agile development environments.
          </p>
        </div>

        {/* Experience Card */}
        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-purple-600/30 rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-700 blur-[3px]" />
          
          <div className="relative bg-[#0c0c14]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            
            {/* Company & Role Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-inner">
                  <Building2 className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-md">
                      Infosys Springboard
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md font-semibold">
                      Completed Internship
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    Software Development Intern
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 text-zinc-400 font-mono text-sm font-semibold bg-white/5 border border-white/10 px-4 py-2 rounded-xl self-start lg:self-center">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>July 2026 — September 2026</span>
              </div>
            </div>

            {/* Description Paragraph */}
            <div className="py-6 text-zinc-300 leading-relaxed text-base">
              Completed an intensive two-month software development internship through <strong className="text-white">Infosys Springboard</strong>, gaining practical experience in full-stack web application development, backend systems engineering, database management, and team-driven agile workflows.
            </div>

            {/* Project Showcase & Image Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
              
              {/* Left Column: Project Details & RBAC */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-5 h-5 text-purple-400" />
                    <h4 className="text-xl font-extrabold text-white tracking-tight">
                      Project: BuildTrack
                    </h4>
                  </div>
                  <p className="text-sm font-semibold text-purple-300 uppercase tracking-widest font-mono mb-4">
                    Construction Project Management & Site Monitoring Platform
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                    A comprehensive enterprise application designed to manage construction projects, site activities, workforce deployment, material procurement, budget allocation, notifications, interactive dashboards, and executive reporting.
                  </p>
                </div>

                {/* RBAC Badge Grid */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono uppercase font-bold text-zinc-300 tracking-wider">
                      Role-Based Access Control (RBAC) Engine
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {rbacRoles.map((role) => (
                      <span key={role} className="text-[11px] font-mono font-bold text-zinc-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-lg">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-zinc-400 tracking-wider block mb-3">
                    Technologies & Tools Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono font-bold text-purple-300 bg-purple-600/15 border border-purple-500/30 px-3 py-1.5 rounded-xl shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Dashboard Image Card */}
              <div className="lg:col-span-6">
                <div className="relative group/img overflow-hidden rounded-2xl border border-white/10 bg-[#050507] shadow-2xl h-full flex flex-col justify-center">
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-[#0c0c14]/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    BuildTrack Dashboard Preview
                  </div>
                  
                  <img
                    src="/images/buildtrack.png"
                    alt="BuildTrack Construction Project Management & Site Monitoring Platform"
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Bullet Highlights */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-sm font-mono uppercase font-bold text-zinc-400 tracking-wider mb-6">
                Key Responsibilities & Technical Contributions:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:bg-white/[0.04] transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 leading-relaxed font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
