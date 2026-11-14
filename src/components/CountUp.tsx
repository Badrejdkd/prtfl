"use client";

import { useEffect, useRef, useState } from "react";

/** Animates the numeric part of a value ("3", "Fév. 2027" → counts the first number). */
export default function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/\d+/);
  const target = match ? parseInt(match[0], 10) : 0;
  const start = target > 1000 ? target - 30 : 0;
  const [n, setN] = useState(match ? start : 0);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(start + (target - start) * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!match) return <span>{value}</span>;
  const [before, after] = [value.slice(0, match.index), value.slice((match.index ?? 0) + match[0].length)];
  return (
    <span ref={ref} aria-label={value}>
      {before}
      {n}
      {after}
    </span>
  );
}
