import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, Star } from "lucide-react";
import { useState } from "react";

const logo = "/gplogo.svg";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Enhanced Premium Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
              linear-gradient(145deg, #202020 0%, #1a1a1a 50%, #111827 100%)
            `,
          }}
        />

        {/* Premium texture overlay */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Company Branding Section */}
            <div className="lg:col-span-5 lg:border-r lg:border-white/10 lg:pr-8">
              <div className="glassmorphism-dark rounded-2xl p-6 sm:p-8 shadow-luxury hover-lift transition-all duration-500">
                <img src={logo} alt="Gardner Plumbing Co." className="h-14 w-auto mb-4 drop-shadow-lg" />
                <p className="text-gray-300 mb-8 leading-relaxed text-[14px]">
                  Professional plumbing services backed by 30+ years of experience and a commitment to
                  excellence. Whether you need repairs, installations, or emergency service—we've got you covered.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a href="tel:19512464337" className="flex items-center gap-3 group hover-lift">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center group-hover:from-red-700 group-hover:to-red-600 transition-all duration-300 shadow-lg">
                      <Phone className="h-4 w-4 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <p className="text-red-400 text-base font-semibold drop-shadow-sm">(951) 246-4337</p>
                      <p className="text-gray-400 text-xs">24/7 Emergency Service</p>
                    </div>
                  </a>
                  <a href="mailto:office@gardnerplumbingco.com" className="flex items-center gap-3 group hover-lift">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-300 shadow-lg">
                      <Mail className="h-4 w-4 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">office@gardnerplumbingco.com</p>
                      <p className="text-gray-400 text-xs">Email for Estimates</p>
                    </div>
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Gardner+Plumbing+Company/data=!4m2!3m1!1s0x0:0xef87e6a2bf83ed0f?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group hover-lift"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-300 shadow-lg">
                      <MapPin className="h-4 w-4 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">30714 Wealth St, Murrieta, CA 92563</p>
                      <p className="text-gray-400 text-xs">Licensed & Insured</p>
                    </div>
                  </a>
                </div>

                {/* Business Hours */}
                <div className="mt-6">
                  <h4 className="text-base text-white mb-3 pb-2 border-b-2 border-red-600 drop-shadow-sm">
                    Business Hours
                  </h4>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-xs">Mon - Fri</span>
                      <span className="text-gray-400 text-xs">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-xs">Saturday</span>
                      <span className="text-gray-400 text-xs">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-xs">Sunday</span>
                      <span className="text-gray-400 text-xs">Emergency Only</span>
                    </div>
                    <div className="pt-1.5 border-t border-gray-600">
                      <div className="flex justify-between items-center">
                        <span className="text-red-400 text-xs font-medium">Emergency</span>
                        <span className="text-red-400 text-xs font-medium">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links Section */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
                {/* About Us */}
                <div className="glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                  <h4 className="text-lg text-white mb-6 pb-3 border-b-2 border-red-600 drop-shadow-sm">About Us</h4>
                  <ul className="space-y-4">
                    {[
                      { name: "Gardner Plumbing", desc: "Our story & team", link: "/about-us" },
                      { name: "Contact Us", desc: "Get in touch today", link: "/contact-us" },
                      { name: "Customer Reviews", desc: "See what clients say", link: "/reviews" },
                      { name: "Service Areas", desc: "Where we work", link: "/service-areas" },
                      { name: "Testimonials", desc: "Success stories", link: "/testimonials" },
                      { name: "Our Guarantee", desc: "Quality promise", link: "/guarantee" },
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.link}
                          className="group/link block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                        >
                          <div className="text-white text-sm group-hover/link:text-red-400 transition-colors duration-300 font-medium">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400 group-hover/link:text-gray-300 transition-colors duration-300">
                            {item.desc}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                  <h4 className="text-lg text-white mb-6 pb-3 border-b-2 border-red-600 drop-shadow-sm">Quick Links</h4>
                  <ul className="space-y-4">
                    {[
                      { name: "Request Service", desc: "Schedule appointment", link: "/request-service" },
                      { name: "Emergency Service", desc: "24/7 urgent help", link: "/services/emergency-service" },
                      { name: "FAQ", desc: "Common questions", link: "/faq" },
                      { name: "Blog", desc: "Tips & insights", link: "/blog" },
                      { name: "Financing", desc: "Payment options", link: "/financing" },
                      { name: "Warranty Info", desc: "Coverage details", link: "/warranty" },
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.link}
                          className="group/link block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                        >
                          <div className="text-white text-sm group-hover/link:text-red-400 transition-colors duration-300 font-medium">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400 group-hover/link:text-gray-300 transition-colors duration-300">
                            {item.desc}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter & Social */}
                <div className="glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                  <h4 className="text-lg text-white mb-6 pb-3 border-b-2 border-red-600 drop-shadow-sm">Stay Connected</h4>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Subscribe for plumbing tips, special offers, and service updates.
                  </p>

                  <form onSubmit={handleNewsletterSubmit} className="mb-8">
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-black/20 border-white/20 text-white placeholder:text-gray-400 w-full focus:border-red-500 focus:ring-red-500/30 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 rounded-xl shadow-sm"
                        required
                      />
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 w-full shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border border-red-400/20"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </form>

                  {/* Social Media */}
                  <div className="mb-6">
                    <p className="text-white text-sm mb-4 font-medium">Follow Us</p>
                    <div className="flex gap-3">
                      <a href="https://www.facebook.com/people/Gardner-Plumbing-Company/100063665179161/#" target="_blank" rel="noopener noreferrer">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover-lift">
                          <Facebook className="h-5 w-5 text-white drop-shadow-sm" />
                        </div>
                      </a>
                      <a href="https://www.youtube.com/channel/UCn8DkWu_niFYrW7jCtsUkUg" target="_blank" rel="noopener noreferrer">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover-lift">
                          <Youtube className="h-5 w-5 text-white drop-shadow-sm" />
                        </div>
                      </a>
                      <a href="https://www.instagram.com/gardnerplumbingco/" target="_blank" rel="noopener noreferrer">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover-lift">
                          <Instagram className="h-5 w-5 text-white drop-shadow-sm" />
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Emergency CTA */}
                  <div
                    className="relative overflow-hidden rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(139, 0, 0, 0.9) 0%, rgba(220, 38, 38, 0.9) 100%)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.2), 0 8px 32px rgba(139, 0, 0, 0.4)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background:
                          "linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 100%)",
                      }}
                    />
                    <div className="relative">
                      <div className="text-red-100 text-sm mb-2 font-semibold drop-shadow-sm">Emergency? Call Now!</div>
                      <a href="tel:19512464337">
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
          </div>

          {/* Copyright Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="glassmorphism-dark rounded-2xl p-6 shadow-luxury">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <p className="text-gray-400 text-sm">© 2024-2025 Gardner Plumbing Co. All rights reserved.</p>
                  <div className="hidden md:flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-yellow-400 drop-shadow-sm" />
                    <span className="text-gray-400">4.9★ Rated Service</span>
                  </div>
                </div>
                <div className="flex gap-6 text-sm">
                  <a href="/privacy-policy" className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover-lift">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover-lift">
                    Terms of Service
                  </a>
                  <a href="/sitemap" className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover-lift">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
