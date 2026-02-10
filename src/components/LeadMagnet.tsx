const LeadMagnet = () => {
  return <section id="lead-magnet" className="bg-card">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-2">
          The Leadership Gap
        </h2>
        <p className="font-heading font-medium text-lg text-chestnut mb-6">An A–Z of what breaks when AI enters your organization</p>
        <p className="font-body text-navy max-w-2xl mx-auto mb-10 leading-relaxed">
          Based on real conversations with leaders navigating AI adoption.
          26 specific tensions and the leadership habits that need to change.
        </p>

        {/* Book mockup */}
        <div className="mx-auto mb-10 w-48 h-64 bg-navy rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-center px-4">
            <p className="font-heading font-bold text-cream text-sm leading-tight mb-1">
              THE LEADERSHIP GAP
            </p>
            <div className="w-8 h-0.5 bg-orange mx-auto mb-1" />
            <p className="font-body text-cream/70 text-[10px]">Threshold Partners</p>
          </div>
        </div>

        <a href="https://drive.google.com/file/d/1HEKPHYJrOoSKY-DHBaixTEAvOMTWW79k/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 rounded-md bg-orange text-navy font-heading font-semibold text-base hover:opacity-90 transition-opacity">
          Download the Guide
        </a>
      </div>
    </section>;
};
export default LeadMagnet;