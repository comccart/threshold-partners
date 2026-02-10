const phases = [
  {
    period: "Months 1–2",
    title: "Diagnose & Design",
    accent: "chestnut",
    items: ["AI fluency training", "Strategic roadmap", "Priority identification"],
  },
  {
    period: "Months 3–4",
    title: "Build & Implement",
    accent: "cerulean",
    items: ["Working tools built together", "Workflow redesign", "Team training"],
  },
  {
    period: "Months 5–6",
    title: "Transfer & Scale",
    accent: "orange",
    items: ["Ongoing advisory", "Internal ownership", "Sustainable systems"],
  },
];

const accentStyles: Record<string, { border: string; text: string; bg: string }> = {
  chestnut: { border: "border-chestnut", text: "text-chestnut", bg: "bg-chestnut/10" },
  cerulean: { border: "border-cerulean", text: "text-cerulean", bg: "bg-cerulean/10" },
  orange: { border: "border-orange", text: "text-orange", bg: "bg-orange/10" },
};

const Offer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-card">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-2">
          Fractional AI Lead
        </h2>
        <p className="font-heading font-medium text-lg text-muted-foreground mb-14">
          6-Month Engagement
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {phases.map((phase) => {
            const s = accentStyles[phase.accent];
            return (
              <div
                key={phase.period}
                className={`bg-cream rounded-xl p-8 border-t-4 ${s.border} text-left`}
              >
                <p className={`font-heading font-semibold text-sm uppercase tracking-wider ${s.text} mb-2`}>
                  {phase.period}
                </p>
                <h3 className="font-heading font-bold text-xl text-navy mb-5">
                  {phase.title}
                </h3>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${s.bg} border ${s.border}`} />
                      <span className="font-body text-navy">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="font-heading font-bold text-4xl text-navy mb-1">€45,000</p>
        <p className="font-body text-muted-foreground mb-8">(€7,500/month, 6-month minimum)</p>
        <button
          onClick={() => scrollTo("footer")}
          className="px-8 py-3.5 rounded-md bg-orange text-navy font-heading font-semibold text-base hover:opacity-90 transition-opacity"
        >
          Book a Call
        </button>
      </div>
    </section>
  );
};

export default Offer;
