import { Header } from "./components/Header";
import { MaintenanceAgreement } from "./components/MaintenanceAgreement";
import { Footer } from "./components/Footer";

export default function PlanMaintenance() {
  return (
    <div className="min-h-screen m-0 p-0" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <MaintenanceAgreement />
      <Footer />
    </div>
  );
}