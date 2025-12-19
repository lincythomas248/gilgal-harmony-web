import { BookOpen, ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import odbBanner from "@/assets/our-daily-bread-banner.jpg";

interface ODBFallbackProps {
  errorMessage?: string;
  onRetry?: () => void;
}

export const ODBFallback = ({ errorMessage, onRetry }: ODBFallbackProps) => {
  return (
    <div className="card-elevated overflow-hidden">
      {/* Hero image banner */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={odbBanner}
          alt="Our Daily Bread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Our Daily Bread</h3>
              <p className="text-sm text-muted-foreground">Daily devotional readings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-muted-foreground mb-6">
          {errorMessage || "We couldn't load devotionals right now. You can still read today's devotional directly on the Our Daily Bread website."}
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="gap-2">
            <a
              href="https://ourdailybread.org/read/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="w-4 h-4" />
              Open Today's Devotional
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
          
          <Button variant="outline" asChild className="gap-2">
            <a
              href="https://ourdailybread.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Daily Bread
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>

          {onRetry && (
            <Button variant="ghost" onClick={onRetry} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
