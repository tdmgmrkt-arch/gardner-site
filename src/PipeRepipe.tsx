import { Header } from "./components/Header";
import { PipingRepiping}  from "./components/PipingRepiping";
import { Footer } from "./components/Footer";

export default function PipeRepipe() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <PipingRepiping />
      <Footer />
    </div>
  );
}