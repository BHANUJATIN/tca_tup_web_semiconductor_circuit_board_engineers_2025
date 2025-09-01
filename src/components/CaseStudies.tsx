import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CaseStudyModal from "./CaseStudyModal";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  context: string;
  problem: string;
  solution: string[];
  impact: string[];
  tools: string;
}

const caseStudiesData: CaseStudy[] = [

  {
  id: "9",
  title: "High-Density PCB for Advanced Networking ASIC",
  subtitle: "Intel",
  description: "Designed a 20-layer PCB optimized for high-speed interconnects supporting Intel’s next-gen networking ASIC platform.",
  context: "Designed a 20-layer PCB optimized for high-speed interconnects supporting Intel’s next-gen networking ASIC platform.",
  problem: "Intel required a compact, multi-layer PCB capable of handling high-speed differential pairs without compromising signal integrity.",
  solution: [
    "Developed a 20-layer HDI stack-up.",
    "Integrated differential pair routing for PCIe Gen5 and Ethernet.",
    "Executed SI/PI simulations to validate performance."
  ],
  impact: [
    "Delivered a robust design that passed first-time compliance.",
    "Improved time-to-market for Intel’s networking product line."
  ],
  tools: "Altium Designer, HyperLynx, Ansys SIwave, Cadence Sigrity"
},
{
  id: "10",
  title: "RF-Integrated PCB for 5G Modem Platform",
  subtitle: "Qualcomm",
  description: "Delivered a mixed-signal PCB integrating RF front-end and high-speed digital sections for Qualcomm’s 5G chipset platform.",
  context: "Delivered a mixed-signal PCB integrating RF front-end and high-speed digital sections for Qualcomm’s 5G chipset platform.",
  problem: "The design had to meet strict EMI/EMC standards while integrating RF and high-speed digital signals on a compact PCB.",
  solution: [
    "Applied controlled impedance routing, EMI shielding strategies, and thermal optimization for RF performance.",
    "Conducted extensive SI/PI analysis before release."
  ],
  impact: [
    "Enabled seamless integration of RF and digital domains.",
    "Ensured compliance and stability for 5G deployment."
  ],
  tools: "OrCAD, HFSS, CST Studio, Mentor Xpedition"
},
{
  id: "11",
  title: "Multi-GPU Interconnect PCB for AI Systems",
  subtitle: "NVIDIA",
  description: "Developed a high-speed PCB for NVLink-based multi-GPU interconnect systems powering NVIDIA’s AI accelerators.",
  context: "Developed a high-speed PCB for NVLink-based multi-GPU interconnect systems powering NVIDIA’s AI accelerators.",
  problem: "Required ultra-low-latency, high-bandwidth interconnect with precise length-matching for NVLink interfaces.",
  solution: [
    "Designed multi-layer routing for NVLink and PCIe Gen5.",
    "Optimized trace length matching and skew control.",
    "Validated performance using SI tools."
  ],
  impact: [
    "Supported seamless GPU-to-GPU communication.",
    "Enhanced AI compute performance for HPC systems."
  ],
  tools: "Cadence Allegro, HyperLynx, Ansys SIwave"
},
{
  id: "12",
  title: "PCB for High-Speed Storage Controller",
  subtitle: "Broadcom",
  description: "Engineered a compact PCB for Broadcom’s storage controller, meeting stringent power and thermal requirements.",
  context: "Engineered a compact PCB for Broadcom’s storage controller, meeting stringent power and thermal requirements.",
  problem: "The design had to accommodate high-speed SERDES links and maintain thermal efficiency within a compact footprint.",
  solution: [
    "Implemented advanced thermal via strategies.",
    "Optimized PDN design.",
    "Validated using power integrity simulations."
  ],
  impact: [
    "Achieved a high-reliability design.",
    "Reduced power noise and improved long-term product stability."
  ],
  tools: "Mentor Xpedition, HyperLynx, Cadence Sigrity"
}


];

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCaseStudyClick = (caseStudy: CaseStudy) => {
    setSelectedCase(caseStudy);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 tech-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world FPGA engineering solutions that delivered measurable results
            for leading semiconductor companies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">


          {caseStudiesData.map((caseStudy, index) => (
            <Card
              key={caseStudy.id}
              className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 glow-hover group cursor-pointer animate-slide-up flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCaseStudyClick(caseStudy)}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {caseStudy.title}
                </CardTitle>
                <CardDescription className="text-primary ">
                  {caseStudy.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {caseStudy.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full sm:w-1/2 px-6 py-2 border-primary text-primary 
             hover:bg-primary hover:text-primary-foreground 
             transition-all duration-300 mt-4"
                >
                  Read Full Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <CaseStudyModal
        caseStudy={selectedCase}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default CaseStudies;