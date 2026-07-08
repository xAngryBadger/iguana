import { motion } from "motion/react";
import { EASE, clipReveal, fadeUp, staggerParent } from "../lib/motion";
import ImagePlaceholder from "./ImagePlaceholder";
import { BRAND } from "../data/fakeData";

export default function HeroSection() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal px-6 pb-16 pt-28 md:px-10"
    >
      {/* brasa ambiente no canto */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(201,162,63,0.22), transparent 65%)" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-12">
        {/* coluna de texto — composição assistemática (deslocada p/ baixo) */}
        <motion.div
          className="lg:col-span-7 lg:pb-16"
          variants={staggerParent}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-7">
            {BRAND.tagline}
          </motion.span>

          <motion.h1
            variants={clipReveal}
            className="text-h1 font-extrabold text-cream"
          >
            Brasa lenta,
            <br />
            <span className="text-amber">massa viva.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-lead text-muted-on-charcoal"
          >
            Hambúrguer maturado 21 dias e pizza de massa que respira 48 horas,
            assados no mesmo forno a lenha que dita o ritmo da casa.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a href="#cardapio" className="btn-clip text-cream" onClick={(e) => {
              e.preventDefault();
              document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" });
            }}>
              <span>Ver o cardápio</span>
              <span aria-hidden>→</span>
            </a>
            <a
              href="#reservar"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-4 font-mono text-label uppercase tracking-[0.18em] text-amber transition-opacity hover:opacity-70"
            >
              Reservar mesa
            </a>
          </motion.div>
        </motion.div>

        {/* coluna imagem — deslocada e levemente torcida (assimétrica) */}
        <motion.div
          className="relative lg:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE.expo, delay: 0.2 }}
        >
          <ImagePlaceholder
            tone="amber"
            label="Forno a lenha · 380°"
            ratio="3 / 4"
            className="w-full max-w-md rotate-[-3deg] shadow-2xl lg:ml-auto"
          />
          {/* cartão flutuante de destaque */}
          <motion.div
            className="absolute -bottom-6 left-0 hidden rounded-2xl border border-line-on-charcoal bg-charcoal-soft/90 p-5 backdrop-blur md:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-mono text-label uppercase tracking-[0.18em] text-amber">
              Assinatura
            </p>
            <p className="mt-1 text-h4 font-bold text-cream">Boi na Brasa</p>
            <p className="font-mono text-body text-muted-on-charcoal">R$ 38</p>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-label uppercase tracking-[0.2em] text-cream/40">
        role para comer
      </div>
    </section>
  );
}
