import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 border border-secondary/30 rounded-lg animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-12 h-12 border border-accent/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo instead of text */}
          <div className="mb-6 animate-fade-in">
            <img
              src="/assets/logos/elcom-dais-logo.png"
              alt="ELCOM DAIS Logo"
              className="mx-auto w-72 md:w-96"
            />
          </div>

          {/* Subtitle (optional, you can add text here) */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up"></p>

          {/* University Name */}
          <p
            className="text-lg text-muted-foreground mb-12 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            SASTRA University
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground glow-primary transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("events")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Events
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Down Indicator with Text */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary cursor-pointer flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ChevronDown className="w-5 h-5" />
            <span className="text-sm font-medium">Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
