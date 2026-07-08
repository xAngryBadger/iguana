import { motion } from "motion/react";
import { useMagnetic } from "../lib/hooks";

export default function FloatingNav() {
  const magnet = useMagnetic<HTMLAnchorElement>(0.4);

  const goReserve = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        {/* Logo fixo — mix-blend para inverter sobre qualquer fundo */}
        <a
          href="#topo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="pointer-events-auto select-none font-display text-h4 font-extrabold tracking-tight text-cream mix-blend-difference"
          style={{ lineHeight: 1 }}
        >
          Fogo<span className="text-amber">e</span>Farinha
        </a>

        {/* Pílula Reservar com magnetic-hover */}
        <motion.a
          ref={magnet.ref}
          {...magnet.handlers}
          href="#reservar"
          onClick={goReserve}
          animate={{ x: magnet.pos.x, y: magnet.pos.y }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          className="group pointer-events-auto inline-flex items-center gap-2 rounded-full border border-amber bg-amber/0 px-6 py-3 font-mono text-label uppercase tracking-[0.18em] text-cream mix-blend-difference transition-colors duration-300 hover:bg-amber hover:text-charcoal hover:border-amber"
        >
          Reservar
          <span aria-hidden className="text-amber transition-colors group-hover:text-charcoal">
            →
          </span>
        </motion.a>
      </nav>
    </header>
  );
}
