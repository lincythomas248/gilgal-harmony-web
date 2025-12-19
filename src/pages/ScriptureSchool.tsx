import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { HeroBanner } from "@/components/ui/HeroBanner";
import {
  BookOpen,
  Users,
  Music,
  Palette,
  Award,
  PartyPopper,
  HeartHandshake,
  Baby,
  GraduationCap,
  BookMarked,
  Lightbulb,
  Crown,
  Heart,
  CheckCircle2,
  Clock,
  X,
} from "lucide-react";

export default function ScriptureSchool() {
  const experiences = [
    {
      icon: BookOpen,
      label: "Bible Stories",
      bg: "bg-amber-50/80",
      border: "border-amber-200/70",
      iconBg: "bg-amber-100/70",
      iconColor: "text-amber-700",
      textColor: "text-amber-700",
    },
    {
      icon: Music,
      label: "Worship Songs",
      bg: "bg-sky-50/80",
      border: "border-sky-200/70",
      iconBg: "bg-sky-100/70",
      iconColor: "text-sky-700",
      textColor: "text-sky-700",
    },
    {
      icon: Palette,
      label: "Creative Arts",
      bg: "bg-emerald-50/80",
      border: "border-emerald-200/70",
      iconBg: "bg-emerald-100/70",
      iconColor: "text-emerald-700",
      textColor: "text-emerald-700",
    },
    {
      icon: Heart,
      label: "Friendship",
      bg: "bg-rose-50/80",
      border: "border-rose-200/70",
      iconBg: "bg-rose-100/70",
      iconColor: "text-rose-700",
      textColor: "text-rose-700",
    },
    // ✅ Restored (the missing tile)
    {
      icon: HeartHandshake,
      label: "Youth Counseling",
      bg: "bg-violet-50/80",
      border: "border-violet-200/70",
      iconBg: "bg-violet-100/70",
      iconColor: "text-violet-700",
      textColor: "text-violet-700",
    },
    {
      icon: Award,
      label: "Achievements",
      bg: "bg-indigo-50/80",
      border: "border-indigo-200/70",
      iconBg: "bg-indigo-100/70",
      iconColor: "text-indigo-700",
      textColor: "text-indigo-700",
    },
    {
      icon: PartyPopper,
      label: "Celebrations",
      bg: "bg-orange-50/80",
      border: "border-orange-200/70",
      iconBg: "bg-orange-100/70",
      iconColor: "text-orange-700",
      textColor: "text-orange-700",
    },
    // ✅ No grey — premium teal that still contrasts
    {
      icon: GraduationCap,
      label: "IPC Region Curriculum",
      bg: "bg-teal-50/80",
      border: "border-teal-200/70",
      iconBg: "bg-teal-100/70",
      iconColor: "text-teal-800",
      textColor: "text-teal-800",
    },
  ];

  const groups = [
    {
      name: "Sub-Junior",
      age: "Below 6 Years",
      icon: Baby,
      color: "text-amber-600",
      iconBg: "bg-amber-100",
      href: "/ministry/scripture-school/sub-junior",
      desc: "Foundation of faith through stories and songs",
      highlights: ["Bible stories", "Action songs", "Memory verses"],
    },
    {
      name: "Junior",
      age: "6–9 Years",
      icon: BookMarked,
      color: "text-blue-600",
      iconBg: "bg-blue-100",
      href: "/ministry/scripture-school/junior",
      desc: "Building strong biblical foundations",
      highlights: ["Gospel basics", "Character studies", "Prayer habits"],
    },
    {
      name: "Intermediate",
      age: "9–12 Years",
      icon: Lightbulb,
      color: "text-emerald-600",
      iconBg: "bg-emerald-100",
      href: "/ministry/scripture-school/intermediate",
      desc: "Deepening understanding of Scripture",
      highlights: ["Bible timeline", "Doctrines (basic)", "Application"],
    },
    {
      name: "Senior",
      age: "12–15 Years",
      icon: GraduationCap,
      color: "text-violet-600",
      iconBg: "bg-violet-100",
      href: "/ministry/scripture-school/senior",
      desc: "Exploring theological foundations",
      highlights: ["Apologetics (intro)", "Spiritual disciplines", "Service"],
    },
    {
      name: "Super-Senior",
      age: "15–18 Years",
      icon: Crown,
      color: "text-rose-600",
      iconBg: "bg-rose-100",
      href: "/ministry/scripture-school/super-senior",
      desc: "Preparing for life and ministry",
      highlights: ["Leadership", "Calling & purpose", "Faith & culture"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroBanner
        title="Scripture"
        titleSecondLine="School"
        subtitle="Where faith takes root and joy blossoms"
        primaryCta={{ text: "Explore Classes", link: "/ministries/scripture-school" }}
        logo="/lovable-uploads/48be5303-1800-41ed-8b3a-2f3a0914d3ff.png"
        logoAlt="Scripture School"
      />

      {/* What Children Experience */}
      <section className="bg-background py-14 sm:py-16">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              What Children Experience
            </h2>
            <p className="mt-3 text-lg text-muted-foreground font-serif">Faith, fun, and friendship every week</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {experiences.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "rounded-2xl border p-6 sm:p-7 text-center transition-all duration-300",
                  "shadow-sm hover:shadow-md hover:-translate-y-0.5",
                  item.bg,
                  item.border,
                )}
              >
                <div
                  className={cn(
                    "mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-black/5",
                    item.iconBg,
                  )}
                >
                  <item.icon className={cn("h-6 w-6", item.iconColor)} />
                </div>
                <h3 className={cn("font-semibold tracking-tight", item.textColor)}>{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups (Cards) */}
      <section className="bg-background pb-10">
        <div className="section-container">
          <div className="text-center pt-10 pb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold">
              <Users className="w-4 h-4" /> Age Groups
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              A Class for Every Child
            </h2>
            <p className="mt-3 text-muted-foreground font-serif">Click a class to explore its curriculum</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {groups.map((group) => (
              <Link
                key={group.name}
                to={group.href}
                className={cn(
                  "group rounded-2xl bg-white shadow-sm hover:shadow-md border border-muted/60",
                  "transition-all duration-300 hover:-translate-y-0.5",
                )}
              >
                <div className="p-6 text-center">
                  <div className={cn("mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl", group.iconBg)}>
                    <group.icon className={cn("h-6 w-6", group.color)} />
                  </div>

                  {/* ✅ LOCK: never wrap on desktop; stays safe on mobile by using responsive sizes */}
                  <h3
                    className={cn(
                      `
                        font-extrabold tracking-tight text-foreground
                        text-[22px] sm:text-[24px] md:text-[26px] lg:text-[22px] xl:text-[24px]
                        px-2 whitespace-nowrap leading-none
                        min-h-[3.0rem] flex items-center justify-center
                      `,
                    )}
                  >
                    {group.name}
                  </h3>

                  <p className={cn("mt-2 text-sm font-semibold", group.color)}>{group.age}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum section below (kept as-is from your file) */}
      <section className="bg-[#0A4D3C] py-14">
        <div className="section-container">
          <div className="text-center text-white">
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/10 border border-white/10">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Explore Our Curriculum</h2>

            <p className="mt-3 max-w-2xl mx-auto text-white/80 font-serif">
              A thoughtful journey from Sub-Junior to Super-Senior, with clear milestones and exam-focused lessons.
            </p>

            <p className="mt-2 text-white/70 text-sm">Select an age group above or expand any below</p>
          </div>

          {/* ... your accordion/content continues unchanged ... */}
        </div>
      </section>
    </div>
  );
}
