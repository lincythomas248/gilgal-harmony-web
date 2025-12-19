import { Link } from "react-router-dom";
import { Calendar, ChevronRight } from "lucide-react";
import { useODBDevotionals, getExcerpt } from "@/hooks/useODBDevotionals";
import { format } from "date-fns";
import { ODBFallback } from "./ODBFallback";

export const OdbSection = () => {
  const { devotionals, loading, error } = useODBDevotionals(6);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-background/50 rounded-xl p-4 animate-pulse">
            <div className="h-32 bg-muted rounded-lg mb-3" />
            <div className="h-5 bg-muted rounded w-3/4 mb-2" />
            <div className="h-4 bg-muted rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error || devotionals.length === 0) {
    return <ODBFallback errorMessage={error || undefined} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {devotionals.map((devotional) => (
        <Link
          key={devotional.slug}
          to={`/resources/devotions/odb/${devotional.slug}`}
          className="group bg-background/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {devotional.thumbnail && (
            <div className="aspect-video overflow-hidden">
              <img
                src={devotional.thumbnail}
                alt={devotional.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {devotional.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {getExcerpt(devotional.description, 20)}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {devotional.pubDate && format(new Date(devotional.pubDate), 'MMM d')}
              </span>
              <span className="flex items-center gap-0.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
