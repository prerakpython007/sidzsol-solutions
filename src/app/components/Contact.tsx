'use client';

import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState('default');

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <section 
      className="min-h-screen w-full bg-[#030303] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.15)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl backdrop-blur-lg animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full backdrop-blur-lg animate-float-delay" />

      {/* Custom Cursor */}
      <div 
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className={`w-full h-full rounded-full border-2 border-white transition-transform duration-300 ${
          cursorStyle === 'hover' ? 'scale-150' : 'scale-100'
        }`} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-6xl font-light text-white mb-12 tracking-tight">
            Let's Create<br/>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Something Amazing</span>
          </h2>

          <form className="space-y-6">
            <div className="group relative">
              <input 
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors peer"
                onMouseEnter={() => setCursorStyle('hover')}
                onMouseLeave={() => setCursorStyle('default')}
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </div>

            <div className="group relative">
              <input 
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                onMouseEnter={() => setCursorStyle('hover')}
                onMouseLeave={() => setCursorStyle('default')}
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </div>

            <div className="group relative">
              <textarea 
                placeholder="Your Message"
                rows={5}
                className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                onMouseEnter={() => setCursorStyle('hover')}
                onMouseLeave={() => setCursorStyle('default')}
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </div>

            <button 
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg overflow-hidden"
              onMouseEnter={() => setCursorStyle('hover')}
              onMouseLeave={() => setCursorStyle('default')}
            >
              <span className="relative z-10 text-white font-light tracking-wider">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 transition-transform duration-300 translate-x-[-100%] group-hover:translate-x-0" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
