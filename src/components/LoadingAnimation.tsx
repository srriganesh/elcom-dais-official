import { useState, useEffect } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentStep(1), 500),
      setTimeout(() => setCurrentStep(2), 3500),
      setTimeout(() => setCurrentStep(3), 6500),
      setTimeout(() => onComplete(), 9500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-background flex items-center justify-center z-50">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Centered logo */}
      <div className="relative w-full h-full flex items-center justify-center">
        {currentStep === 1 && (
          <div className="flex flex-col items-center transition-all duration-1000 transform opacity-100 scale-100 translate-y-0">
            <div className="relative">
              <img
                src="/assets/logos/sastra-university-logo.png"
                alt="SASTRA University"
                className="w-48 h-48 object-contain filter brightness-0 invert glow-primary"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <p className="text-center mt-6 text-primary font-bold text-2xl tracking-wider animate-fade-in">
              SASTRA UNIVERSITY
            </p>
          </div>
        )}

        {currentStep === 2 && (
          <div className="flex flex-col items-center transition-all duration-1000 transform opacity-100 scale-100 translate-y-0">
            <div className="relative">
              <img
                src="/assets/logos/elcom-dais-logo.png"
                alt="ELCOM DAIS"
                className="w-56 h-56 object-contain filter brightness-0 invert glow-secondary"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <p className="text-center mt-6 text-secondary font-bold text-3xl tracking-wider animate-fade-in">
              ELCOM DAIS
            </p>
          </div>
        )}

        {currentStep === 3 && (
          <div className="flex flex-col items-center transition-all duration-1000 transform opacity-100 scale-100 translate-y-0">
            <div className="relative">
              <img
                src="/assets/logos/innovate.png"
                alt="Innovate"
                className="w-52 h-52 object-contain filter brightness-0 invert glow-accent"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <p className="text-center mt-6 text-accent font-bold text-2xl tracking-wider animate-fade-in">
              INNOVATE
            </p>
          </div>
        )}
      </div>

      {/* Loading indicator */}
      <div
        className={`absolute bottom-12 transition-all duration-500 ${
          currentStep >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
        </div>
        <p className="text-center mt-4 text-muted-foreground text-sm tracking-widest animate-fade-in">
          INITIALIZING...
        </p>
      </div>

      {/* Scanning lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
