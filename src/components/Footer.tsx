import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white pt-12 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* Col 1 — Logo + Name + Socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-school-green overflow-hidden border border-white/20 shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-base font-bold leading-tight">Moorosi Agricultural High School</h3>
                <p className="text-sm italic mt-0.5" style={{ color: '#5BA4D4' }}>"Invest Through Land"</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/27608862692" target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><Link to="/" className="hover:text-[#5BA4D4] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#5BA4D4] transition-colors">About Us</Link></li>
              <li><Link to="/subjects" className="hover:text-[#5BA4D4] transition-colors">Academics</Link></li>
              <li><Link to="/activities" className="hover:text-[#5BA4D4] transition-colors">Facilities</Link></li>
              <li><Link to="/admissions" className="hover:text-[#5BA4D4] transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-[#5BA4D4] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5" size={16} />
                <span>Fiva Location, Ludidi A/A, Maluti, 4730</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>060 886 2692</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5" size={16} />
                <span>P.O. Box 38873, Matatiele, 4730</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: '#5BA4D4' }}>Principal</h4>
              <p className="text-sm text-white/80">Mr W.T. Mjomle</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/60 text-xs">
          <p>© {new Date().getFullYear()} Moorosi Agricultural High School. All Rights Reserved.</p>
          <p className="mt-1 text-white/40">Est. 2017 · Fiva Location, Ludidi A/A, Maluti, Eastern Cape · No-Fee Public School</p>
          <p className="mt-1 text-white/40">Alfred Nzo West Education District</p>
          <Link to="/admin/login" className="text-white/30 hover:text-white/60 text-xs mt-2 inline-block transition-colors">
            Staff Portal
          </Link>
        </div>
      </div>
    </footer>
  );
};
