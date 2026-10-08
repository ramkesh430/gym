import { coaches } from "@/frontend/content";

export function Coaches() {
  return (
    <section id="coaches">
      <header className="section-head">
        <p className="section-index">
          <span>03</span> The room
        </p>
        <h2>Coaches</h2>
        <p className="lede">They watch the last rep. They do not watch you in a mirror.</p>
      </header>
      <div className="wrap coach-grid">
        {coaches.map((coach) => (
          <article key={coach.name} className="coach-card">
            <div className="coach-photo plate-soft">
              <img src={coach.image} alt={coach.name} />
            </div>
            <div className="coach-meta">
              <h3>{coach.name}</h3>
              <p className="coach-role">
                {coach.role} · {coach.tenure}
              </p>
              <p>{coach.line}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
