"use client";
import React from "react";
import Link from "next/link";
import { Play } from "lucide-react"; // Pastikan sudah install lucide-react

const Hero = () => {
  return (
    // Section utama sekarang full width dan full height tanpa padding luar
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#7D66FF]">
      
      {/* --- BACKGROUND SHAPE KUNING (Sisi Kanan Full) --- */}
      {/* Shape ini akan menempel ke ujung kanan dan atas-bawah layar */}
      <div className="absolute top-0 right-0 h-full w-[35%] bg-[#FFC947] rounded-l-[100px] z-0 hidden lg:block"></div>

      {/* --- CONTENT WRAPPER --- */}
      {/* Kita tetap pakai max-width di sini agar teks tidak terlalu ke pinggir pada monitor lebar, 
          tapi background-nya tetap full ke ujung layar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center py-20">
        
        {/* SISI KIRI: TEXT CONTENT */}
        <div className="w-full lg:w-3/5 flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.3] tracking-tight">
            A Digital{" "}
            <span className="relative inline-block px-1">
              {/* Background Efek Gelembung/Awan */}
              <span className="absolute -inset-x-4 -inset-y-2 md:-inset-x-6 md:-inset-y-3 -z-10 flex items-center justify-center">
                <svg 
                  viewBox="0 0 140 60" 
                  className="w-full h-full fill-[#6DE0C9]" 
                  preserveAspectRatio="none"
                >
                  {/* Kumpulan lingkaran untuk membuat efek "Bubbly" */}
                  <circle cx="25" cy="30" r="25" />
                  <circle cx="55" cy="25" r="22" />
                  <circle cx="85" cy="35" r="24" />
                  <circle cx="115" cy="30" r="25" />
                </svg>
              </span>
              
              {/* Teks Product */}
              <span className="relative z-10">Product</span>
            </span>
            
            <br />
            
            Design Agency
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            Cakra Inovasi Digital adalah agensi layanan lengkap yang mendesain dan 
            membangun produk, merek, dan pengalaman digital yang indah.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <Link 
              href="/get-started" 
              className="bg-[#6DE0C9] text-[#1E293B] px-10 py-5 rounded-2xl font-extrabold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Get Started
            </Link>
            
            <button className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-[#FFC947] rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform border-4 border-white/20">
                <Play fill="white" size={24} />
              </div>
              <span className="text-white font-bold text-lg group-hover:underline">
                Watch The Video
              </span>
            </button>
          </div>
        </div>

        {/* SISI KANAN: CHARACTERS / VISUAL */}
        <div className="relative w-full lg:w-2/5 flex justify-center lg:justify-end mt-16 lg:mt-0">
          <div className="relative">
            {/* Gambar Karakter */}
            <img 
              src="/Home/character.png" 
              // alt="3D Characters" 
              className="w-full max-w-[500px] lg:max-w-[650px] h-auto object-contain drop-shadow-2xl z-10 relative lg:scale-125"
            />
            
            {/* Aksen bulat transparan di belakang karakter */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>

      {/* --- DEKORASI FLOATING SHAPES (Pojok-pojok) --- */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-lg rotate-12 blur-sm"></div>
      <div className="absolute bottom-20 left-[20%] w-24 h-24 bg-[#6DE0C9]/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-purple-400/30 rounded-full blur-2xl"></div>

    </section>
  );
};

export default Hero;