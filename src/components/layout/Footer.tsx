"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Business",
      links: ["Features", "Software Center", "Certified Consultant", "Customer stories"],
    },
    {
      title: "Plans",
      links: ["Enterprise", "Personal", "Getting Started", "Business"],
    },
    {
      title: "Support",
      links: ["Help & uses", "Support", "Forum", "Developers"],
    },
    {
      title: "Company",
      links: ["Payment Method", "Cookie policy", "Terms and conditions", "Privacy policy"],
    },
  ];

  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand Info (Cakra Logo JPG) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12 md:w-14 md:h-14"> {/* Ukuran lebih kecil untuk Navbar */}
                <Image 
                  src="/logo.png" 
                  alt="Logo Cakra"
                  fill
                  className="object-contain"
                />
              </div>
                <span className="text-[#2D3139] font-extrabold text-2xl md:text-3xl tracking-tighter">
                  Cakra
                </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Cakra is a digital agency. We provide so many service and we provide our service worldwide.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <SocialCircle color="bg-[#1877F2]" icon="F" />
              <SocialCircle color="bg-gradient-to-tr from-[#F58529] via-[#D12D7A] to-[#8134AF]" icon="I" />
              <SocialCircle color="bg-[#EA4C89]" icon="D" />
              <SocialCircle color="bg-[#0057FF]" icon="B" />
              <SocialCircle color="bg-[#1DA1F2]" icon="T" />
              <SocialCircle color="bg-[#0077B5]" icon="L" />
            </div>
          </div>

          {/* Columns 2-5: Links */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-[#2D3139] font-bold text-lg mb-6">{group.title}</h4>
                <ul className="flex flex-col gap-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-500 text-sm hover:text-[#4A8BFF] transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT --- */}
        <div className="pt-8 border-t border-[#E8F1FF] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs md:text-sm font-medium">
            © {new Date().getFullYear()} Cakra. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-gray-500 text-xs md:text-sm cursor-pointer hover:text-black transition-colors">
            <span>Language: English(US)</span>
            <ChevronDown size={14} />
          </div>
        </div>

      </div>
    </footer>
  );
};

// Helper component for colored social icons
const SocialCircle = ({ color, icon }: { color: string; icon: string }) => (
  <Link href="#" className={`${color} w-8 h-8 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm`}>
    <span className="uppercase text-[10px] font-bold">{icon}</span>
  </Link>
);

export default Footer;