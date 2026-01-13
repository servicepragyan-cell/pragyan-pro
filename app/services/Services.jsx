import Image from "next/image";

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Digital Marketing Strategy",
      content:
        "We map out a clear plan to reach your audience, build your brand presence, and achieve measurable results. Every move is designed to maximize impact.",
    },
    {
      id: 2,
      title: "Branding & Identity",
      content:
        "We help your brand find its voice, personality, and visual identity. From logos to messaging, we make sure your brand stands out and stays memorable.",
    },
    {
      id: 3,
      title: "Search Engine Optimization",
      content:
        "We optimize your website to rank higher on search engines, attract the right audience, and drive more traffic. Visibility meets strategy.",
    },
    {
      id: 4,
      title: "Social Media Marketing",
      content:
        "We create and manage campaigns across social platforms to engage your audience, build a loyal community, and boost your brand presence.",
    },
    {
      id: 5,
      title: "Content Marketing",
      content:
        "We craft meaningful content that informs, entertains, and connects. From blogs to videos, we make your brand’s story resonate with your audience.",
    },
    {
      id: 6,
      title: "Website Design & Development",
      content:
        "We build websites that are visually appealing, easy to navigate, and perform seamlessly. Your brand gets an online presence that works as hard as you do.",
    },
  ];

  return (
    <section className="my-24 py-3 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        

        {/* Heading + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <div className="flex items-center gap-3 text-2xl font-heading font-extrabold text-[#f8d249] mb-6">
            <span className="text-3xl">✦</span> OUR SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white font-heading">
              Every brand is a{" "}
              <span className="bg-gradient-to-r from-[#f8d249] to-[#ffd86a] bg-clip-text text-transparent">
                jigsaw puzzle
              </span>
              .
            </h2>

            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
              We provide the missing piece —
              <span className="text-white font-medium">
                {" "}
                clever ideas, sharp strategies, and campaigns
              </span>{" "}
              that spark connections and make brands unforgettable.
            </p>
          </div>

          <div className="w-full h-[350px] rounded-xl overflow-hidden relative">
            <Image
              src="/services/illustrator/puzzel.png"
              alt="Services Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((data, index) => (
            <div
              key={data.id}
              className="group relative p-6 md:p-8 rounded-2xl
              bg-white/5 backdrop-blur-md border border-white/10
              hover:border-[#f8d249]/40 transition-all duration-500
              hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(248,210,73,0.4)]"
            >
              {/* Index Badge */}
              <span className="absolute -top-4 -right-4 w-12 h-12 rounded-full 
                bg-[#f8d249] text-black font-bold flex items-center justify-center
                text-sm shadow-lg">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold font-heading mb-3
                bg-gradient-to-r from-[#f8d249] to-[#ffe28a] bg-clip-text text-transparent">
                {data.title}
              </h3>

              {/* Underline */}
              <div className="w-12 h-[2px] bg-[#f8d249] mb-4 
                group-hover:w-20 transition-all duration-500" />

              {/* Content */}
              <p className="text-gray-300 leading-relaxed text-base">
                {data.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
