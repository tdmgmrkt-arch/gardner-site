import { Header } from "./components/Header";
import { ToiletRep }  from "./components/ToiletRep";
import { Footer } from "./components/Footer";

export default function Repairtoilet() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <ToiletRep />
      <Footer />
    </div>
  );
}