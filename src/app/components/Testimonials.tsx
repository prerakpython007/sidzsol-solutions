// components/TestimonialScroller.tsx
'use client';

import React from 'react';

const testimonials = [
  { id: 1, name: 'Alice', text: 'Sidzsol delivered beyond expectations.' },
  { id: 2, name: 'Bob', text: 'Innovative, fast, and efficient.' },
  { id: 3, name: 'Charlie', text: 'Their work redefined our process.' },
  { id: 4, name: 'Dana', text: 'Amazing quality and speed.' },
  { id: 5, name: 'Eli', text: 'Best tech team we’ve worked with.' },
  { id: 6, name: 'Faye', text: 'Reliable and forward-thinking.' },
  { id: 7, name: 'George', text: 'Exceeded our digital expectations.' },
  { id: 8, name: 'Hannah', text: 'Professional and creative thinkers.' },
];

const duplicated = [...testimonials, ...testimonials, ...testimonials]; // extend for continuous effect

const TestimonialScroller = () => {
  return (
    <div className="relative overflow-hidden z-10 bg-black text-white px-4 py-12">
      <h2 className="text-center text-2xl md:text-4xl font-semibold mb-8">
        What Our Clients Say
      </h2>

      {/* Fade below title */}
        <div className="pointer-events-none absolute top-29 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Top and bottom fades */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="flex justify-center gap-8 h-[500px] relative overflow-hidden">
        {[0, 1, 2].map((colIndex) => (
          <div
            key={colIndex}
            className={`w-[320px] animate-infinite-scroll space-y-6 ${
              colIndex === 1 ? 'mt-0' : colIndex === 0 ? 'mt-12' : 'mt-20'
            }`}
            style={{ animationDelay: `${colIndex * 2}s` }}
          >
            {duplicated.map((item, idx) => (
              <div
                key={`${colIndex}-${idx}`}
                className="p-6 bg-black/80 border border-white/20 rounded-lg shadow-md transition transform hover:scale-[1.02]"
              >
                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  “{item.text}”
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">— {item.name}</span>
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
            ))}
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
          animation: infinite-scroll 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialScroller;
