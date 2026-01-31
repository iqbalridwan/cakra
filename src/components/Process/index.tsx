import ProcessHero from "@/components/Process/Hero";
import Processes from "@/components/Process/Step";
import ContactForm from "@/components/Process/Kontak";
// import EngineeringServices from "@/components/Services/Engineering";
// import ProjectManagement from "@/components/Services/Project";
// import CallToAction from "@/components/Services/CTA";

export default function Services() {
   return (
    <main className="w-full bg-[#EEF2FF] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <ProcessHero />
      <Processes />
      <ContactForm />
      {/* <DesignServices />
      <EngineeringServices />
      <ProjectManagement />
      <CallToAction /> */}


    </main>
  );
};