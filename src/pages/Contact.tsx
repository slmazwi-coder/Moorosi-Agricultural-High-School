import React from 'react';
import { Phone, MapPin, Facebook, Clock, Mail, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl p-6 border-2 border-[#A8D1EF] bg-[#D6EAF8]">
              <h2 className="text-lg font-bold text-school-green mb-4">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="shrink-0 mt-0.5 text-school-green" size={20} />
                  <div>
                    <p className="font-semibold">Physical Address</p>
                    <p className="text-sm text-gray-500">Fiva Location, Ludidi A/A, Maluti, 4730</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="shrink-0 mt-0.5 text-school-green" size={20} />
                  <div>
                    <p className="font-semibold">Postal Address</p>
                    <p className="text-sm text-gray-500">P.O. Box 38873, Matatiele, 4730</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Phone className="shrink-0 mt-0.5 text-school-green" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-gray-500">060 886 2692</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="shrink-0 mt-0.5 text-school-green" size={20} />
                  <div>
                    <p className="font-semibold">District</p>
                    <p className="text-sm text-gray-500">Alfred Nzo West Education District</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="shrink-0 mt-0.5 text-school-green" size={20} />
                  <div>
                    <p className="font-semibold">Province</p>
                    <p className="text-sm text-gray-500">Eastern Cape</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <div className="shrink-0 mt-0.5 text-school-green" size={20}>
                    <span className="font-bold">👨‍💼</span>
                  </div>
                  <div>
                    <p className="font-semibold">Principal</p>
                    <p className="text-sm text-gray-500">Mr W.T. Mjomle</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 border-2 border-[#A8D1EF] bg-[#D6EAF8]">
              <h2 className="text-lg font-bold text-school-green mb-2">EMIS & Exam Centre Information</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>EMIS Number:</strong> 200501015</p>
                <p><strong>Exam Centre:</strong> Moorosi Agricultural School – 4251086</p>
                <p><strong>Fee Status:</strong> No-Fee Public School</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 border-2 border-[#A8D1EF] bg-school-green text-white">
              <h2 className="text-lg font-bold mb-2">Admissions</h2>
              <p className="text-sm text-white/80 mb-4">Applications for Grades 8–12 are open. Contact us to learn more about the admissions process.</p>
              <a href="/admissions" className="inline-block bg-white text-school-green px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Apply Online</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl p-6 border-2 border-[#A8D1EF] bg-[#D6EAF8]">
            <h2 className="text-lg font-bold text-school-green mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Full Name *</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-school-green/40" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Phone Number *</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-school-green/40" placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Email (optional)</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-school-green/40" placeholder="Enter your email address" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Subject *</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-school-green/40 bg-white">
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions</option>
                  <option value="general">General Enquiry</option>
                  <option value="learnerships">Learnerships</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Message *</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-school-green/40 h-32" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="w-full bg-school-green text-white py-2.5 rounded-lg font-semibold hover:bg-[#2E6DA4] transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
