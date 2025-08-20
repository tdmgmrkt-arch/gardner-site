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
    <section className="py-16 sm:py-20 relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <div className="mb-6">
                <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                  Service Area
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Proudly Serving{" "}
              <span className="text-gradient bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Riverside County
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Gardner Plumbing Co. provides comprehensive plumbing services throughout Riverside County and surrounding areas. Our local knowledge and commitment to the community make us your trusted neighborhood plumbing experts.
            </p>

            {/* Cities list with links */}
            <div className="grid grid-cols-2 gap-4 mb-8">
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
                  className="flex items-center gap-3 p-3 glassmorphism-dark rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-white font-medium">{city}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9512464337">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 transition-all duration-300 rounded-xl shadow-lg group">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Map Placeholder */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
              {/* IMAGE PLACEHOLDER - Service Area Map */}
              <div
                className="w-full bg-gray-600 flex items-center justify-center rounded-3xl"
                style={{ aspectRatio: "4/3" }}
              >
                <div className="text-center text-gray-300 p-8">
                  <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">Service Area Map</p>
                  <p className="text-sm opacity-75">Riverside County coverage</p>
                </div>
              </div>

              {/* Premium overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Full Coverage</div>
                    <div className="text-gray-300 text-xs">Riverside County</div>
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
