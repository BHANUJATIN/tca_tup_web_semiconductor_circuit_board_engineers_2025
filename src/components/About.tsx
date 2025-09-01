const About = () => {
  const clients = [
    { name: "NVIDIA", rating: 5 },
    { name: "Broadcom", rating: 5 },
    { name: "Intel", rating: 5 },
    { name: "AMD", rating: 5 },
    { name: "Qualcomm", rating: 5 }
  ];

  const features = [
    {
      title: "Expert Team",
      description: "Senior PCB specialists with proven track records"
    },
    {
      title: "Secure & Trusted",
      description: "Rigorous security protocols and compliance standards"
    },
    {
      title: "Proven Results",
      description: "Measurable improvements in coverage and yield"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-primary">TeamUP Tech</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Teamup Tech is a specialized engineering services firm providing world-class PCB design and circuit engineering expertise to leading semiconductor and electronics companies. Our engineers have contributed to critical projects for organizations like Intel, Qualcomm, Broadcom, AMD, and NVIDIA.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  {/* <p className="text-sm text-muted-foreground">{feature.description}</p> */}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Trusted by */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Trusted by Industry Leaders
              </h3>

              <div className="space-y-6">
                {clients.map((client, index) => (
                  <div key={index} className="flex items-center justify-between py-1 border-b border-border last:border-b-0">
                    <span className="text-lg font-medium text-foreground">{client.name}</span>
                    <div className="flex space-x-1">
                      {[...Array(client.rating)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;