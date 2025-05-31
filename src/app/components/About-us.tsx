import React, { useState, useEffect, useRef } from 'react';
import localFont from 'next/font/local';

const playwriteHU = localFont({
  src: '../../fonts/Playwrite_HU/static/PlaywriteHU-Regular.ttf',
  display: 'swap',
});

const About = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [hasEnteredAbout, setHasEnteredAbout] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

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
        'To empower businesses and individuals with innovative tools that transform ideas into reality, fostering a future driven by creativity.',
      buttonText: 'Learn More',
    },
    {
      heading: 'Our Approach',
      paragraph:
        'We combine strategic thinking with advanced technology, delivering solutions that are both visionary and practical.',
      buttonText: 'Explore Approach',
    },
    {
      heading: 'Our Impact',
      paragraph:
        'Our work redefines industries, creating lasting value through solutions that inspire and drive results.',
      buttonText: 'See Impact',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasEnteredAbout(true);
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!sectionRef.current || !hasEnteredAbout || isTransitioning) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (!inView || hasReachedEnd) return;

      setScrollAccumulator(prev => prev + Math.abs(event.deltaY));
      if (scrollAccumulator < 300) return;

      setIsTransitioning(true);
      setContentIndex(prev => {
        const newIndex = event.deltaY > 0 ? Math.min(prev + 1, contentSets.length - 1) : Math.max(prev - 1, 0);
        if (newIndex === contentSets.length - 1 && event.deltaY > 0) {
          setHasReachedEnd(true);
        }
        return newIndex;
      });
      setScrollAccumulator(0);
      setTimeout(() => setIsTransitioning(false), 1000);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isTransitioning, scrollAccumulator, contentIndex, hasEnteredAbout]);

  useEffect(() => {
    const handleScroll = () => {
      if (!overlayRef.current || !hasReachedEnd) return;
      const offsetTop = overlayRef.current.offsetTop;
      const scrollY = window.scrollY + window.innerHeight;
      const progress = Math.min(1, Math.max(0, (scrollY - offsetTop + 100) / 500));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasReachedEnd]);

  const currentContent = contentSets[contentIndex];

  return (
    <>
      <section
        ref={sectionRef}
        className="sticky top-0 h-screen bg-[#010003] flex items-center justify-center overflow-hidden z-10"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-[200%] h-full object-cover"
            style={{ transform: 'translateX(50%)' }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/bg3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container px-4 text-center md:text-left">
          <div
            key={contentIndex}
            className={`transition-all duration-700 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            } flex flex-col items-center md:items-start`}
          >
            <h1 className={`${playwriteHU.className} text-5xl md:text-7xl font-bold text-white mb-6`}>
              {currentContent.heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              {currentContent.paragraph}
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 hover:scale-105 transition duration-300">
              {currentContent.buttonText}
            </button>
          </div>
        </div>
      </section>

      <section
        ref={overlayRef}
        className="relative z-20 h-auto min-h-screen flex flex-col items-center justify-start bg-black px-4 transition-all duration-700 pb-20"
        style={{
          transform: `translateY(${100 - scrollProgress * 100}%)`,
          opacity: scrollProgress,
        }}
      >
        {/* Corner Angles - Moved inward and made sharper */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-cyan-400 rounded-tl-xl"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-cyan-400 rounded-tr-xl"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-cyan-400 rounded-bl-xl"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-cyan-400 rounded-br-xl"></div>

        {/* Ticker - Thinner gradient */}
        <div className="w-full bg-[#0cf] text-black py-1 overflow-hidden whitespace-nowrap relative">
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-black/80 to-transparent z-10"></div>
          <div className="animate-marquee text-white flex items-center space-x-10 px-10 text-sm font-medium">
            <span className="text-xl">✦</span>
            <span className="uppercase">Empowering Digital Dreams</span>
            <span className="text-xl">✦</span>
            <span className="uppercase">Driven by Innovation</span>
            <span className="text-xl">✦</span>
            <span className="uppercase">Building Future Experiences</span>
            <span className="text-xl">✦</span>
            <span className="uppercase">Design. Develop. Deliver.</span>
          </div>
        </div>

        {/* Additional Structured Content */}
        <div className="flex-1 w-full max-w-5xl mt-10 text-white space-y-12 px-4 md:px-0">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Our Vision for the Future</h2>
            <p className="text-lg text-gray-300">
              We envision a world where design and technology work in perfect harmony —
              empowering every business to thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-400">We prioritize innovation by investing in cutting-edge tools and experimenting with new approaches.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-3">Client-Centered</h3>
              <p className="text-gray-400">We build lasting relationships with our clients through transparency, empathy, and impactful results.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-3">Scalable Strategy</h3>
              <p className="text-gray-400">Our strategies scale with your business — adaptable, resilient, and always aligned with your vision.</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .animate-marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </section>
    </>
  );
};

export default About;
