import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
}

const CursorStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let mouseX = -100;
    let mouseY = -100;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      for (let i = 0; i < 2; i++) {
        stars.push({
          x: mouseX + (Math.random() - 0.5) * 20,
          y: mouseY + (Math.random() - 0.5) * 20,
          size: Math.random() * 2 + 0.5,
          alpha: 1,
          life: 0,
          maxLife: 40 + Math.random() * 30,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
        });
      }
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars = stars.filter((s) => s.life < s.maxLife);

      for (const s of stars) {
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        s.alpha = 1 - s.life / s.maxLife;

        // draw a tiny 4-point star
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.globalAlpha = s.alpha * 0.8;
        ctx.fillStyle = `hsl(142, 71%, ${55 + Math.random() * 20}%)`;
        ctx.beginPath();
        const r = s.size;
        const inner = r * 0.35;
        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 2 - Math.PI / 4;
          ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
          const midAngle = angle + Math.PI / 4;
          ctx.lineTo(Math.cos(midAngle) * inner, Math.sin(midAngle) * inner);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
};

export default CursorStars;
