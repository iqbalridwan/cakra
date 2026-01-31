"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image dari Next.js

const CallToAction = () => {
  return (
    <section className="relative bg-white py-24 md:py-36 px-6 overflow-hidden border-t border-gray-100">
      
      {/* 1. Gambar Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img 
          src="/Services/cta-services.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white/90"></div>
      </div>

      {/* 2. Soft Decorative Shapes (Glow Efek) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#4A3AFF]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FF4D4D]/5 rounded-full blur-3xl"></div>

      {/* 3. Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* --- LOGO IMAGE SECTION (PNG) --- */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-4 rounded-[2.5rem] mb-10 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-500">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image 
              src="/logo.png" // Ganti sesuai nama file PNG kamu di folder public
              alt="Cakra Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Heading dengan Underline Merah */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#1E293B] mb-8 leading-[1.1] tracking-tight">
          Let us Bring your Ideas to Life <br className="hidden md:block" /> 
          in the{" "}
          <span className="relative inline-block text-[#FF4D4D]">
            Digital World.
            <span className="absolute -bottom-2 left-0 w-full h-[4px] md:h-[6px] bg-[#FF4D4D] rounded-full"></span>
          </span>
        </h2>

        {/* Sub-text */}
        <p className="text-slate-500 text-base md:text-lg mb-12 leading-relaxed max-w-2xl font-medium">
          No matter which services you choose, we are committed to delivering exceptional results 
          that exceed your expectations. <span className="text-[#1E293B] font-bold">Cakra</span> multidisciplinary team works closely together to ensure 
          seamless collaboration.
        </p>

        {/* Action Button - Digital Blue */}
        <Link 
          href="/contact" 
          className="bg-[#4A3AFF] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#3b2ecc] hover:shadow-[0_20px_40px_rgba(74,58,255,0.3)] transition-all duration-300 active:scale-95 flex items-center gap-3"
        >
          Start Your Project
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>

      </div>
    </section>
  );
};

export default CallToAction;