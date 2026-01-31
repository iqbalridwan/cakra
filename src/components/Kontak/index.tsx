import ContactHero from "@/components/Kontak/Hero";
import ContactInfo from "@/components/Kontak/Info";
import ContactDetail from "@/components/Kontak/Detail";

export default function Kontak() {
   return (
    <main className="w-full bg-[#EEF2FF] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <ContactHero />

      {/* 2. INFO CARDS (Overlap ke Hero sedikit) */}
      <ContactDetail />

      {/* 3. FORM & MAP SECTION */}
      {/* <ContactFormMap /> */}

    </main>
  );
};