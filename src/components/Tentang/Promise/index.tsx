"use client";
import React from "react";

const skills = [
  { name: "Development", percentage: 70 },
  { name: "UI / UX Design", percentage: 60 },
  { name: "Marketing", percentage: 54 },
  { name: "Template Maker", percentage: 90 },
];

const PromiseSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
        
        {/* --- SISI KIRI: TEXT CONTENT --- */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-[#1E293B] text-4xl md:text-5xl font-bold leading-tight">
              What We Promise For <br />
              <span className="relative inline-block text-[#FF4D4D]">
                Successful
                {/* Garis bawah merah tebal */}
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#FF4D4D]"></span>
              </span>{" "}
              Company
            </h2>
          </div>

          <div className="space-y-6 text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
            <p>
              We are the best world information technology company. Providing 
              the highest quality in network solutions. About more than 25 years 
              of experience and 1000 of innovative achievements.
            </p>
            <p>
              Our mission is to help enterprises accelerate adoption new 
              technologies, untangle complex issues that always emerge during 
              digital evolution, orchestrate innovation.
            </p>
          </div>
        </div>

        {/* --- SISI KANAN: SKILL PROGRESS BARS --- */}
        <div className="w-full lg:w-1/2 space-y-12 pt-4">
          {skills.map((skill, index) => (
            <div key={index} className="relative w-full">
              {/* Nama Skill & Angka */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#1E293B] font-bold text-sm md:text-base">
                  {skill.name}
                </span>
                <span className="text-[#1E293B] font-bold text-sm md:text-base">
                  {skill.percentage}%
                </span>
              </div>

              {/* Bar Container */}
              <div className="relative w-full h-[2px] bg-gray-200">
                {/* Progress Bar (Garis Biru) */}
                <div 
                  className="absolute top-0 left-0 h-full bg-[#4A3AFF] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                >
                  {/* Ujung Vertikal (Garis tegak kecil di akhir bar) */}
                  <div className="absolute right-0 bottom-0 w-[4px] h-4 bg-[#4A3AFF] translate-y-[7px]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PromiseSection;