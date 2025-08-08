import { useEffect, useState } from "react";
import logo1 from "@/assets/elcom-dais-logo.png";
import logo2 from "@/assets/sastra-logo-white.png";

const fadeTimings = [
  { step: 0, duration: 2000 },
  { step: 1, duration: 2000 },
];

const logos = [logo1, logo2];

const LoadingAnimation = ({ onFinish }: { onFinish: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    let totalTime = 0;

    fadeTimings.forEach(({ step, duration }) => {
      const fadeInTime = totalTime;
      const fadeOutTime = totalTime + duration;

      setTimeout(() => setFade("fade-in"), fadeInTime);
      setTimeout(() => setFade("fade-out"), fadeOutTime);
      setTimeout(() => setCurrentStep(step + 1), fadeOutTime);

      totalTime += duration + 500; // 500ms gap
    });

    const finishTimeout = setTimeout(() => {
      onFinish();
    }, totalTime + 500);

    return () => clearTimeout(finishTimeout);
  }, [onFinish]);

  if (currentStep >= logos.length) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <img
        src={logos[currentStep]}
        alt="Loading logo"
        className={`w-[300px] h-auto transition-opacity duration-1000 ${
          fade === "fade-in" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default LoadingAnimation;
