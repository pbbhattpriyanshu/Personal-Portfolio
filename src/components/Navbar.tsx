import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["about", "skills", "experience", "projects", "blogs", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav-blur fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-white/10" : "border-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-lg font-semibold">
          <span className="text-primary">&gt;_</span>{" "}
          <span className="text-foreground">priyanshu.dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l}
            </a>
          ))}
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 px-6 pb-6 md:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
