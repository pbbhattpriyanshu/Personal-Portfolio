import { Cloud, Server, Code2, Activity } from "lucide-react";

const cards = [
  { icon: Server, label: "BACKEND", title: "API & System Design" },
  { icon: Cloud, label: "CLOUD", title: "AWS (EC2, S3)" },
  { icon: Code2, label: "DEVOPS", title: "Docker & CI/CD" },
  { icon: Activity, label: "FOCUS", title: "Scalable Systems" },
];

const AboutSection = () => (
  <section id="about" className="relative z-10 py-24">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <p className="section-label mb-3">// about_me</p>
        <h2 className="section-heading">Who Am I?</h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="glass-card p-8 text-base leading-relaxed text-muted-foreground md:p-10">
          <p className="mb-4">
            I'm a passionate{" "}
            <span className="glow-text font-semibold">Backend & Cloud Engineer</span>{" "}
            dedicated to building scalable, reliable, and automated
            infrastructure solutions.
          </p>
          <p className="mb-4">
            I build backend systems with a focus on clarity, reliability, and real-world
            usability. From designing APIs to structuring application flows, I care about
            how systems behave beyond just writing code. I integrate{" "}
            <span className="glow-text">CI/CD pipelines</span> and{" "}
            <span className="glow-text">cloud deployments</span> to ensure every change
            moves smoothly from development to production.
          </p>

          <p>
            My stack revolves around <span className="glow-text">Node.js, Express.js, and FastAPI</span>, combined with Docker for
            containerization and AWS services like <span className="glow-text">EC2 and S3</span> for deployment. I approach
            development with a builder mindset — <span className="glow-text">breaking down problems</span>, experimenting
            quickly, and refining systems until they actually work in real conditions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.map(({ icon: Icon, label, title }) => (
            <div
              key={title}
              className="glass-card-hover flex flex-col items-center justify-center p-6 text-center"
            >
              <Icon size={28} className="mb-3 text-primary" />
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {label}
              </p>
              <p className="text-lg font-semibold text-foreground">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
