import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VerseCardLarge = () => {
  return (
    <div className="card-warm h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-olive-light rounded-xl flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-6 h-6 text-olive" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Verse of the Day</h2>
      </div>
      
      <p className="text-sm text-muted-foreground mb-6">
        Malayalam • Daily image • Auto-rotates
      </p>
      
      <div className="mt-auto">
        <Button asChild className="gap-2">
          <Link to="/resources/verse-of-the-day">
            Open Verse
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
