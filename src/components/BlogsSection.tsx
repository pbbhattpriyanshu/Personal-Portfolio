import { BookOpen, ExternalLink } from "lucide-react";

const blogs = [
  {
    tag: "CI/CD",
    title: "From Red Builds to Green: My First Jenkins CI/CD Journey",
    desc: "A hands-on breakdown of building a CI/CD pipeline with Jenkins, Docker, and deployment automation.",
  },
  {
    tag: "Kubernetes",
    title: "Top 5 Mistakes Beginners Make While Learning Kubernetes (And How I Solved Them)",
    desc: "Practical Kubernetes learning mistakes and clean ways to avoid them while building production-ready habits.",
  },
  {
    tag: "API Security",
    title: "How Authentication APIs Work (JWT-Based): Real-World Guide",
    desc: "A practical JWT authentication API guide focused on request flow, token handling, and production patterns.",
  },
];

const BlogsSection = () => (
  <section id="blogs" className="relative z-10 py-24">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <p className="section-label mb-3">// writing</p>
        <h2 className="section-heading">Featured Blogs</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Selected technical articles on CI/CD, Kubernetes, and DevOps reliability.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map((b) => (
          <div key={b.title} className="glass-card-hover flex flex-col p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                {b.tag}
              </span>
              <ExternalLink size={16} className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer" />
            </div>
            <h3 className="mb-3 text-lg font-bold leading-snug text-foreground">
              {b.title}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {b.desc}
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary">
              <BookOpen size={14} /> read_article
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogsSection;
