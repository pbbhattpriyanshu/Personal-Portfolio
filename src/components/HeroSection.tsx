import { Github, Linkedin, Download } from "lucide-react";

const coreAreas = ["System Thinking", "Problem Solving", "Backend Development", "DevOps Fundamentals"];

const HeroSection = () => (
  <section className="relative z-10 flex min-h-screen items-center pt-20">
    <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col justify-center">
        <div className="glass-pill mb-6 inline-flex w-fit items-center gap-2 font-mono text-sm text-muted-foreground">
          <span className="text-primary">&gt;_</span> priyanshu@engineer:~$ whoami<span className="animate-pulse text-primary font-bold">_</span>
        </div>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          Priyanshu Bhatt
        </h1>

        <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
          Backend & Cloud Engineer
        </p>

        <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
          Building reliable systems with clear documentation,
          production-focused automation, and{" "}
          <span className="glow-text">CI/CD</span> +{" "}
          <span className="glow-text">observability</span> at scale.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/pbbhattpriyanshu"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshupb01008/"
            className="glass-pill inline-flex items-center gap-2 text-foreground transition-all hover:border-primary/30"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download="Priyanshu_Bhatt_Resume.pdf"
            className="glass-pill inline-flex items-center gap-2 text-foreground transition-all hover:border-primary/30"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        <div className="mt-12 font-mono text-sm text-muted-foreground">
          scroll_down <span className="ml-1">↓</span>
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-end">
        <div className="glass-card w-full max-w-sm p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Core Areas
          </p>
          <div className="flex flex-col gap-3">
            {coreAreas.map((area) => (
              <div
                key={area}
                className="rounded-lg border px-4 py-3 text-sm font-medium text-foreground"
                style={{
                  background: "hsla(220, 15%, 10%, 0.6)",
                  borderColor: "hsla(0, 0%, 100%, 0.08)",
                }}
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
