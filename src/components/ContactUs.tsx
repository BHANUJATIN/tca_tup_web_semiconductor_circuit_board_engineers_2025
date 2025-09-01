import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-black border-t border-border animate-fade-up py-16"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Augment Your <span className="text-primary">Engineering Power?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let’s discuss how Teamup Tech can accelerate your next PCB design project. Whether you’re developing advanced semiconductor boards, integrating RF modules, or designing for high-speed interconnects—we’re here to help.
        </p>
        <div className="flex justify-center items-center">
          <a
            href="mailto:engage@teamuptech.com"
            className="flex items-center text-primary hover:text-primary/80 transition-colors text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            engage@teamuptech.com
          </a>
        </div>
      </div>
    </section>
  );
}
