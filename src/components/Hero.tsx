import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-semiconductor.jpg";
import { Rocket } from "lucide-react";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
    {/* Hero Background Image */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 text-center animate-fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Rocket className="w-8 h-8 text-primary mr-3" />
          <span className="text-primary font-semibold tracking-wide">TEAMUP TECH</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            PCB Design Expertise for
          </span>
          <br />
          <span className="text-foreground">
            Semiconductor Innovation
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Accelerate your hardware development with proven PCB design capabilities for high-speed, high-density boards in advanced electronics applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">


        </div>
      </div>
    </div>

  </section>;
};
export default Hero;