import { Link } from "react-router-dom";
import { Sparkles, Youtube, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const QuickLinks = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
      <Button asChild variant="default" size="sm" className="gap-1.5">
        <Link to="/resources/verse-of-the-day">
          <Sparkles className="w-3.5 h-3.5" />
          Verse of the Day
        </Link>
      </Button>
      
      <Button asChild variant="outline" size="sm" className="gap-1.5">
        <a
          href="https://www.youtube.com/@ipcgilgalshj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="w-3.5 h-3.5" />
          YouTube
        </a>
      </Button>
      
      <Button asChild variant="outline" size="sm" className="gap-1.5">
        <a
          href="https://ourdailybread.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          Our Daily Bread
        </a>
      </Button>
    </div>
  );
};
