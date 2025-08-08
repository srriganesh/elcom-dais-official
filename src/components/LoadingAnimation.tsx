import { useState, useEffect } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [currentStep, setCurrentStep] = useState(0); // 0: none, 1: SASTRA, 2: ELCOM, 3: INNOVATE
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  useEffect(() => {
    setCurrentStep(1);

    const fadeTimings = [
      { step: 1, duration: 1500 },
      { step: 2, duration: 1500 },
      { step: 3, duration: 1500 },
    ];

    let totalTime = 0;
    const timers: NodeJS.Timeout[] = [];

    fadeTimings.forEach(({ step, duration }) => {
      const fadeInTime = totalTime;
      const fadeOutTime = total
