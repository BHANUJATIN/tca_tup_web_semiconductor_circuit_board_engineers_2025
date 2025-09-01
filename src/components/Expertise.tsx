import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "High-Speed Digital Boards",
      description: "Advanced routing for DDR, PCIe, and high-bandwidth signals.",
      icon: "🔧"
    },
    {
      title: "Mixed-Signal PCB Design",
      description: "Integration of analog, digital, and RF components on complex boards.",
      icon: "🔧"
    },
    {
      title: "Power Delivery Networks",
      description: "Optimized PDN layouts for stable voltage and noise control.",
      icon: "🔧"
    },
    {
      title: "Thermal Management Solutions",
      description: "Effective heat dissipation strategies for compact boards.",
      icon: "🔧"
    },
    {
      title: "Electromagnetic Compliance",
      description: "EMI/EMC optimization for global certification standards.",
      icon: "🔧"
    },
    {
      title: "Rigid-Flex & HDI Layout",
      description: "Lightweight, compact designs for SWaP-sensitive systems.",
      icon: "🔧"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Areas of Our <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Our PCB engineers bring the expertise to manage complex designs end-to-end — from high-speed interface integration and low-power implementations to verification, prototyping, and compliance with safety-critical standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-4">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;