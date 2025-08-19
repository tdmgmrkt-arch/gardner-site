import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBadges } from "./components/TrustBadges";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
}