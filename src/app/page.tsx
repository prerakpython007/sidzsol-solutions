"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { playwriteHU } from "@/lib/fonts"
import About from "./components/About-us"
import { X } from "lucide-react"
import Navbar from "./components/Navbar"
import TestimonialSection from "./components/Testimonials"
import ProjectGallery from "./components/Projects"
import Contact from "./components/Contact"

const SimplifiedLanding: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showLanding, setShowLanading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [realtimeText, setRealtimeText] = useState("")
  const videoRef = useRef<HTMLVideoElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      const ua = navigator.userAgent.toLowerCase()
      const mobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua)
      setIsMobile(mobileDevice || window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Disable scroll during loading
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLoading])

  // Format real-time text
  useEffect(() => {
    const now = new Date()
    const day = now.getDate()
    const suffix = day > 3 && day < 21 ? "th" : ["st", "nd", "rd"][day % 10 - 1] || "th"
    const month = now.toLocaleString("default", { month: "long" })
    setRealtimeText(`${day}${suffix} of ${month} ${now.getFullYear()}`)
  }, [])

  // Smooth parallax
  useEffect(() => {
    let requestId: number
    const update = () => {
      const y = window.scrollY * 0.5
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${y}px)`
      }
      requestId = requestAnimationFrame(update)
    }
    requestId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestId)
  }, [])

  // Simulated loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 2 + 1
      })
    }, 100)

    const completeLoad = setTimeout(() => {
      setLoadingProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setTimeout(() => setShowLanading(true), 200)
      }, 800)
    }, 2500)

    return () => {
      clearTimeout(completeLoad)
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div className="font-exo">
        <Navbar />

        {/* Loading screen */}
        <div className={`fixed inset-0 bg-black z-[9999] flex flex-col justify-center items-center transition-opacity duration-500 ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <h1 className="text-white text-3xl font-light mb-6 tracking-widest">Loading Experience</h1>
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <div className="absolute h-full bg-cyan-400 transition-all duration-300" style={{ width: `${loadingProgress}%` }} />
          </div>
          <div className="mt-3 text-white/60 text-sm tracking-wide">{Math.round(loadingProgress)}%</div>
        </div>

        {/* Hero section with video or image background */}
        <div className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-[-10]" ref={parallaxRef}>
            {!isMobile ? (
              <video
                ref={videoRef}
                className="w-full h-full object-cover will-change-transform"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{ filter: "brightness(0.7) contrast(1.05)" }}
              >
                <source src="/bg2.mp4" type="video/mp4" />
                <source src="/bg.webm" type="video/webm" />
              </video>
            ) : (
              <img
                src="/bg-fallback.jpg"
                alt="Background"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.6)" }}
              />
            )}
          </div>

          <div className={`relative w-full h-full flex flex-col justify-center items-center text-white transition-all duration-1000 ease-in ${showLanding ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
            <div className="text-white/80 mb-8 text-lg tracking-[0.2em] font-exo animate-bounce">Welcome to</div>
            <h1 className="text-6xl sm:text-8xl font-extralight tracking-wide title-font">SIDZSOL SOLUTIONS</h1>
            <div className="mt-6 px-6 py-4 uppercase font-medium text-blue-300 border-2 border-blue-500 rounded-full bg-blue-500/10 backdrop-blur-sm hover:bg-blue-500/20 transition-transform duration-300 font-exo">
              Crafting Digital Excellence
            </div>

            {/* Real-time text and X line */}
            <div className="flex justify-between items-center w-full mt-6 px-8 max-w-5xl">
              <div className={`text-white/70 text-sm ${playwriteHU.className}`}>{realtimeText}</div>
              <div className="flex-1 flex items-center ml-4">
                <div className="border-t border-white/30 w-full" />
                <span className="ml-3 text-white/70 text-xl font-light"><X /></span>
              </div>
            </div>
          </div>
        </div>

        {/* Other sections */}
        <About />
        <TestimonialSection />
        <ProjectGallery />
        <Contact />
      </div>
    </>
  )
}

export default SimplifiedLanding
