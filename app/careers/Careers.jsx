"use client"

function Careers() {
  const roles = [
    {
      title: 'Frontend Developer',
      location: 'Remote / Worldwide',
      type: 'Full-time',
      description:
        'We are looking for a skilled Frontend Developer to create amazing user experiences with clean and maintainable code.',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote / Worldwide',
      type: 'Contract',
      description:
        'Join our design team to craft stunning interfaces and user experiences for web applications.',
    },
    {
      title: 'Frontend Intern',
      location: 'Remote',
      type: 'Internship',
      description:
        'Get hands-on experience building real-world web applications with guidance from senior developers.',
    },
  ];

  const benefits = [
    'Flexible working hours & remote work',
    'Competitive salary and bonuses',
    'Learning & development opportunities',
    'Inclusive and creative work environment',
  ];

  return (
    <section className="bg-black text-white relative my-16 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16">
        <div className="flex items-center gap-3 text-2xl font-heading font-extrabold text-[#f8d249] mb-6 tracking-wider">
                <span className="text-3xl">✦</span> JOIN OUR TEAM
        </div>
          <p className="text-white/80 text-lg md:text-3xl max-w-2xl">
            We’re always interested in curious minds who think clearly and work with intent.
          </p>
        </div>

        {/* Open Roles */}
        {/* <div className="mb-20">
          <h2 className="text-2xl font-semibold text-[#f8d249] mb-8">Open Positions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="border border-white/20 p-6 rounded-xl hover:border-[#f8d249] transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold mb-2 text-white">{role.title}</h3>
                <p className="text-[#f8d249] font-medium mb-2">{role.type}</p>
                <p className="text-white/80 mb-4">{role.location}</p>
                <p className="text-white/70">{role.description}</p>
                <button className="mt-4 inline-block bg-[#f8d249] text-black font-semibold px-5 cursor-pointer py-2 rounded hover:bg-[#f8d249] transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div> */}

       <div  className=" grid md:grid-cols-2 grid-cols-1 gap-6" >
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-[#f8d249] mb-8">Why Work With Us</h2>
          <ul className="space-y-4 text-white/80 text-lg">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="text-[#f8d249] mr-3 text-xl">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

       
        <div className="">
          <h2 className="text-2xl font-semibold text-[#f8d249] mb-6">Apply Now</h2>
          <form className="grid gap-6 max-w-2xl">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 rounded bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:border-[#f8d249]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:border-[#f8d249]"
            />
            <input
              type="text"
              placeholder="Position Applying For"
              className="px-4 py-3 rounded bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:border-[#f8d249]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 rounded bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:border-[#f8d249]"
            />
            <button className="bg-[#f8d249] text-black font-semibold px-6 py-3 rounded hover:bg-[#f8d249] transition">
              Submit Application
            </button>
          </form>
        </div>
       </div>
            

      </div>
    </section>
  );
}

export default Careers;
