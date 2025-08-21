import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Send,
  Shield,
  Wrench,
  Home,
  Building,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  CreditCard,
  Percent,
  Tag,
  Gift
} from "lucide-react";
const gardnercsrepImage = "gardnercsrep.png";
const customerServiceImage = "gpcsrep2.png";
const gardnerVanImage = "gplumbingtruckguy.png";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "(951) 246-4337",
      secondary: "24/7 Emergency Line",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@gardnerplumbing.com",
      secondary: "Response within 24 hours",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Service Area",
      primary: "Riverside County",
      secondary: "Temecula, Murrieta & Surrounding",
      action: "View Coverage"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon-Fri: 7AM-6PM",
      secondary: "Emergency: 24/7",
      action: "Schedule Service"
    }
  ];

  const serviceAreas = [
    "Temecula", "Murrieta", "Perris", "Menifee", "Canyon Lake", 
    "Lake Elsinore", "Corona", "Moreno Valley", "Riverside", "Wildomar",
    "Winchester", "French Valley", "Sun City", "Hemet", "San Jacinto"
  ];

  const emergencyServices = [
    { icon: Wrench, service: "Burst Pipes", response: "30 min response" },
    { icon: Home, service: "Water Heater Failure", response: "Same day service" },
    { icon: Building, service: "Sewer Backup", response: "Emergency cleanup" },
    { icon: Phone, service: "Gas Line Issues", response: "Immediate response" }
  ];

  return (
    <div className="min-h-screen">
      {/* Combined Contact Hero & Information Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{ 
              background: `
                radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `
            }}
          />
          
          {/* Premium texture overlay */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
              `
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two Column Layout - Hero Content and Hero Image + Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Left Column - Hero Content */}
            <div className="text-left animate-fade-in">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgba(255,255,255,1)] mb-8 drop-shadow-lg leading-tight">
                Contact <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Gardner Plumbing</span>
              </h1>
              
              {/* Hero Image */}
              <div className="relative group mb-8">
                <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500 max-w-lg">
                <img 
                  src={gardnercsrepImage}
                  alt="Professional Gardner Plumbing technician ready to help with your plumbing needs" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ aspectRatio: '4/3', objectPosition: 'center center' }}
                  />
                  
                  {/* Premium overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Ready to Help</div>
                        <div className="text-gray-300 text-xs">Call (951) 246-4337</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                Ready to solve your plumbing needs? Our expert team is here to help with professional service, transparent pricing, and 30+ years of experience serving Riverside County.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 transition-all duration-300 rounded-xl shadow-lg border border-red-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-gray-900 hover:border-white px-8 py-4 transition-all duration-300 rounded-xl shadow-lg group">
                  <span className="flex items-center justify-center gap-3">
                    <Calendar className="h-5 w-5 group-hover:scale-110 group-hover:text-gray-900 transition-all duration-300" />
                    Schedule Service
                  </span>
                </Button>
              </div>

            </div>

            {/* Right Column - Contact Information Cards */}
            <div className="space-y-8 animate-slide-up mt-16">

              {/* Contact Information Cards */}
              <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
                {/* Premium Red Banner Header */}
                <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ 
                  background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                  boxShadow: `
                    inset 0 2px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                    0 8px 32px rgba(139, 0, 0, 0.4)
                  `
                }}>
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(135deg, 
                        transparent 0%, 
                        rgba(255, 255, 255, 0.1) 25%, 
                        rgba(255, 255, 255, 0.2) 50%, 
                        rgba(255, 255, 255, 0.1) 75%, 
                        transparent 100%
                      )`
                    }}
                  />
                  <div className="relative flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                      <Phone className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <h2 className="text-2xl font-bold text-white drop-shadow-lg">Contact Information</h2>
                  </div>
                </div>
                
                {/* Contact Cards */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-fade-in" style={{ 
                          backgroundColor: '#202020',
                          backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                          animationDelay: `${index * 150}ms`
                        }}>
                          {/* Gradient Border Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                          <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                          
                          <CardContent className="relative z-10 p-4 text-center">
                            <div className="relative mb-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center mx-auto shadow-lg border border-red-400/20">
                                <IconComponent className="h-6 w-6 text-white drop-shadow-sm group-hover:scale-110 transition-transform duration-500" />
                              </div>
                              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-100 transition-colors duration-300">{info.title}</h3>
                            <p className="text-base text-gray-300 font-semibold mb-1 group-hover:text-gray-200 transition-colors duration-300">{info.primary}</p>
                            <p className="text-xs text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">{info.secondary}</p>
                            <Button size="sm" className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg py-1 text-sm group/btn">
                              <span className="flex items-center justify-center gap-2">
                                {info.action}
                                <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </span>
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Trust Badges - Horizontal Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm group-hover:text-green-100 transition-colors duration-300">Licensed & Insured</h3>
                    <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Certified professionals</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    <Shield className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm group-hover:text-blue-100 transition-colors duration-300">Guaranteed Work</h3>
                    <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">100% satisfaction</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    <Star className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm group-hover:text-purple-100 transition-colors duration-300">30+ Years Experience</h3>
                    <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Trusted local experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Contact Form Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{ 
              background: `
                radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Left Column - Contact Form & Special Offers */}
            <div className="space-y-8">
              {/* Contact Form */}
              <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift animate-slide-up">
                <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ 
                  background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                  boxShadow: `
                    inset 0 2px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                    0 8px 32px rgba(139, 0, 0, 0.4)
                  `
                }}>
                  <div className="relative flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                      <Send className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <h2 className="text-2xl font-bold text-white drop-shadow-lg">Request Service</h2>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  {/* Professional Technician Image */}
                  <div className="mb-6">
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                        <img 
                          src={customerServiceImage}
                          alt="Professional Gardner Plumbing customer service representative ready to assist with your service requests" 
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Premium overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Floating badge */}
                        <div className="absolute bottom-4 right-4 glassmorphism-dark rounded-xl p-3 border border-white/20 shadow-luxury">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                              <Phone className="h-3 w-3 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-bold text-xs">Customer Service</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white mb-2 block">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white mb-2 block">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(951) 555-0123" 
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500/20 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500/20 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="address" className="text-white mb-2 block">Service Address</Label>
                      <Input 
                        id="address" 
                        placeholder="123 Main St, Temecula, CA 92592" 
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500/20 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="service" className="text-white mb-2 block">Service Needed</Label>
                      <select 
                        id="service" 
                        className="w-full bg-gray-800/50 border border-gray-600/50 text-white rounded-lg px-3 py-2 focus:border-red-500 focus:ring-red-500/20 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="drain-cleaning">Drain Cleaning</option>
                        <option value="leak-repair">Leak Detection/Repair</option>
                        <option value="water-heater">Water Heater Service</option>
                        <option value="bathroom">Bathroom Plumbing</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your plumbing issue or service needs..." 
                        rows={4}
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500/20 transition-all duration-300"
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 transition-all duration-300 rounded-xl shadow-lg border border-red-400/20 group">
                      <span className="flex items-center justify-center gap-3">
                        <Send className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        Send Request
                      </span>
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Special Offers */}
              <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift animate-slide-up">
                <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ 
                  background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                  boxShadow: `
                    inset 0 2px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                    0 8px 32px rgba(139, 0, 0, 0.4)
                  `
                }}>
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(135deg, 
                        transparent 0%, 
                        rgba(255, 255, 255, 0.1) 25%, 
                        rgba(255, 255, 255, 0.2) 50%, 
                        rgba(255, 255, 255, 0.1) 75%, 
                        transparent 100%
                      )`
                    }}
                  />
                  <div className="relative flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                      <Gift className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">Special Offers</h3>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  {/* Special Offers Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {/* Financing Available */}
                    <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                        <CreditCard className="h-6 w-6 text-white drop-shadow-sm" />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-green-100 transition-colors duration-300">Financing Available</h4>
                      <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Easy payment plans</p>
                    </div>
                    
                    {/* 0% APR Plans */}
                    <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Percent className="h-6 w-6 text-white drop-shadow-sm" />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-blue-100 transition-colors duration-300">0% APR Plans</h4>
                      <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Qualified customers</p>
                    </div>
                    
                    {/* Exclusive Coupons */}
                    <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Tag className="h-6 w-6 text-white drop-shadow-sm" />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-purple-100 transition-colors duration-300">Exclusive Coupons</h4>
                      <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Save on services</p>
                    </div>
                  </div>

                  {/* Customer Testimonial */}
                  <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl p-4 mb-6 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm italic leading-relaxed mb-2">
                          "The financing option made it possible for us to get our entire plumbing system upgraded. Gardner Plumbing made the process so easy!"
                        </p>
                        <p className="text-gray-400 text-xs font-semibold">- Sarah M., Temecula</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Promotional Text */}
                  <div className="text-center mt-8 mb-12">
                    <p className="text-gray-300 text-sm mb-2">Don't let plumbing costs hold you back!</p>
                    <p className="text-gray-400 text-xs mb-4">Flexible financing options and seasonal specials available to qualified customers.</p>
                    <p className="text-gray-500 text-xs">*Subject to credit approval. Terms and conditions apply.</p>
                  </div>
                  
                  {/* Call-to-Action Button */}
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 transition-all duration-300 rounded-xl shadow-lg border border-green-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <Gift className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      View Current Specials
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right Column - Service Areas & Emergency */}
            <div className="space-y-8">
              {/* Service Areas */}
              <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift animate-slide-up">
                <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ 
                  background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                  boxShadow: `
                    inset 0 2px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                    0 8px 32px rgba(139, 0, 0, 0.4)
                  `
                }}>
                  <div className="relative flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                      <MapPin className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">Service Areas</h3>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  {/* Service Area Map */}
                  <div className="mb-6">
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                        {/* Google Maps Embed */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211887.43895276654!2d-117.34485285000001!3d33.5635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db78de3d6ca8b7%3A0x5a48b1c4c7b0c8a!2sTemecula%2C%20CA!5e0!3m2!1sen!2sus!4v1642000000000!5m2!1sen!2sus"
                          width="100%"
                          height="300"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Gardner Plumbing Service Area - Riverside County"
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl"
                        />
                        
                        {/* Premium overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"></div>
                        
                        {/* Floating badge */}
                        <div className="absolute bottom-4 right-4 glassmorphism-dark rounded-xl p-3 border border-white/20 shadow-luxury pointer-events-none">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-bold text-xs">Full Coverage</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Proudly serving Riverside County and surrounding communities with professional plumbing services.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg transition-all duration-300 group">
                        <CheckCircle className="h-4 w-4 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                        <span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Emergency Services */}
              <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift animate-slide-up">
                <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ 
                  background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                  boxShadow: `
                    inset 0 2px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                    0 8px 32px rgba(139, 0, 0, 0.4)
                  `
                }}>
                  <div className="relative flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                      <Shield className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">24/7 Emergency</h3>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  {/* Emergency Vehicle Image */}
                  <div className="mb-6">
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                        <img 
                          src={gardnerVanImage}
                          alt="Gardner Plumbing branded service van ready for 24/7 emergency response" 
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Premium overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Floating badge */}
                        <div className="absolute bottom-4 left-4 glassmorphism-dark rounded-xl p-3 border border-white/20 shadow-luxury">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                              <Shield className="h-3 w-3 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-bold text-xs">Gardner Emergency</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Plumbing emergencies don't wait for business hours. Our certified technicians are available 24/7 for urgent plumbing issues.
                  </p>
                  <div className="space-y-4">
                    {emergencyServices.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg border border-red-400/20">
                            <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold group-hover:text-red-100 transition-colors duration-300">{service.service}</h4>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{service.response}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-red-400 group-hover:translate-x-1 group-hover:text-red-300 transition-all duration-300" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-8 text-center">
                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 transition-all duration-300 rounded-xl shadow-lg border border-red-400/20 group">
                      <span className="flex items-center justify-center gap-3">
                        <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        Call Emergency Line
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}