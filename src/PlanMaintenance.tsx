import { Header } from "./components/Header";
import { Leak } from "./components/Leak";
import { Footer } from "./components/Footer";

export default function PlanMaintenance() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <Leak />
      <Footer />
    </div>
  );
}