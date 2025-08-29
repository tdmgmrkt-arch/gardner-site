import { Header } from "./components/Header";
import { AllFaq } from "./components/AllFaq";
import { Footer } from "./components/Footer";

export default function FaqAll() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <AllFaq />
      <Footer />
    </div>
  );
}