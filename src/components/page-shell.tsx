import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { SiteNav } from "./site-nav";

function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 200, damping: 30 });
  const sy = useSpring(y, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[100] h-[400px] w-[400px] rounded-full"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        background: "radial-gradient(circle, oklch(0.68 0.22 255 / 0.12), transparent 60%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.22 255 / 0.4), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full blur-3xl animate-aurora"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.24 300 / 0.35), transparent 70%)",
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full blur-3xl animate-aurora"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.15 200 / 0.3), transparent 70%)",
          animationDelay: "6s",
        }}
      />
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative">
      <AuroraBackground />
      <CursorGlow />
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--purple)] to-[color:var(--cyan)]"
      />
      <SiteNav />
      {children}
    </div>
  );
}
