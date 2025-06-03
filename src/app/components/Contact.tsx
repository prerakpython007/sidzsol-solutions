'use client';

import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 py-16 bg-black"
    >
      {/* Left side: Looping WebM Video */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
        <div className="relative w-72 sm:w-96 h-auto rounded-xl overflow-hidden shadow-lg">
          <video
            src="/contact-vid.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right side: Text + Button */}
      <div className="w-full md:w-1/2 text-white px-4 sm:px-8">
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6">
            Have an idea, question, or just want to say hi? Reach out and let&apos;s talk! We&apos;re here to help you make something amazing.
          </p>
          <a
            href="#form"
            className="inline-block px-6 py-3 bg-[#B7FBFF] text-black font-semibold rounded-full hover:bg-white transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
