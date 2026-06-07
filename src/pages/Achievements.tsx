import React from 'react';
import { motion } from 'motion/react';
import { Trophy, TrendingUp, Award, Star } from 'lucide-react';

const achievements = [
  {
    year: '2025',
    title: 'Matric Pass Rate 78.3%',
    description: 'The Class of 2025 achieved a remarkable 78.3% matric pass rate — up from 71% the previous year. A total of 108 learners passed, reflecting the dedication of both staff and learners.',
    icon: Trophy,
    highlight: true,
  },
  {
    year: '2024',
    title: 'Matric Pass Rate 71%',
    description: 'Strong performance by the Class of 2024, laying the foundation for continued improvement in academic results.',
    icon: TrendingUp,
    highlight: false,
  },
  {
    year: 'Ongoing',
    title: 'Urban Vertical Farming Programme',
    description: 'Successful implementation of an urban vertical farming system — growing onions and leafy greens in wall-mounted guttering systems, introducing learners to modern farming techniques.',
    icon: Award,
    highlight: false,
  },
  {
    year: 'Ongoing',
    title: 'Community Potato & Vegetable Distribution',
    description: 'Regular harvest events where learners grow, harvest, bag, and distribute potatoes and onions to the wider school community — living out the motto "Let There Be Production."',
    icon: Star,
    highlight: false,
  },
];

export const Achievements = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Achievements</h1>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-12 -mt-4">
          We celebrate the academic excellence and agricultural accomplishments of our learners and staff.
        </p>

        {/* Matric highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden mb-12 shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #7B1C1C 0%, #5a1414 100%)' }}
        >
          <div className="p-8 sm:p-12 text-center text-white">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Trophy size={36} style={{ color: '#C9A84C' }} />
              </div>
            </div>
            <p className="text-white/70 uppercase tracking-widest text-sm font-bold mb-2">Class of 2025</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">78.3%</h2>
            <p className="text-xl text-white/80 mb-1">Matric Pass Rate</p>
            <p className="text-white/60 mb-6">Improved from 71% · 108 Learners Passed</p>
            <div className="flex justify-center gap-2 flex-wrap">
              <span className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold">#ClassOf2025</span>
              <span className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold">#ProudSchool</span>
            </div>
          </div>
        </motion.div>

        {/* All achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl p-6 border-2 ${a.highlight ? 'border-school-green bg-red-50' : 'border-gray-100 bg-white'} shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-school-green/10 text-school-green shrink-0">
                  <a.icon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-school-green uppercase tracking-widest">{a.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
