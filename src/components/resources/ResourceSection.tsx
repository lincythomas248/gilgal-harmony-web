import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ResourceSectionProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: { text: string; href: string; external?: boolean };
  children: ReactNode;
}

export const ResourceSection = ({
  icon,
  title,
  description,
  action,
  children,
}: ResourceSectionProps) => {
  return (
    <div className="mb-14">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
          )}
          <div>
            <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
            {description && (
              <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
            )}
          </div>
        </div>
        
        {action && (
          action.external ? (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline flex items-center gap-1 transition-colors"
            >
              {action.text}
              <ChevronRight className="w-4 h-4" />
            </a>
          ) : (
            <Link
              to={action.href}
              className="text-sm text-primary hover:underline flex items-center gap-1 transition-colors"
            >
              {action.text}
              <ChevronRight className="w-4 h-4" />
            </Link>
          )
        )}
      </div>

      {/* Section Content */}
      <div className="card-warm rounded-2xl p-6 shadow-sm">
        {children}
      </div>
    </div>
  );
};
