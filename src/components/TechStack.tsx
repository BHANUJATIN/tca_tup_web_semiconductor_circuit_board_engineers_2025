import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechStack = () => {
  const techCategories = [
    {
    title: "PCB Design Tools",
    items: "Altium Designer, OrCAD, Cadence Allegro, Mentor Xpedition, Zuken CR-8000"
  },
  {
    title: "Simulation & Analysis",
    items: "HyperLynx, Ansys SIwave, Cadence Sigrity, CST Studio, HFSS"
  },
  {
    title: "High-Speed Interfaces",
    items: "DDR4/5, PCIe Gen4/5, USB 3.x, Ethernet (10G/25G), SERDES"
  },
  {
    title: "Compliance & Standards",
    items: "IPC-2221, JEDEC, UL, RoHS, MIL-STD"
  },
  {
    title: "Manufacturing Support",
    items: "Gerber/ODB++ generation, DFM/DFT checks, CAM reviews"
  }
];


  return (
    <section className="py-20 tech-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology Stack & <span className="text-primary">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our PCB engineers are fluent in industry-standard tools, languages, and test platforms used across leading semiconductor programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {category.items}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;