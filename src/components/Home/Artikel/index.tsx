"use client";
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "What services does Cakra provide?",
    answer: "Cakra offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    id: "02",
    question: "How can Cakra help my business?",
    answer: "We help businesses by creating high-quality digital products that improve user engagement and streamline operations.",
  },
  {
    id: "03",
    question: "What industries does Cakra work with?",
    answer: "We work with various industries including Fintech, Healthtech, E-commerce, and more.",
  },
  {
    id: "04",
    question: "How long does it take to complete a project with Cakra?",
    answer: "Project timelines vary depending on complexity, but typically range from 4 to 12 weeks.",
  },
  {
    id: "05",
    question: "Do you offer ongoing support and maintenance after the project is completed?",
    answer: "Yes, we provide long-term support and maintenance packages to ensure your product stays up-to-date and secure.",
  },
  {
    id: "06",
    question: "Can you work with existing design or development frameworks?",
    answer: "Absolutely. We can integrate with your current tech stack or build upon existing design systems.",
  },
  {
    id: "07",
    question: "How involved will I be in the project development process?",
    answer: "We believe in collaborative partnership. You will be involved in weekly sprints and regular feedback sessions.",
  },
  {
    id: "08",
    question: "Can you help with website or app maintenance and updates?",
    answer: "Yes, we offer flexible maintenance plans to keep your digital products performing at their best.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>("01"); // Default buka nomor 01

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Membagi FAQ menjadi dua kolom untuk desktop
  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4, 8);

  return (
    <section className="bg-[#111111] text-white py-20 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">
            Still you have any questions? Contact our Team via{" "}
            <span className="text-white border-b border-white/30 cursor-pointer">cakrainovasidigital@gmail.com</span>
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/10">
          
          {/* Kolom Kiri */}
          <div className="flex flex-col">
            {leftColumn.map((faq) => (
              <FaqItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openId === faq.id} 
                onClick={() => toggleFaq(faq.id)} 
              />
            ))}
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-col">
            {rightColumn.map((faq) => (
              <FaqItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openId === faq.id} 
                onClick={() => toggleFaq(faq.id)} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-komponen untuk setiap baris FAQ
const FaqItem = ({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div 
      className={`p-6 md:p-10 border-r border-b border-white/10 transition-all duration-300 cursor-pointer hover:bg-white/[0.02]`}
      onClick={onClick}
    >
      <div className="flex items-start gap-6">
        {/* Nomor Urut */}
        <div className={`w-12 h-12 flex-shrink-0 rounded-xl border border-white/10 flex items-center justify-center font-bold text-xl transition-colors ${isOpen ? 'bg-[#1A1A1A] text-[#C5FF32]' : 'bg-[#1A1A1A] text-white'}`}>
          {faq.id}
        </div>

        {/* Pertanyaan & Jawaban */}
        <div className="flex-grow pt-2">
          <div className="flex justify-between items-center gap-4">
            <h3 className={`text-lg font-medium transition-colors ${isOpen ? 'text-[#C5FF32]' : 'text-white'}`}>
              {faq.question}
            </h3>
            <div className="text-gray-500">
              {isOpen ? <X className="w-6 h-6 text-[#C5FF32]" /> : <Plus className="w-6 h-6" />}
            </div>
          </div>

          {/* Jawaban (Animated) */}
          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-6">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;