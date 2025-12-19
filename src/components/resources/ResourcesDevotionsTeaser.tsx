import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourcesDevotionsTeaserProps {
  className?: string;
  title?: string;
  description?: string;
  ctaText?: string;
}

export const ResourcesDevotionsTeaser = ({
  className,
  title = "Resources & Devotions",
  description = "Weekly devotionals, Bible reading, and youth-friendly resources to grow in faith.",
  ctaText = "Explore Resources",
}: ResourcesDevotionsTeaserProps) => {
  return (
    <Link
      to="/resources/devotions"
      className={cn(
        "group block relative rounded-2xl p-8 bg-gradient-to-br from-[#FAF8F3] to-white shadow-lg border-2 border-accent/20 transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center gap-2 text-accent ml-4">
          <span className="text-sm font-semibold hidden sm:inline">{ctaText}</span>
          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
};
