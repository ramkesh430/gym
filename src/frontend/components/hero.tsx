import { useEffect, useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    video.muted = true;
    if (reduce) {
      video.loop = true;
      void video.play().catch(() => undefined);
      return;
    }

    video.pause();
    let frame = 0;
    let seekLock = false;
    let seekTimer = 0;

    const release = () => {
      seekLock = false;
      window.clearTimeout(seekTimer);
      video.removeEventListener("seeked", release);
    };

    const seekTo = (target: number) => {
      if (seekLock || Math.abs(video.currentTime - target) < 0.05) return;
      seekLock = true;
      video.addEventListener("seeked", release);
      seekTimer = window.setTimeout(release, 180);
      try {
        video.currentTime = target;
      } catch {
        release();
      }
    };

    const tick = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const progress = total <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / total));
      section.style.setProperty("--scrub", progress.toFixed(4));
      section.dataset.scrub = progress.toFixed(4);
      const duration = video.duration;
      if (Number.isFinite(duration) && duration > 0 && rect.bottom > 0 && rect.top < window.innerHeight) {
        const target = Math.min(duration - 0.08, Math.max(0, progress * (duration - 0.08)));
        seekTo(target);
      }
      section.dataset.videoTime = video.currentTime.toFixed(3);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      release();
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero" id="top" data-scrub="0" data-video-time="0">
      <div className="hero-sticky">
        <div className="plate">
          <video
            ref={videoRef}
            className="plate-media hero-video"
            src="/media/hero.mp4"
            poster="/media/hero.jpg"
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>
        <div className="hero-copy">
          <div className="hero-lockup">
            <p className="kicker">Lumbini · since 2017</p>
            <h1 className="forge-word">FORGE</h1>
            <p className="motto">
              Earn it<span className="dot">.</span>
            </p>
          </div>
        </div>
        <div className="scroll-line" aria-hidden="true" />
      </div>
    </section>
  );
}
