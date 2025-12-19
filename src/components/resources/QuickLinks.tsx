import { Link } from "react-router-dom";
import { Sparkles, Youtube, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const QuickLinks = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
      <Button asChild variant="default" className="gap-2">
        <Link to="/resources/verse-of-the-day">
          <Sparkles className="w-4 h-4" />
          Verse of the Day
        </Link>
      </Button>
      
      <Button asChild variant="outline" className="gap-2">
        <a
          href="https://www.youtube.com/@YourChannel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="w-4 h-4" />
          YouTube
        </a>
      </Button>
      
      <Button asChild variant="outline" className="gap-2">
        <a
          href="https://ourdailybread.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BookOpen className="w-4 h-4" />
          Our Daily Bread
        </a>
      </Button>
    </div>
  );
};
