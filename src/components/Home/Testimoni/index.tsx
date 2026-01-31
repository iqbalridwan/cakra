"use client";
import React, { useState } from "react";

const TestimonialAndCTA = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- 1. TESTIMONIAL SECTION --- */}
        <div className="relative mb-32">
          {/* Floating Avatars (Dekoratif) */}
          <Avatar src="https://i.pravatar.cc/150?u=1" className="top-0 left-10 md:left-20 w-16 h-16" />
          <Avatar src="https://i.pravatar.cc/150?u=2" className="bottom-20 left-0 md:left-10 w-12 h-12" />
          <Avatar src="https://i.pravatar.cc/150?u=3" className="top-10 right-10 md:right-40 w-14 h-14" />
          <Avatar src="https://i.pravatar.cc/150?u=4" className="bottom-10 right-0 md:right-20 w-16 h-16" />
          
          {/* Floating Icons Dekoratif */}
          <div className="absolute top-1/2 left-[15%] -translate-y-1/2 hidden lg:block opacity-20">
             <img src="/Home/chat-bubble-icon.png" alt="" className="w-20" />
          </div>
          <div className="absolute top-0 right-[20%] hidden lg:block opacity-30">
             <img src="/Home/3d-shapes.png" alt="" className="w-24" />
          </div>

          {/* Central Content */}
          <div className="relative z-10 text-center flex flex-col items-center">
            <h2 className="text-[#0F172A] text-4xl md:text-5xl font-extrabold mb-16">
              What Are The Client <br /> Saying About Us
            </h2>

            {/* Client Info Card */}
            <div className="flex flex-col items-center max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src="https://i.pravatar.cc/150?u=david" 
                  alt="David Walson" 
                  className="w-16 h-16 rounded-full border-4 border-orange-100 shadow-lg"
                />
                <div className="text-left">
                  <h4 className="text-[#7D66FF] font-bold text-lg">Doni Agung</h4>
                  <p className="text-gray-400 text-xs">Owner Putra Cabe</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-500 text-sm md:text-base leading-[1.8] italic">
                "Memimpin sebuah organisasi sangatlah bermanfaat dan sekaligus merendahkan hati. Kepercayaan diri dan kerendahan hati. Setiap kesuksesan dibangun di atas pelajaran dari kesalahan yang dibuat, hal ini sangatlah bermanfaat dan sekaligus merendahkan hati. Ini membutuhkan kesehatan mental yang baik. 
                Pengalaman saya secara keseluruhan sangat baik dengan Cakra."
              </p>

              {/* Pagination Dots */}
              <div className="flex gap-2 mt-12">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                <div className="w-3 h-3 rounded-full bg-[#7D66FF]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. CTA BANNER SECTION --- */}
        <div className="relative bg-[#7D66FF] rounded-[40px] p-12 md:p-20 overflow-hidden shadow-2xl shadow-purple-200">
          
          {/* Floating 3D Assets on Banner */}
          <img 
            src="/Home/banner-illus-left.png" 
            className="absolute left-10 top-1/2 -translate-y-1/2 w-32 hidden lg:block pointer-events-none" 
            alt="" 
          />
          <img 
            src="/Home/banner-illus-right.png" 
            className="absolute right-10 top-1/2 -translate-y-1/2 w-40 hidden lg:block pointer-events-none" 
            alt="" 
          />

          <div className="relative z-10 flex flex-col items-center text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Have Amazing Projects?</h2>
            <p className="text-white/80 text-sm md:text-lg mb-10 max-w-lg">
              Do you have any projects to create? Okay, lets create with us. 
              Enter your email and connected with us.
            </p>

            {/* Form Input */}
            <div className="w-full max-w-lg flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 transition-all placeholder:text-white/60 text-white"
              />
              <button className="bg-white text-[#7D66FF] font-bold px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Helper Component untuk Avatar Melayang
const Avatar = ({ src, className }: { src: string; className: string }) => (
  <div className={`absolute rounded-full border-4 border-white shadow-xl overflow-hidden hidden md:block z-0 transform hover:scale-110 transition-transform ${className}`}>
    <img src={src} alt="avatar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
  </div>
);

export default TestimonialAndCTA;