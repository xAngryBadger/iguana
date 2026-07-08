import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Hover magnético: o elemento é puxado suavemente em direção ao cursor.
 * Inspirado no padrão "magnetic hover / draggable" (LaSala, fullscreen-menu).
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: PointerEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };

  const onLeave = () => setPos({ x: 0, y: 0 });

  return {
    ref,
    pos,
    handlers: {
      onPointerMove: onMove,
      onPointerLeave: onLeave,
    },
  };
}

/** Respeita prefers-reduced-motion sem acoplar ao framer. */
export function useReducedMotionSafe(): boolean {
  return useReducedMotion() ?? false;
}

/** Estado de hover genérico. */
export function useHover(): {
  hovered: boolean;
  bind: { onPointerEnter: () => void; onPointerLeave: () => void };
  node: ReactNode;
} {
  const [hovered, setHovered] = useState(false);
  return {
    hovered,
    bind: {
      onPointerEnter: () => setHovered(true),
      onPointerLeave: () => setHovered(false),
    },
    node: null,
  };
}
