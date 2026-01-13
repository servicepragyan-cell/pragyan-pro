import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Portfolio from "@/app/components/Portfolio";
import Portfolio2 from "@/app/components/Portfolio2";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import StackSection from "@/app/components/StackSection";
import Marquee from "@/app/components/Marquee";
import AboutUs from "@/app/components/AboutUs";
import ServicesContent from "@/app/components/ServicesContent";
import TestimonialSection from "@/app/components/TestimonialSection";
import WhyChooseUsSection from "@/app/components/WhyChooseUsSection";
import Entry from "@/app/components/Entry" ;
import Entry2 from "@/app/components/Entry2" ;
import Introduction from "@/app/components/Introduction"
import Introduction2 from "@/app/components/Introduction2"
import BrandPhilosophy from "@/app/components/BrandPhilosophy"
import ObsidianShap from "@/app/components/ObsidianShape"
import MobiusMain from "./components/MobiusMain"

export default function Page() {
  return (
    <>
      {/* <Header /> */}

      {/* <StackSection index={1}> */}
      <Entry/>
      {/* <MobiusMain/> */}
      {/* <Hero /> */}
      {/* <Entry2/> */}
      {/* <ObsidianShap/> */}
      {/* </StackSection> */}
      {/* <Introduction/> */}
      <Introduction2/>
      {/* <BrandPhilosophy/> */}

      
      {/* <StackSection index={2}> */}
      {/* </StackSection> */}
      <Services />

      {/* <StackSection index={3}> */}
      {/* <WhyChooseUsSection /> */}
      <Portfolio />
      {/* <Portfolio2/> */}
      {/* </StackSection> */}
      {/* <TestimonialSection /> */}

      {/* <StackSection index={4}> */}
      {/* <AboutUs /> */}
      <Contact />
      <Marquee />
      {/* <ServicesContent /> */}
      {/* </StackSection> */}

      {/* <Footer /> */}
    </>
  );
}

