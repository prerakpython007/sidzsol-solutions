"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        {/* Center Mode (Scroll Down) */}
        <AnimatePresence>
          {scrollingDown && (
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
                className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 sm:py-3 rounded-full backdrop-blur-md bg-white/5 shadow-md"
              >
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-base sm:text-xl font-bold"
                >
                  <img src="/logo.png" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" alt="Logo" />
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm sm:text-base cursor-pointer text-white hover:text-[#B7FBFF] transition"
                >
                  About
                </motion.div>
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
              className="absolute inset-0 flex justify-between items-center flex-wrap gap-y-2"
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-base sm:text-xl font-bold"
              >
                <img src="/logo.png" className="w-10 sm:w-10 h-10 sm:h-10 rounded-full" alt="Logo" />
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-2  sm:gap-4 items-center  sm:text-base"
              >
                {["About", "Services", "Contact"].map((text) => (
                  <a
                    key={text}
                    href={`#${text.toLowerCase()}`}
                    className="px-3 sm:px-4 py-1 rounded-full backdrop-blur-xs/5 text-xl bg-white/10 text-white hover:text-black transition-colors duration-300 hover:bg-[#B7FBFF]"
                  >
                    {text}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
