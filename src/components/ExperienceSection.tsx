import { FileText, Code2 } from "lucide-react";

const experiences = [
  {
    icon: FileText,
    title: "Project Maintainer & Admin",
    org: "Apertre 3.0",
    location: "Remote",
    period: "February 2026 - Present",
    desc: "Core maintainer reviewing PRs across architecture and docs, improving contributor guidelines, and validating configuration workflows in real usage.",
    tags: ["PR Reviews", "Docs Architecture", "Contributor Workflows"],
  },
  {
    icon: Code2,
    title: "Community Contributor",
    org: "Meshery (CNCF Project)",
    location: "Remote",
    period: "2026 - Present",
    desc: "Supported onboarding, local setup troubleshooting, PR reviews, and issue triaging to improve developer experience for new contributors.",
    tags: ["Onboarding Support", "Issue Triaging", "Contributor Docs"],
  },
  {
    icon: Code2,
    title: "SWOC Contributor",
    org: "Script Winter of Code",
    location: "Remote",
    period: "November 2025 - January 2026",
    desc: "Contributed to open-source projects during the Script Winter of Code program, working on documentation and automation tooling.",
    tags: ["Open Source", "Documentation", "Automation"],
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
