import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import NavBar from "@/components/Navbar";
import OutputSection from "@/components/Output";
import PortFolio from "@/components/PortFolio";

export default function Home() {
  return (
    <div className="bg-home">
      <NavBar />
      <Homepage />
      <PortFolio />
      <OutputSection />
      <AboutMe />
      <Footer />
    </div>
  );
}
