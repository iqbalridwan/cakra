"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Import ikon burger dan close

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State untuk kontrol menu mobile

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white px-6 py-4 md:px-16 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center z-50">
          <div className="relative w-10 h-10 md:w-14 md:h-14">
            <Image 
              src="/logo.png" 
              alt="Logo Cakra"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-[#2D3139] font-extrabold text-xl md:text-3xl tracking-tighter ml-2">
            Cakra
          </span>
        </Link>

        {/* DESKTOP MENU & BUTTON */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-all duration-300 ${
                    isActive ? "text-[#2D3139] scale-105" : "text-gray-400 hover:text-[#4A8BFF]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link 
            href="/contact" 
            className="bg-[#FFC247] text-[#4F3605] px-7 py-3 rounded-xl font-bold text-sm hover:bg-[#ffb31f] transition-all active:scale-95"
          >
            Let`s Talk
          </Link>
        </div>

        {/* MOBILE BURGER ICON */}
        <div className="md:hidden flex items-center z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#2D3139] focus:outline-none"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
              className={`text-2xl font-bold transition-all ${
                isActive ? "text-[#FFC247]" : "text-[#2D3139]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <Link 
          href="/contact" 
          onClick={() => setIsOpen(false)}
          className="bg-[#FFC247] text-[#4F3605] px-10 py-4 rounded-xl font-bold text-lg"
        >
          Let`s Talk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;