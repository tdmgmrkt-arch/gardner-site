import { Header } from "./components/Header";
import { Hydro } from "./components/hydro";
import { Footer } from "./components/Footer";

export default function HydroJet() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <Hydro />
      <Footer />
    </div>
  );
}