import { Header } from "./components/Header";
import { ServicesFull} from "./components/ServicesFull";
import { Footer } from "./components/Footer";

export default function FullServices() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <ServicesFull />
      <Footer />
    </div>
  );
}