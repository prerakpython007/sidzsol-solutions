'use client';

import { motion, useSpring } from 'framer-motion';
import { ArrowUpRight, Code, Blocks, Database, Cloud, Lock, Smartphone } from 'lucide-react';
import { useRef, useEffect, useState, useMemo } from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive web applications built with Next.js and React',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-blue-500',
    gradient: 'from-blue-500 via-blue-400 to-blue-600'
  },
  {
    title: 'App Architecture',
    description: 'Scalable and maintainable application architecture design',
    icon: <Blocks className="w-6 h-6" />,
    color: 'bg-purple-500',
    gradient: 'from-purple-500 via-purple-400 to-purple-600'
  },
  {
    title: 'Database Solutions',
    description: 'Efficient database design and optimization services',
    icon: <Database className="w-6 h-6" />,
    color: 'bg-green-500',
    gradient: 'from-green-500 via-green-400 to-green-600'
  },
  {
    title: 'Cloud Services',
    description: 'AWS and cloud infrastructure management',
    icon: <Cloud className="w-6 h-6" />,
    color: 'bg-orange-500',
    gradient: 'from-orange-500 via-orange-400 to-orange-600'
  },
  {
    title: 'Cyber Security',
    description: 'Advanced security solutions and best practices',
    icon: <Lock className="w-6 h-6" />,
    color: 'bg-red-500',
    gradient: 'from-red-500 via-red-400 to-red-600'
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile application development',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'bg-cyan-500',
    gradient: 'from-cyan-500 via-cyan-400 to-cyan-600'
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shuffledIndices = useMemo(() => {
    return Array.from({ length: services.length }, (_, i) => i)
      .sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-8xl font-thin text-center text-white mb-8"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-center max-w-2xl mx-auto text-lg mb-20"
        >
          Transforming ideas into digital excellence with our comprehensive suite of services
        </motion.p>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ 
                opacity: 0, 
                y: 100,
                x: (shuffledIndices[index] % 2 === 0 ? -20 : 20)
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                x: 0
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: shuffledIndices[index] * 0.15,
                ease: [0.21, 1.11, 0.81, 0.99]
              }}
              style={{
                transform: `translateY(${scrollY * 0.1 * (index % 3 + 1)}px)`
              }}
              className={`relative p-6 rounded-2xl border border-white/10
                bg-gradient-to-br ${service.gradient} bg-opacity-10 group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/60 rounded-2xl" />
              <div className="relative z-10">
                <div className={`${service.color} w-12 h-12 rounded-xl flex items-center 
                  justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                <button className="flex items-center gap-2 text-white/90 group-hover:text-white">
                  Learn More 
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


