"use client";

import AboutHero from "@/components/Tentang/Hero";
import AboutSection from "@/components/Tentang/About";
import VisionSection from "@/components/Tentang/Visi";
import PromiseSection from "@/components/Tentang/Promise";
import ContactIntro from "@/components/Tentang/Contact";

export default function TentangKami() {
  return (
    <main className="w-full">
      <AboutHero />
      <AboutSection />
      <VisionSection />
      <PromiseSection />
      <ContactIntro />
    </main>
  );
}