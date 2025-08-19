import { Header } from "./components/Header";
import { Drain } from "./components/Drain";
import { Footer } from "./components/Footer";

export default function DrainCleaning() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <Drain />
      <Footer />
    </div>
  );
}