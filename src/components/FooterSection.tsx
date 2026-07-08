import { motion } from "motion/react";
import { BRAND, LOCATIONS, SOCIALS } from "../data/fakeData";

export default function FooterSection() {
  return (
    <footer className="bg-charcoal px-6 pb-10 pt-20 text-cream md:px-10">
      {/* marquee divisório */}
      <div className="overflow-hidden border-y border-line-on-charcoal py-5">
        <div className="flex w-max gap-8 whitespace-nowrap will-change-transform" style={{ animation: "marquee 22s linear infinite" }}>
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex gap-8" aria-hidden={dup === 1}>
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="font-display text-h3 font-extrabold text-amber/80">
                  Brasa lenta · Massa viva · Forno a lenha ·
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1400px] gap-12 lg:grid-cols-12">
        {/* marca */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-h2 font-extrabold leading-none">
            Fogo<span className="text-amber">e</span>Farinha
          </h2>
          <p className="mt-5 max-w-sm text-lead text-muted-on-charcoal">{BRAND.manifesto}</p>
          <a href="#reservar" className="btn-clip mt-8 text-cream" onClick={(e) => {
            e.preventDefault();
            document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" });
          }}>
            <span>Reservar mesa</span>
            <span aria-hidden>→</span>
          </a>
        </motion.div>

        {/* unidades */}
        <div className="lg:col-span-5">
          <p className="font-mono text-label uppercase tracking-[0.18em] text-amber">Unidades</p>
          <ul className="mt-5 space-y-7">
            {LOCATIONS.map((l) => (
              <li key={l.name} className="border-b border-line-on-charcoal pb-6">
                <p className="text-h4 font-bold text-cream">{l.name}</p>
                <p className="mt-1 font-mono text-label uppercase tracking-[0.14em] text-muted-on-charcoal">
                  {l.neighborhood} · {l.hours}
                </p>
                <p className="mt-2 text-body text-muted-on-charcoal">{l.address}</p>
                <div className="mt-2 flex gap-4 font-mono text-body">
                  <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="text-amber hover:opacity-70">
                    {l.phone}
                  </a>
                  <a href={l.mapUrl} target="_blank" rel="noreferrer" className="text-amber hover:opacity-70">
                    Mapa →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* redes */}
        <div className="lg:col-span-2">
          <p className="font-mono text-label uppercase tracking-[0.18em] text-amber">Redes</p>
          <ul className="mt-5 space-y-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-h4 font-bold text-cream transition-colors hover:text-amber"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1400px] flex-col gap-3 border-t border-line-on-charcoal pt-8 font-mono text-label uppercase tracking-[0.14em] text-muted-on-charcoal md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Fogo e Farinha — todos os direitos reservados</span>
        <span>Forno a lenha · São Paulo · Recife · Tramandaí</span>
      </div>
    </footer>
  );
}
