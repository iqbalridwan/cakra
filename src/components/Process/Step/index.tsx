"use client";
import React from "react";

const processes = [
  {
    id: "01",
    title: "Discovery",
    description: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy."
  },
  {
    id: "02",
    title: "Planning and Strategy",
    description: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision."
  },
  {
    id: "03",
    title: "Design",
    description: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel."
  },
  {
    id: "04",
    title: "Development",
    description: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns."
  }
];

const ProcessSection = () => {
  return (
    <section className="bg-[#111111] text-white py-20 px-4 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">At Cakra</h2>
          <p className="text-gray-400 max-w-4xl text-sm md:text-base leading-relaxed mb-8">
            We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. 
            Our process combines industry best practices, creative thinking, and a client-centric approach.
          </p>
          <div className="inline-block bg-[#1A1A1A] border border-white/5 px-6 py-3 rounded-xl text-gray-300 text-sm">
            Here`s an overview of our typical process:
          </div>
        </div>

        {/* --- PROCESS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/10">
          {processes.map((item, index) => (
            <div 
              key={index} 
              className="p-8 md:p-14 border-r border-b border-white/10 flex flex-col group hover:bg-white/[0.01] transition-all"
            >
              {/* Number and Title Row */}
              <div className="flex items-center gap-6 mb-8">
                <span className="text-6xl md:text-8xl font-bold text-[#C5FF32] opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.id}
                </span>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                  <div className="w-full h-[1px] bg-white/10"></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;