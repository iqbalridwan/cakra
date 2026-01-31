import WorksHero from "@/components/Work/Hero";
import Portfolio from "@/components/Work/Portfolio";
import CTA from "@/components/Work/CTA";

export default function ProdukPage() {
  return (
    <main className="w-full bg-[#EEF2FF] min-h-screen pb-20">
      <WorksHero />
      <Portfolio />
      <CTA />
    </main>
  );
}