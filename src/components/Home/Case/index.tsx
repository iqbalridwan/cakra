"use client";
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Website Landing Page Putra Cabe",
    description: "Putra Cabe merupakan distributor cabai segar untuk pasar B2B seperti restoran, pedagang besar, dan industri kuliner. Mereka membutuhkan landing page profesional yang mampu meningkatkan kredibilitas brand serta mempermudah calon mitra memahami layanan yang ditawarkan.",
    image: "/Home/Sample/putracabe.jpg",
    color: "bg-[#F38E41]"
  },
  {
    title: "Website Landing Page AG Bata",
    description: "AG Bata adalah perusahaan yang bergerak di bidang distribusi bata. Cakra mengembangkan website company profile modern yang dirancang untuk meningkatkan kredibilitas brand, mempermudah akses informasi produk, serta memperluas jangkauan pasar secara digital.",
    image: "/Home/Sample/agbata.jpg",
    color: "bg-[#4F75FF]"
  },
  {
    title: "Website Landing Page Kuda Jaya",
    description: "Kuda Jaya adalah perusahaan yang bergerak di bidang teknik dan layanan industri. Cakra mengembangkan website company profile yang dirancang untuk menampilkan kompetensi teknis, pengalaman proyek, serta memperkuat citra profesional perusahaan di era digital.",
    image: "/Home/Sample/kudajaya.jpg",
    color: "bg-[#F3F4F6]"
  },
  {
    title: "Website Landing Page Utomo Teknik",
    description: "Untuk meningkatkan kredibilitas dan daya saing di sektor teknik, Cakra mengembangkan website profesional bagi Utomo dengan pendekatan UI/UX strategis dan teknologi modern.",
    image: "/Home/Sample/utomo.jpg",
    color: "bg-[#0F172A]"
  }
];

const CaseStudies = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. HEADER --- */}
        <div className="text-center mb-20">
          <h2 className="text-[#0F172A] text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Our Recent Case Studies
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Tim kami dapat menciptakan pengalaman web dan aplikasi yang luar biasa, dimulai dengan
            riset pasar yang mendalam, strategi praktis, dan eksekusi profesional.
          </p>
        </div>

        {/* --- 2. GRID CASE STUDIES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              // PERBAIKAN: Tambahkan overflow-hidden dan hapus padding (p-6/p-8)
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container: Dibuat Full Width ke pinggir kartu */}
              <div className={`relative aspect-[16/10] w-full overflow-hidden ${project.color}`}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority={index < 2} // Optimasi loading untuk 2 gambar pertama
                /> 
              </div>

              {/* Text Content: Berikan padding di sini agar teks tidak menempel ke pinggir */}
              <div className="p-8 md:p-10 flex flex-col gap-3">
                <h3 className="text-[#0F172A] text-2xl md:text-3xl font-bold tracking-tight group-hover:text-[#4A3AFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;