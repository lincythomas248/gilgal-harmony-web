import { Link } from "react-router-dom";
import { BookOpen, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import { useODBDevotionals, getExcerpt } from "@/hooks/useODBDevotionals";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

export const OdbCompact = () => {
  const { devotionals, loading, error } = useODBDevotionals(3);

  return (
    <div className="card-warm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-lg font-bold text-foreground">Our Daily Bread</h2>
        </div>
        <a
          href="https://ourdailybread.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
        >
          Visit <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="animate-pulse flex gap-3">
              <div className="w-16 h-12 bg-muted rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <div className="h-4 bg-muted rounded w-3/4 mb-1" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : error || devotionals.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground mb-3">
            Unable to load devotionals right now
          </p>
          <Button asChild variant="outline" size="sm" className="gap-1.5">
            <a
              href="https://ourdailybread.org/read/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit ODB
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {devotionals.slice(0, 2).map((devotional) => (
            <Link
              key={devotional.slug}
              to={`/resources/devotions/odb/${devotional.slug}`}
              className="group flex gap-3 p-2 -mx-2 rounded-lg hover:bg-background/60 transition-colors"
            >
              {devotional.thumbnail && (
                <img
                  src={devotional.thumbnail}
                  alt=""
                  className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                  loading="lazy"
                />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                  {devotional.title}
                </h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3 h-3" />
                  {devotional.pubDate && format(new Date(devotional.pubDate), 'MMM d')}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 self-center" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
