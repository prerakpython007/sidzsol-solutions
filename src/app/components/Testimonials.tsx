'use client';

import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alice',
    role: 'CTO, NexaSoft',
    text: 'Sidzsol delivered beyond expectations. Their team quickly understood our complex requirements and executed flawlessly. Communication was always smooth and professional.',
  },
  {
    id: 2,
    name: 'Bob',
    role: 'Product Manager, WaveTech',
    text: 'Innovative, fast, and efficient. They helped us redesign our platform UI, resulting in a 30% increase in engagement. Their design system is brilliant.',
  },
  {
    id: 3,
    name: 'Charlie',
    role: 'Founder, Stratix',
    text: 'Their work redefined our process. With Sidzsol, our deployment pipelines are now automated, saving us hours weekly. We truly value the partnership.',
  },
  {
    id: 4,
    name: 'Dana',
    role: 'COO, Urban AI',
    text: 'Amazing quality and speed. The team helped launch our MVP in record time. We got real-time updates and iterations without friction.',
  },
  {
    id: 5,
    name: 'Eli',
    role: 'Tech Lead, Arclite',
    text: 'Best tech team we’ve worked with. Their attention to scalability and detail stood out. Code reviews were clean, and every sprint was efficient.',
  },
  {
    id: 6,
    name: 'Faye',
    role: 'CEO, BloomEdge',
    text: 'Reliable and forward-thinking. We trusted them with our core infrastructure — and they exceeded every metric we set.',
  },
  {
    id: 7,
    name: 'George',
    role: 'Head of Engineering, Omega Labs',
    text: 'Exceeded our digital expectations. The UX, DevOps setup, and analytics integration were all delivered ahead of schedule.',
  },
  {
    id: 8,
    name: 'Hannah',
    role: 'Co-Founder, VibeMark',
    text: 'Professional and creative thinkers. They helped us ideate, design, and deliver a unique platform in our niche market. We’re getting rave reviews.',
  },
];

const duplicated = [...testimonials, ...testimonials, ...testimonials];

const softTint = [
  'bg-gradient-to-br from-white/5 via-[#3b82f6]/5 to-white/5',
  'bg-gradient-to-br from-white/5 via-[#a855f7]/5 to-white/5',
  'bg-gradient-to-br from-white/5 via-[#10b981]/5 to-white/5',
];

const svgIcons = [
  <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="40" fill="#3b82f6" />
    <circle cx="40" cy="40" r="10" fill="#fff" />
    <circle cx="60" cy="40" r="10" fill="#fff" />
    <path d="M35 65 Q50 80 65 65" stroke="#fff" strokeWidth="5" fill="none" />
  </svg>,
  <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
    <rect x="20" y="20" width="60" height="60" rx="30" fill="#a855f7" />
    <circle cx="50" cy="45" r="8" fill="#fff" />
    <path d="M35 65 Q50 75 65 65" stroke="#fff" strokeWidth="4" fill="none" />
  </svg>,
  <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="40" fill="#10b981" />
    <circle cx="50" cy="40" r="10" fill="#fff" />
    <path d="M35 65 Q50 75 65 65" stroke="#fff" strokeWidth="4" fill="none" />
  </svg>,
];

const TestimonialScroller = () => {
  return (
    <div className="relative overflow-hidden z-10 bg-black text-white px-4 py-12">
      <h2 className="text-center font-extralight text-3xl md:text-6xl pb-20">
        What Our Clients Say
      </h2>

      {/* Fade Effects */}
      <div className="pointer-events-none absolute top-40 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="flex justify-center gap-8 h-[360px] md:h-[500px] relative overflow-hidden flex-col md:flex-row items-center md:items-start">
        {[0, 1, 2].map((colIndex) => (
          <div
            key={colIndex}
            className={`w-[320px] animate-infinite-scroll space-y-6 ${
              colIndex === 1 ? 'mt-0' : colIndex === 0 ? 'mt-12' : 'mt-20'
            } ${colIndex > 0 ? 'hidden md:block' : ''}`}
            style={{ animationDelay: `${colIndex * 2}s` }}
          >
            {duplicated.map((item, idx) => {
              const tint = softTint[(idx + colIndex) % softTint.length];
              const avatar = svgIcons[(idx + colIndex) % svgIcons.length];
              return (
                <div
                  key={`${colIndex}-${idx}`}
                  className={`p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md transition-transform hover:scale-[1.02] ${tint}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="rounded-full overflow-hidden bg-white/10 mr-3">{avatar}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-100 text-sm leading-relaxed italic">
                    “{item.text}”
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialScroller;
