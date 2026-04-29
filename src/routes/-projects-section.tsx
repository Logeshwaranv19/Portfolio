import { Award, Calendar, Github } from 'lucide-react';

const projects = [
  {
    name: "OFFGRIDLINK",
    year: "2026",
    tagline: "Offline-first peer-to-peer file sharing over LAN/Wi-Fi.",
    description:
      "OffGridLink is an innovative offline-first quiz management and distribution system designed for educational environments without reliable internet connectivity. Teachers can create, manage, and distribute quizzes to students via peer-to-peer networking over local Wi-Fi networks. Students submit their responses which are automatically scored and synced when connectivity is available.",
    tech: ["#PeerJS", "#WebRTC", "#WebTorrent", "#PouchDB", "#CouchDB"],
    link: "https://github.com/Logeshwaranv19/finalquizoffline",
    image: "/images/OffgridLink.png",
  },
  {
    name: "LAUNDRY & DRY-CLEANING SERVICE",
    year: "2025",
    tagline: "Laundry & Dry-Cleaning Service App | MERN Stack",
    description:
      "Built a full-stack laundry booking platform with JWT authentication, pickup scheduling, order tracking, fabric-based pricing, loyalty rewards, subscription plans, and complaint management with photo uploads.",
    tech: ["#MongoDB", "#Express", "#React", "#Node.js", "#JWT", "#MERN"],
    link: "https://github.com/Logeshwaranv19/The-Laundry-Dry-Cleaning-Service-System",
    image: "/images/Laundary.png",
  },
  {
    name: "OFFLINESHARE",
    year: "2026",
    tagline: "Offline-first P2P file sharing for Browser & Desktop.",
    description:
      "An offline-first Peer-to-Peer (P2P) file sharing application designed to work without internet access. It leverages PWA technologies and Electron to run on browsers and desktops, utilizing local PouchDB storage and WebRTC for direct transfers.",
    tech: ["#PWA", "#Electron", "#WebRTC", "#PouchDB", "#CouchDB", "#TailwindCSS"],
    link: "https://github.com/Logeshwaranv19/OffgridShare",
    image: "/images/OFFLINESHARE.png",
  }
];

const activities = [
  { label: "Smart India Hackathon", detail: "Participant", year: "2023" },
  { label: "Techathon", detail: "2nd Round Qualifier", year: "2024" },
  { label: "Apithon", detail: "Participant", year: "2024" },
  { label: "Appreciation Award", detail: "Recipient", year: "2024" },
  { label: "Persona", detail: "Participant", year: "2026" },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full relative" style={{ background: '#050507' }}>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <h3 className="text-2xl font-bold text-white px-4">Projects</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-6">
          Things I've <span className="text-gradient-primary">built.</span>
        </h2>

        {/* Project Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((p) => (
            <article key={p.name} className="bg-[#101124] rounded-[2rem] p-5 border border-zinc-800/50 shadow-elegant transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full">
              {/* Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-zinc-900 mb-6 shadow-2xl shrink-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* GitHub Overlay */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 w-11 h-11 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:scale-110 transition-all shadow-glow"
                >
                  <Github size={22} />
                </a>
              </div>

              {/* Content */}
              <div className="px-2 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{p.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium flex-1">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 pb-2">
                  {p.tech.map((t, idx) => {
                    const colors = [
                      'text-blue-400',
                      'text-emerald-400',
                      'text-rose-400',
                      'text-amber-400',
                      'text-purple-400'
                    ];
                    return (
                      <span key={t} className={`text-xs font-bold tracking-tight ${colors[idx % colors.length]}`}>
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Activities & Recognition */}
        <div className="mt-32">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-4 w-full max-w-4xl mb-6">
              <div className="section-divider flex-1 opacity-50" />
               <h3 className="text-2xl md:text-4xl font-black text-white text-center">Activities & <span className="text-gradient-primary">Recognition</span></h3>
              <div className="section-divider flex-1 opacity-50" />
            </div>
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a) => (
              <div key={a.label} className="group relative">
                {/* Glowing Background Overlay */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-[2px]" />
                
                <div className="relative h-full bg-[#0c0c14]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 transition-all duration-500 group-hover:bg-[#0c0c14]/70 group-hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/5 border border-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
                      {a.label.toLowerCase().includes('award') ? (
                        <Award className="w-7 h-7 text-purple-400 group-hover:text-white transition-colors" />
                      ) : (
                        <Calendar className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[9px] font-black text-purple-400 uppercase tracking-widest bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10">
                          {a.year}
                        </span>
                        <div className="h-1 w-1 rounded-full bg-zinc-700" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors truncate">{a.label}</h4>
                      <p className="text-sm text-zinc-500 font-medium leading-snug">{a.detail}</p>
                    </div>
                  </div>

                  {/* Decorative Micro-elements */}
                  <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-purple-500/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
