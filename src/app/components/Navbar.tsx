"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LucideArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4">
      <div className="relative w-full h-16 sm:h-20">
        {/* Center Mode (Scroll Down) - hidden on mobile */}
        <AnimatePresence>
          {scrollingDown && !isMobile && (
            <motion.div
              key="center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                layout
                className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 sm:py-3 rounded-full backdrop-blur-sm bg-white/5 shadow-md"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                  priority
                />
                <div className="text-sm sm:text-base cursor-pointer bg-[#B7FBFF] gap-3 py-3 flex rounded-full px-3 group   text-black border-[1px] duration-300 hover:text-white  hover:border-white hover:bg-[#8F71FF] border-[#B7FBFF] hover:shadow-[#B7FBFF] hover:shadow-sm/50 transition">
                  About <LucideArrowUpRight className="bg-[#8F71FF] text-white group-hover:bg-white group-hover:text-[#8F71FF] rounded-full"/>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Nav Mode (Scroll Up) */}
        <AnimatePresence>
          {!scrollingDown && (
            <motion.div
              key="full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex justify-between items-center"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-xl transition-all duration-300 gradient-shadow"
                priority
              />

              {/* Desktop Nav */}
              <div className="hidden md:flex gap-4">
                {["About", "Services", "Contact"].map((text) => (
                  <a
                    key={text}
                    href={`#${text.toLowerCase()}`}
                    className="px-3 sm:px-4 py-1 rounded-full text-white bg-white/10 hover:bg-[#B7FBFF] hover:text-black transition"
                  >
                    {text}
                  </a>
                ))}
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white text-3xl"
                aria-label="Toggle Menu"
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 bg-black/80 backdrop-blur-md rounded-lg p-4 absolute right-4 top-[72px] w-44"
            >
              {["About", "Services", "Contact"].map((text) => (
                <a
                  key={text}
                  href={`#${text.toLowerCase()}`}
                  className="block text-white text-lg px-2 py-1 rounded hover:bg-[#B7FBFF] hover:text-black transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
