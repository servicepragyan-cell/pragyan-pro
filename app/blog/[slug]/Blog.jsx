"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiCalendar, FiArrowLeft, FiUser } from "react-icons/fi";

export default function Blog() {
  const { slug } = useParams();
  const router = useRouter();

  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
const blogs = [
    {
      id: "1",
      title: "Digital Marketing",
      author: "Pragyan",
      image: "https://mockframe.com/images/blog/wireframe-application.png?v=1666261606584267669",
      date: "September 2, 2024",
      content: `
        <p class="text-lg text-gray-300 leading-relaxed mb-8">
          Marketing has always been about connecting with your audience in the right place and at the right time. 
          Today, that means meeting them where they already spend their time — <span class="text-yellow-400 font-bold underline decoration-yellow-400/30 underline-offset-4">online</span>.
        </p>

        <div class="bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400 p-8 my-12 rounded-r-2xl backdrop-blur-sm">
          <p class="m-0 italic text-gray-200 text-lg leading-relaxed">
            Digital marketing includes much more than SEO or ads. It covers email, blogging, podcasts, video streams,
            messaging apps, mobile platforms, and real-time engagement channels.
          </p>
        </div>

        <h2 class="text-4xl md:text-5xl font-black text-white mt-20 mb-10 tracking-tighter">Why Digital Marketing?</h2>

        <p class="text-gray-300 text-lg mb-10">
          Digital marketing allows businesses to monitor campaigns in real time — from views and engagement to
          response rates and purchases.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
          <div class="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-yellow-400/5 hover:border-yellow-400/50 transition-all duration-300">
            <div class="flex items-center gap-3 mb-2">
              <span class="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.6)]"></span>
              <strong class="text-white text-lg">Real-time analytics</strong>
            </div>
            <p class="text-gray-400 text-sm m-0">Track views, clicks, and conversions instantly.</p>
          </div>
          <div class="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-yellow-400/5 hover:border-yellow-400/50 transition-all duration-300">
            <div class="flex items-center gap-3 mb-2">
              <span class="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.6)]"></span>
              <strong class="text-white text-lg">24×7 support</strong>
            </div>
            <p class="text-gray-400 text-sm m-0">Build trust and loyalty with around-the-clock care.</p>
          </div>
          <div class="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-yellow-400/5 hover:border-yellow-400/50 transition-all duration-300">
            <div class="flex items-center gap-3 mb-2">
              <span class="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.6)]"></span>
              <strong class="text-white text-lg">Social insights</strong>
            </div>
            <p class="text-gray-400 text-sm m-0">Understand exactly what content works best.</p>
          </div>
          <div class="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-yellow-400/5 hover:border-yellow-400/50 transition-all duration-300">
            <div class="flex items-center gap-3 mb-2">
              <span class="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.6)]"></span>
              <strong class="text-white text-lg">Customer feedback</strong>
            </div>
            <p class="text-gray-400 text-sm m-0">Improve faster than your competitors can react.</p>
          </div>
        </div>

        <p class="border-t border-white/10 pt-10 text-gray-400 text-lg leading-relaxed italic">
          In this post, we explore real-world examples and expert strategies to help businesses launch
          high-performing digital campaigns in 2024.
        </p>
      `,
    },
    {
      id: "2",
      title: "Big Data Analysis",
      author: "Pragyan",
      image: "https://maybe.works/media/blogs/types-of-web-applications-choosing-the-right/1100x600.jpg",
      date: "September 27, 2023",
      content: `
        <div class="bg-white/5 border-l-4 border-yellow-400 p-8 my-10 rounded-r-2xl">
          <p class="m-0 text-gray-200 text-lg">
            Big data analytics helps organizations unlock new revenue, improve customer experience,
            and gain a <span class="text-yellow-400 font-bold ">massive competitive advantage</span>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div class="p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl hover:translate-y-[-4px] transition-transform">
            <h4 class="text-white font-bold mb-2">Improved Decisions</h4>
            <p class="text-gray-400 text-sm m-0">Data-driven choices reduce business risk.</p>
          </div>
          <div class="p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl hover:translate-y-[-4px] transition-transform">
            <h4 class="text-white font-bold mb-2">Predictive Insights</h4>
            <p class="text-gray-400 text-sm m-0">See trends before they happen.</p>
          </div>
        </div>
      `,
    },
    {
      id: "3",
      title: "Cloud Computing",
      author: "Pragyan",
      image: "https://visions4technology.co.uk/wp-content/uploads/2020/01/Web-Application-Development1.jpg",
      date: "May 22, 2023",
      content: `
        <p class="text-xl text-gray-300 border-b border-white/10 pb-10 mb-10">
          Cloud computing powers modern apps, data storage, streaming services,
          and enterprise systems with <span class="text-yellow-400">limitless scalability</span>.
        </p>

        <div class="space-y-4">
          <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <span class="p-2 bg-yellow-400/20 rounded-lg text-yellow-400 font-bold">01</span>
            <span class="text-white font-medium text-lg">Create high-performance apps</span>
          </div>
          <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <span class="p-2 bg-yellow-400/20 rounded-lg text-yellow-400 font-bold">02</span>
            <span class="text-white font-medium text-lg">Secure & Recover sensitive data</span>
          </div>
          <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <span class="p-2 bg-yellow-400/20 rounded-lg text-yellow-400 font-bold">03</span>
            <span class="text-white font-medium text-lg">Stream high-definition audio & video</span>
          </div>
        </div>
      `,
    },
  ];

  const blog = blogs.find((b) => b.id === slug);

  useEffect(() => {
    if (!blog) return;

    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.4"
      );
  }, [blog]);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <p className="text-gray-400 mb-4 text-lg">Blog not found.</p>
        <button
          onClick={() => router.push("/blog")}
          className="px-8 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:scale-105 transition"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <section className="bg-black text-white my-16 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-yellow-400 mb-12 text-lg font-semibold hover:underline"
        >
          <FiArrowLeft className="mr-2" /> Back to Blogs
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-[320px] md:h-[500px] overflow-hidden rounded-3xl border border-white/10">
          <img
            ref={imageRef}
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Title */}
          <div
            ref={titleRef}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-4"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              {blog.title}
            </h1>
            <div className="flex justify-center gap-6 text-gray-300 text-sm">
              <span className="flex items-center gap-2">
                <FiCalendar /> {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <FiUser /> {blog.author}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="max-w-7xl mx-auto mt-20"
        >
          <div className="relative">
            {/* <div className="absolute -left-6 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-400/60 via-yellow-400/20 to-transparent hidden md:block" /> */}

            <article
              className="
                prose prose-invert prose-yellow max-w-none
                prose-p:text-gray-300
                prose-p:leading-[1.9]
                prose-p:text-[17px]
                prose-h2:text-white
                prose-h2:font-extrabold
                prose-h2:text-3xl
                prose-h2:mt-16
                prose-h2:mb-6
                prose-strong:text-white
                prose-ul:mt-6
                prose-ul:space-y-3
                prose-li:marker:text-yellow-400
              "
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
