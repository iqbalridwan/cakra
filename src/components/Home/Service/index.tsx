"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Branding & Design", isHighlighted: true },
  { title: "UI/UX Design", isHighlighted: false },
  { title: "Product Design", isHighlighted: false },
  { title: "Content Strategy", isHighlighted: false },
  { title: "Design & Concept", isHighlighted: false },
  { title: "Social Media", isHighlighted: false },
  { title: "Media Planning", isHighlighted: false },
  { title: "Digital Strategy", isHighlighted: false },
  { title: "SEO Optimization", isHighlighted: false },
];

const ServiceGrid = () => {
  return (
    <section className="bg-[#111827] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. HEADER ROW --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold max-w-lg leading-tight">
            See Our Services We <br /> Can Help You With
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed md:pt-4">
            Produk dan layanan digital kami menjembatani kesenjangan antara pengalaman fisik dan digital
            untuk mewujudkan ambisi digital klien. Kami memiliki proposisi nilai terbaik.
          </p>
        </div>

        {/* --- 2. GRID SERVICES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex items-center justify-between p-8 rounded-xl transition-all duration-300 cursor-pointer border border-transparent
                ${
                  service.isHighlighted
                    ? "bg-[#7D66FF] text-white shadow-xl shadow-purple-900/20"
                    : "bg-[#1F2937] text-gray-300 hover:bg-[#374151] hover:text-white hover:border-white/10"
                }
              `}
            >
              <span className="text-xl font-semibold tracking-tight">
                {service.title}
              </span>
              
              {/* Icon Panah */}
              <div className={`transition-transform duration-300 group-hover:translate-x-2`}>
                <ArrowRight 
                  className={`w-6 h-6 ${service.isHighlighted ? "text-white" : "text-gray-400 group-hover:text-white"}`} 
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceGrid;