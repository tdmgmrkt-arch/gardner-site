
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Phone, Star, Shield, Clock, Users } from "lucide-react";
import { useState } from "react";

const heroBackground = "/garnderplumbingcoemployeearrival.webp";
const mobileHeroBackground = "/gpmobilehero.webp"

export function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    consent: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center" style={{ backgroundColor: "transparent" }}>
      {/* Background */}
  <div className="absolute inset-0">
    <picture>
      {/* Mobile Image */}
      <source srcSet={mobileHeroBackground} media="(max-width: 640px)" />
      {/* Tablet/Desktop Image */}
      <img
        src={heroBackground}
        alt="Hero background"
        className="
          w-full 
          h-full             /* ✅ fills full hero section height */
          object-cover 
          object-top sm:object-[50%_30%]
          brightness-75 contrast-125 saturate-110
        "
      />
    </picture>

    {/* Overlay Gradients */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
  </div>

  {/* Bottom shadow */}
  <div
    className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-30"
    style={{
      background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)`,
      boxShadow: `
        0 25px 50px rgba(0, 0, 0, 0.3),
        0 15px 35px rgba(0, 0, 0, 0.2),
        0 8px 20px rgba(0, 0, 0, 0.15)
      `,
    }}
  />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-left animate-fade-in">
            <div className="mb-4 sm:mb-6 animate-slide-up">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-3 text-white drop-shadow-lg tracking-tight"
                style={{ letterSpacing: "-0.03em", wordSpacing: "-0.1em" }}
              >
                Gardner Plumbing Co.
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-3 sm:mb-4 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent drop-shadow-sm">
                Your Trusted Local Plumbing Experts
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed mb-4 sm:mb-6 max-w-xl drop-shadow-sm">
                Need trusted plumbing professionals for your home or business? Gardner Plumbing Co. is your local,
                licensed team ready for repairs, installs, or remodels. From leaky pipes to major projects, we're just
                a call away.
              </p>
            </div>

            {/* Trust text */}
            <div className="text-white mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm font-medium text-gray-300 drop-shadow-sm">Trusted by Hundreds of Local Customers</p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              {/* Google */}
              <a href="/reviews" className="flex items-center gap-2 sm:gap-3 group hover-lift" aria-label="Read our reviews">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500/20 backdrop-blur-sm rounded flex items-center justify-center border border-blue-400/30">
                    <span className="text-xs sm:text-sm font-bold text-blue-200">G</span>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-yellow-400 fill-current drop-shadow-sm" />
                    ))}
                    <span className="text-white font-bold ml-0.5 sm:ml-1 drop-shadow-sm text-xs sm:text-sm">4.9</span>
                  </div>
                </div>
              </a>

              {/* Yelp */}
              <a href="/reviews" className="flex items-center gap-2 sm:gap-3 group hover-lift" aria-label="Read our reviews">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/20 backdrop-blur-sm rounded flex items-center justify-center border border-red-400/30">
                    <span className="text-xs sm:text-sm font-bold text-red-200">Y</span>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-yellow-400 fill-current drop-shadow-sm" />
                    ))}
                    <span className="text-white font-bold ml-0.5 sm:ml-1 drop-shadow-sm text-xs sm:text-sm">4.8</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
              {/* Call now */}
              <a href="tel:9512464337" aria-label="Call Gardner Plumbing Co. at (951) 246-4337" className="w-full">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white px-4 sm:px-6 py-3 sm:py-3 text-sm sm:text-base font-bold shadow-luxury transition-all duration-500 focus:ring-4 focus:ring-red-500/30 rounded-xl border border-red-400/20 hover-lift group relative"
                  style={{
                    boxShadow: `
                      0 20px 40px rgba(220, 38, 38, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                    `,
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                    <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform" />
                    Call Now: (951) 246-4337
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500" />
                </Button>
              </a>

              {/* Free estimate */}
              <a href="/contact" className="w-full" aria-label="Get a free plumbing estimate">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-3 sm:py-3 text-sm sm:text-base font-bold backdrop-blur-sm transition-all duration-500 focus:ring-4 focus:ring-white/30 rounded-xl hover-lift group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">Get Free Estimate</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="animate-fade-in mt-6 lg:mt-0">
            <div
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 w-full border border-white/20"
              style={{
                background: `linear-gradient(145deg, #202020 0%, #1a1a1a 100%)`,
                boxShadow: `
                     0 25px 50px rgba(0, 0, 0, 0.4),
                     0 10px 25px rgba(0, 0, 0, 0.2),
                     inset 0 1px 0 rgba(255, 255, 255, 0.1),
                     inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                     0 0 0 1px rgba(59, 130, 246, 0.1)
                   `,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-2xl sm:rounded-3xl" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="text-center mb-4 sm:mb-6 relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Get Free Estimate</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Schedule your free consultation today. We'll call you within 24 hours.</p>
              </div>

              <div className="space-y-3 sm:space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="group">
                    <Label htmlFor="firstName" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm group-focus-within:text-blue-400 transition-colors">
                      First Name*
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:bg-gray-800 h-10 sm:h-11 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg shadow-sm hover:border-blue-400 hover:bg-gray-800/70 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div className="group">
                    <Label htmlFor="lastName" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm group-focus-within:text-blue-400 transition-colors">
                      Last Name*
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:bg-gray-800 h-10 sm:h-11 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg shadow-sm hover:border-blue-400 hover:bg-gray-800/70 backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <Label htmlFor="email" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm group-focus-within:text-blue-400 transition-colors">
                    Email*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:bg-gray-800 h-10 sm:h-11 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg shadow-sm hover:border-blue-400 hover:bg-gray-800/70 backdrop-blur-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="group">
                    <Label htmlFor="phone" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm group-focus-within:text-blue-400 transition-colors">
                      Phone*
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:bg-gray-800 h-10 sm:h-11 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg shadow-sm hover:border-blue-400 hover:bg-gray-800/70 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div className="group">
                    <Label htmlFor="postalCode" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm group-focus-within:text-blue-400 transition-colors">
                      ZIP Code*
                    </Label>
                    <Input
                      id="postalCode"
                      type="text"
                      placeholder="92555"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:bg-gray-800 h-10 sm:h-11 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg shadow-sm hover:border-blue-400 hover:bg-gray-800/70 backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3 pt-1 sm:pt-2 group">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                    className="mt-0.5 sm:mt-1 border-2 border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded shadow-sm hover:border-blue-400 transition-colors bg-gray-800/50"
                  />
                  <Label htmlFor="consent" className="text-[10px] sm:text-xs text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    I agree to receive SMS messages from Gardner Plumbing Co. Message & data rates may apply. View our{" "}
                    <a href="/privacy-policy" className="text-blue-400 underline hover:text-blue-300 transition-colors font-medium">
                      privacy policy
                    </a>
                    . Reply STOP to opt-out.
                  </Label>
                </div>

                <div className="pt-3 sm:pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-bold transition-all duration-500 focus:ring-4 focus:ring-red-500/30 w-full rounded-xl border-2 border-red-400/20 hover-lift disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                    disabled={!formData.consent}
                    style={{
                      boxShadow: `
                        0 15px 35px rgba(220, 38, 38, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                      `,
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                      <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:scale-110" />
                      GET FREE ESTIMATE
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12 animate-fade-in">
          {/* 24/7 Emergency */}
          <a
            href="/services/emergency-service"
            className="relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover-lift group transition-all duration-300"
            style={{
              background: `linear-gradient(145deg, #202020 0%, #1a1a1a 100%)`,
              boxShadow: `
                0 20px 40px rgba(0,0,0,0.3),
                0 8px 16px rgba(0,0,0,0.15),
                inset 0 1px 0 rgba(255,255,255,0.1),
                inset 0 -1px 0 rgba(0,0,0,0.2),
                0 0 0 1px rgba(59,130,246,0.08)
              `,
            }}
            aria-label="Go to Emergency Plumbing service"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-xl sm:rounded-2xl" />
            <div className="absolute top-2 right-2 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/8 rounded-full blur-2xl" />
            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-lg sm:rounded-xl" />
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white relative z-10" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base sm:text-lg leading-tight group-hover:text-blue-100 transition-colors">24/7 Emergency</h4>
                <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-200 transition-colors">Available Around the Clock</p>
              </div>
            </div>
          </a>

          {/* Licensed & Insured */}
          <a
            href="/about-us"
            className="relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover-lift group transition-all duration-300"
            style={{
              background: `linear-gradient(145deg, #202020 0%, #1a1a1a 100%)`,
              boxShadow: `
                0 20px 40px rgba(0,0,0,0.3),
                0 8px 16px rgba(0,0,0,0.15),
                inset 0 1px 0 rgba(255,255,255,0.1),
                inset 0 -1px 0 rgba(0,0,0,0.2),
                0 0 0 1px rgba(34,197,94,0.08)
              `,
            }}
            aria-label="Learn about our licensing and insurance"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-xl sm:rounded-2xl" />
            <div className="absolute top-2 right-2 w-12 h-12 sm:w-16 sm:h-16 bg-green-500/8 rounded-full blur-2xl" />
            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-lg sm:rounded-xl" />
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white relative z-10" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base sm:text-lg leading-tight group-hover:text-green-100 transition-colors">Licensed & Fully Insured</h4>
                <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-200 transition-colors">Professional & Protected</p>
              </div>
            </div>
          </a>

          {/* Local Technicians */}
          <a
            href="/reviews"
            className="relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover-lift group transition-all duration-300"
            style={{
              background: `linear-gradient(145deg, #202020 0%, #1a1a1a 100%)`,
              boxShadow: `
                0 20px 40px rgba(0,0,0,0.3),
                0 8px 16px rgba(0,0,0,0.15),
                inset 0 1px 0 rgba(255,255,255,0.1),
                inset 0 -1px 0 rgba(0,0,0,0.2),
                0 0 0 1px rgba(168,85,247,0.08)
              `,
            }}
            aria-label="See why local customers recommend us"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-xl sm:rounded-2xl" />
            <div className="absolute top-2 right-2 w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/8 rounded-full blur-2xl" />
            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-lg sm:rounded-xl" />
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white relative z-10" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base sm:text-lg leading-tight group-hover:text-purple-100 transition-colors">Background Checked Techs</h4>
                <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-200 transition-colors">Trusted Community Experts</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl" />
    </section>
  );
}