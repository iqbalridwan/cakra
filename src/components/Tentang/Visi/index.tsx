"use client";
import React from "react";

const VisionSection = () => {
  return (
    <section className="relative bg-[#0F172A] text-white py-24 px-6 md:px-16 overflow-hidden">
      
      {/* --- ELEMEN DEKORATIF: PANAH (KIRI) --- */}
      <div className="absolute left-4 top-1/4 opacity-40 hidden lg:block">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C30 40 10 80 50 90M50 90L40 80M50 90L60 80" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* --- SISI KIRI: KONTEN TEKS --- */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <span className="text-[#FF4D4D] font-semibold text-sm tracking-widest uppercase">
            -Our Vision
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Watch Our Vision <br /> To Findout More
          </h2>

          <div className="flex flex-col gap-6 text-gray-400 text-sm md:text-base leading-relaxed">
            <p>
              Cakra hadir dengan visi untuk membantu bisnis berkembang melalui website dan solusi digital yang modern, cepat, dan berkelanjutan. 
              Kami percaya teknologi yang tepat dapat menjadi fondasi kuat bagi pertumbuhan jangka panjang.
            </p>
            <p>
              Cakra berkomitmen menjadi partner teknologi yang dapat diandalkan dalam membangun dan 
              mengelola website profesional yang mendukung tujuan bisnis klien.
            </p>
            <p>
              Kami membangun website dengan fokus pada kebutuhan pengguna dan tujuan bisnis, 
              agar teknologi benar-benar memberikan nilai nyata, bukan sekadar tampilan.
            </p>
          </div>
        </div>

        {/* --- SISI KANAN: GAMBAR & STRIPE MERAH --- */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative flex items-center justify-center lg:justify-end group">
            
            {/* Main Image */}
            <div className="relative z-10 overflow-hidden rounded-sm grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700">
              <img 
                src="/Tentang/teamwork-about.jpg" // Ganti dengan path gambar kamu
                alt="Team working"
                className="w-full h-auto max-w-[500px] object-cover"
              />
            </div>

            {/* Vertical Red Stripe (Garis Merah di Sisi Kanan Gambar) */}
            <div className="absolute right-[-10px] md:right-[-20px] top-4 bottom-4 w-10 md:w-14 bg-[#FF4D4D] z-20"></div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionSection;