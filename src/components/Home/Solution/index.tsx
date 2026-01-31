"use client";
import React from "react";
import { MousePointer2, Palette, Clock } from "lucide-react";

const CreativeSolutions = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-visible">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. HEADER: Teratur & Sejajar Atas --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-start">
          <div className="md:col-span-7">
            <h2 className="text-[#0F172A] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Creative Solutions To <br className="hidden md:block" /> Expand Your Business
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Kami berkomitmen untuk memastikan Anda mencapai tujuan Anda, para ahli kami selalu siap membantu Anda dalam segala hal yang berkaitan dengan layanan digital.
              Mereka sangat membantu Anda.
            </p>
          </div>
        </div>

        {/* --- 2. MAIN CONTENT: Grid 12 untuk Presisi --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* SISI KIRI: Image + Overlapping Stats (7 Kolom) */}
          <div className="lg:col-span-7 relative">
            {/* Box Kuning Pastel */}
            <div className="bg-[#FFF9E6] rounded-[48px] p-8 md:p-14 border border-orange-50">
              <img 
                src="/Home/solution.jpg" 
                alt="Creative Illustration"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>

            {/* KARTU UNGU: Melayang ke kanan luar (Overlapping) */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-10 bg-[#7D66FF] text-white p-8 md:p-10 rounded-[35px] shadow-[0_25px_50px_-12px_rgba(125,102,255,0.5)] z-20 w-[90%] md:w-[540px]">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <h4 className="text-3xl md:text-4xl font-black mb-1">1200+</h4>
                  <p className="text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-widest">Project Launched</p>
                </div>
                <div className="h-12 w-[1px] bg-white/20"></div>
                <div className="text-center">
                  <h4 className="text-3xl md:text-4xl font-black mb-1">90K+</h4>
                  <p className="text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-widest">Happy Clients</p>
                </div>
                <div className="h-12 w-[1px] bg-white/20"></div>
                <div className="text-center">
                  <h4 className="text-3xl md:text-4xl font-black mb-1">100+</h4>
                  <p className="text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-widest">Award Winner</p>
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Fitur (5 Kolom) */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:pl-6">
            
            {/* Item 1 */}
            <div className="flex items-start gap-6 group">
              <div className="bg-[#5C9DFF] p-4 rounded-2xl shadow-xl shadow-blue-100 shrink-0 group-hover:scale-110 transition-transform">
                <MousePointer2 className="text-white w-6 h-6" />
              </div>
              <div className="pt-1">
                <h3 className="text-[#0F172A] text-xl font-bold mb-2">Pixel Perfection</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Pixel perfect design Full responsive design If you waste a lot of time turning your Figma.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-6 group">
              <div className="bg-[#47D1BF] p-4 rounded-2xl shadow-xl shadow-teal-100 shrink-0 group-hover:scale-110 transition-transform">
                <Palette className="text-white w-6 h-6" />
              </div>
              <div className="pt-1">
                <h3 className="text-[#0F172A] text-xl font-bold mb-2">Innovative Design</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  We give you innovative design. Innovation by design is the utilization of a designer's methods.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-6 group">
              <div className="bg-[#FFAE4D] p-4 rounded-2xl shadow-xl shadow-orange-100 shrink-0 group-hover:scale-110 transition-transform">
                <Clock className="text-white w-6 h-6" />
              </div>
              <div className="pt-1">
                <h3 className="text-[#0F172A] text-xl font-bold mb-2">Consistent Deadline</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  We Work with your deadline to prioritize the new project or reprioritize existing work.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CreativeSolutions;