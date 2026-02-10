import { AlertTriangle, Lightbulb, Clock, Users, BookOpen, Map, Wrench, ArrowRight } from "lucide-react";

const challenges = [
  { icon: AlertTriangle, text: "Tools multiply faster than clarity" },
  { icon: Clock, text: "Teams wait for permission instead of experimenting" },
  { icon: Users, text: "Projects stall between strategy and execution" },
  { icon: Lightbulb, text: "No one owns the thinking end-to-end" },
];

const solutions = [
  { icon: BookOpen, text: "Build AI fluency in your team" },
  { icon: Map, text: "Design your strategic roadmap" },
  { icon: Wrench, text: "Ship working tools alongside you" },
  { icon: ArrowRight, text: "Transfer capability, not dependency" },
];

const ProblemSolution = () => {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* The Challenge */}
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-chestnut mb-8">
              The Challenge
            </h2>
            <ul className="space-y-5">
              {challenges.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-lg bg-chestnut/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-chestnut" />
                  </div>
                  <span className="font-body text-navy text-lg leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Need */}
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-cerulean mb-8">
              What You Need
            </h2>
            <ul className="space-y-5">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-lg bg-cerulean/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cerulean" />
                  </div>
                  <span className="font-body text-navy text-lg leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
