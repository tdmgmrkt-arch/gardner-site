import { Header } from "./components/Header";
import { PrivPol}  from "./components/PrivPol";
import { Footer } from "./components/Footer";

export default function Policyprivacy() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <PrivPol />
      <Footer />
    </div>
  );
}