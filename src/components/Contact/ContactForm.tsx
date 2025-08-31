// src/components/ContactForm.tsx
"use client";

import { useState } from "react";
import Tag from "@/components/Tag/Tag";

export default function ContactForm() {
  // ================= Form State =================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    purpose: "",
    query: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // ================= Handle Input Change =================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error when typing
  };

  // ================= Handle Submit =================
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Help Text";
    if (!formData.email.trim()) newErrors.email = "Help Text";
    if (!formData.contact.trim()) newErrors.contact = "Help Text";
    if (!formData.location.trim()) newErrors.location = "Help Text";
    if (!formData.query.trim()) newErrors.query = "Help Text";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  // ================= Thank You State =================
  if (submitted) {
    return (
      <div className="w-full max-w-[1440px] min-h-[920px] mx-auto bg-[#0A0A0A] rounded-2xl backdrop-blur-md flex flex-col">
        {/* ================= Foundation Spacing - Top ================= */}
        <div className="w-full h-[168px]" />

        {/* ================= Thank You State ================= */}
        <div className="w-full rounded-[32px] border border-[#1A1A3D] 
                        bg-[linear-gradient(180deg,rgba(24,26,147,0.4),rgba(0,0,0,0.4))] 
                        p-12 flex flex-row gap-8 items-center justify-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500">
              ✅
            </div>
            <h1 className="font-clash text-[28px] text-white">
              Thank you for your request!
            </h1>
            <p className="text-text-sub max-w-md">
              Our team will get in touch with you shortly. We're excited to learn more about your needs.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="w-[280px] h-[48px] rounded-full bg-white text-black shadow-md"
            >
              Submit another request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1440px] min-h-[920px] mx-auto bg-[#0A0A0A] rounded-2xl backdrop-blur-md flex flex-col"
    >
      {/* ================= Foundation Spacing - Top ================= */}
      <div className="w-full h-[168px]" />

      {/* ================= Main Card Container ================= */}
      <div className="w-full rounded-[32px] border border-[#1A1A3D] 
                      bg-[linear-gradient(180deg,rgba(24,26,147,0.4),rgba(0,0,0,0.4))] 
                      p-12 flex flex-row gap-8">
        
        {/* ================= Left Side Div ================= */}
        <div className="w-[580px] h-full flex flex-col justify-between">
          
          {/* -------- Top Div (Tag + Heading + Subtext) -------- */}
          <div className="flex flex-col gap-6">
            <Tag
              text="How can we help you?"
              size="small"
              bgColor="bg-[#343499] text-[#F3F3F3]"
            />

            <h1 className="font-clash text-[32px] leading-[1.2] text-text-inverse">
              Let's Build <br/> the Future of Crypto <br/> Visualisation Together
            </h1>

            <p className="font-poppins text-[16px] leading-[1.6] text-text-sub">
              We're here to help. Whether you're interested in learning more <br/> 
              about our services or need support, we're happy to assist you.
            </p>
          </div>

          {/* -------- Bottom Div (h1 + Button) -------- */}
          <div className="flex flex-col gap-6 mt-48">
            <h1 className="font-clash text-[32px] leading-[1.3] text-text-inverse">
              Want to connect directly?
            </h1>
            <button
              type="button"
              className="w-[238px] h-[48px] px-6 py-3 rounded-full bg-[#000000] text-white shadow-[0px_4px_20px_rgba(0,0,0,0.5)]"
            >
              Email us
            </button>
          </div>
        </div>

        {/* ================= Right Side Div ================= */}
        <div className="flex-1 flex flex-col gap-8">
          
          {/* -------- First Div (Name + Email Inputs with Labels) -------- */}
          <div className="w-full flex flex-row gap-6">
            {/* Name Input */}
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-sm text-text-sub">Name *</label>
              <input
                name="name"
                type="text"
                placeholder="Mark Brucher"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-full border ${
                  errors.name ? "border-red-500" : "border-[#343499]"
                } bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-[#5F67FF]`}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-sm text-text-sub">Email *</label>
              <input
                name="email"
                type="email"
                placeholder="mark@gmail.cm"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-full border ${
                  errors.email ? "border-red-500" : "border-[#343499]"
                } bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-[#5F67FF]`}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
          </div>

          {/* -------- Second Div (Contact + Location Inputs with Labels) -------- */}
          <div className="w-full flex flex-row gap-6">
            {/* Contact Input (with country code dropdown) */}
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-sm text-text-sub">Contact *</label>
              <div className="flex flex-row items-center gap-2">
                {/* Country Code Dropdown */}
                <select
                  defaultValue="+1"
                  className="px-3 py-3 rounded-l-full border border-[#343499] bg-transparent 
                            text-white focus:outline-none focus:border-[#5F67FF]"
                >
                  <option value="+1">🇨🇦 +1</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+81">🇯🇵 +81</option>
                </select>

                {/* Phone Number Input */}
                <input
                  name="contact"
                  type="tel"
                  placeholder="(647) 573-6558"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`flex-1 px-4 py-3 rounded-r-full border ${
                    errors.contact ? "border-red-500" : "border-[#343499]"
                  } bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-[#5F67FF]`}
                />
              </div>
              {errors.contact && <p className="text-red-500 text-xs">{errors.contact}</p>}
            </div>

            {/* Location Input */}
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-sm text-text-sub">Location *</label>
              <input
                name="location"
                type="text"
                placeholder="City, Country"
                value={formData.location}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-full border ${
                  errors.location ? "border-red-500" : "border-[#343499]"
                } bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-[#5F67FF]`}
              />
              {errors.location && <p className="text-red-500 text-xs">{errors.location}</p>}
            </div>
          </div>

          {/* -------- Third Div (Purpose Dropdown) -------- */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-text-sub">Purpose</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-[#343499] 
                        bg-transparent text-white focus:outline-none focus:border-[#5F67FF]"
            >
              <option value="" disabled>Select a purpose</option>
              <option value="investment">Investment Inquiry</option>
              <option value="partnership">Partnership</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="media">Media and Press</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* -------- Fourth Div (Your Query Textarea) -------- */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-text-sub">Your query</label>
            <textarea
              name="query"
              placeholder="Tell us what you need"
              value={formData.query}
              onChange={handleChange}
              className={`w-full min-h-[120px] px-4 py-3 rounded-xl border ${
                errors.query ? "border-red-500" : "border-[#343499]"
              } bg-transparent text-white resize-none focus:outline-none focus:border-[#5F67FF]`}
            />
            {errors.query && <p className="text-red-500 text-xs">{errors.query}</p>}
          </div>

          {/* -------- Fifth Div (Submit Button) -------- */}
          <div>
            <button
              type="submit"
              className="w-full h-[48px] rounded-full bg-white text-black shadow-md"
            >
              Submit your request
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
