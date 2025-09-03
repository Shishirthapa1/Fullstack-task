import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import HomePage from "./home/Home";

export default function Home() {
  return (
    <div className="bg-home">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}
