"use client";
import React from "react";
import { 
  ClipboardList, BarChart3, Maximize, TrendingUp, 
  RefreshCcw, Database, Briefcase, Wand2,
  Puzzle, Shield, LineChart, Wrench 
} from "lucide-react";

// 1. Definisikan Interface agar TypeScript mengenali tipe data
interface PMItem {
  title: string;
  icon: React.ElementType; // Menggunakan ElementType untuk referensi komponen
}

interface PMCategory {
  category: string;
  items: PMItem[];
}

const pmCategories: PMCategory[] = [
  {
    category: "Project Planning and Scoping",
    items: [
      { title: "Requirements Gathering and Analysis", icon: ClipboardList },
      { title: "Project Roadmap and Timeline Development", icon: BarChart3 },
      { title: "Resource Allocation and Task Assignment", icon: Maximize },
      { title: "Risk Assessment and Mitigation Strategies", icon: TrendingUp },
    ]
  },
  {
    category: "Agile Development",
    items: [
      { title: "Iterative Development and Sprints", icon: RefreshCcw },
      { title: "Scrum or Kanban Methodology Implementation", icon: Database },
      { title: "Regular Progress Updates and Demos", icon: Briefcase },
      { title: "Continuous Improvement and Feedback Incorporation", icon: Wand2 },
    ]
  },
  {
    category: "Quality Assurance and Testing",
    items: [
      { title: "Test Planning and Execution", icon: Puzzle },
      { title: "Functional and Usability Testing", icon: Shield },
      { title: "Performance and Security Testing", icon: LineChart },
      { title: "Bug Tracking and Issue Resolution", icon: Wrench },
    ]
  }
];

const ProjectManagement = () => {
  return (
    // Background utama menggunakan warna Cream Lembut (#FDFBF7)
    <section className="bg-[#FDFBF7] py-24 px-6 md:px-16 border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN HEADER --- */}
        <div className="mb-20">
          <h2 className="text-[#1E293B] text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Project Management
          </h2>
          <p className="text-slate-600 max-w-4xl text-sm md:text-base leading-relaxed mb-10">
            Our experienced project management team at <span className="text-[#FF4D4D] font-bold">Cakra</span> ensures that your projects are delivered on time, 
            within budget, and according to your specifications. We follow industry-standard 
            methodologies and employ effective communication and collaboration tools.
          </p>
          <div className="inline-block bg-white border border-[#E5E0D8] px-6 py-3 rounded-2xl text-slate-600 text-sm font-semibold shadow-sm">
            Our project management services include:
          </div>
        </div>

        {/* --- CATEGORIES SECTION --- */}
        <div className="space-y-24">
          {pmCategories.map((cat, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">
                {cat.category}
              </h3>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#E5E0D8] shadow-sm rounded-sm overflow-hidden">
                {cat.items.map((item, itemIndex) => {
                  // 2. Ambil komponen ikon dari data
                  const IconComponent = item.icon;

                  return (
                    <div 
                      key={itemIndex}
                      className="p-8 md:p-10 bg-white border-r border-b border-[#E5E0D8] flex flex-col items-start hover:bg-[#FDFBF7] transition-all group cursor-default"
                    >
                      {/* Icon Box */}
                      <div className="w-12 h-12 bg-[#FDFBF7] border border-[#E5E0D8] rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:border-[#4A3AFF]/30 group-hover:shadow-md transition-all">
                        {/* 3. Render ikon sebagai komponen (Bukan cloneElement) */}
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

export default ProjectManagement;