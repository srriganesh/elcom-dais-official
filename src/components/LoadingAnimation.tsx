import { useEffect, useState } from "react";
import elcomLogo from "../assets/elcom-dais-logo.png"; // Use correct relative path
import sastraLogo from "../assets/sastra-logo-white.png"; // Use correct relative path

const fadeTimings = [
  { step: 0, duration: 1500 },
  { step: 1, duration: 1500 },
];

const LoadingAnimation = () => {
  const [visibleLogo, setVisibleLogo] = useState<number | null>(null);

  useEffect(() => {
    let totalTime = 0;

    fadeTimings.forEach(({ step, duration }) => {
      const fadeInTime = totalTime;
      const fadeOutTime = totalTime + duration;

      setTimeout(() => setVisibleLogo(step), fadeInTime);
      setTimeout(() => setVisibleLogo(null), fadeOutTime);

      totalTime += duration + 500; // 500ms delay between logos
    });
  }, []);

  const getLogo = () => {
    switch (visibleLogo) {
      case 0:
        return <img src={elcomLogo} alt="Elcom Logo" className="logo" />;
      case 1:
        return (
          <a href="https://sastra.edu" target="_blank" rel="noopener noreferrer">
            <img src={sastraLogo} alt="SASTRA Logo" className="logo clickable" />
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="loading-container">
      <div className={`logo-wrapper ${visibleLogo !== null ? "fade-in" : "fade-out"}`}>
        {getLogo()}
      </div>

      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #000; /* dark background */
        }

        .logo-wrapper {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .fade-in {
          opacity: 1;
        }

        .fade-out {
          opacity: 0;
        }

        .logo {
          max-width: 300px;
          width: 40vw;
          height: auto;
          filter: brightness(0) invert(1); /* ensures white logos on dark bg */
        }

        .clickable {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
