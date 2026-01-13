"use client";

import Link from "next/link";
import { FiArrowRight, FiCalendar, FiUser } from "react-icons/fi";

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Digital Marketing",
      author: "Pragyan",
      image:
        "https://mockframe.com/images/blog/wireframe-application.png?v=1666261606584267669",
      date: "September 2, 2024",
      description:
        "In simple terms, digital marketing is the promotion of products or brands via electronic media such as search engines, social media, email, and websites.",
    },
    {
      id: 2,
      title: "Big Data Analysis",
      author: "Pragyan",
      image:
        "https://maybe.works/media/blogs/types-of-web-applications-choosing-the-right/1100x600.jpg",
      date: "September 27, 2023",
      description:
        "Big data analytics helps organizations uncover hidden patterns, correlations, and insights from massive datasets.",
    },
    {
      id: 3,
      title: "Cloud Computing",
      author: "Pragyan",
      image:
        "https://visions4technology.co.uk/wp-content/uploads/2020/01/Web-Application-Development1.jpg",
      date: "May 22, 2023",
      description:
        "Cloud computing delivers servers, storage, databases, and software over the internet with flexible pricing.",
    },
  ];

  return (
    <section className="bg-black text-white my-16 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-3 text-2xl font-heading font-extrabold text-[#f8d249] mb-6 tracking-wider">
            <span className="text-3xl">✦</span> OUR INSIGHTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Latest <span className="text-yellow-400">Blogs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Thoughts, insights, and perspectives on branding, communication, and growth.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="group block bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 
              hover:border-yellow-400/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FiUser className="text-yellow-400" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiCalendar className="text-yellow-400" />
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {blog.description}
                </p>

                {/* CTA (visual only) */}
                <div className="inline-flex items-center gap-2 text-yellow-400 font-medium">
                  View More <FiArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
