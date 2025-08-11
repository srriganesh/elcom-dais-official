import React, { useState, useEffect } from "react";

const LoadingAnimation = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0); // 0: none, 1: SASTRA, 2: ELCOM, 3: INNOVATE
  const [fadeState, setFadeState] = useState('in');

  useEffect(() => {
    setCurrentStep(1);

    const fadeTimings = [
      { step: 1, duration: 2500 },
      { step: 2, duration: 2500 },
      { step: 3, duration: 2500 },
    ];

    let totalTime = 0;

    const timers = [];

    fadeTimings.forEach(({ step, duration }) => {
      const fadeInTime = totalTime + 0;
      const fadeOutTime = totalTime + duration;

      timers.push(setTimeout(() => {
        setFadeState('in');
        setCurrentStep(step);
      }, fadeInTime));

      timers.push(setTimeout(() => {
        setFadeState('out');
      }, fadeOutTime - 500));

      totalTime += duration;
    });

    timers.push(setTimeout(() => {
      onComplete();
    }, totalTime));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const logoData = [
    {
      step: 1,
      imgSrc: "/assets/logos/sastra-university-logo.png",
      alt: "SASTRA University",
      text: "SASTRA UNIVERSITY",
      textClass: "text-primary",
      glowClass: "glow-primary",
      bgGlow: "from-primary/20 to-secondary/20",
    },
    {
      step: 2,
      imgSrc: "/assets/logos/elcom-dais-logo.png",
      alt: "ELCOM DAIS",
      text: "ELCOM DAIS",
      textClass: "text-secondary",
      glowClass: "glow-secondary",
      bgGlow: "from-secondary/20 to-accent/20",
    },
    {
      step: 3,
      imgSrc: "/assets/logos/innovate.png",
      alt: "Innovate",
      text: "INNOVATE",
      textClass: "text-accent",
      glowClass: "glow-accent",
      bgGlow: "from-accent/20 to-primary/20",
    },
  ];

  const activeLogo = logoData.find((logo) => logo.step === currentStep);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-background flex items-center justify-center z-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        {activeLogo && (
          <div
            className={`flex flex-col items-center transition-opacity duration-1000 ${fadeState === 'in' ? 'opacity-100' : 'opacity-0'} absolute`}
          >
            <div className="relative">
              <img
                src={activeLogo.imgSrc}
                alt={activeLogo.alt}
                className={`w-52 h-52 object-contain filter brightness-0 invert ${activeLogo.glowClass}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${activeLogo.bgGlow} rounded-full blur-xl animate-pulse`}></div>
            </div>
            {/* Subtitle removed */}
          </div>
        )}
      </div>

      <div className={`absolute bottom-12 transition-all duration-500 ${currentStep >= 3 ? "opacity-100" : "opacity-0"}`}>
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
        </div>
        <p className="text-center mt-4 text-muted-foreground text-sm tracking-widest animate-fade-in">
          INITIALIZING...
        </p>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;