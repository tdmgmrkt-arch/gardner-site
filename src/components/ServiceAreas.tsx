import React from "react";
import { Button } from "./ui/button";
import { MapPin, Phone, CheckCircle } from "lucide-react";

const cityLinks: Record<string, string> = {
  Temecula: "https://temeculaca.gov",
  Murrieta: "https://murrietaca.gov",
  Perris: "https://www.cityofperris.org",
  Menifee: "https://cityofmenifee.us",
  "Canyon Lake": "https://www.canyonlakeca.gov",
  "Lake Elsinore": "https://www.lake-elsinore.org",
  Corona: "https://www.coronaca.gov",
  "Moreno Valley": "https://moval.org",
  Riverside: "https://riversideca.gov",
  Hemet: "https://www.hemetca.gov",
  "San Jacinto": "https://www.sanjacintoca.gov",
  Wildomar: "https://cityofwildomar.org",
};

export default function ServiceAreas() {
  return (
    // Service Area Section
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
              linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <div className="mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                    <span className="text-blue-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Service Area
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              Proudly Serving{" "}
              <span className="text-gradient bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Riverside County
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
              Gardner Plumbing Co. provides comprehensive plumbing services throughout Riverside County and surrounding areas. Our local knowledge and commitment to the community make us your trusted neighborhood plumbing experts.
            </p>

            {/* Cities list with links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                "Temecula",
                "Murrieta",
                "Perris",
                "Menifee",
                "Canyon Lake",
                "Lake Elsinore",
                "Corona",
                "Moreno Valley",
                "Riverside",
                "Hemet",
                "San Jacinto",
                "Wildomar",
              ].map((city) => (
                <a
                  key={city}
                  href={cityLinks[city] ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit the official website for ${city}`}
                  className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 glassmorphism-dark rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-white font-medium text-sm sm:text-base">{city}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="tel:9512464337" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-8 py-3 transition-all duration-300 rounded-lg sm:rounded-xl shadow-lg text-sm sm:text-base group">
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative group mt-6 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500 self-start">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109144.45437258422!2d-117.20587604273275!3d33.571118777583706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc9d0f093fb225%3A0xef87e6a2bf83ed0f!2sGardner%20Plumbing%20Company!5e0!3m2!1sen!2sus!4v1755821362571!5m2!1sen!2sus"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gardner Plumbing Co. Service Area - Riverside County"
                className="w-full h-80 sm:h-96 lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl sm:rounded-3xl"
              />

              {/* Premium overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl sm:rounded-3xl" />

              {/* Floating badge */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 glassmorphism-dark rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs sm:text-sm">Full Coverage</div>
                    <div className="text-gray-300 text-[10px] sm:text-xs">Riverside County</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Right Column */}
        </div>
      </div>
    </section>
  );
}