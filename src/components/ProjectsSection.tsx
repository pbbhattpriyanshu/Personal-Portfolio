import { Github, ExternalLink, Layers } from "lucide-react";

const projects = [
  {
    name: "NextHire",
    desc: "A AI modern recruitment and applicant tracking platform built to streamline the hiring process with intuitive workflows.",
    tags: ["React", "Node.js", "@Gemini AI", "TypeScript", "SaaS"],
    githubUrl: "https://github.com/pbbhattpriyanshu/NextHire",
    liveUrl: "#",
  },
  {
    name: "FinTrust",
    desc: "A secure personal finance dashboard offering real-time transaction tracking, budgeting tools, and financial insights.",
    tags: ["Finance", "Dashboard", "Security", "REST API"],
    githubUrl: "https://github.com/pbbhattpriyanshu/-FinTrust-",
    liveUrl: "#",
  },
  {
    name: "Chatterbox",
    desc: "Real-time messaging application featuring encrypted chat rooms, instant notifications, and seamless WebSocket integration.",
    tags: ["WebSockets", "Node.js", "Real-time", "Chat"],
    githubUrl: "https://github.com/pbbhattpriyanshu/chatterbox",
    liveUrl: "#",
  },
  {
    name: "Collabsphere",
    desc: "A unified team collaboration, AI workspace integrating project management, shared documents, and real-time updates.",
    tags: ["Collaboration", "@Gemini AI", "Productivity", "SaaS", "Workspace"],
    githubUrl: "https://github.com/pbbhattpriyanshu/CollabSphere",
    liveUrl: "#",
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
              <div className="flex gap-3">
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label={`View ${p.name} repository on GitHub`}>
                    <Github size={16} />
                  </a>
                )}
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label={`Visit live version of ${p.name}`}>
                    <ExternalLink size={16} />
                  </a>
                )}
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
        <a href="https://github.com/pbbhattpriyanshu?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:underline">
          <Github size={14} /> view_all_repos →
        </a>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
