import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Portfolio } from "../components/sections/Portfolio";
import { Pricing } from "../components/sections/Pricing";
import { Services } from "../components/sections/Services";
import { TechStack } from "../components/sections/TechStack";
import { Footer } from "../components/layout/Footer";
import { Nav } from "../components/layout/Nav";
import { FONT_FAMILY } from "../constants";

export function HomePage() {
  return (
    <div
      style={{
        fontFamily: FONT_FAMILY,
        background: "#ffffff",
        minHeight: "100vh",
        scrollBehavior: "smooth",
      }}
    >
      <Nav />
      <Hero />
      <Portfolio />
      <TechStack />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
