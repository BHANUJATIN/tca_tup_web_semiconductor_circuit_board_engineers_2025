import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const contractServices = [
    "Schematic Capture & Layout – Expertise in Altium Designer, OrCAD, and Mentor Xpedition.",
    "High-Speed Interface Integration – DDR4/5, PCIe Gen4/5, Ethernet, USB, and SERDES routing.",
    "Multi-Layer & HDI Design – Rigid-flex, high-density interconnects for compact systems.",
    "Power & Thermal Design Optimization – Robust strategies for heat dissipation and EMI mitigation.",
    "Design Reviews & DFM Checks – Ensuring compliance and manufacturability from day one."
  ];

  const endToEndServices = [
    "Board Architecture & Stack-Up Definition – Layer planning for signal integrity and power distribution.",
    "Signal & Power Integrity Analysis – SI/PI simulations for reliability at high frequencies.",
    "Thermal Simulation & Analysis – Advanced modeling for temperature-critical applications.",
    "Compliance & Certification Support – IPC, JEDEC, and aerospace-grade adherence.",
    "Prototype Build & Validation – Rapid turnaround for testing and design verification."
  ];


  return (
    <section id="services" className="py-20 tech-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="text-primary">We Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive PCB engineering services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contract Engineers */}
          <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-slide-up">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  On-Demand
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                On-Demand PCB Engineers
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Flexible engagement models that bring experienced PCB designers into your team to accelerate design cycles.
                Our capabilities include:

              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {contractServices.map((service, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed flex items-start">
                    <span className="text-primary mr-3 mt-1 text-lg">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* End-to-End Services */}
          <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  Full-Cycle
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                End-to-End PCB Design Services
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Comprehensive solutions from concept through manufacturing for complex boards in semiconductor systems.
                We provide:

              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {endToEndServices.map((service, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed flex items-start">
                    <span className="text-primary mr-3 mt-1 text-lg">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;