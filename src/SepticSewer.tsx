import { Header } from "./components/Header";
import { SewerSeptic } from "./components/SewerSeptic";
import { Footer } from "./components/Footer";

export default function SepticSewer() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <SewerSeptic />
      <Footer />
    </div>
  );
}