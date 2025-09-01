import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Mail, ArrowRight, Zap, Shield, Layers, CheckCircle, Check } from "lucide-react";

const WhyChoose = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Proven success",
      description: "Proven success with semiconductor leaders like Intel, Qualcomm, Broadcom, and NVIDIA."
    },
    {
      icon: Shield,
      title: "High-speed PCB expertise",
      description: "Expertise in high-speed, high-density PCB designs for cutting-edge applications."
    },
    {
      icon: Layers,
      title: "EMI/EMC optimization",
      description: "Skilled in EMI/EMC optimization for global compliance."
    },
    {
      icon: CheckCircle,
      title: "Flexible engagement",
      description: "On-demand experts or complete turnkey solutions."
    },
    {
      icon: Zap,
      title: "First-time-right designs",
      description: "Commitment to first-time-right designs for faster product launches."
    }
  ];

  return <section className="py-20 bg-gradient-card">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Choose <span className="text-primary">TeamUP Tech</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Proven expertise, measurable results, and flexible engagement models
          that deliver value from day one.
        </p>
      </div>

      <div className="flex justify-center">
        {/* Full width on mobile, 3/4 width on larger screens */}
        <div className="space-y-8 w-full md:w-3/4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="aerospace-card p-6 hover-lift slide-up hover:border-2 border-border border-2 rounded-lg bg-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                {/* Optional Icon */}
                {advantage.icon && (
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-8 h-8 text-primary" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
    ;
};
export default WhyChoose;