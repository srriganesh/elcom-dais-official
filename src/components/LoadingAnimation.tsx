<div className="relative w-full h-full flex items-center justify-center">
  {/* Display only the active logo */}
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
