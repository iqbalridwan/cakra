"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const ContactDetail = () => {
  const [budget, setBudget] = useState(5000);

  return (
    <section className="bg-[#111111] text-white py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        
        {/* --- 1. TOP CONTACT BADGES --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center gap-3 bg-[#1A1A1A] border border-white/5 px-6 py-4 rounded-xl min-w-[240px]">
            <div className="bg-[#C5FF32]/10 p-2 rounded-lg">
              <Mail className="w-5 h-5 text-[#C5FF32]" />
            </div>
            <span className="text-sm font-medium">cakrainovasidigital@gmail.com</span>
          </div>
          
          <div className="flex items-center gap-3 bg-[#1A1A1A] border border-white/5 px-6 py-4 rounded-xl min-w-[240px]">
            <div className="bg-[#C5FF32]/10 p-2 rounded-lg">
              <Phone className="w-5 h-5 text-[#C5FF32]" />
            </div>
            <span className="text-sm font-medium">085865405330</span>
          </div>

          <div className="flex items-center gap-3 bg-[#1A1A1A] border border-white/5 px-6 py-4 rounded-xl min-w-[240px]">
            <div className="bg-[#C5FF32]/10 p-2 rounded-lg">
              <MapPin className="w-5 h-5 text-[#C5FF32]" />
            </div>
            <span className="text-sm font-medium">Get Location</span>
          </div>
        </div>

        {/* --- 2. MAIN FORM CARD --- */}
        <div className="bg-[#171717] border border-white/5 rounded-[32px] p-6 md:p-12 shadow-2xl">
          <form className="space-y-8">
            
            {/* Row: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
                <label className="block text-gray-400 text-sm mb-3">Full Name</label>
                <input 
                  type="text" placeholder="Type here" 
                  className="w-full bg-transparent border-b border-white/10 pb-2 outline-none focus:border-[#C5FF32] transition-colors placeholder:text-gray-700"
                />
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
                <label className="block text-gray-400 text-sm mb-3">Email</label>
                <input 
                  type="email" placeholder="Type here" 
                  className="w-full bg-transparent border-b border-white/10 pb-2 outline-none focus:border-[#C5FF32] transition-colors placeholder:text-gray-700"
                />
              </div>
            </div>

            {/* Row: Reasons */}
            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5">
              <label className="block text-white text-lg font-medium mb-8">Why are you contacting us?</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Web Design", "Collaboration", "Mobile App Design", "Others"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-[#262626] appearance-none checked:bg-[#C5FF32] checked:border-[#C5FF32] transition-all cursor-pointer relative checked:after:content-['✓'] checked:after:absolute checked:after:text-black checked:after:text-[12px] checked:after:left-[4px] checked:after:top-[0px] font-bold" />
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Row: Budget */}
            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5">
              <label className="block text-white text-lg font-medium mb-2">Your Budget</label>
              <p className="text-gray-500 text-sm mb-10">Slide to indicate your budget range</p>
              <input 
                type="range" min="1000" max="10000" step="500" value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-1 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#C5FF32]"
              />
              <div className="flex justify-between mt-6 text-xs font-bold text-gray-400">
                <span className="bg-[#262626] px-4 py-2 rounded-lg border border-white/5">${budget}</span>
                <span className="bg-[#262626] px-4 py-2 rounded-lg border border-white/5">$10,000</span>
              </div>
            </div>

            {/* Row: Message */}
            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5">
              <label className="block text-white text-lg font-medium mb-4">Your Message</label>
              <textarea 
                rows={3} placeholder="Type here" 
                className="w-full bg-transparent border-b border-white/10 pb-2 outline-none focus:border-[#C5FF32] transition-colors placeholder:text-gray-700 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <button className="bg-[#C5FF32] text-black px-12 py-4 rounded-xl font-bold hover:bg-[#d4ff5e] transition-all shadow-[0_10px_30px_rgba(197,255,50,0.2)] active:scale-95">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* --- 3. BOTTOM INFO BAR --- */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">
          
          {/* Operating Days */}
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm font-medium">Operating Days</span>
            <div className="bg-[#1A1A1A] border border-white/5 px-6 py-3 rounded-xl text-white text-sm font-medium">
              Monday to Friday
            </div>
          </div>

          {/* Social Connections */}
          <div className="flex items-center gap-4 bg-[#1A1A1A] border border-white/5 p-2 rounded-2xl">
            <span className="text-sm font-medium px-4 text-gray-500">Stay Connected</span>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <div key={i} className="w-10 h-10 bg-[#262626] border border-white/5 rounded-xl flex items-center justify-center hover:text-[#C5FF32] transition-all cursor-pointer">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactDetail;