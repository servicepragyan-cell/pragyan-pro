import Image from "next/image";

function AboutUs() {
  return (
    <>
      <section className="my-16 py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
              {/* Section Label */}
              <div className="flex items-center gap-3 text-2xl font-heading font-extrabold text-[#f8d249] mb-6 tracking-wider">
                <span className="text-3xl">✦</span> ABOUT PRAGYAN
              </div>
      
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white font-heading max-w-7xl">
                Pragyan is where brands come to{" "}
                <span className="text-[#f8d249]">
                  think bigger
                </span>
                .
              </h2>
      
              {/* Intro */}
              <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed ">
                We are a hub of curious minds, restless creators, and problem-solvers, constantly pushing beyond the obvious
              </p>
      
              {/* Core Content */}
              {/* <div className="mt-8 space-y-10 max-w-7xl">
                {[
                  "Our team works like a finely tuned neural network — every connection matters. We collaborate across design, content, digital, and experiential work, refining ideas until they achieve clarity and impact.",
                  "Like a brain operating at full potential, we question, explore, test, and transform challenges into opportunities",
                  "We believe every brand has a unique identity, and our role is to help it emerge with confidence, intelligence, and purpose.",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l border-[#f8d249]/30"
                  >
                    <span className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-[#f8d249]" />
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div> */}

                <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      {[
        {
          title : "HOW WE THINK",
          content : "Our team works like a finely tuned neural network — every connection matters. We collaborate across design, content, digital, and experiential work, refining ideas until they achieve clarity and impact."
        },
        {
          title : "HOW WE WORK",
          content : "Like a brain operating at full potential, we question, explore, test, and transform challenges into opportunities"
        },
        {
          title : "HOW WE CREATE",
          content : "We believe every brand has a unique identity, and our role is to help it emerge with confidence, intelligence, and purpose."
        },
       
   
      ].map((text, i) => (
        <div
          key={i}
          className="relative group rounded-md p-8 bg-white/5 border border-white/10 backdrop-blur
          hover:border-[#f8d249]/40 transition"
        >
          <span className="absolute -top-3 -left-3 text-[#f8d249] text-4xl opacity-80">
            ✦
          </span>
            <h3 className="text-xl font-semibold mb-4 text-[#f8d249] tracking-wider transition">
            {text.title}
          </h3>
          <p className="text-gray-300 leading-relaxed text-base">
            {text.content}
          </p>
        </div>
      ))}
               </div>
      
                {/* meet founders */}
               <div className="py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
            Meet the <span className="text-[#f8d249]">Founders</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: "/services/founders/f9.webp",
                name: "Manan Patel",
                role: "Business Development & Strategy",
                desc:
                  "Driving growth through strategy, operations, and scalable execution.",
              },
              {
                img: "/services/founders/f4.webp",
                name: "Aditi Patel",
                role: "Content & Resource Management",
                desc:
                  "Aligning teams, content, and execution with structured precision.",
              },
              {
                img: "/services/founders/f5.webp",
                name: "Dhruti Patel",
                role: "Creative Direction & Operations",
                desc:
                  "Crafting brand narratives through design, storytelling, and strategy.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-md bg-white/5 border border-white/10 text-center
                hover:border-[#f8d249]/40 transition"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    sizes="128px"
                    className="object-cover rounded-full object-top"
                  />
                </div>
                <h3 className="text-xl tracking-wider font-semibold text-white">{f.name}</h3>
                <p className="text-[#f8d249] mb-3">{f.role}</p>
                <p className="text-gray-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
               </div>

              {/*  */}
               {/* <div className="py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-left md:text-5xl font-bold mb-10">
            Our <span className="text-[#f8d249]">Team</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Our strength lies in a diverse intelligence network — experienced
            production professionals, skilled web developers, creative
            designers, and industry mentors — all working together to deliver
            result-driven, sustainable brand growth.
          </p>
        </div>
                </div> */}

            </div>
            <section className=" relative">
  <div className="max-w-7xl mx-auto ">
    
    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Our <span className="text-[#f8d249]">Team</span>
      </h2>
      <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
        At Pragyan Branding & Marketing, our strength lies in the diversity and
        depth of our intelligence network — specialists working in sync to
        deliver sustainable, result-driven brand growth.
      </p>
    </div>

    {/* Team Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
      {[
        {
          title: "PRODUCTION EXPERTS",
          desc: "Seasoned professionals with over a decade of hands-on industry exposure, ensuring flawless execution across campaigns.",
        },
        {
          title: "WEB DEVELOPERS",
          desc: "Technically precise thinkers who balance performance, scalability, and creative problem-solving.",
        },
        {
          title: "CREATIVE DESIGNERS",
          desc: "Visual storytellers crafting identities, brand systems, and assets that leave lasting impact.",
        },
        {
          title: "INDUSTRY MENTORS",
          desc: "Strategic guides who elevate thinking, execution standards, and long-term decision-making.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative p-8 rounded-md bg-white/5 border border-white/10
          hover:border-[#f8d249]/40 transition-all duration-300 group"
        >
          {/* Accent */}
          <span className="absolute -top-3 -left-3 text-[#f8d249] text-4xl opacity-80">
            ✦
          </span>

          {/* Title */}
          {/* <h3 className="text-xl font-semibold mb-4 tracking-wide text-[#f8d249] transition">
            {item.title}
          </h3> */}

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>



    {/* Closing Line */}
    <div className="mt-20 max-w-4xl">
      <p className="text-gray-300 text-lg leading-relaxed">
        Together, this collective ensures every project is approached with
        <span className="text-[#f8d249]" > creativity, professionalism, and clarity</span>— helping brands not only grow,
        but sustain their relevance in competitive markets.
      </p>
    </div>

  </div>
</section>  

     </section>
     {/* OUR TEAM */}
     


    </>
  )
}

export default AboutUs
