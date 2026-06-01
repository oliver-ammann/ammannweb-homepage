import { Benefits } from "../components/sections/Benefits";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Pricing } from "../components/sections/Pricing";
import { Process } from "../components/sections/Process";
import { Services } from "../components/sections/Services";
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
      <Pricing />
      <Process />
      <Benefits />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
