const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-navy text-cream">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          Cross the AI adoption threshold with clarity and confidence
        </h1>
        <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90 leading-relaxed">
          I help consulting firms, training companies, and agencies become fluent with AI,
          decide what to build, and ship working tools—without breaking what already works.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://drive.google.com/file/d/1HEKPHYJrOoSKY-DHBaixTEAvOMTWW79k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-md bg-orange text-navy font-heading font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Download: The Leadership Gap
          </a>
          <a
            href="https://calendar.app.google/58qqkkF4R7CzgheV6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-md bg-orange text-navy font-heading font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
