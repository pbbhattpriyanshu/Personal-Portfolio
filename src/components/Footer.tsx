import { Github, Linkedin, FileText } from "lucide-react";

const Footer = () => (
  <footer className="relative z-10 border-t py-12" style={{ borderColor: "hsla(0,0%,100%,0.05)" }}>
    <div className="container mx-auto px-6">
      <div className="mx-auto mb-8 max-w-2xl">
        <div className="glass-card p-6 font-mono text-sm">
          <div className="mb-1 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
            <span className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
            <span className="ml-4 text-muted-foreground">terminal</span>
          </div>
          <div className="mt-4">
            <p className="text-muted-foreground">
              <span className="text-primary">priyanshu</span> : ~ ${" "}
              <span className="text-foreground">
                echo "I am a Backend & Cloud Engineer"
              </span>
            </p>
            <p className="mt-2">
              <span className="text-primary">→</span>{" "}
              <span className="text-primary/80 italic">
                Thanks for visiting! Let's build together
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 text-muted-foreground">
          <p className="font-mono text-sm text-primary">
            &gt;_ priyanshu:~$
          </p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/pbbhattpriyanshu" target="_blank" rel="noopener noreferrer">
            <Github size={18} className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/priyanshupb01008/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer" />
          </a>
          <a href="https://hashnode.com/@bhattpriyanshu" target="_blank" rel="noopener noreferrer">
            <FileText size={18} className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">Built by Priyanshu Bhatt</p>
      </div>
    </div>
  </footer>
);

export default Footer;
