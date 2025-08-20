import { Header } from "./components/Header";
import { Emergency } from "./components/Emergency";
import { Footer } from "./components/Footer";

export default function GardnerEmergency() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <Emergency />
      <Footer />
    </div>
  );
}