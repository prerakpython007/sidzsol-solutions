'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Experimental UI Toolkit',
    subtitle: 'Modular interface system for rapid prototyping.',
    image: '/project-cover1.jpeg',
  },
  {
    id: 2,
    title: 'Virtual Workspace',
    subtitle: 'Immersive online collaboration environment.',
    image: '/project-cover2.jpeg',
  },
  {
    id: 3,
    title: 'Motion Identity',
    subtitle: 'Brand motion system for modern startups.',
    image: '/project-cover3.jpeg',
  },
  {
    id: 4,
    title: 'Data Visual Suite',
    subtitle: 'Interactive data dashboards and insights.',
    image: '/project-cover4.jpeg',
  },
  {
    id: 5,
    title: 'Neural Forms',
    subtitle: 'Adaptive UI/UX for AI applications.',
    image: '/project-cover5.jpeg',
  },
];

const abstractSVGs = [
  <svg className="absolute top-0 left-0 w-96 h-96 text-purple-500 opacity-10 blur-2xl" viewBox="0 0 200 200" fill="currentColor" key="svg1">
    <path d="M50,-60C66,-51,79,-33,79,-16C79,1,66,17,53,30C39,43,26,52,9,58C-8,63,-28,66,-41,56C-55,46,-62,23,-63,0C-64,-23,-59,-46,-45,-57C-32,-69,-11,-69,10,-70C31,-71,62,-69,50,-60Z" transform="translate(100 100)" />
  </svg>,
  <svg className="absolute bottom-10 right-0 w-80 h-80 text-blue-400 opacity-5 blur-3xl" viewBox="0 0 200 200" fill="currentColor" key="svg2">
    <path d="M49.5,-62.5C62.3,-53.2,70.6,-35.4,71.7,-18.7C72.9,-2,66.8,13.5,58.6,26.7C50.5,39.8,40.3,50.5,27.4,59.3C14.6,68.2,-0.9,75.1,-18.3,73.6C-35.5,72,-54.7,62.1,-64.8,46.7C-74.9,31.3,-76,10.4,-69.3,-6.2C-62.6,-22.8,-48,-35.1,-34.2,-44.2C-20.3,-53.3,-7.2,-59.2,9.6,-68.4C26.4,-77.6,52.7,-91.8,49.5,-62.5Z" transform="translate(100 100)" />
  </svg>,
];

const ProjectGallery = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftStyle = {
    transform: `translateY(${scrollY * -0.05}px)`,
  };
  const rightStyle = {
    transform: `translateY(${scrollY * 0.05}px)`,
  };

  return (
    <section className="relative bg-black py-20 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      {abstractSVGs}

      {/* Decorative parallax images */}
      <div className="absolute w-full h-full top-0 left-0 z-50 overflow-hidden pointer-events-none">
      <Image
  src="/project-element1.png"
  alt="element1"
  width={100}
  height={100}
  className="absolute left-[2%] sm:left-[0%] top-[75%] w-28 sm:w-44 md:w-52 lg:w-64 opacity-70 rotate-12 transition-transform duration-300 ease-out"
  style={leftStyle}
/>

<Image
  src="/project-element2.png"
  alt="element2"
  width={100}
  height={100}
  className="absolute right-[2%] sm:right-[7%] top-[10%] w-28 sm:w-44 md:w-52 lg:w-64 opacity-60 -rotate-6 transition-transform duration-300 ease-out"
  style={rightStyle}
/>
 <Image
  src="/project-element1.png"
  alt="element1"
  width={100}
  height={100}
  className="absolute left-[2%] sm:left-[0%] top-[75%] w-28 sm:w-44 md:w-52 lg:w-64 opacity-70 rotate-12 transition-transform duration-300 ease-out"
  style={leftStyle}
/>

<Image
  src="/project-element2.png"
  alt="element2"
  width={100}
  height={100}
  className="absolute right-[2%] sm:right-[7%] top-[10%] w-28 sm:w-44 md:w-52 lg:w-64 opacity-60 -rotate-6 transition-transform duration-300 ease-out"
  style={rightStyle}
/>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-16 text-center relative z-10">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto relative z-10">
        {/* Left column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Big Card */}
          <div className="rounded-2xl bg-[#0D0F14] border border-white/10 p-5 shadow-md h-full flex flex-col justify-between">
            <div className="w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] mb-6 overflow-hidden rounded-xl">

              <Image
                src={projects[0].image}
                alt={projects[0].title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-1 mt-1.5">{projects[0].title}</h3>
              <p className="text-gray-400 text-sm mb-3">{projects[0].subtitle}</p>
             <div className="flex flex-col sm:flex-row gap-4 mt-4">
  <button className="px-5 py-2 rounded-md text-sm font-medium text-black bg-[#B7FBFF] shadow-[0_0_20px_#B7FBFF] hover:shadow-[0_0_30px_#B7FBFF] transition">
    What is Sidzsol Solutions
  </button>
  <button className="px-5 py-2 rounded-md text-sm font-medium text-white bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition">
    View
  </button>
</div>
            </div>
          </div>

          {/* Two small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={projects[i].id}
                className="rounded-2xl bg-[#0D0F14] border border-white/10 p-5 shadow-md"
              >
                <div className="w-full aspect-video mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={projects[i].image}
                    alt={projects[i].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-1">{projects[i].title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{projects[i].subtitle}</p>
                  <button className="text-sm px-4 py-1 rounded bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 flex flex-col justify-between gap-6">
          {[3, 4].map((i) => (
            <div
              key={projects[i].id}
              className="rounded-2xl bg-[#0D0F14] border border-white/10 p-5 shadow-md flex-1"
            >
              <div className="w-full aspect-video mb-4 overflow-hidden rounded-xl">
                <Image
                  src={projects[i].image}
                  alt={projects[i].title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-1 mt-2">{projects[i].title}</h3>
                <p className="text-gray-400 text-sm mb-3">{projects[i].subtitle}</p>
                <button className="text-sm px-4 py-1 rounded bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className='flex justify-end mt-14 mr-20'>
      <a href="">View More &gt;&gt;</a>
      </div>
    </section>
  );
};

export default ProjectGallery;
