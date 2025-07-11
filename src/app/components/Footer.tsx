'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Mail, MapPin, Phone, X } from 'lucide-react';
import { useRef, useEffect, useState, useCallback, useMemo } from 'react';

const TorchText = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = textRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const maskStyle = {
    maskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
    WebkitMaskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`
  };

  return (
    <div ref={textRef} className="absolute top-0 w-full overflow-hidden select-none">
      {/* Base border */}
      <div className="absolute inset-0 border border-white/5" />

      {/* Base dark text */}
      <h1 className="text-[25vw] font-bold whitespace-nowrap translate-x-[15%] relative">
        <span className="text-white/5">SIDZSOL</span>
        {/* Text border base */}
        <span className="absolute inset-0 text-transparent bg-clip-text 
          [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]">
          SIDZSOL
        </span>
      </h1>

      {/* Glowing text and border */}
      <div className="absolute inset-0" style={maskStyle}>
        {/* Glowing border */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 border-2 border-[#C68EFD] blur-[2px]" />
          <div className="absolute inset-0 border border-[#C68EFD] [box-shadow:0_0_30px_#C68EFD]" />
        </div>

        <h1 className="text-[25vw] font-bold whitespace-nowrap translate-x-[15%] relative">
          {/* Glowing text */}
          <span className="bg-gradient-to-r from-[#8F87F1] via-[#C68EFD] to-[#E9A5F1] 
            bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(143,135,241,0.5)]">
            SIDZSOL
          </span>
          {/* Glowing border */}
          <span className="absolute inset-0 text-transparent 
            [-webkit-text-stroke:2px_#C68EFD] blur-[1px]
            [filter:drop-shadow(0_0_10px_#C68EFD)]">
            SIDZSOL
          </span>
        </h1>
      </div>
    </div>
  );
};

const BorderGlow = () => {
  const borderRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = borderRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-screen" ref={borderRef}>
      {/* Base border */}
      <div className="absolute inset-0 border-x border-white/5" />
      
      {/* Glow border */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, white 20%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, white 20%, transparent 70%)`
        }}
      >
        <div className="absolute inset-0 border-x-2 border-[#C68EFD] blur-[2px]" />
        <div className="absolute inset-0 border-x border-[#C68EFD] [box-shadow:0_0_30px_#C68EFD]" />
      </div>
    </div>
  );
};

