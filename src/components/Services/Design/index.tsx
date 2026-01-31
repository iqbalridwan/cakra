"use client";
import React from "react";
import { 
  Users, Layers, MousePointerClick, Palette, 
  Layout, PenTool, Type, MonitorSmartphone,
  Zap, Compass, FileText, Share2 
} from "lucide-react";

// Definisikan tipe untuk mempermudah TypeScript
interface DesignItem {
  title: string;
  icon: React.ElementType; // Menggunakan ElementType agar bisa dipanggil sebagai komponen
}

interface DesignCategory {
  category: string;
  items: DesignItem[];
}

const designCategories: DesignCategory[] = [
  {
    category: "User Experience (UX) Design",
    items: [
      { title: "User Research and Persona Development", icon: Users },
      { title: "Information Architecture and Wireframing", icon: Layers },
      { title: "Interactive Prototyping and User Testing", icon: MousePointerClick },
      { title: "UI Design and Visual Branding", icon: Palette },
    ]
  },
  {
    category: "User Interface (UI) Design",
    items: [
      { title: "Intuitive and Visually Appealing Interface Design", icon: Layout },
      { title: "Custom Iconography and Illustration", icon: PenTool },
      { title: "Typography and Color Palette Selection", icon: Type },
      { title: "Responsive Design for Various Devices", icon: MonitorSmartphone },
    ]
  },
  {
    category: "Branding and Identity",
    items: [
      { title: "Logo Design and Visual Identity Development", icon: Zap },
      { title: "Brand Strategy and Positioning", icon: Compass },
      { title: "Brand Guidelines and Style Guides", icon: FileText },
      { title: "Marketing Collateral Design (Brochures, Business Cards, etc.)", icon: Share2 },
    ]
  }
];

const DesignServices = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN HEADER --- */}
        <div className="mb-20">
          <h2 className="text-[#1E293B] text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Design
          </h2>
          <p className="text-gray-500 max-w-4xl text-sm md:text-base leading-relaxed mb-10">
            At <span className="text-[#FF4D4D] font-bold">Cakra</span>, our design team is passionate about creating stunning, user-centric designs 
            that captivate your audience and elevate your brand. We believe that great design is 
            not just about aesthetics; it's about creating seamless and intuitive user experiences.
          </p>
          <div className="inline-block bg-[#F8FAFC] border border-gray-200 px-6 py-3 rounded-2xl text-gray-600 text-sm font-semibold shadow-sm">
            Our design services include:
          </div>
        </div>

        {/* --- CATEGORIES SECTION --- */}
        <div className="space-y-24">
          {designCategories.map((cat, catIndex) => (
            <div key={catIndex}>
              {/* Sub-Category Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
                {cat.category}
              </h3>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100">
                {cat.items.map((item, itemIndex) => {
                  // Ambil komponen ikon
                  const IconComponent = item.icon;
                  
                  return (
                    <div 
                      key={itemIndex}
                      className="p-8 md:p-10 border-r border-b border-gray-100 flex flex-col items-start hover:bg-gray-50/50 transition-all group"
                    >
                      {/* Icon Box */}
                      <div className="w-12 h-12 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:border-[#4A3AFF]/30 group-hover:shadow-md transition-all">
                        {/* Panggil ikon sebagai komponen biasa */}
                        <IconComponent className="w-6 h-6 text-[#4A3AFF]" />
                      </div>
                      
                      {/* Item Title */}
                      <p className="text-[#1E293B] font-bold text-sm md:text-base leading-snug">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DesignServices;