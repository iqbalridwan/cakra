"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image dari Next.js

const ContactIntro = () => {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 px-4 overflow-hidden border-b border-gray-100">
      
      {/* 1. Gambar Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img 
          src="/Tentang/contact-about.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white/90"></div>
      </div>

      {/* 3. Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* --- LOGO IMAGE SECTION (PNG) --- */}
        {/* Saya mengganti bg-[#C5FF32] menjadi bg-[#F8FAFC] agar logo PNG lebih bersih terlihat */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-4 rounded-[2.5rem] mb-10 shadow-sm transition-all hover:shadow-md duration-500">
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

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E293B] mb-6 leading-tight tracking-tight">
          Thank you for your Interest in Cakra.
        </h2>

        {/* Sub-text */}
        <p className="text-gray-600 text-sm md:text-base mb-12 leading-relaxed max-w-2xl font-medium">
          We would love to hear from you and discuss how we can help bring your digital ideas to life. 
          Here are the different ways you can get in touch with us.
        </p>

        {/* Action Button */}
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

export default ContactIntro;