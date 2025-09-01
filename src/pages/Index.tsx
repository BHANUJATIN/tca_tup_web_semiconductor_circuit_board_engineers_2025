import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import TechStack from "@/components/TechStack";
import CaseStudies from "@/components/CaseStudies";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Contact from "@/components/ContactUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation/>
      <Hero />
      <About />
      <Services />
      <Expertise />
      <TechStack />
      <CaseStudies />
      <WhyChoose />
      {/* <Footer /> */}
      <Contact/>
    </div>
  );
};

export default Index;