const AnimatedLink = ({ text }: { text: string }) => (
  <motion.li className="group relative h-[24px] overflow-hidden">
    <motion.div
      className="relative flex items-center"
      initial="default"
      whileHover="hover"
      animate="default"
    >
      {/* Original Text */}
      <motion.div
        variants={{
          default: { y: 0 },
          hover: { y: -24 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center gap-2 text-white/60"
      >
        <span>{text}</span>
        <ArrowUpRight className="w-4 h-4 text-[#C68EFD] opacity-0 transform translate-x-2
          transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
      </motion.div>

      {/* Sliding Up Text */}
      <motion.div
        variants={{
          default: { y: 24 },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center text-[#C68EFD]"
      >
        <span>{text}</span>
        <ArrowUpRight className="w-4 h-4 ml-2" />
      </motion.div>
    </motion.div>
  </motion.li>
);

const KonamiCode = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.key];
      if (newSequence.length > konamiCode.length) {
        newSequence.shift();
      }
      setSequence(newSequence);

      if (newSequence.join('') === konamiCode.join('')) {
        document.documentElement.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
          document.documentElement.style.filter = 'none';
        }, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence]);

  return null;
};

const TorchRevealCard = ({ text }: { text: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const maskStyle = {
    maskImage: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
    WebkitMaskImage: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`
  };

  const handleClick = useCallback(() => {
    setClicks(prev => {
      if (prev === 2) {
        // Easter egg message appears in console
        console.log('%c🎮 Game Mode Activated! 🎮', 'color: #C68EFD; font-size: 20px;');
      }
      return prev + 1;
    });
  }, []);

  return (
    <div ref={cardRef} onClick={handleClick} className="relative h-20 bg-black overflow-hidden rounded-sm cursor-pointer">
      {/* Base border */}
      <div className="absolute inset-0 border border-white/5" />
      
      {/* Hidden content until revealed */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Torch reveal layer */}
      <div className="absolute inset-0" style={maskStyle}>
        {/* Glowing border */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 border-2 border-[#C68EFD] blur-[2px]" />
          <div className="absolute inset-0 border border-[#C68EFD] [box-shadow:0_0_30px_#C68EFD]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#8F87F1]/10 via-[#C68EFD]/10 to-[#E9A5F1]/10" />
        <div className="absolute inset-0 flex items-center p-6">
          <p className="text-sm font-medium text-white/90">{text}</p>
        </div>
      </div>
    </div>
  );
};

const GridBackground = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const gridCards = useMemo(() => [
    // Row 1
    { text: "Next.js", x: 1, y: 3 },
    { text: "React", x: 3, y: 3 },
    { text: "TypeScript", x: 5, y: 3 },
    { text: "Prisma", x: 7, y: 3 },
    // Row 2
    { text: "TailwindCSS", x: 1, y: 4 },
    { text: "Node.js", x: 3, y: 4 },
    { text: "GraphQL", x: 5, y: 4 },
    { text: "tRPC", x: 7, y: 4 },
    // Row 3
    { text: "MongoDB", x: 1, y: 5 },
    { text: "PostgreSQL", x: 3, y: 5 },
    { text: "AWS", x: 5, y: 5 },
    { text: "Docker", x: 7, y: 5 }
  ], []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = gridRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const maskStyle = {
    maskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
    WebkitMaskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`
  };

  return (
    <div ref={gridRef} className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      <div className="absolute inset-0" style={maskStyle}>
        <div className="absolute inset-0 
          [background-size:200px_200px]
          [background-image:linear-gradient(to_right,rgba(198,142,253,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,142,253,0.2)_1px,transparent_1px)]
          [box-shadow:0_0_30px_rgba(198,142,253,0.3)]">
          {gridCards.map((card, i) => (
            <div
              key={i}
              className="absolute bg-black/50 backdrop-blur-sm border border-[#C68EFD]/20 rounded-sm p-2"
              style={{
                left: `${card.x * 200}px`,
                top: `${card.y * 200}px`,
                width: '150px',
                opacity: 0.7
              }}
            >
              <p className="text-[#C68EFD]/70 text-sm font-light">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Footer() {
  const [cornerClicks, setCornerClicks] = useState(0);
  
  const handleCornerClick = useCallback(() => {
    setCornerClicks(prev => {
      if (prev === 3) {
        // Easter egg: Add pixel art to the corner
        const art = `
        ⠀⠀⠀⣀⣤⣤⣤⣤⣤⣤⣄⣀⡀⠀⠀⠀
        ⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀
        ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆
        ⢸⣿⣿⣿⣿⠟⠋⠉⠉⠛⠻⣿⣿⣿⣿⡇
        ⢸⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⡇
        ⢸⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡇
        ⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇
        ⢸⣿⠀⠀⠀⢻⣿⣿⣿⣿⣦⠀⠀⠀⣿⡇
        ⢸⣿⠀⠀⠀⠘⠿⠿⠿⠿⠋⠀⠀⠀⣿⡇
        ⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇
        ⠈⠻⢷⣦⣤⣤⣤⣤⣤⣤⣤⣴⡶⠟⠋`;
        console.log('%c' + art, 'color: #C68EFD; font-size: 10px');
      }
      return prev + 1;
    });
  }, []);

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden min-h-[800px]">
      <KonamiCode />
      {/* Add GridBackground before other components */}
      <GridBackground />
      {/* Reveal Cards */}
      <div className="relative z-20 container mx-auto px-12 pt-8">
        <div className="grid grid-cols-3 gap-4">
          <TorchRevealCard text="Innovative Solutions for Modern Challenges" />
          <TorchRevealCard text="Building Digital Experiences That Matter" />
          <TorchRevealCard text="Transforming Ideas into Reality" />
        </div>
      </div>

      {/* Border Glow Effect */}
      <BorderGlow />
      
      {/* Upper Corner X Symbols */}
      <div className="absolute top-0 left-0 p-8">
        <X className="w-8 h-8 text-white/30 cursor-pointer hover:text-[#C68EFD] transition-colors" onClick={handleCornerClick} />
      </div>
      <div className="absolute top-0 right-0 p-8">
        <X className="w-8 h-8 text-white/30 cursor-pointer hover:text-[#C68EFD] transition-colors" onClick={handleCornerClick} />
      </div>
      
      {/* Background Elements */}
      <TorchText />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/* Logo Section */}
          <div className="p-8 lg:pr-12">
            <Image
              src="/logo.png"
              alt="Sidzsol Solutions"
              width={120}
              height={40}
              className="brightness-200 rounde mb-4"
            />
            <p className="text-sm text-white/60">
              Building innovative digital solutions for tomorrow's challenges.
            </p>
          </div>

          {/* Three Column Section */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Company Info */}
            <div className="p-8">
              <h3 className="text-lg font-medium text-white/90 mb-4">Company</h3>
              <ul className="space-y-4">
                {['About Us', 'Our Team', 'Careers', 'Contact'].map((link) => (
                  <AnimatedLink key={link} text={link} />
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="p-8">
              <h3 className="text-lg font-medium text-white/90 mb-4">Services</h3>
              <ul className="space-y-4">
                {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Consulting'].map((link) => (
                  <AnimatedLink key={link} text={link} />
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="p-8">
              <h3 className="text-lg font-medium text-white/90 mb-4">Connect</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/60">
                  <Mail className="w-5 h-5" />
                  <span>hello@sidzsol.com</span>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-5 h-5" />
                  <span>New York, NY</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-12 py-8 border-t border-white/10">
        <div className="container mx-auto px-8 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} SIDZSOL. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
