import { tiers } from "@/frontend/content";

export function Pricing() {
  return (
    <section id="pricing">
      <header className="section-head">
        <p className="section-index">
          <span>04</span> The board
        </p>
        <h2>Membership</h2>
        <p className="lede">Pay for the work. Not the wallpaper. The middle tier is how the house trains.</p>
      </header>
      <div className="wrap pricing-grid">
        {tiers.map((tier) => (
          <article key={tier.id} className={tier.featured ? "tier tier-featured" : "tier"} data-featured={tier.featured ? "true" : "false"}>
            <p className="tier-flag">{tier.featured ? "The standard" : "\u00a0"}</p>
            <h3>{tier.name}</h3>
            <p className="price">
              <span>NPR</span>
              {tier.price}
            </p>
            <p className="cadence">per month</p>
            <p className="tier-blurb">{tier.blurb}</p>
            <ul>
              {tier.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <button
              type="button"
              className={tier.featured ? "btn btn-accent" : "btn btn-line"}
              onClick={() => {
                window.dispatchEvent(new CustomEvent("forge:join", { detail: tier.id }));
              }}
            >
              {tier.cta}
            </button>
          </article>
        ))}
      </div>
      <p className="wrap fine">NPR per month. No contract. Stop when the work stops.</p>
    </section>
  );
}
