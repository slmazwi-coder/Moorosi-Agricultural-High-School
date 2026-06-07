import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sprout, Beef, FlaskConical, BookOpen, Calculator, Users, Briefcase } from 'lucide-react';

const subjects = [
  {
    category: 'Academic Subjects',
    color: 'bg-[#D6EAF8] border-[#A8D1EF]',
    iconColor: 'text-school-green',
    items: [
      { name: 'Mathematics', icon: Calculator, description: 'Strong mathematical foundations for all learners, preparing them for further studies and practical applications in agriculture and business.' },
      { name: 'Life Sciences', icon: FlaskConical, description: 'The study of living organisms — complementing agricultural science with biology, ecology, and environmental studies.' },
      { name: 'English', icon: BookOpen, description: 'Language of instruction. Reading, writing, communication, and literary analysis — a foundational subject for all learners.' },
      { name: 'Agricultural Science', icon: Sprout, description: 'The science behind farming — soil science, plant biology, pest control, and modern agricultural technologies.' },
      { name: 'Agricultural Management Practices', icon: Beef, description: 'Practical farming management including livestock care, crop production, and farm planning.' },
      { name: 'Business Studies / EMS', icon: Briefcase, description: 'Entrepreneurship and business management skills, preparing learners for agribusiness and self-employment.' },
    ]
  },
  {
    category: 'Practical Training',
    color: 'bg-[#D6EAF8] border-[#A8D1EF]',
    iconColor: 'text-school-green',
    items: [
      { name: 'Sheep & Livestock Farming', icon: Beef, description: 'Hands-on training in sheep and small livestock management, animal health, and husbandry practices.' },
      { name: 'Poultry Rearing', icon: Sprout, description: 'Broiler chicken rearing programme with day-old chick incubation and brooder management.' },
      { name: 'Crop Production', icon: FlaskConical, description: 'Field preparation, planting, cultivation, and harvesting of crops as part of daily agricultural education.' },
      { name: 'Agricultural Field Trips', icon: Users, description: 'Regular farm visits and field trips to expose learners to commercial agriculture and agribusiness operations.' },
      { name: 'Agribusiness & Co-operatives', icon: Briefcase, description: 'Training in forming and managing agricultural co-operatives and understanding agribusiness principles.' },
    ]
  }
];

export const Subjects = () => {
  const [activeCategory, setActiveCategory] = useState('Academic Subjects');
  const current = subjects.find(s => s.category === activeCategory)!;

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="section-title">Curriculum & Specialisation</h1>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10 -mt-4">
          Our school combines strong academic subjects with practical agricultural training — offered from Grade 8 through Grade 12. Every learner gets hands-on experience with the land.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {subjects.map(s => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${activeCategory === s.category ? 'bg-school-green text-white border-school-green' : 'bg-white text-school-green border-school-green hover:bg-blue-50'}`}
            >
              {s.category}
            </button>
          ))}
        </div>

        {/* Subjects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map((subj, i) => (
            <motion.div
              key={subj.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              className={`rounded-2xl border-2 p-6 hover:shadow-md transition-shadow ${current.color}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm ${current.iconColor}`}>
                <subj.icon size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{subj.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{subj.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-14 rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #5BA4D4, #2E6DA4)' }}>
          <p className="text-white/80 text-sm uppercase tracking-widest font-bold mb-2">Our Philosophy</p>
          <h2 className="text-2xl font-bold text-white mb-3">"We don't just teach agriculture — we live it."</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Our learners work with animals, prepare land, and manage crops as part of their daily education. This is what makes Moorosi Agricultural High School unique.
          </p>
          <a href="/admissions" className="mt-6 inline-block bg-white text-school-green font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
            Apply Now
          </a>
        </div>

      </div>
    </div>
  );
};
