import { Header } from "./components/Header";
import { WaterFiltration } from "./components/WaterFiltration";
import { Footer } from "./components/Footer";

export default function FiltrationWater() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <WaterFiltration />
      <Footer />
    </div>
  );
}