import { useEffect, useRef, useState } from "react";
import { stats } from "@/frontend/content";

export function Results() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" ref={ref} className="results" aria-label="The count">
      {stats.map((stat) => (
        <Stat key={stat.label} value={stat.value} label={stat.label} active={active} />
      ))}
    </section>
  );
}

function Stat({ value, label, active }: { value: number; label: string; active: boolean }) {
  const shown = useCount(value, active);
  return (
    <article className="stat">
      <p className="stat-num">{shown.toLocaleString("en-US")}</p>
      <p className="stat-label">{label}</p>
    </article>
  );
}

function useCount(target: number, active: boolean) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let cancelled = false;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - start) / 1100);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    setValue(0);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [active, target]);

  return value;
}
