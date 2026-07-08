import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { fadeUp, staggerParent } from "../lib/motion";
import ImagePlaceholder from "./ImagePlaceholder";
import { MENU, MENU_TABS } from "../data/fakeData";
import type { MenuCategory } from "../lib/types";

export default function MenuCarousel() {
  const [tab, setTab] = useState<MenuCategory>("burgers");
  const items = MENU[tab];

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [constraint, setConstraint] = useState(0);

  const measure = () => {
    const vp = viewportRef.current;
    const tk = trackRef.current;
    if (!vp || !tk) return;
    const overflow = tk.scrollWidth - vp.offsetWidth;
    setConstraint(overflow > 0 ? -overflow : 0);
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [tab]);

  const nudge = (dir: number) => {
    const tk = trackRef.current;
    if (!tk) return;
    tk.parentElement?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="cardapio" className="bg-cream px-6 py-24 text-charcoal md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* cabeçalho + tabs */}
        <motion.div
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div>
            <motion.span variants={fadeUp} className="eyebrow mb-5" style={{ color: "var(--graphite)" }}>
              O cardápio
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h2 font-extrabold text-charcoal">
              Da chapa <span className="text-amber">e do forno.</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2" role="tablist" aria-label="Categorias do cardápio">
            {MENU_TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full border px-5 py-2.5 font-mono text-label uppercase tracking-[0.16em] transition-colors duration-300 ${
                  tab === t.id
                    ? "border-charcoal bg-charcoal text-cream"
                    : "border-line-on-cream text-muted-on-cream hover:border-charcoal"
                }`}
              >
                {t.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* trilho arrastável */}
        <div className="relative mt-14">
          <div ref={viewportRef} className="overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex cursor-grab gap-6 active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: constraint, right: 0 }}
              dragElastic={0.12}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              key={tab}
            >
              {items.map((item) => (
                <article
                  key={item.id}
                  className="w-[300px] shrink-0 snap-start md:w-[340px]"
                >
                  <div className="relative">
                    <ImagePlaceholder
                      tone={item.highlight ? "amber" : "graphite"}
                      ratio="4 / 5"
                      label={item.category}
                      className="w-full"
                    />
                    {item.highlight && (
                      <span className="absolute right-4 top-4 rounded-full bg-amber px-3 py-1 font-mono text-label uppercase tracking-[0.14em] text-charcoal">
                        Em destaque
                      </span>
                    )}
                  </div>
                  <div className="pt-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-h4 font-bold text-charcoal">{item.name}</h3>
                      <span className="price shrink-0">{item.price}</span>
                    </div>
                    <p className="mt-3 text-body text-muted-on-cream">{item.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-line-on-cream px-3 py-1 font-mono text-label uppercase tracking-[0.12em] text-graphite"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          {/* setas */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => nudge(-1)}
              aria-label="Anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line-on-cream text-charcoal transition-colors hover:border-charcoal"
            >
              ←
            </button>
            <button
              onClick={() => nudge(1)}
              aria-label="Próximo"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line-on-cream text-charcoal transition-colors hover:border-charcoal"
            >
              →
            </button>
            <span className="ml-3 self-center font-mono text-label uppercase tracking-[0.16em] text-muted-on-cream">
              arraste p/ navegar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
