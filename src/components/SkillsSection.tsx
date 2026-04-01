const categories = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "Java", "Go"],
  },
 {
  title: "Backend & APIs",
  items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
},
{
  title: "Database",
  items: ["MongoDB", "Mongoose"],
},
{
  title: "DevOps & Deployment",
  items: ["Docker", "CI/CD", "GitHub Actions"],
},
{
  title: "Cloud & Platforms",
  items: ["AWS (EC2, S3)", "Linux", "Git & GitHub"],
},
{
  title: "Core Strengths",
  items: ["System Design Thinking", "API Architecture", "Problem Solving"],
},
];

const SkillsSection = () => (
  <section id="skills" className="relative z-10 py-24">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <p className="section-label mb-3">// tech_stack</p>
        <h2 className="section-heading">Skills & Tools</h2>
      </div>

      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat.title}>
            <p className="mb-4 font-mono text-sm text-primary">
              &lt;{cat.title}/&gt;
            </p>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item) => (
                <div
                  key={item}
                  className="glass-card-hover flex items-center gap-2 px-5 py-3 text-sm font-medium text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
