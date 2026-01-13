"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We'll contact you soon.`);
    setForm({ name: "", email: "", subject: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="relative my-16  text-white overflow-hidden py-8  lg:py-12 px-6 md:px-12">
      {/* Abstract Wave Background */}
      {/* <div className="absolute inset-0 opacity-30">
        <svg
          viewBox="0 0 1440 1024"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="#FCDB66"
            strokeWidth="2"
            opacity="0.15"
            d="M0,128 Q360,256 720,128 T1440,128 L1440,1024 L0,1024 Z"
          />
          <path
            fill="none"
            stroke="#FCDB66"
            strokeWidth="3"
            opacity="0.1"
            d="M0,256 Q360,384 720,256 T1440,256 L1440,1024 L0,1024 Z"
          />
          <path
            fill="none"
            stroke="#FCDB66"
            strokeWidth="4"
            opacity="0.08"
            d="M0,384 Q360,512 720,384 T1440,384 L1440,1024 L0,1024 Z"
          />
        </svg>
      </div> */}

      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* Left Side - Text */}
        <div className=" lg:text-left space-y-8">
          <div className="flex items-center mb-4 lg:justify-start gap-2 text-2xl font-extrabold text-[#f8d249] font-heading">
            <span className="text-2xl font-extrabold">✦</span>CONTACT US
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white font-heading">
            Feel free to ask anything
            <br />
            <span className="font-medium text-[#f8d249]">
              Anytime Just Contact with
            </span>
            <br />
            Support Center
          </h1>

          <div className="space-y-3 md:space-y-6 mt-6 text-gray-300 text-lg">
            <p className="">
              <a className="text-white flex items-center lg:justify-start gap-3" href="mailto:connect@mypragyan.com" ><Mail size={18} className="text-[#f8d249]" />
                connect@mypragyan.com
              </a>
            </p>
            <p className="">
              <a href="tel:+919998081399" className="text-white flex items-center lg:justify-start gap-3"><Phone size={18} className="text-[#f8d249]" />
                +91 99980 81399
              </a>
              <a href="tel:+919998081393" className="mt-6 text-white flex items-center lg:justify-start gap-3"><Phone size={18} className="text-[#f8d249]" />
                +91 99980 81393
              </a>
            </p>
          </div>
        </div>
        {/* Right Side - Form */}
        <div className="bg-white/5 backdrop-blur-xl rounded-md p-6 md:p-8 lg:p-12 border border-white/20 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Name <span className="text-[#f8d249]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Full Name"
                  className="w-full px-5 py-4 bg-black/50 border-b border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f8d249] focus:ring-2 focus:ring-yellow-400/30 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address <span className="text-[#f8d249]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-5 py-4 bg-black/50 border-b border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f8d249] focus:ring-2 focus:ring-yellow-400/30 transition"
                />
              </div>
            </div>

            {/* Subject & Budget Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  className="w-full px-5 py-4 bg-black/50 border-b border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f8d249] focus:ring-2 focus:ring-yellow-400/30 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Your Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder="Write Your Budget Range"
                  className="w-full px-5 py-4 bg-black/50 border-b border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f8d249] focus:ring-2 focus:ring-yellow-400/30 transition"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-4 bg-black/50 border-b border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f8d249] focus:ring-2 focus:ring-yellow-400/30 transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-5 bg-[#f8d249]  text-black font-semibold text-lg rounded-md shadow-xl shadow-yellow-400/40 transition transform hover:scale-105 cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>



      </div>
    </section>
  );
}