'use client';

import React from 'react';
import Image from 'next/image';
import {
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from 'lucide-react';
import OverlayParticles from './OverlayParticles';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
  const { scrollY } = useScroll();
  const parallaxYLeft = useTransform(scrollY, [0, 500], [0, -30]);
  const parallaxYRight = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <footer className="relative bg-black text-white pt-32 pb-24 px-4 sm:px-8 overflow-hidden z-10">
      {/* Background overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none grainy-texture" />
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-[#82ACFF]/25 via-[#8F71FF]/10 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Outside Floating Image Left */}
      <motion.div
        style={{ y: parallaxYLeft }}
        className="absolute left-[5%] sm:left-40 md:left-96 top-[500px] -translate-y-1/2 w-[100px] sm:w-[120px] md:w-[160px] pointer-events-none z-50"
      >
        <Image
          src="/footer-element1.png"
          alt="Floating Left Outside"
          width={160}
          height={160}
        />
      </motion.div>

      {/* Outside Floating Image Right */}
      <motion.div
        style={{ y: parallaxYRight }}
        className="absolute  sm:right-40 md:right-96  -translate-y-1/2 w-[100px] sm:w-[120px] md:w-[160px] pointer-events-none z-50"
      >
        <Image
          src="/footer-element2.png"
          alt="Floating Right Outside"
          width={160}
          height={160}
        />
      </motion.div>

      {/* Frosted glass card */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_16px_#ffffff]/30 overflow-hidden">

        {/* Inside Floating Elements */}
        <Image
          src="/footer-element2.png"
          alt="Floating Right Inside"
          width={160}
          height={160}
          className="absolute right-5 sm:right-10 top-80 blur-sm opacity-30 -translate-y-1/2 w-[100px] sm:w-[160px] pointer-events-none z-[1]"
        />
        <Image
          src="/footer-element1.png"
          alt="Floating Left Inside"
          width={160}
          height={160}
          className="absolute left-5 sm:left-10 top-0 blur-sm opacity-30 -translate-y-1/2 w-[100px] sm:w-[160px] pointer-events-none z-[1]"
        />

        <OverlayParticles />

        {/* Diagonal Lines */}
     

        {/* Main Content */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-0 text-center sm:text-left">
          {/* Branding */}
          <div className="w-full sm:w-auto">
            <h2 className="text-4xl font-bold text-[#B7FBFF] drop-shadow-[0_0_5px_#82ACFF]">
              SIDZSOL
            </h2>
            <p className="text-gray-400 mt-2 max-w-xs mx-auto sm:mx-0">
              Empowering brands with futuristic digital solutions. Let’s create magic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#82ACFF] mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#form" className="hover:text-white transition">Get a Quote</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold text-[#82ACFF] mb-3">Connect with us</h3>
            <div className="flex justify-center sm:justify-end gap-5 text-white">
              <a href="#" className="hover:text-[#B7FBFF] transition"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#B7FBFF] transition"><Twitter size={24} /></a>
              <a href="#" className="hover:text-[#B7FBFF] transition"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-[#B7FBFF] transition"><Github size={24} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SIDZSOL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
