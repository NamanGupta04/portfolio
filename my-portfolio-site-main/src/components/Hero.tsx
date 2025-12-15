import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-6 animate-in">
            Hi, I'm Naman Gupta
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 animate-in-delay-1">
            DevOps & Data
            <span className="text-gradient block">Enthusiast</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-in-delay-2">
            Passionate about cloud infrastructure, CI/CD pipelines, and building scalable systems. 
            Currently pursuing KCNA & AWS Solutions Architect certifications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in-delay-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/experience">
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;