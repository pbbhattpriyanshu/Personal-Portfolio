import { BookOpen, ExternalLink } from "lucide-react";

const blogs = [
  {
    tag: "Docker",
    title: "Creating My First Dockerfile",
    desc: "A step-by-step beginner's guide to containerizing applications and writing your very first Dockerfile.",
    link: "https://masterdocker.hashnode.dev/creating-my-first-dockerfile",
  },
  {
    tag: "AWS / Cloud",
    title: "Understanding AWS EC2: Where Applications Actually Run",
    desc: "Day 3 of my cloud journey: diving deep into AWS Elastic Compute Cloud (EC2) and exploring virtual servers.",
    link: "https://mastercloud.hashnode.dev/day-3-of-my-cloud-journey-understanding-aws-ec2-where-applications-actually-run",
  },
  {
    tag: "JavaScript",
    title: "Core JavaScript Concepts: Very Frequently Asked",
    desc: "Day 2 of mastering JS: a detailed rundown of the most frequently asked JavaScript concepts for interviews.",
    link: "https://masterjsinterview.hashnode.dev/day-2-core-javascript-concepts-very-frequently-asked",
  },
];

const BlogsSection = () => (
  <section id="blogs" className="relative z-10 py-24">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <p className="section-label mb-3">// writing</p>
        <h2 className="section-heading">Featured Blogs</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Selected technical articles on backend development, CI/CD pipelines, and cloud deployment practices.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map((b) => (
          <a key={b.title} href={b.link} target="_blank" rel="noopener noreferrer" className="glass-card-hover flex flex-col p-6 block">
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
            <div className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary">
              <BookOpen size={14} /> read_article
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BlogsSection;
