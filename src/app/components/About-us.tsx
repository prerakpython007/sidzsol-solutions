'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { playwriteHU } from '@/lib/fonts';
import OverlayParticles from './OverlayParticles';
import Image from 'next/image';

const About = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeDirection, setFadeDirection] = useState<'up' | 'down' | null>(null);
  const [hasEnteredAbout, setHasEnteredAbout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const contentSets = [
    {
      heading: <>Driving Innovation Through <br /> Intelligent Solutions</>,
      paragraph: 'We craft cutting-edge solutions that blend creativity and technology, pushing boundaries to create impactful, future-ready experiences.',
      buttonText: 'Discover More',
    },
    {
      heading: 'Our Mission',
      paragraph: 'To empower businesses and individuals with innovative tools that transform ideas into reality, fostering a future driven by creativity and technological advancement.',
      buttonText: 'Learn More',
    },
    {
      heading: 'Our Approach',
      paragraph: "We combine strategic thinking with advanced technology, delivering solutions that are both visionary and practical, tailored to each client's unique needs.",
      buttonText: 'Explore Approach',
    },
    {
      heading: 'Our Impact',
      paragraph: 'Our work redefines industries, creating lasting value through solutions that inspire and drive measurable results for our partners.',
      buttonText: 'See Impact',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHasEnteredAbout(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (!hasEnteredAbout || isTransitioning) return;

      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect || rect.bottom < 0 || rect.top > window.innerHeight) return;

      const delta = Math.abs(event.deltaY);
      const scrollingDown = event.deltaY > 0;

      if (delta >= 100) {
        if (contentIndex === contentSets.length - 1 && scrollingDown) {
          // Scroll to the overlay section smoothly
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        } else {
          setFadeDirection(scrollingDown ? 'down' : 'up');
          setIsTransitioning(true);

          setTimeout(() => {
            setContentIndex((prevIndex) =>
              scrollingDown
                ? Math.min(prevIndex + 1, contentSets.length - 1)
                : Math.max(prevIndex - 1, 0)
            );
          }, 100);

          setTimeout(() => {
            setIsTransitioning(false);
            setFadeDirection(null);
          }, 600);
        }
      }
    },
    [hasEnteredAbout, isTransitioning, contentIndex, contentSets.length]
  );

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  const currentContent = contentSets[contentIndex];

  return (
    <div className="relative">
      {/* Hero Section - Removed sticky positioning */}
      <section
        ref={sectionRef}
        className="relative h-screen bg-[#010003] flex items-center justify-center overflow-hidden z-10"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover md:w-[200%] md:h-full"
            style={{ transform: isMobile ? 'translateX(0)' : 'translateX(50%)' }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/bg3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6 text-center md:text-left">
          <div
            key={contentIndex}
            className={`transition-all duration-700 ease-in-out ${
              fadeDirection ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
            } flex flex-col items-center md:items-start`}
          >
            <h1 className={`${playwriteHU.className} text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight`}>
              {currentContent.heading}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed max-w-2xl">
              {currentContent.paragraph}
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 hover:scale-105 transition duration-300">
              {currentContent.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* Overlay Section - Now a normal section without transform */}
      <section
        ref={overlayRef}
        className="relative w-full bg-black text-white z-20"
      >
        <OverlayParticles />

        <div className="w-full bg-[#82ACFF] text-black sticky top-0 z-30 overflow-hidden">
          <div className="relative w-full whitespace-nowrap">
            <div className="animate-marquee flex gap-10 text-sm py-1 px-6 font-medium uppercase text-white">
              {Array(2).fill(0).map((_, idx) => (
                <div key={idx} className="flex gap-10">
                  <span className="text-xl">✦</span>
                  <span className="my-1">Empowering Digital Dreams</span>
                  <span className="text-xl">✦</span>
                  <span className="my-1">Driven by Innovation</span>
                  <span className="text-xl">✦</span>
                  <span className="my-1">Building Future Experiences</span>
                  <span className="text-xl">✦</span>
                  <span className="my-1">Design. Develop. Deliver.</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 space-y-12">
          <h2 className="text-sm font-thin text-left mb-4">—— About Sidzsol Solutions</h2>
          <p className={`${playwriteHU.className} text-3xl leading-12 text-left text-gray-300`}>
            Turning ideas into <span className="text-[#0cf] font-semibold">reality</span><br />
            through design and technology.
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mt-16 text-left">
            <div className="space-y-10">
              <div className="flex justify-center gap-6">
                <Image 
                  src="/element1.jpg" 
                  alt="Element 1" 
                  width={256} 
                  height={256} 
                  className="rounded-lg object-cover shadow-md" 
                />
                <Image 
                  src="/element2.jpg" 
                  alt="Element 2" 
                  width={256} 
                  height={256} 
                  className="rounded-lg object-cover shadow-md" 
                />
              </div>
              <div className="flex justify-center">
                <Image 
                  src="/element3.jpg" 
                  alt="Element 3" 
                  width={256} 
                  height={256} 
                  className="rounded-lg object-cover shadow-md" 
                />
              </div>
            </div>

            <div className="max-w-xl text-xl leading-8 text-gray-300">
              <p className="mb-6">
                Sidzsol Solutions is a dynamic tech startup dedicated to transforming ideas into scalable digital products.
                We harness the power of innovation to drive businesses forward in the ever-evolving digital landscape.
              </p>
              <p>
                Our team blends creative strategy with state-of-the-art technology, helping clients craft experiences that
                not only engage but inspire. Whether it&apos;s product development, design systems, or digital transformation — we
                build the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default About;