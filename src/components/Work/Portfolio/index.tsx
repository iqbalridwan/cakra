"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "E-Commerce Platform for Fashion Hub",
    title: "Chic Boutique",
    url: "https://www.chicboutique.com",
    image: "/project1.png", // Ganti dengan path gambar kamu
    description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
  },
  {
    category: "Mobile App for Food Delivery Service",
    title: "HungryBites",
    url: "https://www.hungrybites.com",
    image: "/project2.png", // Ganti dengan path gambar kamu
    description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
  }
];

const Portfolio = () => {
  return (
    <section className="bg-[#111111] text-white py-20 px-4 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">At Cakra</h2>
          <p className="text-gray-400 max-w-4xl text-sm md:text-base leading-relaxed mb-8">
            Kami mendapat kehormatan untuk bekerja dengan beragam klien dan menghadirkan produk digital luar biasa yang mendorong kesuksesan.
          </p>
          <div className="inline-block bg-[#1A1A1A] border border-white/5 px-6 py-3 rounded-xl text-gray-300 text-sm">
            Berikut beberapa contoh project kami bersama client:
          </div>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-l border-t border-white/10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-8 md:p-12 border-r border-b border-white/10 flex flex-col group"
            >
              {/* Category Title */}
              <p className="text-gray-400 text-lg md:text-xl font-medium mb-8">
                {project.category}
              </p>

              {/* Project Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#1A1A1A] mb-8 border border-white/5">
                {/* Gunakan placeholder jika belum ada gambar */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#262626] flex items-center justify-center">
                   <span className="text-gray-700">Project Screenshot</span>
                </div>
                {/* UNCOMMENT KODE DI BAWAH JIKA SUDAH ADA GAMBAR */}
                {/* <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   className="object-cover transition-transform duration-500 group-hover:scale-105" 
                /> */}
              </div>

              {/* Title & Link Icon Row */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <Link 
                  href={project.url} 
                  target="_blank"
                  className="w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-xl flex items-center justify-center text-[#C5FF32] hover:bg-[#C5FF32] hover:text-black transition-all"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </Link>
              </div>

              {/* URL Display Box */}
              <div className="bg-[#1A1A1A] border border-white/5 px-4 py-2.5 rounded-lg text-gray-500 text-sm inline-block w-fit mb-8">
                {project.url}
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </div>
          ))}
        </div>

 {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-l border-t border-white/10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-8 md:p-12 border-r border-b border-white/10 flex flex-col group"
            >
              {/* Category Title */}
              <p className="text-gray-400 text-lg md:text-xl font-medium mb-8">
                {project.category}
              </p>

              {/* Project Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#1A1A1A] mb-8 border border-white/5">
                {/* Gunakan placeholder jika belum ada gambar */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#262626] flex items-center justify-center">
                   <span className="text-gray-700">Project Screenshot</span>
                </div>
                {/* UNCOMMENT KODE DI BAWAH JIKA SUDAH ADA GAMBAR */}
                {/* <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   className="object-cover transition-transform duration-500 group-hover:scale-105" 
                /> */}
              </div>

              {/* Title & Link Icon Row */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <Link 
                  href={project.url} 
                  target="_blank"
                  className="w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-xl flex items-center justify-center text-[#C5FF32] hover:bg-[#C5FF32] hover:text-black transition-all"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </Link>
              </div>

              {/* URL Display Box */}
              <div className="bg-[#1A1A1A] border border-white/5 px-4 py-2.5 rounded-lg text-gray-500 text-sm inline-block w-fit mb-8">
                {project.url}
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;