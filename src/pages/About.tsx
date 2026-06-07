import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';

export const About = () => {
  const [campusFailed, setCampusFailed] = useState(false);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="section-title">About Moorosi Agricultural High School</h1>

        {/* Our School */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="border-l-4 pl-5 mb-6" style={{ borderColor: '#5BA4D4' }}>
              <h2 className="text-2xl font-bold text-school-green">Our School</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>Moorosi Agricultural High School is a public agricultural secondary school established in 2017, located at Fiva Location, Ludidi A/A, Maluti, in the Eastern Cape. We operate under the Alfred Nzo West Education District within the Elundini Local Municipality.</p>
              <p>Our motto — <strong>"Invest Through Land"</strong> — is the foundation of everything we do. We believe that the land is not just soil; it is opportunity, livelihood, and legacy. We equip learners with the academic foundation and hands-on agricultural skills to develop, nurture, and build sustainable futures from the land they live on.</p>
              <p>As one of the few specialised agricultural high schools in the Alfred Nzo region, we offer a learning environment unlike any other — combining classroom education with real livestock management, poultry farming, crop production, and agribusiness principles.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#eef0f7] h-[280px] sm:h-[360px]"
          >
            {!campusFailed ? (
              <img
                src="/assets/about/school_building.png"
                alt="Moorosi Agricultural High School campus"
                className="w-full h-full object-cover"
                onError={() => setCampusFailed(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#5BA4D4] via-[#2E6DA4] to-[#1A4A6B] flex items-center justify-center">
                <div className="text-center text-white/70 px-6">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                    <ImageIcon />
                  </div>
                  <div className="font-semibold">Campus image</div>
                  <div className="text-sm text-white/60 font-mono">public/assets/about/</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Principal's Message */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-school-green mb-2">Principal's Message</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#5BA4D4' }} />
          </div>

          <div className="bg-[#D6EAF8] rounded-3xl overflow-hidden shadow-lg border border-[#A8D1EF]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center bg-school-green p-8 md:p-10">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 shadow-xl mb-5" style={{ borderColor: '#5BA4D4' }}>
                  <div className="w-full h-full flex items-center justify-center bg-[#2E6DA4]">
                    <span className="text-white font-bold text-5xl">M</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white text-center leading-tight">Mr. W.T. Mjomle</h3>
                <p className="text-sm font-semibold mt-1 text-center" style={{ color: '#A8D1EF' }}>Principal</p>
                <div className="w-10 h-0.5 mt-4 rounded-full opacity-60" style={{ backgroundColor: '#5BA4D4' }} />
              </div>

              <div className="col-span-2 flex flex-col justify-center p-8 md:p-12">
                <div className="text-6xl font-serif leading-none mb-2 opacity-40 select-none" style={{ color: '#5BA4D4' }}>"</div>
                <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>At Moorosi Agricultural High School, we believe that education and agriculture go hand in hand. Our learners do not simply read about farming — they live it, from caring for livestock to preparing soil and harvesting crops.</p>
                  <p>We are committed to providing quality education to the learners of Fiva Location and the surrounding areas. Our unique agricultural specialisation sets us apart, giving our graduates practical skills they can apply immediately.</p>
                  <p>As a No-Fee public school, we are accessible to all qualifying learners in the Alfred Nzo West District. We invite families and learners to join us in this journey of growth, learning, and agricultural excellence.</p>
                </div>
                <div className="text-6xl font-serif leading-none mt-2 text-right opacity-40 select-none" style={{ color: '#5BA4D4' }}>"</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Facts */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-school-green mb-2">Key Facts</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#5BA4D4' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Established', value: '2017' },
              { label: 'School Type', value: 'No-Fee Public School' },
              { label: 'Grades', value: 'Grade 8 – 12' },
              { label: 'Location', value: 'Fiva Location, Maluti' },
            ].map((fact, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow border border-gray-100 border-b-4" style={{ borderBottomColor: '#5BA4D4' }}>
                <p className="text-2xl font-bold text-school-green">{fact.value}</p>
                <p className="text-gray-500 font-medium mt-1">{fact.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Stats Row */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-school-green mb-2">Our School at a Glance</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#5BA4D4' }} />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌱', label: 'Established', value: '2017' },
              { icon: '👨‍🎓', label: 'Grades', value: '8 – 12' },
              { icon: '👩‍🏫', label: 'Educators', value: '7' },
              { icon: '🐄', label: 'Learners', value: '140+' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#D6EAF8] rounded-2xl p-6 text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <p className="text-3xl font-bold text-school-green">{stat.value}</p>
                <p className="text-gray-600 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};
