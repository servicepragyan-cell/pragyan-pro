// import { notFound } from "next/navigation";
// import { portfolioData } from "@/app/data/portfolioData";
// import PortfolioClient from "./PortfolioContent";

// export default async function PortfolioDetail({ params }) {
//   const { slug } = await params; // ✅ allowed (server)

//   const project = portfolioData.find(
//     (item) => item.slug === slug
//   );

//   if (!project) return notFound();

//   return (
//     <section className="bg-black text-white min-h-screen px-4 pt-24">
//       <PortfolioClient project={project} />
//     </section>
//   );
// }


function Portfolio() {
  return (
    <>
      portfolio 
    </>
  )
}

export default Portfolio


