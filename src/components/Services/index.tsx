import ServicesHero from "@/components/Services/Hero";
import DesignServices from "@/components/Services/Design";
import EngineeringServices from "@/components/Services/Engineering";
import ProjectManagement from "@/components/Services/Project";
import CallToAction from "@/components/Services/CTA";

export default function Services() {
   return (
    <main className="w-full bg-[#EEF2FF] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <ServicesHero />
      <DesignServices />
      <EngineeringServices />
      <ProjectManagement />
      <CallToAction />


    </main>
  );
};