"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

function ContactUs() {

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
    <>
      <section className=" my-16 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          {/* <div className="flex items-center font-extrabold mb-4 lg:justify-start gap-2 text-2xl font-heading text-[#f8d249] ">
            <span className="text-2xl font-extrabold">✦</span>Contact Us
          </div> */}

          {/* Main Heading */}
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 " ref={containerRef} >
            <div className="">
              {/* text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 */}
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white font-heading">
                Connect with us, and let's complete the puzzle
              </p>
              {/* Intro Paragraph */}
              <p className="text-lg md:text-xl max-w-xl text-gray-300 leading-relaxed mb-12">
                Whether you’re building a brand, scaling a business, or
                rethinking communication — we’re ready to listen.
              </p>
              <div className="space-y-3 md:space-y-3 mt-6 text-gray-300 text-lg">
            
            <div className=" grid gap-3 grid-cols-1" >
              <p className="flex items-center lg:justify-start gap-3 cursor-pointer">
              <a href={"tel:+919998081399"} className="text-[#f8d249]"><Phone size={18} className="text-[#f8d249]" /></a>
              +91 99980 81399
            </p>
              <p className="flex items-center lg:justify-start gap-3 cursor-pointer">
              <a href={"tel:+919998081393"} className="text-[#f8d249]"><Phone size={18} className="text-[#f8d249]" /></a>
              +91 99980 81393
            </p>
            </div>
            <p className="flex items-center lg:justify-start gap-3 cursor-pointer">
              <a href={"mailto:connect@mypragyan.com"} className="text-[#f8d249]"><Mail size={18} className="text-[#f8d249]" /></a>
              connect@mypragyan.com
            </p>
              </div>

            </div>
            {/* <div  >
              <Image src="/contact.webp" alt="contact" width={100} height={100} fill  />
            </div> */}

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
            {/* <div className="w-full h-[400px] rounded-xl overflow-hidden relative">
              <Image
                src="/contact.webp"
                alt="contact"
                fill
                className="object-cover object-top"
              />
            </div> */}
          </div>
        </div>
      </section>
      {/* LOCATION SECTION */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="mb-6 flex items-center gap-3 text-2xl font-heading font-extrabold text-[#f8d249]">
            <MapPin size={26} />
            Our Location
          </div>

          {/* Address */}
          {/* <p className="text-gray-300 text-lg mb-6 max-w-xl">
            Pragyan Digital Agency, Ahmedabad, Gujarat, India
          </p> */}

          {/* Map Container */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-white/5">

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2257.632561678809!2d72.5386589!3d23.1136073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83dc7c594895%3A0x8ca288d49b2ebbba!2sMoneyplant%20High%20Street%20by%20V%20Square%20Group!5e1!3m2!1sen!2sin!4v1767602858084!5m2!1sen!2sin" className="w-full h-full transition duration-500" title="Pragyan Location"   loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
          </div>

        </div>
      </section>

    </>
  );
}

export default ContactUs;
