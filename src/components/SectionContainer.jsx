import React from "react";

const SectionContainer = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;