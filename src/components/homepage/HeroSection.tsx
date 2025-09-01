const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl p-12 md:p-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans text-white leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Mayfair X AIVA
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
