import { Button } from "./ui/button";
import { Phone, Mail, Menu, MapPin, ChevronDown, Clock, Star } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";

const logo = "/gplogo.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // ---------- Link maps ----------
  const residentialLinks: Record<string, string> = {
    "Drain Cleaning": "/services/drain-cleaning",
    "Leak Detection": "/services/leak-detection",
    "Water Heaters": "/services/water-heater-service",
    "Toilet Repair": "/services/toilet-installation-and-repair",
    "Piping & Repiping": "/services/piping-and-repiping",
    "Fixtures": "/services/fixtures",
  };

  const commercialLinks: Record<string, string> = {
    "Commercial Plumbing": "/services/commercial-plumbing",
    "Hydro Jetting": "/services/hydro-jetting",
    "Sewer Lines": "/services/sewer-lines",
    "Maintenance Plans": "/services/maintenance-plans",
    "Emergency Service": "/services/emergency-service",
    "System Inspections": "/services/system-inspections",
  };

  const emergencyLinks: Record<string, string> = {
    "24/7 Service": "/services/emergency-service",
    "Burst Pipes": "/services/burst-pipes",
    "Water Damage": "/services/water-damage",
    "Gas Lines": "/services/gas-lines",
    "Backups": "/services/backups",
    "No Heat/Hot Water": "/services/no-heat-hot-water",
  };
  // --------------------------------

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 250);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Top notification bar */}
      <div
        className="relative overflow-hidden text-white py-1.5 sm:py-2 px-2 sm:px-4 m-0"
        style={{
          background: `linear-gradient(90deg, #8B0000 0%, #DC2626 100%)`,
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(139, 0, 0, 0.3)
          `,
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `linear-gradient(90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.2) 30%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0.2) 70%,
              transparent 100%
            )`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <a href="/services/emergency-plumbing" aria-label="24/7 Emergency Service">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 drop-shadow-sm" />
                </a>
                <a href="/services/emergency-plumbing" className="font-medium drop-shadow-sm text-xs sm:text-sm">
                  24/7 Emergency Service
                </a>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <a href="/reviews" aria-label="See Reviews">
                  <Star className="h-4 w-4 text-yellow-300" />
                </a>
                <a href="/reviews">4.9★ Rated Service</a>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <a href="/reviews" aria-label="Service Area">
                  <MapPin className="h-4 w-4" />
                </a>
                <a href="/service-areas" className="hidden md:inline">Serving Greater Riverside Area</a>
                <a href="/service-areas" className="md:hidden">Local Service</a>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 font-medium">
                <a href="tel:9512464337" aria-label="Call (951) 246-4337">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
                <a href="tel:9512464337" className="text-xs sm:text-sm">(951) 246-4337</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - sticky */}
      <header
        className="relative text-white shadow-luxury sticky top-0 z-50 m-0"
        style={{
          background: `linear-gradient(145deg, #202020 0%, #1a1a1a 50%, #111827 100%)`,
        }}
      >
        {/* decorative overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
            `,
          }}
        />

        <nav
          className="relative z-50 py-2 sm:py-4 m-0 backdrop-blur-sm"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
            boxShadow: `
              0 1px 3px rgba(0, 0, 0, 0.1),
              0 8px 32px rgba(0, 0, 0, 0.15),
              inset 0 -1px 0 rgba(255, 255, 255, 0.05)
            `,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center hover-lift">
                <a href="/" aria-label="Go to homepage">
                  <img src={logo} alt="Gardner Plumbing Co." className="h-10 sm:h-12 lg:h-14 w-auto drop-shadow-lg" />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a href="/" className="text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm">
                  Home
                </a>
                <a href="/about-us" className="text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm">
                  About Us
                </a>

                {/* Services */}
                <div
                  className="group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm py-4 px-1">
                    Services
                    <ChevronDown
                      className="h-4 w-4 transition-transform duration-300"
                      style={{ transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  {isServicesOpen && (
                    <>
                      {/* Invisible bridge under the nav to keep hover while moving down */}
                      <div
                        className="absolute inset-x-0 top-full h-8 z-40"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />

                      {/* Full-width dropdown */}
                      <div
                        ref={dropdownRef}
                        className="absolute inset-x-0 top-full w-full shadow-luxury border-t-4 border-red-600 z-50 animate-fade-in"
                        style={{
                          background: `
                            radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
                            linear-gradient(145deg, #202020 0%, #1a1a1a 50%, #111827 100%)
                          `,
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* texture overlay */}
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `
                              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
                            `,
                          }}
                        />

                        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-8">
                          <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-12 gap-8">
                              {/* Branding column */}
                              <div className="col-span-4">
                                <div className="glassmorphism-dark rounded-2xl p-6 sm:p-8 h-full border border-white/10 shadow-luxury hover-lift transition-all duration-500">
                                  <img src={logo} alt="Gardner Plumbing Co." className="h-16 w-auto mb-4 drop-shadow-lg" />
                                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">Gardner Plumbing Co.</h3>

                                  {/* Business Hours */}
                                  <div className="mb-6">
                                    <h4 className="text-base text-white mb-3 pb-2 border-b-2 border-red-600 drop-shadow-sm">Business Hours</h4>
                                    <div className="space-y-1.5">
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Mon - Fri</span>
                                        <span className="text-gray-400 text-sm">7:00 AM - 6:00 PM</span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Saturday</span>
                                        <span className="text-gray-400 text-sm">8:00 AM - 4:00 PM</span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Sunday</span>
                                        <span className="text-gray-400 text-sm">Emergency Only</span>
                                      </div>
                                      <div className="pt-1.5 border-t border-gray-600">
                                        <div className="flex justify-between items-center">
                                          <span className="text-red-400 text-sm font-medium">Emergency</span>
                                          <span className="text-red-400 text-sm font-medium">24/7 Available</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Trust indicators */}
                                  <div className="space-y-3 mb-6">
                                    <a href="/services/emergency-plumbing" className="flex items-center gap-3 group hover-lift">
                                      <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Clock className="h-4 w-4 text-white drop-shadow-sm" />
                                      </div>
                                      <span className="text-gray-300 text-sm font-medium drop-shadow-sm">24/7 Emergency Service</span>
                                    </a>
                                    <a href="/emergency-service" className="flex items-center gap-3 group hover-lift">
                                      <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                                        <Phone className="h-4 w-4 text-white drop-shadow-sm" />
                                      </div>
                                      <span className="text-gray-300 text-sm font-medium drop-shadow-sm">Licensed & Insured</span>
                                    </a>
                                    <a href="/reviews" className="flex items-center gap-3 group hover-lift">
                                      <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Star className="h-4 w-4 text-white drop-shadow-sm" />
                                      </div>
                                      <span className="text-gray-300 text-sm font-medium drop-shadow-sm">4.9★ Customer Rating</span>
                                    </a>
                                  </div>

                                  <a href="tel:9512464337">
                                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift rounded-xl border border-red-400/20">
                                      <Phone className="mr-2 h-4 w-4" />
                                      Call Now
                                    </Button>
                                  </a>
                                </div>
                              </div>

                              {/* Services grid */}
                              <div className="col-span-8">
                                <div className="grid grid-cols-3 gap-8">
                                  {/* Residential */}
                                  <div className="glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                    <a href="/services">
                                      <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                        Residential
                                      </h4>
                                    </a>
                                    <ul className="space-y-3">
                                      {[
                                        { name: "Drain Cleaning", desc: "Professional clearing" },
                                        { name: "Leak Detection", desc: "Quick detection & fix" },
                                        { name: "Water Heaters", desc: "Install & service" },
                                        { name: "Toilet Repair", desc: "Complete solutions" },
                                        { name: "Piping & Repiping", desc: "New & replacement" },
                                        { name: "Fixtures", desc: "Faucets & sinks" },
                                      ].map((service) => (
                                        <li key={service.name}>
                                          <a
                                            href={residentialLinks[service.name] ?? "/services"}
                                            className="group block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                          >
                                            <div className="nav-dropdown-service-name font-medium transition-colors duration-300 drop-shadow-sm">
                                              {service.name}
                                            </div>
                                            <div className="nav-dropdown-service-desc text-xs transition-colors duration-300">
                                              {service.desc}
                                            </div>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Commercial */}
                                  <div className="glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                    <a href="/services/commercial-services">
                                      <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                        Commercial
                                      </h4>
                                    </a>
                                    <ul className="space-y-3">
                                      {[
                                        { name: "Commercial Plumbing", desc: "Business solutions" },
                                        { name: "Hydro Jetting", desc: "High-pressure cleaning" },
                                        { name: "Sewer Lines", desc: "Main line service" },
                                        { name: "Maintenance Plans", desc: "Preventive care" },
                                        { name: "Emergency Service", desc: "24/7 response" },
                                        { name: "System Inspections", desc: "Complete checks" },
                                      ].map((service) => (
                                        <li key={service.name}>
                                          <a
                                            href={commercialLinks[service.name] ?? "/services#commercial"}
                                            className="group block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                          >
                                            <div className="nav-dropdown-service-name font-medium transition-colors duration-300 drop-shadow-sm">
                                              {service.name}
                                            </div>
                                            <div className="nav-dropdown-service-desc text-xs transition-colors duration-300">
                                              {service.desc}
                                            </div>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Emergency */}
                                  <div className="glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                    <a href="/services/emergency-service">
                                      <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                        Emergency
                                      </h4>
                                    </a>
                                    <ul className="space-y-3 mb-4">
                                      {[
                                        { name: "24/7 Service", desc: "Always available" },
                                        { name: "Burst Pipes", desc: "Immediate response" },
                                        { name: "Water Damage", desc: "Prevention & repair" },
                                        { name: "Gas Lines", desc: "Safe service" },
                                        { name: "Backups", desc: "Sewer & drain" },
                                        { name: "No Heat/Hot Water", desc: "Quick restoration" },
                                      ].map((service) => (
                                        <li key={service.name}>
                                          <a
                                            href={emergencyLinks[service.name] ?? "/placeholder"}
                                            className="group block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                          >
                                            <div className="nav-dropdown-service-name font-medium transition-colors duration-300 drop-shadow-sm">
                                              {service.name}
                                            </div>
                                            <div className="nav-dropdown-service-desc text-xs transition-colors duration-300">
                                              {service.desc}
                                            </div>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>

                                    {/* Emergency CTA */}
                                    <div
                                      className="relative overflow-hidden rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                                      style={{
                                        background: `linear-gradient(135deg, rgba(139, 0, 0, 0.9) 0%, rgba(220, 38, 38, 0.9) 100%)`,
                                        boxShadow: `
                                          inset 0 1px 0 rgba(255, 255, 255, 0.2),
                                          inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                                          0 8px 32px rgba(139, 0, 0, 0.4)
                                        `,
                                      }}
                                    >
                                      <div
                                        className="absolute inset-0 opacity-30"
                                        style={{
                                          background: `linear-gradient(135deg,
                                            transparent 0%,
                                            rgba(255, 255, 255, 0.1) 25%,
                                            rgba(255, 255, 255, 0.2) 50%,
                                            rgba(255, 255, 255, 0.1) 75%,
                                            transparent 100%
                                          )`,
                                        }}
                                      />
                                      <div className="relative">
                                        <div className="text-red-100 font-medium text-sm mb-2 drop-shadow-sm">
                                          Emergency? Call Now!
                                        </div>
                                        <a href="tel:9512464337">
                                          <Button
                                            size="sm"
                                            className="bg-white/20 hover:bg-white/30 text-white w-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 rounded-xl"
                                          >
                                            (951) 246-4337
                                          </Button>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Services grid */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <a href="/reviews" className="text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm">
                  Reviews
                </a>
                <a href="/contact-us" className="text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm">
                  Contact
                </a>
              </div>

              {/* CTA + Mobile */}
              <div className="flex items-center gap-2 sm:gap-4">
                <a href="tel:9512464337">
                  <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-3 py-2 sm:px-6 sm:py-3 hidden sm:flex shadow-lg hover:shadow-xl transition-all duration-300 hover-lift rounded-xl border border-red-400/20 text-sm sm:text-base">
                    <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Call Today</span>
                    <span className="sm:hidden">Call</span>
                  </Button>
                </a>
                <button
                  className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-all duration-300 hover-lift backdrop-blur-sm"
                  onClick={() => setIsMenuOpen((v) => !v)}
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-white/10 animate-fade-in">
                <div className="glassmorphism-dark rounded-2xl p-4 mt-4 border border-white/10">
                  <div className="flex flex-col space-y-3 sm:space-y-4">
                    {[
                      ["/", "Home"],
                      ["/about-us", "About Us"],
                      ["/services", "Services"], // updated from /placeholder
                      ["/reviews", "Reviews"],
                      ["/contact-us", "Contact"],
                    ].map(([href, label]) => (
                      <a
                        key={href as string}
                        href={href as string}
                        className="text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift text-base sm:text-lg py-2 px-3 rounded-lg hover:bg-white/5 drop-shadow-sm"
                      >
                        {label}
                      </a>
                    ))}
                    <a href="tel:9512464337" className="sm:hidden">
                      <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-4 py-3 w-full sm:hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-lift mt-2 text-base rounded-xl border border-red-400/20">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Today
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
