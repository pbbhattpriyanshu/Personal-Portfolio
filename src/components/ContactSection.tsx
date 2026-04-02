import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send, AtSign, FileText } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { icon: Github, name: "GitHub", handle: "@pbbhattpriyanshu", link: "https://github.com/pbbhattpriyanshu" },
  { icon: Linkedin, name: "LinkedIn", handle: "Priyanshu Bhatt", link: "https://www.linkedin.com/in/priyanshupb01008/" },
  { icon: Twitter, name: "X (Twitter)", handle: "@Priyanshu12bha", link: "https://twitter.com/Priyanshu12bha" },
  { icon: AtSign, name: "Threads", handle: "@Priyanshu12bha", link: "https://threads.net/@Priyanshu12bha" },
  { icon: FileText, name: "Hashnode", handle: "@bhattpriyanshu", link: "https://hashnode.com/@bhattpriyanshu" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="section-label mb-3">// get_in_touch</p>
          <h2 className="section-heading">Let's Connect</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Interested in collaborating on Backend and DevOps projects or discussing cloud
            architecture? Let's build something amazing together.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-bold text-foreground">Find me on</h3>
            <div className="space-y-4">
              {socials.map(({ icon: Icon, name, handle, link }) => (
                <a key={name} href={link} target="_blank" rel="noopener noreferrer" className="glass-card-hover flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{name}</p>
                    <p className="font-mono text-sm text-muted-foreground">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 md:p-8 h-full flex flex-col">
            <h3 className="mb-6 mt-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <Mail size={20} className="text-primary" /> Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm text-foreground">Name</label>
                  <input
                    className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                    style={{ borderColor: "hsla(0,0%,100%,0.08)" }}
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-foreground">Email</label>
                  <input
                    className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                    style={{ borderColor: "hsla(0,0%,100%,0.08)" }}
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-foreground">Subject</label>
                <input
                  className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                  style={{ borderColor: "hsla(0,0%,100%,0.08)" }}
                  placeholder="Project Collaboration"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1.5 block text-sm text-foreground">Message</label>
                <textarea
                  className="w-full flex-1 rounded-lg border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                  style={{ borderColor: "hsla(0,0%,100%,0.08)" }}
                  rows={6}
                  placeholder="Hello, I'd like to discuss..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
