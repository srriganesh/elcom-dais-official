import { Button } from "@/components/ui/button";
import { ChevronDown, Zap, Cpu, CircuitBoard } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-secondary/30 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 border border-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ELCOM DAIS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            Electronics Engineering Excellence
          </p>

          {/* University */}
          <p className="text-lg text-muted-foreground mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            SASTRA University
          </p>

          {/* Tech Icons */}
          <div className="flex justify-center space-x-8 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="p-4 border border-border rounded-lg cyber-border hover:glow-primary transition-all duration-300">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div className="p-4 border border-border rounded-lg cyber-border hover:glow-primary transition-all duration-300">
              <Cpu className="w-8 h-8 text-secondary" />
            </div>
            <div className="p-4 border border-border rounded-lg cyber-border hover:glow-primary transition-all duration-300">
              <CircuitBoard className="w-8 h-8 text-accent" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground glow-primary transition-all duration-300"
            >
              Explore Events
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;