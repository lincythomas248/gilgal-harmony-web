import { Sparkles } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="page-header relative">
      {/* Decorative elements */}
      <div className="absolute top-4 left-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
      <div className="absolute bottom-4 right-12 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
      
      <div className="section-container relative text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-accent" />
          <div className="accent-line-sm" />
        </div>
        <h1 className="text-foreground mb-4 font-serif">{title}</h1>
        {subtitle && (
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
