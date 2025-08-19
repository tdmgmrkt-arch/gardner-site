import { Header } from "./components/Header";
import { WHservice } from "./components/WHservice";
import { Footer } from "./components/Footer";

export default function WatHeat() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <WHservice />
      <Footer />
    </div>
  );
}