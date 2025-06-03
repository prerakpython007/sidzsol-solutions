'use client';

import React, { useEffect, useRef, useState } from 'react';
import { playwriteHU } from '@/lib/fonts';
import OverlayParticles from './OverlayParticles';
import Image from 'next/image';

const contentSets = [
  {
    heading: <>Driving Innovation Through <br /> Intelligent Solutions</>,
    paragraph:
      'We craft cutting-edge solutions that blend creativity and technology, pushing boundaries to create impactful, future-ready experiences.',
    buttonText: 'Discover More',
  },
  {
    heading: 'Our Mission',
    paragraph:
      'To empower businesses and individuals with innovative tools that transform ideas into reality, fostering a future driven by creativity and technological advancement.',
    buttonText: 'Learn More',
  },
  {
    heading: 'Our Approach',
    paragraph:
      "We combine strategic thinking with advanced technology, delivering solutions that are both visionary and practical, tailored to each client’s unique needs.",
    buttonText: 'Explore Approach',
  },
  {
    heading: 'Our Impact',
    paragraph:
      'Our work redefines industries, creating lasting value through solutions that inspire and drive measurable results for our partners.',
    buttonText: 'See Impact',
  },
];

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const floatingRef1 = useRef<HTMLDivElement>(null);
  const floatingRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (floatingRef1.current) {
        floatingRef1.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
      if (floatingRef2.current) {
        floatingRef2.current.style.transform = `translateY(${scrollY * -0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#010003] flex items-center justify-center overflow-hidden z-10">
        <OverlayParticles />

        {/* Background video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover md:w-[200%]"
            style={{ transform: isMobile ? 'translateX(0)' : 'translateX(50%)' }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/bg3.mp4" type="video/mp4" />
          </video>
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" /> */}
        </div>

        {/* Cards Grid */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
            {contentSets.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transform-gpu transition-transform duration-300 hover:scale-[1.04] hover:rotate-[0.4deg]"
              >
                <h2 className={`${playwriteHU.className} text-xl sm:text-2xl font-semibold text-white mb-3`}>
                  {item.heading}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                  {item.paragraph}
                </p>
                <button className="px-4 py-2 rounded-md bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold hover:shadow-lg transition-all duration-300">
                  {item.buttonText}
                </button>

                {/* Floating elements */}
                {idx === 1 && (
                  <div
                    ref={floatingRef1}
                    className="absolute -top-10 -right-10 w-[100px] sm:w-[140px] h-[100px] sm:h-[140px] z-20 pointer-events-none opacity-80 transition-transform duration-300 ease-out"
                  >
                    <Image src="/about-element1.png" alt="Floating 1" fill className="object-contain" />
                  </div>
                )}
                {idx === 2 && (
                  <div
                    ref={floatingRef2}
                    className="absolute -bottom-10 -left-20 sm:-left-28 w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] z-20 pointer-events-none opacity-80 transition-transform duration-300 ease-out"
                  >
                    <Image src="/about-element2.png" alt="Floating 2" fill className="object-contain" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overlay Section */}
      <section className="relative w-full bg-black text-white z-20">
        <OverlayParticles />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-12">
          <h2 className="text-sm font-thin text-left mb-4">—— About Sidzsol Solutions</h2>
          <p className={`${playwriteHU.className} text-2xl sm:text-3xl leading-10 text-left text-gray-300`}>
            Turning ideas into <span className="text-[#0cf] font-semibold">reality</span>
            <br />
            through design and technology.
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mt-12 text-left">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Image
                  src="/element1.jpg"
                  alt="Element 1"
                  width={256}
                  height={256}
                  className="rounded-lg object-cover shadow-md w-full sm:w-auto"
                />
                <Image
                  src="/element2.jpg"
                  alt="Element 2"
                  width={256}
                  height={256}
                  className="rounded-lg object-cover shadow-md w-full sm:w-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/element3.jpg"
                  alt="Element 3"
                  width={256}
                  height={256}
                  className="rounded-lg object-cover shadow-md w-full sm:w-auto"
                />
              </div>
            </div>

            <div className="max-w-xl text-base sm:text-lg leading-7 text-gray-300">
              <p className="mb-6">
                Sidzsol Solutions is a dynamic tech startup dedicated to transforming ideas into scalable digital
                products. We harness the power of innovation to drive businesses forward in the ever-evolving digital
                landscape.
              </p>
              <p>
                Our team blends creative strategy with state-of-the-art technology, helping clients craft experiences
                that not only engage but inspire. Whether it’s product development, design systems, or digital
                transformation — we build the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
