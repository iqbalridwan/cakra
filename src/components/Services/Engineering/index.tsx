"use client";
import React from "react";
import { 
  Code2, Terminal, Settings, ShoppingCart, 
  Smartphone, SmartphoneNfc, Pipette, Activity,
  Building2, MonitorPlay, Puzzle, Database 
} from "lucide-react";

// 1. Definisikan Interface agar TypeScript mengenali tipe data ikon
interface EngineeringItem {
  title: string;
  icon: React.ElementType; // Menggunakan ElementType untuk referensi komponen
}

interface EngineeringCategory {
  category: string;
  items: EngineeringItem[];
}

const engineeringCategories: EngineeringCategory[] = [
  {
    category: "Web Development",
    items: [
      { title: "Front-End Development (HTML, CSS, JavaScript)", icon: Code2 },
      { title: "Back-End Development (PHP, Python, Ruby)", icon: Terminal },
      { title: "Content Management System (CMS) Development (WordPress, Drupal)", icon: Settings },
      { title: "E-Commerce Platform Development (Magento, Shopify)", icon: ShoppingCart },
    ]
  },
  {
    category: "Mobile App Development",
    items: [
      { title: "Native iOS and Android App Development", icon: Smartphone },
      { title: "Cross-Platform App Development (React Native, Flutter)", icon: SmartphoneNfc },
      { title: "App Prototyping and UI/UX Design Integration", icon: Pipette },
      { title: "App Testing, Deployment, and Maintenance", icon: Activity },
    ]
  },
  {
    category: "Custom Software Development",
    items: [
      { title: "Enterprise Software Development", icon: Building2 },
      { title: "Custom Web Application Development", icon: MonitorPlay },
      { title: "Integration with Third-Party APIs and Systems", icon: Puzzle },
      { title: "Legacy System Modernization and Migration", icon: Database },
    ]
  }
];

const EngineeringServices = () => {
  return (
    <section className="bg-[#F8FAFC] py-24 px-6 md:px-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN HEADER --- */}
        <div className="mb-20">
          <h2 className="text-[#1E293B] text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Engineering
          </h2>
          <p className="text-slate-500 max-w-4xl text-sm md:text-base leading-relaxed mb-10">
            Our engineering team at <span className="text-[#FF4D4D] font-bold">Cakra</span> combines technical expertise with a passion for innovation to build robust 
            and scalable digital solutions. We leverage the latest technologies and best practices to 
            deliver high-performance applications tailored to your specific needs.
          </p>
          <div className="inline-block bg-white border border-slate-200 px-6 py-3 rounded-2xl text-slate-600 text-sm font-semibold shadow-sm">
            Our engineering services include:
          </div>
        </div>

        {/* --- CATEGORIES SECTION --- */}
        <div className="space-y-24">
          {engineeringCategories.map((cat, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">
                {cat.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-slate-200 shadow-sm rounded-sm overflow-hidden">
                {cat.items.map((item, itemIndex) => {
                  // 2. Ambil referensi komponen ikon
                  const IconComponent = item.icon;
                  
                  return (
                    <div 
                      key={itemIndex}
                      className="p-8 md:p-10 bg-white border-r border-b border-slate-200 flex flex-col items-start hover:bg-slate-50 transition-all group cursor-default"
                    >
                      {/* Icon Box */}
                      <div className="w-12 h-12 bg-[#F8FAFC] border border-slate-200 rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:border-[#4A3AFF]/30 group-hover:shadow-md transition-all">
                        {/* 3. Render ikon sebagai komponen normal (Pasti lolos Build) */}
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

export default EngineeringServices;