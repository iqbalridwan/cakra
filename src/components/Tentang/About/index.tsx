"use client";
import React from "react";

const AboutIntro = () => {
  return (
    <section className="relative bg-white py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      {/* Background Wavy Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 Q 250 50 500 100 T 1000 100" fill="none" stroke="black" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto"> {/* Menggunakan max-w-6xl agar lebih rapat */}
        
        {/* --- HEADER: Menggunakan Grid agar Teks tidak tumpang tindih --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] leading-tight">
              Web Development with{" "}
              <span className="relative inline-block text-[#FF4D4D]">
                Cakra
                <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#FF4D4D]"></span>
              </span>
            </h2>
          </div>
          
          <div className="md:pb-2">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
              Kami menawarkan layanan khusus yang memungkinkan Anda menyelesaikan pekerjaan pemasaran di 
              media sosial dengan mudah. Hal ini membantu meningkatkan prospek dan penjualan Anda.
            </p>
          </div>
        </div>

        {/* --- IMAGE SECTION: Diberi batasan lebar agar tidak terlalu besar --- */}
        <div className="relative mx-auto max-w-5xl"> {/* Penambahan max-w-5xl di sini */}
          
          {/* Kotak Biru Dekoratif (Dikecilkan ukurannya) */}
          <div className="absolute -left-4 md:-left-10 bottom-10 w-20 md:w-32 h-40 md:h-64 bg-[#4A3AFF] -z-10 rounded-3xl flex items-center justify-center">
            <div className="w-[80%] h-[85%] border border-white/20 rounded-2xl"></div>
          </div>

          {/* Container Image dengan Shadow lembut */}
          <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white">
            <img
              src="/Tentang/teamwork.jpg" // Pastikan gambar kamu PNG transparan atau sudah dipotong rapi
              alt="Our Team Working"
              className="w-full h-auto object-contain max-h-[500px]" // Tambahkan max-h agar tidak melar ke bawah
            />
          </div>

          {/* Coretan Merah Dekoratif */}
          <div className="absolute -top-6 -right-4 md:-right-6 w-12 md:w-16 rotate-12">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF4D4D]">
               <path d="M20 80 L40 20 M50 80 L70 20 M80 80 L95 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;