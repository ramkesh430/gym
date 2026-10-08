import { Coaches } from "@/frontend/components/coaches";
import { Creed } from "@/frontend/components/creed";
import { Footer } from "@/frontend/components/footer";
import { Hero } from "@/frontend/components/hero";
import { Nav } from "@/frontend/components/nav";
import { Pricing } from "@/frontend/components/pricing";
import { Programs } from "@/frontend/components/programs";
import { Results } from "@/frontend/components/results";
import { Visit } from "@/frontend/components/visit";

export function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to the floor
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Creed />
        <Programs />
        <Coaches />
        <Results />
        <Pricing />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
