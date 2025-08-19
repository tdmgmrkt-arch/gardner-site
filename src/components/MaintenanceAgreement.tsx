import React, { useState } from "react";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, CheckCircle, Shield, Clock } from "lucide-react";

export function MaintenanceAgreement() {
  const [plan, setPlan] = useState("Bronze - 1 Visit Per Year $99");

  const included = [
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
    "Extended warranty on repairs **",
    "One free drain clearing per year *",
    "Written Maintenance Report",
  ];

  return (
    <main className="bg-background text-foreground">
      {/* Top contact strip */}
      <div
        className="relative overflow-hidden text-white py-2"
        style={{
          background:
            "linear-gradient(90deg, #8B0000 0%, #DC2626 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 items-center justify-between text-sm">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              30714 Wealth Street
            </span>
            <a href="tel:9512464337" className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" />
              (951) 246-4337
            </a>
            <a href="mailto:office@gardnerplumbingco.com" className="flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" />
              office@gardnerplumbingco.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:9512464337">
              <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border border-white/20">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
              linear-gradient(145deg, #202020 0%, #1a1a1a 50%, #111827 100%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm mb-5">
                <Shield className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Maintenance Agreement
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                Get Started with Your Maintenance Agreement Now and Secure Your Home&apos;s Future!
              </h1>
              <p className="text-gray-300 mt-6 leading-relaxed text-lg">
                Maintaining the plumbing system in your home is crucial for longevity and efficiency. Gardner Plumbing Co. offers comprehensive maintenance agreements that help prevent costly issues and give you peace of mind.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-200">
                  <Clock className="h-5 w-5 text-red-400" />
                  Priority Scheduling
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <Shield className="h-5 w-5 text-red-400" />
                  Discounts on Repairs
                </div>
              </div>
            </div>

            {/* Sign-up Card */}
            <div className="glassmorphism-dark rounded-2xl border border-white/10 shadow-luxury p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-1">Complete The Info Below</h2>
              <p className="text-gray-400 mb-6">Sign up for our maintenance program</p>

              <form
                method="POST"
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Submitted! (Wire this up to your backend or form service.)");
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="col-span-1">
                  <label className="block text-sm text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-red-500"
                    placeholder="Full Name"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm text-gray-300 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-red-500"
                    placeholder="Street, City, ZIP"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm text-gray-300 mb-1">Mobile Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-red-500"
                    placeholder="(###) ###-####"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-red-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm text-gray-300 mb-1">Type of Plan</label>
                  <select
                    name="plan"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-red-500"
                  >
                    <option>Bronze - 1 Visit Per Year $99</option>
                    {/* Add Silver/Gold here later */}
                  </select>
                </div>

                <fieldset className="col-span-2">
                  <legend className="block text-sm text-gray-300 mb-2">Are you the owner of the property?</legend>
                  <div className="flex items-center gap-6 text-gray-200">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="ownership" value="Owner" className="accent-red-600" defaultChecked />
                      Yes
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="ownership" value="Tenant" className="accent-red-600" />
                      No, I&apos;m the Tenant
                    </label>
                  </div>
                </fieldset>

                <label className="col-span-2 inline-flex items-start gap-3 text-gray-200">
                  <input type="checkbox" name="optin" className="mt-1 accent-red-600" />
                  <span>Yes, I agree to receive SMS and Email alerts from Gardner Plumbing Co.</span>
                </label>

                <div className="col-span-2 mt-2">
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-3 rounded-xl shadow-lg">
                    Get Started
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Copy Sections */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 space-y-12">
          <div className="grid md:grid-cols-2 gap-10">
            <CopyBlock
              title="Prevent Costly Plumbing Disasters and Enjoy Peace of Mind!"
              text="A plumbing maintenance agreement with Gardner Plumbing Co. can save you money in the long run. By catching potential issues early, you can avoid expensive repairs that result from neglected plumbing systems. Our plans also include discounts on repairs and services."
            />
            <CopyBlock
              title="Preventative Maintenance Programs"
              text="Regular maintenance prevents major plumbing issues before they arise. Our experienced plumbers perform thorough inspections and routine maintenance to identify and address minor problems early, ensuring smooth operation year-round."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <CopyBlock
              title="Cost Savings"
              text="Save money by avoiding emergency breakdowns and leveraging plan discounts on repairs and services."
            />
            <CopyBlock
              title="Increased Lifespan of Plumbing Fixtures"
              text="Reduce wear and tear on faucets, pipes, and water heaters—extending lifespan and maximizing your investment."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <CopyBlock
              title="Improved Water Quality"
              text="Maintenance includes cleaning and inspecting water lines and fixtures to reduce buildup and contaminants."
            />
            <CopyBlock
              title="Priority Service & Peace of Mind"
              text="Agreement customers receive priority response in emergencies. Rest easy knowing our team has your back."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <CopyBlock
              title="Energy Efficiency"
              text="Well-maintained systems run more efficiently, lowering utility bills. Water heater service alone can save energy."
            />
            <CopyBlock
              title="Why Gardner Plumbing Co."
              text="Investing in a maintenance agreement is a smart decision. Prevent repairs, extend lifespans, improve water quality, and enjoy true peace of mind."
            />
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glassmorphism-dark rounded-2xl border border-white/10 shadow-luxury p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">What&apos;s included in your maintenance</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              * Drain clearing limited to one standard residential drain per year. ** Extended warranty applies to covered repairs performed under agreement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function CopyBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="glassmorphism-dark rounded-2xl border border-white/10 shadow-luxury p-6">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{text}</p>
    </div>
  );
}
