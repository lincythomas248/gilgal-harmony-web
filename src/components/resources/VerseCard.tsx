import { Link } from "react-router-dom";
import { Sparkles, ChevronRight } from "lucide-react";

export const VerseCard = () => {
  return (
    <Link
      to="/resources/verse-of-the-day"
      className="group block bg-gradient-to-br from-primary/5 via-background to-olive-light/30 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-olive-light rounded-xl flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-7 h-7 text-olive" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
            Verse of the Day
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Malayalam verse with beautiful rotating backgrounds • Updated daily
          </p>
          <span className="inline-flex items-center text-sm text-primary font-medium">
            Open Verse of the Day
          </span>
        </div>
      </div>
    </Link>
  );
};
