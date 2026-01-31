"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [budget, setBudget] = useState(5000);

  return (
    <section className="bg-[#111111] text-white py-20 px-4">
      {/* --- HEADER SECTION --- */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="bg-[#C5FF32] w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(197,255,50,0.2)]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Thank you for your Interest in Cakra.</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          We would love to hear from you and discuss how we can help bring your digital ideas to life. 
          Here are the different ways you can get in touch with us.
        </p>
        <button className="bg-[#C5FF32] text-black px-8 py-3 rounded-xl font-bold hover:bg-[#d4ff5e] transition-all">
          Start Project
        </button>
      </div>

      {/* --- FORM SECTION --- */}
      <div className="max-w-4xl mx-auto">
        <form className="space-y-6">
          
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5">
              <label className="block text-lg font-medium mb-4">Full Name</label>
              <input 
                type="text" 
                placeholder="Type here" 
                className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#C5FF32] transition-colors placeholder:text-gray-700"
              />
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5">
              <label className="block text-lg font-medium mb-4">Email</label>
              <input 
                type="email" 
                placeholder="Type here" 
                className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#C5FF32] transition-colors placeholder:text-gray-700"
              />
            </div>
          </div>

          {/* Row 2: Why are you contacting us? */}
          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5">
            <label className="block text-lg font-medium mb-8">Why are you contacting us?</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Web Design", "Collaboration", "Mobile App Design", "Others"].map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="peer hidden" />
                    <div className="w-6 h-6 border border-white/10 rounded-md bg-[#262626] peer-checked:bg-[#C5FF32] peer-checked:border-[#C5FF32] transition-all"></div>
                    <svg className="absolute top-1 left-1 w-4 h-4 text-black opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Row 3: Budget Slider */}
          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5">
            <label className="block text-lg font-medium mb-2">Your Budget</label>
            <p className="text-gray-500 text-sm mb-10">Slide to indicate your budget range</p>
            <div className="px-2">
              <input 
                type="range" 
                min="1000" 
                max="10000" 
                step="500"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-1.5 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#C5FF32]"
              />
              <div className="flex justify-between mt-6 text-sm font-bold">
                <span className="bg-[#262626] px-4 py-2 rounded-lg border border-white/5">${budget}</span>
                <span className="bg-[#262626] px-4 py-2 rounded-lg border border-white/5">$10,000</span>
              </div>
            </div>
          </div>

          {/* Row 4: Message */}
          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5">
            <label className="block text-lg font-medium mb-4">Your Message</label>
            <textarea 
              rows={4} 
              placeholder="Type here" 
              className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#C5FF32] transition-colors placeholder:text-gray-700 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button className="bg-[#C5FF32] text-black px-12 py-4 rounded-xl font-bold hover:bg-[#d4ff5e] transition-all shadow-[0_10px_30px_rgba(197,255,50,0.1)]">
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;