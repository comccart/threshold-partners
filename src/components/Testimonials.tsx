const testimonials = [
  {
    quote:
      "Working with Conor helped me cut through the noise and hype surrounding AI and focus on what truly matters. Rather than chasing every new tool, we zeroed in on how AI could drive meaningful outcomes in my day-to-day work. I now use AI in a way that feels intuitive and grounded, and I feel confident modeling that mindset with others.",
    name: "Marcus Mellberg",
    title: "CIO, Safe Life",
  },
  {
    quote:
      "Conor brings a refreshing approach to understanding the way we do business, and uses that knowledge to suggest creative applications for AI to enhance our ways of working. His deep expertise coupled with a 'can-do' attitude have been instrumental in accelerating our digital transformation. He's helped us streamline internal processes - freeing up valuable time to prioritise the work that actually matters.",
    name: "Waseem Iqbal",
    title: "Head of Digital, Global Diversity Practice",
  },
  {
    quote:
      "Conor delivered two AI workshops for our programme and was excellent to work with throughout. He has a rare ability to make complex AI topics clear, grounded, and relevant to real organisational challenges. The sessions were practical, well structured, and struck the right balance between thinking and hands-on work. Participants left with a clearer sense of what AI could actually do for them.",
    name: "David Bermingham",
    title: "Director of AI, AIM",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy text-center mb-14">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-8 shadow-sm border border-cerulean/20 hover:border-cerulean/50 transition-colors"
            >
              <p className="font-body text-navy leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-heading font-medium text-chestnut">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
