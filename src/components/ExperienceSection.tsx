import { FileText, Code2 } from "lucide-react";

const experiences = [
  {
    icon: Code2,
    title: "Backend Engineer (Independent)",
    org: "Self-Driven Engineering",
    location: "Remote",
    period: "2025 - Present",
    desc: "Designed and built scalable backend systems including a banking backend with double-entry ledger architecture, AI-powered platforms, and real-time systems. Focused on system design, performance optimization (~35% latency reduction using Redis), and building production-ready APIs with secure authentication and concurrency-safe workflows.",
    tags: ["Node.js", "FastAPI", "System Design", "Redis", "MongoDB", "AWS"],
  },
  {
    icon: FileText,
    title: "Technical Writer & Developer",
    org: "Hashnode",
    location: "Remote",
    period: "2025 - Present",
    desc: "Publishing technical blogs on backend development, system design, and real-world project learnings. Sharing insights on building scalable systems, performance optimization, and developer workflows.",
    tags: ["Technical Writing", "Backend", "System Design", "Dev Community"],
  },
  {
    icon: Code2,
    title: "Full-Stack Developer Intern",
    org: "OrangeBooks Publication",
    location: "Delhi",
    period: "Feb 2025 - May 2025",
    desc: "Developed and optimized responsive web applications using React and JavaScript, improving UI performance and usability. Worked on API integrations and collaborated using Git/GitHub in a real-world development environment.",
    tags: ["React", "JavaScript", "API Integration", "Git"],
  },
  {
    icon: FileText,
    title: "Open Source Contributor",
    org: "Script Winter of Code (SWOC)",
    location: "Remote",
    period: "Nov 2025 - Jan 2026",
    desc: "Contributed to open-source projects focusing on documentation improvements and automation workflows, enhancing developer onboarding and usability.",
    tags: ["Open Source", "Documentation", "Automation"],
  },
  {
    icon: Code2,
    title: "Frontend Developer (College Project)",
    org: "Kumaon Jewellery Heritage",
    location: "Uttarakhand",
    period: "2024",
    desc: "Built a web platform showcasing traditional Kumaoni jewellery and cultural heritage of Uttarakhand. Designed responsive UI/UX and implemented frontend features using React and JavaScript to present historical and cultural information effectively.",
    tags: ["React", "JavaScript", "UI/UX", "Git"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative z-10 py-24">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <div className="glass-pill mx-auto mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <FileText size={14} /> experience.timeline()
        </div>
        <h2 className="section-heading">Experience</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Maintainer and contributor experience across open-source ecosystems,
          developer documentation, and DevOps tooling.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block" style={{ background: "hsla(0,0%,100%,0.08)" }} />

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative flex flex-col md:flex-row">
                {/* Node */}
                <div className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary md:block" />

                <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="glass-card-hover p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <Icon size={20} className="text-primary" />
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="mb-3 font-mono text-sm text-primary">
                      {exp.org} | {exp.location}
                    </p>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
