"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const brandLogos = [
  { src: "/Brand/tjapmata.png", alt: "Tjap Mata Logo" },
  { src: "/Brand/modern.png", alt: "Modern Power Tools Logo" },
  { src: "/Brand/makita.png", alt: "makita Logo" },
  { src: "/Brand/mollar.png", alt: "mollar Logo" },
  { src: "/Brand/tekiro.png", alt: "tekiro Logo" },
  { src: "/Brand/toho.png", alt: "toho Logo" },
  { src: "/Brand/haston.png", alt: "haston Logo" },
];

const logo = [...brandLogos, ...brandLogos];

export default function Brand() {
  return (
    // Background putih bersih
    <div className="w-full bg-white py-12 relative overflow-hidden">
      
      {/* Garis Pembatas Halus */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-100"></div>

      <div className="flex flex-col items-center">
        
        {/* Label Badge */}
        <div className="mb-10 z-10">
          <span className="px-5 py-2 rounded-full border border-gray-100 bg-gray-50 text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            Trusted By Global Brands
          </span>
        </div>

        {/* Marquee Section */}
        <div className="w-full">
          <Marquee 
            speed={50} 
            gradient={true} 
            gradientColor="#FFFFFF" 
            gradientWidth={100} 
            pauseOnHover={true}
          >
            {logo.map((brand, index) => (
              <div key={index} className="mx-8 md:mx-14 flex items-center justify-center">
                {/* 
                  MODIFIKASI: 
                  - Menghapus 'grayscale'
                  - Opacity dibuat 100% (opacity-100)
                  - Menambahkan efek hover scale agar lebih interaktif
                */}
                <div className="relative w-[120px] h-[50px] md:w-[150px] md:h-[60px] transition-transform duration-300 hover:scale-110">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    className="object-contain" // Memastikan logo tidak terpotong
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100"></div>
    </div>
  );
}