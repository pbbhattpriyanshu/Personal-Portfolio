import { Github, ExternalLink, Layers } from "lucide-react";

const projects = [
  {
    name: "LogPulse",
    desc: "Real-time log aggregation platform with a scalable Go backend and React dashboard for high-performance observability.",
    tags: ["Go", "React", "TypeScript", "Docker", "Observability"],
  },
  {
    name: "Reliability Control Plane",
    desc: "Control plane focused on SRE workflows, reliability automation, and platform-level operational governance.",
    tags: ["Reliability", "SRE", "Automation", "Control Plane"],
  },
  {
    name: "IncidentTeller",
    desc: "Incident storytelling and analysis utility to structure post-incident learning with clearer context and outcomes.",
    tags: ["Incident Response", "Postmortems", "DevOps", "Operations"],
  },
  {
    name: "RailBoost",
    desc: "Community automation and observability platform with contributor workflows, engagement analytics, and reporting.",
    tags: ["GitHub Actions", "Prometheus", "Grafana", "Docker Compose"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="relative z-10 py-24">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <p className="section-label mb-3">// featured_work</p>
        <h2 className="section-heading">Projects</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <div key={p.name} className="glass-card-hover flex flex-col p-6">
            <div className="mb-4 flex items-center justify-between">
              <Layers size={20} className="text-primary" />
              <div className="flex gap-2">
                <Github size={16} className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer" />
                <ExternalLink size={16} className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{p.name}</h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="#" className="inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:underline">
          <Github size={14} /> view_all_repos →
        </a>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
