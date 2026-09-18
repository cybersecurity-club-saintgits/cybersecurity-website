import Hero from "../features/Hero";
import AboutTerminal from "../features/AboutTerminal";
import TechMarquee from "../features/TechMarquee";
import FocusAreas from "../features/FocusAreas";
import Services from "../features/Services";
import WhyJoinUs from "../features/WhyJoinUs";
import Achievements from "../features/Achievements";
import Events from "../features/Events";
import NewMembers from "../features/NewMembers";
import Team from "../features/Team";
import JoinCTA from "../features/JoinCTA";
import SectionDivider from "../components/SectionDivider";

export default function Home() {

  return (
    <div className="flex flex-col pb-20">
      <div id="home">
        <Hero />
      </div>

      <AboutTerminal />
      <TechMarquee />

      <SectionDivider variant="glow" />

      <FocusAreas />

      <SectionDivider variant="code" />

      <Services />

      <SectionDivider variant="dots" />

      <WhyJoinUs />

      <SectionDivider variant="glow" />

      <Achievements />

      <SectionDivider variant="code" />

      <Events />

      <SectionDivider variant="glow" />

      <NewMembers />

      <SectionDivider variant="dots" />

      <Team />
      <JoinCTA />
    </div>
  );
}