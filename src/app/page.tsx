import AboutMe from "@/components/AboutMe";
import Homepage from "@/components/Homepage";
import OutputSection from "@/components/Output";
import PortFolio from "@/components/PortFolio";

export default function Home() {
  return (
    <div className="bg-home">
      <Homepage />
      <PortFolio />
      <OutputSection />
      <AboutMe />
    </div>
  );
}
