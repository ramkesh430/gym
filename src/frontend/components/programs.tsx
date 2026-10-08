import { useEffect, useRef, useState } from "react";
import { programs, type Program } from "@/frontend/content";

export function Programs() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const onScroll = () => {
      const cards = [...scroller.querySelectorAll<HTMLElement>(".program-card")];
      const mid = scroller.scrollLeft + scroller.clientWidth / 2;
      let best = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      cards.forEach((card, index) => {
        const center = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - mid);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });
      setActive(best);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  const focusCard = (index: number) => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelectorAll<HTMLElement>(".program-card")[index];
    if (!scroller || !card) return;
    scroller.scrollTo({
      left: card.offsetLeft - (scroller.clientWidth - card.clientWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <section id="programs">
      <header className="section-head">
        <p className="section-index">
          <span>02</span> The work
        </p>
        <h2>Programs</h2>
        <p className="lede">Three ways to train. One standard. Nothing in this room moves the weight for you.</p>
      </header>
      <p className="swipe-hint">Swipe the floor</p>
      <div className="program-grid" ref={scrollerRef}>
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
      <div className="program-dots">
        {programs.map((program, index) => (
          <button
            key={program.id}
            type="button"
            className={index === active ? "dot-btn is-on" : "dot-btn"}
            aria-label={`Show ${program.name}`}
            onClick={() => focusCard(index)}
          >
            <span />
          </button>
        ))}
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: Program }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mobile = window.matchMedia("(max-width: 800px)");
    if (!mobile.matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.65 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) {
      void video.play().catch(() => undefined);
    }
  };

  return (
    <article className="program-card" onMouseEnter={play} onMouseLeave={() => videoRef.current?.pause()}>
      <div className="plate">
        {program.video ? (
          <video
            ref={videoRef}
            className="plate-media"
            src={program.video}
            poster={program.poster}
            muted
            playsInline
            loop
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <img className="plate-media" src={program.image} alt="" />
        )}
      </div>
      <div className="program-copy">
        <div className="card-rule" aria-hidden="true" />
        <p className="kicker">
          {program.index} · {program.kicker}
        </p>
        <h3>{program.name}</h3>
        <p>{program.line}</p>
        <p className="program-meta">{program.meta}</p>
      </div>
    </article>
  );
}
