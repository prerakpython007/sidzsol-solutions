'use client';

import { playwriteHU } from '@/lib/fonts';
import React, { useMemo } from 'react';

const Contact = () => {
  const bgElements = [
    { src: '/element1.jpg', className: 'top-10 right-10' },
    { src: '/element2.jpg', className: 'bottom-16 left-16' },
    { src: '/element1.jpg', className: 'top-1/4 left-1/4' },
    { src: '/element2.jpg', className: 'bottom-10 right-1/3' },
  ];

  const getRandomSize = () => {
    const sizes = [180, 220, 300, 360];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const randomizedElements = useMemo(
    () =>
      bgElements.map((el, index) => ({
        ...el,
        size: getRandomSize(),
        delay: `${index * 3}s`,
      })),
    []
  );

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col items-center bg-black justify-center px-4 sm:px-8 py-16 relative overflow-hidden"
    >
      {/* Background Rotating Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {randomizedElements.map((el, idx) => (
          <img
            key={idx}
            src={el.src}
            alt="bg element"
            className={`absolute ${el.className} opacity-30 animate-rotateSlow`}
           style={{width:"220px",animationDelay:"0s"}}
          />
        ))}
      </div>

      {/* Ticker with side blur fades */}
      <div className="absolute top-0 w-full overflow-hidden z-10">
        <div className="relative w-full">
          <div className="absolute left-0 top-0 h-full w-72 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-72 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />

          <div className="whitespace-nowrap animate-marquee text-[10vw] font-extrabold select-none tracking-widest">
            <span className="mx-8 text-[#8F71FF] drop-shadow-[0_0_5px_#8F71FF]">SIDZSOL</span>
            <span className="mx-8 text-[#82ACFF] drop-shadow-[0_0_5px_#82ACFF]">SIDZSOL</span>
            <span className="mx-8 text-[#8F71FF] drop-shadow-[0_0_5px_#8F71FF]">SIDZSOL</span>
            <span className="mx-8 text-[#82ACFF] drop-shadow-[0_0_5px_#82ACFF]">SIDZSOL</span>
          </div>
        </div>
      </div>

      {/* Content: Video + Text */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center z-10 mt-24">
        <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
          <div className="relative w-72 sm:w-96 h-auto rounded-xl overflow-hidden shadow-lg">
            <video
              src="/contact-vid.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-white px-4 sm:px-8">
          <div className="backdrop-blur-md p-8 rounded-2xl shadow-md">
            <h2
              className={`${playwriteHU.className} text-3xl sm:text-6xl text-[#B7FBFF] drop-shadow-[0_0_5px_#82ACFF] font-bold mb-4 text-center flex flex-wrap justify-center`}
            >
              {"Let's Connect!".split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-letterFade"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationIterationCount: 'infinite',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed text-center sm:text-left">
              Have an <span className="text-[#B7FBFF] font-semibold drop-shadow-[0_0_4px_#B7FBFF]">idea</span>,{' '}
              <span className="text-[#B7FBFF] font-semibold drop-shadow-[0_0_4px_#B7FBFF]">question</span>, or just want to say{' '}
              <span className="text-[#B7FBFF] font-semibold drop-shadow-[0_0_4px_#B7FBFF]">hi?</span>{' '}
              Reach out and let’s talk — we’re here to help you{' '}
              <span className="text-[#82ACFF] font-semibold drop-shadow-[0_0_4px_#82ACFF] animate-pulse">build something amazing</span>.
            </p>

            <a
              href="#form"
              className="relative inline-block px-6 py-3 text-black font-semibold rounded-full bg-[#B7FBFF] hover:bg-white transition-all duration-300 shadow-[0_0_12px_#B7FBFF] hover:shadow-[0_0_20px_#B7FBFF] overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
