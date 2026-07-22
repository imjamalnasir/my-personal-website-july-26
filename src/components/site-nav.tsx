import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { useState } from "react";
import myPic from "@/assets/mypic.jpg";

const links = [
  ["About", "/#about"],
  ["Expertise", "/#expertise"],
  ["Work", "/work"],
  ["Services", "/#services"],
  ["Contact", "/#contact"],
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto max-w-6xl px-4"
    >
      <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <img src={myPic} alt="Jamal Nasir" className="h-8 w-8 rounded-lg object-cover" />
          <span>Jamal Nasir</span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              {href.startsWith("/#") ? (
                <a
                  href={href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <a
          href="/#contact"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)] px-4 py-2 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105 md:inline-flex"
        >
          Hire Me <ArrowRight className="h-4 w-4" />
        </a>
        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden" aria-label="Menu">
          <Layers className="h-5 w-5" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong mt-2 rounded-2xl p-4 md:hidden"
          >
            {links.map(([label, href]) =>
              href.startsWith("/#") ? (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                >
                  {label}
                </Link>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
