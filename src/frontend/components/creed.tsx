import { useEffect, useRef } from "react";
import { creed } from "@/frontend/content";

export function Creed() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lines = [...section.querySelectorAll<HTMLElement>("[data-line]")];
    const ticks = [...section.querySelectorAll<HTMLElement>("[data-tick]")];
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const progress = total <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / total));
      const pos = progress * (lines.length - 1);
      lines.forEach((line, index) => {
        const visibility = Math.max(0, Math.min(1, 1 - Math.abs(pos - index) * 1.15));
        line.style.opacity = visibility.toFixed(3);
        line.style.transform = `translate3d(0, ${(1 - visibility) * 28}px, 0)`;
      });
      const active = Math.round(pos);
      ticks.forEach((tick, index) => tick.classList.toggle("is-on", index === active));
      section.dataset.creed = String(active);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="creed" id="creed" data-creed="0">
      <div className="creed-sticky">
        <h2 className="section-index">
          <span>01</span> House rules
        </h2>
        <div className="creed-list">
          {creed.map((line) => (
            <p key={line} className="creed-line" data-line>
              {line}
            </p>
          ))}
        </div>
        <div className="creed-ticks" aria-hidden="true">
          {creed.map((line, index) => (
            <span key={line} data-tick className={index === 0 ? "is-on" : undefined} />
          ))}
        </div>
        <p className="creed-foot">Lumbini. By hand.</p>
      </div>
    </section>
  );
}
