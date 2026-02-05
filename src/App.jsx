import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronRight, 
  Settings, Truck, ShieldCheck, Box, HardHat, 
  ArrowRight, Search, Zap, Layers 
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryStatus, setInquiryStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInquiry = (e) => {
    e.preventDefault();
    setInquiryStatus('sending');
    setTimeout(() => {
      setInquiryStatus('success');
      setTimeout(() => setInquiryStatus('idle'), 3000);
      e.target.reset();
    }, 2000);
  };

  const productCategories = [
    { 
      title: "Hydraulic Pumps", 
      desc: "High-performance hydraulic pumps, valves, and cylinders for heavy industrial machinery.",
      icon: <Settings size={32} />,
      img: "https://images.unsplash.com/photo-1581092163562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Safety & PPE", 
      desc: "Complete head-to-toe protection gear ensuring workplace compliance and safety.",
      icon: <HardHat size={32} />,
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Electrical Components", 
      desc: "High-voltage breakers, transformers, and industrial automation controls.",
      icon: <Zap size={32} />,
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Logistics & Storage", 
      desc: "Racking systems, pallets, and material handling solutions for efficient warehousing.",
      icon: <Layers size={32} />,
      img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-600 selection:text-white">
      
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-400 py-2 text-xs border-b border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail size={14} className="text-orange-500" /> obb@quadrantstar.com
            </span>
            <span className="hidden md:flex items-center gap-2">
              <MapPin size={14} className="text-orange-500" /> Pakil, Philippines
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-wider font-bold text-orange-500 text-[10px]">Industrial • Commercial • Technical</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white border-b border-slate-100 py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-4 h-4 bg-orange-500 transform rotate-45 translate-x-2 -translate-y-2"></div>
              <Box size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-slate-900 tracking-tight uppercase group-hover:text-orange-600 transition-colors">QUADRANT STAR</span>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Industrial Supplies</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Products', 'Solutions', 'About Us', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-bold text-slate-600 hover:text-slate-900 border-b-2 border-transparent hover:border-orange-500 transition-all py-1 uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors flex items-center gap-2 rounded-sm"
            >
              Request Quote <ChevronRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
             {['Products', 'Solutions', 'About Us', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-800"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-slate-900 overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80" 
            alt="Industrial Warehouse" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/20" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-block px-3 py-1 bg-orange-600/10 border border-orange-500/30 rounded text-orange-500 text-xs font-bold uppercase tracking-widest">
              Commercial & Industrial Equipment
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Powering the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">
                Supply Chain.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Quadrant Star delivers premium industrial components, heavy machinery parts, and safety equipment to keep your operations running 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="px-8 py-4 bg-orange-600 text-white font-bold uppercase tracking-wider hover:bg-orange-700 transition-all text-center rounded-sm">
                View Catalog
              </a>
              <a href="#contact" className="px-8 py-4 border border-slate-600 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all text-center rounded-sm">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-orange-600 text-white py-12 relative z-20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "Availability", value: "24/7", icon: <Truck size={24} /> },
             { label: "Products", value: "5000+", icon: <Box size={24} /> },
             { label: "Service", value: "Nationwide", icon: <MapPin size={24} /> },
             { label: "Quality", value: "ISO Std", icon: <ShieldCheck size={24} /> },
           ].map((stat, i) => (
             <div key={i} className="flex flex-col items-center text-center border-r last:border-r-0 border-white/20">
               <div className="mb-2 opacity-80">{stat.icon}</div>
               <span className="text-3xl font-black">{stat.value}</span>
               <span className="text-xs uppercase font-bold opacity-75 tracking-widest">{stat.label}</span>
             </div>
           ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about-us" className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute top-4 -left-4 w-full h-full border-4 border-slate-100 rounded-lg"></div>
             <img 
               src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80" 
               alt="Industrial Team" 
               className="relative rounded-lg shadow-2xl w-full object-cover h-[400px]"
             /> {/* Fixed: Reliable About Us Image */}
             <div className="absolute -bottom-6 -right-6 bg-slate-900 p-8 rounded-lg shadow-xl max-w-xs hidden md:block">
               <p className="text-white font-bold text-lg mb-2">Based in Pakil, Laguna</p>
               <p className="text-slate-400 text-sm">Strategically located to serve the Calabarzon industrial corridor.</p>
             </div>
          </div>
          <div>
            <h2 className="text-orange-600 font-bold tracking-widest uppercase mb-4 text-sm">About Quadrant Star</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">Your Strategic Partner in Industry</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              In the fast-paced world of manufacturing and logistics, downtime is not an option. Quadrant Star Industrial Supplies was founded on a simple premise: reliability.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We supply high-grade commercial and industrial equipment, ensuring that your facility has the parts, tools, and safety gear needed to operate at peak efficiency. From the Mary Grace Suite Bldg. in Pakil, we coordinate logistics to deliver what you need, when you need it.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><ShieldCheck size={16}/></div>
                Certified Parts
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Truck size={16}/></div>
                Fast Logistics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-24 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-orange-600 font-bold tracking-widest uppercase mb-2 text-sm">Our Capabilities</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-4">Industrial Solutions</h3>
              <p className="text-slate-500">We source premium equipment across various sectors to ensure your operations never stall.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 hover:text-orange-600 hover:border-orange-600 transition-colors pb-1">
              Download Full Catalog <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat, idx) => (
              <div key={idx} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"/>
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-orange-600 z-20 shadow-md">
                    {cat.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <span className="text-orange-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Products <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry / Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-sm">Get in Touch</h2>
              <h3 className="text-4xl font-black mb-8">Ready to Optimize Your Supply Chain?</h3>
              <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                Whether you need a specific replacement part or a long-term supply contract, our team is ready to assist. We are always open.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center text-orange-500 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Head Office</h4>
                    <p className="text-slate-400">
                      2F, Unit 203, Mary Grace Suite Bldg.<br/>
                      Pakil, Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center text-orange-500 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-slate-400">obb@quadrantstar.com</p>
                    <p className="text-slate-500 text-xs mt-1">Response time: within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center text-orange-500 shrink-0">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Logistics</h4>
                    <p className="text-slate-400">Nationwide delivery available for bulk orders.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white text-slate-800 p-8 rounded-lg shadow-2xl">
              <h4 className="text-2xl font-bold mb-6">Send an Inquiry</h4>
              <form onSubmit={handleInquiry} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-500">First Name</label>
                    <input type="text" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-500">Last Name</label>
                    <input type="text" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-orange-500 transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">Email Address</label>
                  <input type="email" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-orange-500 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">Product Interest</label>
                  <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-orange-500 transition-colors">
                    <option>General Inquiry</option>
                    <option>Heavy Equipment Parts</option>
                    <option>Safety Gear (PPE)</option>
                    <option>Electrical Components</option>
                    <option>Bulk Order</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">Message</label>
                  <textarea rows="4" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-orange-500 transition-colors"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={inquiryStatus !== 'idle'}
                  className="w-full py-4 bg-orange-600 text-white font-bold uppercase tracking-widest rounded hover:bg-orange-700 transition-all flex items-center justify-center gap-2"
                >
                  {inquiryStatus === 'idle' ? 'Submit Inquiry' : inquiryStatus === 'sending' ? 'Sending...' : 'Sent Successfully'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <Box size={20} className="text-orange-600" />
               <span className="text-lg font-black text-white tracking-tight uppercase">QUADRANT STAR</span>
            </div>
            <p className="text-xs">© {new Date().getFullYear()} Quadrant Star Industrial Supplies. Pakil, Philippines.</p>
            <div className="flex gap-4 text-sm font-bold">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
