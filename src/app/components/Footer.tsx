'use client';

import { Space_Grotesk } from 'next/font/google';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import OverlayParticles from './OverlayParticles';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const FooterShapes = dynamic(() => import('./FooterShapes'), { ssr: false });

const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

const Footer = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex items-end justify-center p-8 bg-black">
      <div 
        className="relative w-[95%] max-w-[1400px] backdrop-blur-xl rounded-t-[4rem] translate-y-24 overflow-hidden animate-glow"
        style={{
          background: 'rgba(0, 0, 0, 0.9)',
          animation: 'borderGlow 8s ease-in-out infinite'
        }}
      >
        <style jsx>{`
          @keyframes borderGlow {
            0%, 100% {
              box-shadow: 
                0 -60px 100px -20px rgba(213, 253, 255, 0.4),
                0 -30px 50px -10px rgba(157, 229, 255, 0.3),
                -40px -20px 90px -20px rgba(172, 168, 255, 0.35),
                40px -20px 90px -20px rgba(172, 115, 255, 0.35);
            }
            25% {
              box-shadow: 
                40px -50px 90px -20px rgba(213, 253, 255, 0.5),
                20px -40px 60px -15px rgba(157, 229, 255, 0.4),
                0px -30px 80px -25px rgba(172, 168, 255, 0.45),
                -20px -20px 70px -25px rgba(172, 115, 255, 0.4);
            }
            50% {
              box-shadow: 
                0 -70px 120px -25px rgba(213, 253, 255, 0.6),
                0 -40px 70px -20px rgba(157, 229, 255, 0.5),
                -50px -35px 110px -30px rgba(172, 168, 255, 0.55),
                50px -35px 110px -30px rgba(172, 115, 255, 0.55);
            }
            75% {
              box-shadow: 
                -40px -50px 90px -20px rgba(213, 253, 255, 0.5),
                -20px -40px 60px -15px rgba(157, 229, 255, 0.4),
                0px -30px 80px -25px rgba(172, 168, 255, 0.45),
                20px -20px 70px -25px rgba(172, 115, 255, 0.4);
            }
          }
        `}</style>

        <div className="absolute inset-0 border-t border-l border-r border-white/10 rounded-t-[4rem]" />
        
        <div className="relative px-8 py-16 space-y-20">
          <OverlayParticles/>
          {/* Logo & Company Name */}
          <div className="absolute top-8 left-8">
            <h3 className="text-xl font-medium bg-gradient-to-r from-[#D5FDFF] to-[#AC73FF] bg-clip-text text-transparent">
              SIDZSOL Solutions
            </h3>
          </div>

          {/* Central Content */}
          <div className="text-center space-y-12 pt-12">
            <h2 className={`${spaceGrotesk.className} text-6xl md:text-7xl font-bold text-white tracking-tight`}>
              LET'S TALK
            </h2>
            
            {/* Two Column Links */}
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto text-lg">
              <div className="space-y-6">
                <h4 className="font-medium text-[#9DE5FF]">Services</h4>
                <ul className="space-y-4">
                  {['Web Development', 'Mobile Apps', 'Cloud Solutions'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-white/70 hover:text-white flex items-center gap-2 group">
                        {item}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-medium text-[#ACA8FF]">Company</h4>
                <ul className="space-y-4">
                  {['About Us', 'Careers', 'Contact'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-white/70 hover:text-white flex items-center gap-2 group">
                        {item}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8 flex justify-center gap-6">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="relative p-3 rounded-full bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D5FDFF]/0 via-[#9DE5FF]/0 to-[#AC73FF]/0 group-hover:from-[#D5FDFF]/20 group-hover:via-[#9DE5FF]/20 group-hover:to-[#AC73FF]/20 blur-md transition-all duration-300" />
                  <Icon className="w-6 h-6 text-white/70 relative z-10 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(213,253,255,0.5)] transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterShapes />
    </div>
  );
};

export default Footer;
