"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    // Background diubah menjadi bg-white (solid) tanpa transparansi
    <nav className="sticky top-0 z-50 w-full bg-white px-6 py-4 md:px-16 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
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

        {/* Right Section: Menu & Button */}
        <div className="flex items-center gap-10">
          {/* Menu Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#2D3139] scale-105" // Warna teks saat aktif
                      : "text-gray-400 hover:text-[#4A8BFF]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Let's Talk Button (Kuning/Oranye) */}
          <Link 
            href="/contact" 
            className="bg-[#FFC247] text-[#4F3605] px-7 py-3 rounded-xl font-bold text-sm hover:bg-[#ffb31f] hover:shadow-md transition-all active:scale-95"
          >
            Let`s Talk
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;