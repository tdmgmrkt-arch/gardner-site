import { Header } from "./components/Header";
import { FullReviews } from "./components/FullReviews";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <FullReviews />
      <Footer />
    </div>
  );
}