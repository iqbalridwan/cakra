import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Services/hero-services.jpg" // Pastikan siapkan gambar tools di folder public/Catalog/
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
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact</h1>
        <p className="text-sm md:text-base opacity-90 font-light">
          Hubungi kami untuk mendapatkan informasi lebih lanjut tentang layanan kami atau mulai proyek baru bersama kami.
        </p>
      </div>
    </section>
  );
}