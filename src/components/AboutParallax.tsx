import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { fadeUp, staggerParent } from "../lib/motion";
import ImagePlaceholder from "./ImagePlaceholder";
import { ABOUT } from "../data/fakeData";

export default function AboutParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["6%", "-10%"]);

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative overflow-hidden bg-charcoal px-6 py-24 text-cream md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-20">
        {/* imagem pinned (sticky) com parallax */}
        <div className="lg:sticky lg:top-24 lg:h-[78vh] lg:self-start">
          <div className="relative h-[60vh] overflow-hidden lg:h-full">
            <motion.div style={{ y: imgY }} className="absolute inset-[-12%]">
              <ImagePlaceholder
                tone="graphite"
                label="Forno a lenha"
                ratio="auto"
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </div>

        {/* texto com parallax */}
        <motion.div
          style={{ y: textY }}
          className="flex flex-col justify-center"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp} className="eyebrow mb-6">
            {ABOUT.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-h2 font-extrabold text-cream">
            {ABOUT.title.split("fogo").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-amber">fogo</span>}
              </span>
            ))}
          </motion.h2>

          {ABOUT.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className={`mt-6 max-w-xl text-lead ${i === 0 ? "text-cream" : "text-muted-on-charcoal"}`}
            >
              {p}
            </motion.p>
          ))}

          {/* stats */}
          <motion.div variants={fadeUp} className="mt-12 grid grid-cols-3 gap-4 border-t border-line-on-charcoal pt-8">
            {ABOUT.stats.map((s) => (
              <div key={s.label}>
                <p className="text-h3 font-extrabold text-amber">{s.value}</p>
                <p className="mt-1 font-mono text-label uppercase tracking-[0.14em] text-muted-on-charcoal">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
