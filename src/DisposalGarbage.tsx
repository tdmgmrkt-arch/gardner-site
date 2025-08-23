import { Header } from "./components/Header";
import { GarbageDisposal } from "./components/GarbageDisposal";
import { Footer } from "./components/Footer";

export default function DisposalGarbage() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <GarbageDisposal />
      <Footer />
    </div>
  );
}