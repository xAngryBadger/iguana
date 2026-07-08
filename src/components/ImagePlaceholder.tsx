import { motion } from "motion/react";
import type { CSSProperties } from "react";

interface ImagePlaceholderProps {
  tone?: "amber" | "graphite";
  label?: string;
  className?: string;
  /** proporção largura/altura, ex: "3 / 4" */
  ratio?: string;
  animate?: boolean;
  children?: React.ReactNode;
}

/**
 * Placeholder de imagem com gradiente de acento (âmbar ou grafite).
 * Nunca cinza chato — sempre com vida e profundidade.
 */
export default function ImagePlaceholder({
  tone = "amber",
  label,
  className = "",
  ratio,
  animate = true,
  children,
}: ImagePlaceholderProps) {
  const bg: CSSProperties =
    tone === "amber"
      ? {
          background:
            "radial-gradient(120% 120% at 20% 10%, rgba(220,184,95,0.55) 0%, rgba(201,162,63,0.18) 32%, rgba(26,22,20,0.96) 78%), linear-gradient(135deg, #2a2118, #1a1614)",
        }
      : {
          background:
            "radial-gradient(120% 120% at 80% 15%, rgba(76,96,82,0.55) 0%, rgba(58,74,63,0.25) 34%, rgba(26,22,20,0.96) 80%), linear-gradient(135deg, #1f2622, #161311)",
        };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ ...bg, aspectRatio: ratio }}
    >
      {/* brilho sutil que respira */}
      {animate && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -inset-1/4 rounded-full"
          style={{
            background:
              tone === "amber"
                ? "radial-gradient(circle, rgba(220,184,95,0.25), transparent 60%)"
                : "radial-gradient(circle, rgba(76,96,82,0.25), transparent 60%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* linha de brasa decorativa */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-5 right-5 top-5 h-px opacity-40"
        style={{ background: tone === "amber" ? "#dcb85f" : "#4c6052" }}
      />

      {label && (
        <span className="absolute bottom-5 left-5 font-mono text-label uppercase tracking-[0.18em] text-cream/55">
          {label}
        </span>
      )}

      {children}
    </div>
  );
}
