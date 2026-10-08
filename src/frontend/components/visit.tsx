import { useEffect, useState, type FormEvent } from "react";
import { boardCount, recordStart } from "@/backend/starts";
import { schedule, tiers } from "@/frontend/content";

const MAP =
  "https://www.openstreetmap.org/export/embed.html?bbox=83.265%2C27.472%2C83.298%2C27.496&layer=mapnik&marker=27.4842%2C83.2815";

function bookLine(total: number) {
  return total === 1 ? "1 start on the book." : `${total} starts on the book.`;
}

const programs: Record<string, string> = {
  strength: "Strength",
  conditioning: "Conditioning",
  team: "Team",
  unsure: "Not sure yet",
};

export function Visit() {
  const [today, setToday] = useState<string | null>(null);
  const [clock, setClock] = useState("Lumbini time");
  const [membership, setMembership] = useState("forge");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("strength");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState("");
  const [logged, setLogged] = useState<number | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const weekday = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kathmandu",
      weekday: "short",
    }).format(new Date());
    setToday(weekday);
    const hour = Number(
      new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        hourCycle: "h23",
      }).format(new Date()),
    );
    const session =
      hour >= 5 && hour < 9
        ? "Dawn session"
        : hour >= 9 && hour < 16
          ? "Open floor"
          : hour >= 16 && hour < 21
            ? "Evening session"
            : "Closed until 05:00";
    setClock(`Lumbini · ${weekday} · ${session}`);
  }, []);

  useEffect(() => {
    let cancelled = false;
    void boardCount()
      .then((row) => {
        if (!cancelled) setLogged(row.total);
      })
      .catch(() => {
        if (!cancelled) setLogged(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onJoin = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (detail) setMembership(detail);
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      document.getElementById("signup")?.scrollIntoView({ behavior, block: "center" });
      window.setTimeout(() => document.getElementById("signup-name")?.focus(), 350);
    };
    window.addEventListener("forge:join", onJoin);
    return () => window.removeEventListener("forge:join", onJoin);
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Give the name you want on the board.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "That email will not reach a coach.";
    setErrors(next);
    if (Object.keys(next).length > 0 || sending) return;
    setSending(true);
    void recordStart({ data: { program: program as "strength" | "conditioning" | "team" | "unsure", membership: membership as "open" | "forge" | "crew" } })
      .then((row) => {
        setLogged(row.total);
        setDone(name.trim().split(" ")[0] ?? name.trim());
      })
      .catch(() => {
        setErrors({ form: "The book did not take it. Try again." });
      })
      .finally(() => setSending(false));
  };

  const tierName = tiers.find((tier) => tier.id === membership)?.name ?? "Forge";

  return (
    <section id="visit">
      <header className="section-head">
        <p className="section-index">
          <span>05</span> Find the door
        </p>
        <h2>Visit</h2>
        <p className="lede">The floor is in Lumbini. The track is outside. Eight minutes from the Maya Devi gate — not on temple grounds.</p>
      </header>
      <figure className="yard">
        <img src="/media/yard.jpg" alt="The shed on Industrial Lane at dusk" />
        <figcaption>14 Industrial Lane</figcaption>
      </figure>
      <div className="wrap">
        <div className="table-wrap">
          <table className="board">
            <caption>Weekly board</caption>
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Dawn</th>
                <th scope="col">Midday</th>
                <th scope="col">Evening</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.day} className={today === row.day ? "is-today" : undefined}>
                  <th scope="row">{row.day}</th>
                  <td>{row.dawn}</td>
                  <td>{row.noon}</td>
                  <td>{row.eve}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="clock">{clock}</p>
        <div className="visit-grid">
          <div>
            <div className="map-frame">
              <iframe title="Map of FORGE on Industrial Lane, Lumbini" src={MAP} loading="lazy" />
            </div>
            <div className="address">
              <p>FORGE</p>
              <p>14 Industrial Lane</p>
              <p>Lumbini Sanskritik Municipality</p>
              <p>Rupandehi, Nepal</p>
              <p className="quiet">Open 05:00–21:00. Sunday until noon.</p>
              <a
                className="link-quiet"
                href="https://www.openstreetmap.org/?mlat=27.4842&mlon=83.2815#map=16/27.4842/83.2815"
                target="_blank"
                rel="noreferrer"
              >
                Open the map
              </a>
            </div>
          </div>
          <div id="signup">
            {done ? (
              <div className="done">
                <h3>{done}, the book has you.</h3>
                <p>
                  {programs[program]} · {tierName}. {bookLine(logged ?? 0)}
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit} noValidate>
                <h3>Claim a start</h3>
                <p className="house-note">{logged === null ? "The book is opening." : bookLine(logged)}</p>
                <label htmlFor="signup-name">Name</label>
                <input id="signup-name" name="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
                {errors.name ? <p className="field-error">{errors.name}</p> : null}
                <label htmlFor="signup-email">Email</label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email ? <p className="field-error">{errors.email}</p> : null}
                <label htmlFor="signup-program">Program</label>
                <select id="signup-program" name="program" value={program} onChange={(event) => setProgram(event.target.value)}>
                  <option value="strength">Strength</option>
                  <option value="conditioning">Conditioning</option>
                  <option value="team">Team</option>
                  <option value="unsure">Not sure yet</option>
                </select>
                <label htmlFor="signup-tier">Membership</label>
                <select id="signup-tier" name="membership" value={membership} onChange={(event) => setMembership(event.target.value)}>
                  {tiers.map((tier) => (
                    <option key={tier.id} value={tier.id}>
                      {tier.name}
                    </option>
                  ))}
                </select>
                {membership === "forge" ? <p className="house-note">First week free.</p> : null}
                <label htmlFor="signup-note">Note</label>
                <textarea id="signup-note" name="note" value={note} onChange={(event) => setNote(event.target.value)} />
                {errors.form ? <p className="field-error">{errors.form}</p> : null}
                <button type="submit" className="btn btn-accent" disabled={sending}>
                  {sending ? "Writing the book" : membership === "forge" ? "First week free" : `Request ${tierName}`}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
