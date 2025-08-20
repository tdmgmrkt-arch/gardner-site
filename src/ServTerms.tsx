import { Header } from "./components/Header";
import { TermsServ }  from "./components/TermsServ";
import { Footer } from "./components/Footer";

export default function Policyprivacy() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <TermsServ />
      <Footer />
    </div>
  );
}