"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { playwriteHU } from "@/lib/fonts";
import About from "./components/About-us";
import { X } from "lucide-react";
import Navbar from "./components/Navbar";
import TestimonialSection from "./components/Testimonials";
import ProjectGallery from "./components/Projects";
// import Contact from "./components/Contact";
import { Space_Grotesk } from "next/font/google";
import Blogs from "./components/Blogs";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const SimplifiedLanding: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLanding, setShowLanading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [realtimeText, setRealtimeText] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Disable scroll during loading
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // Real-time text
  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const suffix =
      day > 3 && day < 21 ? "th" : ["st", "nd", "rd"][day % 10 - 1] || "th";
    const month = now.toLocaleString("default", { month: "long" });
    setRealtimeText(`${day}${suffix} of ${month} ${now.getFullYear()}`);
  }, []);

  // Smooth parallax
  useEffect(() => {
    let requestId: number;
    const update = () => {
      const y = window.scrollY * 0.5;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${y}px)`;
      }
      requestId = requestAnimationFrame(update);
    };
    requestId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestId);
  }, []);

  // Simulated loading
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 2 + 1;
      });
    }, 100);

    const completeLoad = setTimeout(() => {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShowLanading(true), 200);
      }, 800);
    }, 2500);

    return () => {
      clearTimeout(completeLoad);
      clearInterval(interval);
    };
  }, []);

  // Add scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { label: "Current Section", value: "Home" },
    { label: "Scroll Position", value: `${Math.round(scrollProgress)}%` },
    { label: "Page Height", value: "100vh" },
  ];

  return (
    <>
      <style jsx global>{`
        .futuristic-pattern::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            rgba(0, 255, 255, 0.06) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
          animation: patternMove 6s linear infinite;
          z-index: 0;
        }

        @keyframes patternMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }

        .scroll-track {
          background: linear-gradient(
            90deg,
            rgba(96, 165, 250, 0.05),
            rgba(103, 232, 249, 0.08)
          );
          width: 4px;
          border-radius: 4px;
          box-shadow: inset 0 0 10px rgba(96, 165, 250, 0.1);
        }

        .scroll-line {
          background: linear-gradient(to bottom, #60a5fa, #67e8f9);
          filter: blur(2px);
          opacity: 0.8;
          top: 0;
          transform-origin: top;
          animation: glowPulse 2s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%,
          100% {
            filter: blur(2px);
            box-shadow: 0 0 10px rgba(96, 165, 250, 0.5),
              0 0 20px rgba(96, 165, 250, 0.3);
          }
          50% {
            filter: blur(3px);
            box-shadow: 0 0 15px rgba(96, 165, 250, 0.7),
              0 0 30px rgba(96, 165, 250, 0.5);
          }
        }

        .scroll-dot {
          background: white;
          box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.15),
            0 0 20px rgba(96, 165, 250, 0.6),
            0 0 40px rgba(96, 165, 250, 0.3);
          animation: float 2s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(0.8);
          }
        }

        .info-table {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 0 40px rgba(96, 165, 250, 0.1),
            inset 0 0 20px rgba(96, 165, 250, 0.05);
        }

        .table-row {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid transparent;
        }

        .table-row:hover {
          background: rgba(96, 165, 250, 0.1);
          transform: translateY(-5px);
          border-color: rgba(96, 165, 250, 0.2);
        }

        .table-row::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(96, 165, 250, 0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .table-row:hover::after {
          transform: translateX(100%);
        }

        .table-cell-glow {
          background: linear-gradient(to right, #60a5fa, #67e8f9);
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
        }
      `}</style>

      <div className={`font-exo ${spaceGrotesk.className}`}>
        <Navbar />

        {/* Enhanced Scroll Indicator */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 h-64 flex items-center">
          <div className="scroll-track h-full relative backdrop-blur-sm overflow-hidden">
            {/* Glowing progress line */}
            <div
              className="scroll-line absolute top-0 left-0 w-full transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />

            {/* Animated dot */}
            <div
              className="scroll-dot w-3 h-3 absolute left-1/2 rounded-full"
              style={{
                top: `${scrollProgress}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>

        {/* Loading screen */}
        <div
          className={`fixed inset-0 bg-black z-[9999] flex flex-col justify-center items-center transition-opacity duration-500 overflow-hidden futuristic-pattern ${
            isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h1 className="text-white text-3xl font-light mb-6 tracking-widest z-10">
            Loading Experience
          </h1>
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden z-10">
            <div
              className="absolute h-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="mt-3 text-white/60 text-sm tracking-wide z-10">
            {Math.round(loadingProgress)}%
          </div>
        </div>

        {/* Hero section */}
        <div className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-[-10]" ref={parallaxRef}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover will-change-transform pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{ filter: "brightness(0.7) contrast(1.05)" }}
              onError={() => {
                const fallback = document.getElementById("video-fallback");
                if (fallback) fallback.classList.remove("hidden");
              }}
            >
              <source src="/bg2.mp4" type="video/mp4" />
              <source src="/bg.webm" type="video/webm" />
            </video>

            <img
              id="video-fallback"
              src="/bg-fallback.jpg"
              alt="Fallback Background"
              className="w-full h-full object-cover hidden absolute top-0 left-0"
              style={{ filter: "brightness(0.6)" }}
            />
          </div>

          <div
            className={`relative w-full h-full flex flex-col items-center text-white transition-all duration-1000 ease-in ${
              showLanding ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div className="flex-[1.5] mt-40" /> {/* Increased top spacer even more */}
            
            <div className="text-white/80 mb-20 text-lg tracking-[0.2em] font-exo animate-bounce">
              Welcome to
            </div>
            <h1 className={`text-6xl sm:text-8xl font-extralight tracking-wide text-center max-w-4xl leading-tight mb-12 ${spaceGrotesk.className}`}>
              SIDZSOL SOLUTIONS
            </h1>
            <div className={`mb-20 px-6 py-4 uppercase font-medium text-blue-300 border-2 border-blue-500 rounded-full bg-blue-500/10 backdrop-blur-sm hover:bg-blue-500/20 transition-transform duration-300 ${spaceGrotesk.className}`}>
              Crafting Digital Excellence
            </div>

            {/* Real-time date and X divider */}
            <div className="flex justify-between items-center w-full max-w-5xl -mt-8">
              <div className={`text-white/70 text-sm ${playwriteHU.className}`}>
                {realtimeText}
              </div>
              <div className="flex-1 flex items-center ml-8">
                <div className="border-t border-white/30 w-full" />
                <span className="ml-3 text-white/70 text-xl font-light">
                  <X />
                </span>
              </div>
            </div>

            {/* Enhanced Info Table */}
            <div className="w-full max-w-3xl px-8 mx-auto mb-12">
              <div className="info-table rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 divide-x divide-white/5">
                  {[
                    { title: "Experience", value: "5+ Years", desc: "In Industry", icon: "⚡" },
                    { title: "Projects", value: "100+", desc: "Completed", icon: "🎯" },
                    { title: "Support", value: "24/7", desc: "Available", icon: "💫" }
                  ].map((item, i) => (
                    <div key={i} className="table-row p-6 text-center group">
                      <div className="text-2xl mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
                        {item.icon}
                      </div>
                      <div className="text-white/60 text-xs tracking-wider mb-2">{item.title}</div>
                      <div className="table-cell-glow text-2xl font-light mb-1">
                        {item.value}
                      </div>
                      <div className="text-white/40 text-[0.7rem]">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-[0.2]" /> {/* Reduced bottom spacer */}
          </div>
        </div>

        {/* Other sections */}
        <About />
        <Blogs/>
        <TestimonialSection />
        <ProjectGallery />
        {/* <Contact /> */}
      </div>
    </>
  );
};

export default SimplifiedLanding;
