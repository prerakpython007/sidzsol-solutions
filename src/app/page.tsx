"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import About from "./components/About-us"

const SimplifiedLanding: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showLanding, setShowLanding] = useState<boolean>(false)
  const [loadingProgress, setLoadingProgress] = useState<number>(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const titleRef = useRef<HTMLHeadingElement>(null)

  // Track mouse position for cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      const isSmallScreen = window.innerWidth <= 768
      setIsMobile(isMobileDevice || isSmallScreen)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle loading sequence with progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 2 + 1
      })
    }, 100)

    const loadingTimer = setTimeout(() => {
      setLoadingProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setTimeout(() => {
          setShowLanding(true)
        }, 200)
      }, 800)
    }, 2500)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <>
      <style jsx>{`
        /* Import Premium Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Exo+2:wght@300;400;500;600;700&display=swap');
        
        /* Custom cursor */
        * {
          cursor: none;
        }
        
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.1s ease;
        }
        
        .cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background: rgba(255, 107, 53, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: all 0.3s ease;
        }

        /* Minimal Loading Styles */
        .loading-container {
          background: #000000;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .loading-logo {
          font-family: 'Inter', sans-serif;
          font-weight: 200;
          color: #ffffff;
          letter-spacing: 0.2em;
          margin-bottom: 3rem;
          opacity: 0.9;
        }
        
        .loading-bar-container {
          width: 200px;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .loading-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: blue;
          transition: width 0.3s ease-out;
        }
        
        .loading-percentage {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 1rem;
          letter-spacing: 0.1em;
        }

        /* Premium Title Font */
        .title-font {
          font-family: 'Inter', sans-serif;
          font-weight: 200;
          letter-spacing: 0.05em;
        }
        
        /* Cursive Font for Web Designs */
        .cursive-font {
          font-family: 'Dancing Script', cursive;
          font-weight: 500;
        }
        
        /* Inverted title effect like cursor */
        .inverted-title {
          color: rgba(255, 255, 255, 0.9);
          mix-blend-mode: difference;
          filter: invert(1);
        }
        
        @keyframes subtleShine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Interactive Elements */
        .interactive-element {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .interactive-element:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        @keyframes text-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .animate-text-float { animation: text-float 4s ease-in-out infinite; }

        /* Minimal Corner Angles */
        .corner-angle {
          position: absolute;
          width: 30px;
          height: 30px;
          z-index: 10;
          pointer-events: none;
          opacity: 0.4;
        }

        .corner-angle-tl {
          top: 30px;
          left: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          border-left: 1px solid rgba(255, 255, 255, 0.3);
        }

        .corner-angle-tr {
          top: 30px;
          right: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          border-right: 1px solid rgba(255, 255, 255, 0.3);
        }

        .corner-angle-bl {
          bottom: 30px;
          left: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          border-left: 1px solid rgba(255, 255, 255, 0.3);
        }

        .corner-angle-br {
          bottom: 30px;
          right: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          border-right: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* Custom font classes */
        .font-exo {
          font-family: 'Exo 2', sans-serif;
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .custom-cursor, .cursor-trail {
            display: none !important;
          }
          
          .interactive-element:hover {
            transform: none;
            filter: none;
          }
          
          .animate-text-float {
            animation: none;
          }
          
          .corner-angle {
            width: 25px;
            height: 25px;
          }
          
          .cursor-tracking-title::before {
            clip-path: none;
            background: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff6b35 100%);
            -webkit-text-fill-color: transparent;
          }
        }

        /* Video Background Styles */
        .video-container {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          z-index: -20;
          will-change: transform;
          backface-visibility: hidden;
          object-fit: cover;
        }

        .parallax-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -10;
        }
        
        /* Mobile Video Optimizations */
        @media (max-width: 768px) {
          .video-container {
            transform: translate(-50%, -50%) scale(1.2);
            height: 100%;
            width: auto;
            min-width: 100%;
            min-height: 100%;
            object-fit: cover;
          }
        }
      `}</style>

      <div className="m-0 p-0 font-exo">
        {/* Custom Cursor - Desktop Only */}
        {!isMobile && (
          <>
            <div
              className="custom-cursor"
              style={{
                left: mousePosition.x - 10,
                top: mousePosition.y - 10,
              }}
            />
            <div
              className="cursor-trail"
              style={{
                left: mousePosition.x - 4,
                top: mousePosition.y - 4,
              }}
            />
          </>
        )}

        {/* Minimal Loading Screen */}
        <div
          className={`loading-container transition-opacity duration-500 ease-out ${
            isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h1 className="loading-logo text-2xl md:text-3xl">Loading Experience</h1>
          <div className="loading-bar-container">
            <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
          </div>
          <div className="loading-percentage">{Math.round(loadingProgress)}%</div>
        </div>

        {/* Landing Page Section */}
        <div className="border-black h-screen border-8 relative overflow-hidden">
          {/* Web Designs Text at Top Center */}
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-20">
            <h2 className="cursive-font bg-black px-2 rounded-full text-blue-200 text-lg md:text-xl lg:text-2xl">Web Designs</h2>
          </div>

          {/* Corner Angles */}
          <div className="corner-angle corner-angle-tl"></div>
          <div className="corner-angle corner-angle-tr"></div>
          <div className="corner-angle corner-angle-bl"></div>
          <div className="corner-angle corner-angle-br"></div>

          {/* Main Landing Page */}
          <div
            className={`relative w-full h-screen flex justify-center items-center transition-all duration-1000 ease-in ${
              showLanding ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* Video Background with Parallax Effect */}
            <div
              className="parallax-container "
              style={{
                transform: `translateY(${scrollPosition * 0.5}px)`,
              }}
            >
              <video
                className="video-container"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/video-poster.jpg"
                style={{
                  filter: isMobile ? "brightness(0.6) contrast(1.05)" : "brightness(0.7) contrast(1.05)",
                }}
              >
                <source src="/bg2.mp4" type="video/mp4" />
                <source src="/bg.webm" type="video/webm" />
              </video>
            </div>

            {/* Hero Content */}
            <div className="text-center text-white z-10 max-w-6xl px-4 sm:px-6 md:px-8">
              {/* Welcome Text */}
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/80 mb-8 sm:mb-12 tracking-[0.2em] animate-text-float font-exo interactive-element">
                Welcome to
              </div>

              {/* Enhanced Company Name with Cursor Tracking Effect */}
              <h1 
                ref={titleRef}
                className="title-font cursor-tracking-title relative inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-extralight mb-6 sm:mb-8 md:mb-10 tracking-[0.1em] leading-none interactive-element"
                data-text="SIDZSOL SOLUTIONS"
                style={{
                  '--x': `${mousePosition.x}px`,
                  '--y': `${mousePosition.y}px`
                } as React.CSSProperties}
                onMouseMove={(e) => {
                  if (!isMobile && titleRef.current) {
                    const rect = titleRef.current.getBoundingClientRect()
                    const x = ((e.clientX - rect.left) / rect.width) * 100
                    const y = ((e.clientY - rect.top) / rect.height) * 100
                    titleRef.current.style.setProperty('--x', `${x}%`)
                    titleRef.current.style.setProperty('--y', `${y}%`)
                  }
                }}
              >
                SIDZSOL SOLUTIONS
              </h1>

              {/* Enhanced Slogan */}
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-blue-300 tracking-[1px] sm:tracking-[2px] uppercase border-2 border-blue-500 py-3 sm:py-4 px-6 sm:px-8 rounded-full inline-block backdrop-blur-sm bg-blue-500/10 transition-all duration-300 hover:bg-blue-500/20 hover:-translate-y-1 cursor-pointer font-exo">
                Crafting Digital Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
      <About/>
    </>
  )
}

export default SimplifiedLanding