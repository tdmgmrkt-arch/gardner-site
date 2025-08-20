import { Header } from "./components/Header";
import { Plumbingcommercial } from "./components/Plumbingcommercial";
import { Footer } from "./components/Footer";

export default function DrainClean() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <Plumbingcommercial />
      <Footer />
    </div>
  );
}