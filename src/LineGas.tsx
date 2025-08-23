import { Header } from "./components/Header";
import { GasLine } from "./components/GasLine";
import { Footer } from "./components/Footer";

export default function LineGas() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <GasLine />
      <Footer />
    </div>
  );
}