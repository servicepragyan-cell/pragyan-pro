import { services } from "@/app/data/services";

export default function ServicesContent() {
  return (
    <section
      id="services-content"
      className="bg-black py-12 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-16">

        {services.slice(0, -2).map((service) => (
          <div
            key={service.id}
            id={service.slug} // 🔥 SEO + anchor

          >
            {/* Title */}
            <h2 className="text-4xl  font-extrabold leading-tight text-[#f8d249] mb-4">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 md:text-xl leading-relaxed border-t border-[#FCDB66]/30 pt-4">
              {service.description}
            </p>

            {/* Show ID and Slug (optional, you can style or place as needed) */}
            {/* <div className="mt-2 text-sm text-gray-500">
              <span><strong>ID:</strong> {service.id}</span><br />
              <span><strong>Slug:</strong> {service.slug}</span>
            </div> */}
          </div>
        ))}

      </div>
    </section>
  );
}
