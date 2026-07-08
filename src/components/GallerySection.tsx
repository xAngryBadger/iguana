import { useState } from "react";
import { motion } from "motion/react";
import { fadeUp, staggerParent } from "../lib/motion";
import ImagePlaceholder from "./ImagePlaceholder";
import { AWARDS, GALLERY } from "../data/fakeData";

type View = "foto" | "premio";

export default function GallerySection() {
  const [view, setView] = useState<View>("foto");
  const items = GALLERY.filter((g) => g.kind === view);

  return (
    <section id="galeria" className="bg-bone px-6 py-24 text-charcoal md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div>
            <motion.span variants={fadeUp} className="eyebrow mb-5" style={{ color: "var(--graphite)" }}>
              Da casa
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h2 font-extrabold text-charcoal">
              Em <span className="text-amber">cena</span> e em prêmios.
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="inline-flex rounded-full border border-line-on-cream p-1">
            {(["foto", "premio"] as View[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`rounded-full px-5 py-2.5 font-mono text-label uppercase tracking-[0.16em] transition-colors duration-300 ${
                  view === v ? "bg-charcoal text-cream" : "text-muted-on-cream hover:text-charcoal"
                }`}
              >
                {v === "foto" ? "Fotos" : "Prêmios"}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* grid */}
        <motion.div
          key={view}
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6"
          variants={staggerParent}
          initial="hidden"
          animate="visible"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className={item.id === "g1" || item.id === "g4" ? "col-span-2 md:col-span-2" : ""}
            >
              <ImagePlaceholder
                tone={item.tone}
                label={item.kind === "premio" ? "Prêmio" : "Foto"}
                ratio={item.id === "g1" || item.id === "g4" ? "16 / 9" : "4 / 5"}
                className="w-full"
              />
              <div className="pt-4">
                <h3 className="text-h4 font-bold text-charcoal">{item.title}</h3>
                <p className="mt-1 text-body text-muted-on-cream">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* lista de prêmios complementar */}
        {view === "premio" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-14 grid gap-4 border-t border-line-on-cream pt-10 md:grid-cols-3"
          >
            {AWARDS.map((a) => (
              <div key={a.title} className="rounded-2xl border border-line-on-cream p-6">
                <p className="font-mono text-label uppercase tracking-[0.16em] text-graphite">{a.org}</p>
                <p className="mt-2 text-h4 font-bold text-charcoal">{a.title}</p>
                <p className="mt-1 font-mono text-body text-muted-on-cream">{a.year}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
