import { Header } from "./components/Header";
import { Toilet }  from "./components/Toilet";
import { Footer } from "./components/Footer";

export default function Toilets() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <Toilet />
      <Footer />
    </div>
  );
}