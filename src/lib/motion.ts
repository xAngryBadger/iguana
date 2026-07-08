import type { Variants } from "motion/react";

export const EASE = {
  springSoft: [0.25, 0.46, 0.45, 0.94] as const,
  springPop: [0.34, 1.56, 0.64, 1] as const,
  expo: [0.16, 1, 0.3, 1] as const,
};

/** Revela conteúdo subindo com fade — usado em seções. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE.springSoft },
  },
};

export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Clip-reveal vertical para títulos grandes. */
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 16 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    transition: { duration: 0.9, ease: EASE.expo },
  },
};

/** Item de lista que entra com clip-reveal. */
export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE.springSoft },
  },
};
