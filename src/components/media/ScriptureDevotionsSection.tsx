import { BookOpen } from "lucide-react";

interface DevotionCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

const DevotionCard = ({ title, subtitle, children, className = "" }: DevotionCardProps) => (
  <div className={`card-warm rounded-2xl p-5 ${className}`}>
    <div className="mb-4">
      <h3 className="font-semibold text-lg text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
    <div className="rounded-xl overflow-hidden border border-border/30 bg-muted/20">
      {children}
    </div>
  </div>
);

export const ScriptureDevotionsSection = () => {
  return (
    <div className="mb-12">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">📖 Scripture & Daily Devotions</h2>
          <p className="text-sm text-muted-foreground">Daily inspiration for your spiritual journey</p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="space-y-6">
        {/* Row 1: Daily Verse + Malayalam Bible */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 - Malayalam Daily Bible Verse */}
          <DevotionCard
            title="ഇന്നത്തെ ബൈബിൾ വാക്യം"
            subtitle="Daily Malayalam Scripture"
          >
            <iframe
              src="https://dailybible.co.in/ml/bible-verse-of-the-day"
              className="w-full h-[520px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Malayalam Daily Bible Verse"
            />
          </DevotionCard>

          {/* Card 2 - Malayalam Bible */}
          <DevotionCard
            title="മലയാളം ബൈബിൾ"
            subtitle="Read the Holy Bible in Malayalam"
          >
            <iframe
              src="https://www.wordproject.org/bibles/ml/"
              className="w-full h-[520px] lg:h-[700px] border-0"
              loading="lazy"
              title="Malayalam Bible"
            />
          </DevotionCard>
        </div>

        {/* Row 2: Our Daily Bread (Malayalam + English) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 3 - Our Daily Bread Malayalam */}
          <DevotionCard
            title="Our Daily Bread — മലയാളം"
            subtitle="Daily Devotional Reading"
          >
            <iframe
              src="https://malayalam-odb.org/today/"
              className="w-full h-[700px] lg:h-[900px] border-0"
              loading="lazy"
              title="Our Daily Bread Malayalam"
            />
          </DevotionCard>

          {/* Card 4 - Our Daily Bread English */}
          <DevotionCard
            title="Our Daily Bread — English"
            subtitle="Daily Devotional Reading"
          >
            <iframe
              src="https://odb.org/"
              className="w-full h-[700px] lg:h-[900px] border-0"
              loading="lazy"
              title="Our Daily Bread English"
            />
          </DevotionCard>
        </div>
      </div>
    </div>
  );
};
