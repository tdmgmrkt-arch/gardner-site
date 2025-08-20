import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { 
  Shield, Clock, CheckCircle, ArrowRight, Phone, DollarSign,
  Wrench, AlertTriangle, Star, Calendar, Award, Mail, Zap
} from "lucide-react";

export function MaintenanceAgreement() {
  const maintenanceFeatures = [
    { icon: Wrench, title: "Up to 56 PT\nTune-Up", description: "Comprehensive system inspection and maintenance to keep your plumbing running smoothly.", features: ["Full System Check", "Performance Testing", "Safety Inspection", "Written Report"] },
    { icon: Clock, title: "24 Hour\nResponse Time", description: "Priority emergency service with guaranteed rapid response when you need it most.", features: ["Priority Service", "Emergency Response", "Weekend Coverage", "Holiday Service"] },
    { icon: DollarSign, title: "Up to 25%\nDiscount on Repairs", description: "Significant savings on all repair services and parts with your maintenance agreement.", features: ["Repair Discounts", "Parts Savings", "Labor Discounts", "Equipment Savings"] },
    { icon: Shield, title: "Extended\nWarranty", description: "Enhanced warranty coverage on all repairs and maintenance work performed.", features: ["Extended Coverage", "Parts Warranty", "Labor Warranty", "Peace of Mind"] }
  ];

  const benefits = [
    { icon: DollarSign, title: "Cost Savings", description: "Save money through early problem detection and exclusive member discounts on repairs and services." },
    { icon: Clock, title: "Extended Equipment Life", description: "Regular maintenance extends the lifespan of your plumbing fixtures and prevents premature failure." },
    { icon: Star, title: "Improved Water Quality", description: "Clean and inspect water lines to ensure optimal water quality for your family's health and safety." },
    { icon: Shield, title: "Priority Service", description: "Jump to the front of the line with priority emergency service and guaranteed response times." }
  ];

  const includedServices = [
    "Up to 56 PT Tune-Up",
    "Extend equipment life",
    "24 hour response time",
    "Priority Service",
    "Fully Transferable",
    "Annual Water heater flush",
    "Never a premium charge",
    "Up to 25% Discount on Repairs",
    "Maximize energy efficiency",
    "Multi Year/Unit Discount",
    "Annual Plumbing safety inspection",
    "Comfort Guarantee (Hotel Stay)",
    "Up to 10% Discount on new equipment purchases",
    "Maintenance/Safety Inspections per year",
    "Periodic specials and promotions",
    "Extended warranty on repairs",
    "One free drain clearing per year",
    "Written Maintenance Report"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* keep nav dropdowns safe */}
      <style>{`
        [data-radix-popper-content-wrapper] { z-index: 9999 !important; }
        [role="menu"], [role="listbox"], .radix-select-content, .radix-dropdown-menu-content { z-index: 9999 !important; }
      `}</style>

      {/* Hero */}
      <section
        className="py-20 sm:py-28 lg:py-36"
        style={{
          background: `
            radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%),
            linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
          `
        }}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <nav className="mb-6 text-sm text-gray-400 flex items-center gap-2">
              <span>Home</span> <ArrowRight className="h-4 w-4" /> <span>Services</span> <ArrowRight className="h-4 w-4" /> <span className="text-red-400">Maintenance Agreement</span>
            </nav>

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600/20 text-red-400 rounded-full border border-red-500/30">
              <Shield className="h-5 w-5" />
              <span className="font-semibold text-sm">Maintenance Agreement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get Started with Your <span className="text-red-400">Maintenance Agreement</span> Now
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              Secure your home's future with comprehensive plumbing maintenance agreements that provide numerous benefits and peace of mind for homeowners.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[{icon: Clock, text:"Priority Service"}, {icon: Shield, text:"25% Discount"}, {icon: DollarSign, text:"Cost Savings"}, {icon: Phone, text:"24/7 Response"}].map((item,i)=>(
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <item.icon className="h-5 w-5 text-green-400" /> <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl">
                <Phone className="h-5 w-5 mr-2" /> Call (951) 246-4337
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl">
                <Calendar className="h-5 w-5 mr-2" /> Sign Up Today
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:flex justify-center">
            <div className="w-full h-[400px] bg-gray-800/80 rounded-3xl border border-gray-700 flex items-center justify-center text-gray-400">
              <Shield className="h-16 w-16 opacity-50" />
              <span className="ml-4">Hero Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- rest of your sections (banner, service overview, form, what's included, benefits, why Gardner) --- */}
      {/* keep same structure as you had, but wrap each in: 
          <section className="py-16 bg-gray-950 border-t border-gray-800"> 
        with NO absolute backgrounds that add new stacking contexts. */}
    </div>
  );
}
