import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Tentang/hero-about.jpg" // Pastikan siapkan gambar tools di folder public/Catalog/
          alt="Tentang Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Tentang Kami</h1>
        <p className="text-sm md:text-base opacity-90 font-light">
          Cakra adalah agency layanan IT yang berfokus pada pengembangan website modern dan solusi digital. 
          Kami membantu bisnis membangun kehadiran online yang cepat, aman, dan siap berkembang menggunakan teknologi terkini.
        </p>
      </div>
    </section>
  );
}