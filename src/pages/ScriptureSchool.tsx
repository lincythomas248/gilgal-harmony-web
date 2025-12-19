import { useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { BackToTop } from "@/components/ui/BackToTop";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  BookOpen,
  Users,
  Music,
  Palette,
  Award,
  PartyPopper,
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
import { Link } from "react-router-dom";
import scriptureSchoolLogo from "@/assets/scripture-school-logo-transparent.png";
import communityPhoto from "@/assets/scripture-school-community.jpg";
import { ageGroups } from "@/data/curriculumData";

/**
 * Premium pastel tile system:
 * - tileBg: subtle gradient background
 * - border: soft border
 * - iconWrap: white glassy icon plate for “premium” feel
 * - icon/text colors: balanced + readable
 */
const experiences = [
  {
    icon: BookOpen,
    label: "Bible Stories",
    text: "text-amber-700",
    iconColor: "text-amber-700",
    tileBg: "bg-gradient-to-br from-amber-50 to-amber-100/80",
    border: "border-amber-200/70",
    iconWrap: "bg-white/70 ring-1 ring-amber-200/50",
  },
  {
    icon: Music,
    label: "Worship Songs",
    text: "text-sky-700",
    iconColor: "text-sky-700",
    tileBg: "bg-gradient-to-br from-sky-50 to-sky-100/80",
    border: "border-sky-200/70",
    iconWrap: "bg-white/70 ring-1 ring-sky-200/50",
  },
  {
    icon: Palette,
    label: "Creative Arts",
    text: "text-emerald-700",
    iconColor: "text-emerald-700",
    tileBg: "bg-gradient-to-br from-emerald-50 to-emerald-100/80",
    border: "border-emerald-200/70",
    iconWrap: "bg-white/70 ring-1 ring-emerald-200/50",
  },
  {
    icon: Heart,
    label: "Friendship",
    text: "text-rose-700",
    iconColor: "text-rose-700",
    tileBg: "bg-gradient-to-br from-rose-50 to-rose-100/80",
    border: "border-rose-200/70",
    iconWrap: "bg-white/70 ring-1 ring-rose-200/50",
  },

  // ✅ RESTORED: Youth Counseling (uses Users icon for safe import)
  {
    icon: Users,
    label: "Youth Counseling",
    text: "text-indigo-700",
    iconColor: "text-indigo-700",
    tileBg: "bg-gradient-to-br from-indigo-50 to-indigo-100/80",
    border: "border-indigo-200/70",
    iconWrap: "bg-white/70 ring-1 ring-indigo-200/50",
  },

  {
    icon: Award,
    label: "Achievements",
    text: "text-violet-700",
    iconColor: "text-violet-700",
    tileBg: "bg-gradient-to-br from-violet-50 to-violet-100/80",
    border: "border-violet-200/70",
    iconWrap: "bg-white/70 ring-1 ring-violet-200/50",
  },
  {
    icon: PartyPopper,
    label: "Celebrations",
    text: "text-orange-700",
    iconColor: "text-orange-700",
    tileBg: "bg-gradient-to-br from-orange-50 to-orange-100/80",
    border: "border-orange-200/70",
    iconWrap: "bg-white/70 ring-1 ring-orange-200/50",
  },

  // ✅ No more grey: premium teal/mint that complements the set
  {
    icon: BookMarked,
    label: "IPC Region Curriculum",
    text: "text-teal-800",
    iconColor: "text-teal-800",
    tileBg: "bg-gradient-to-br from-teal-50 to-cyan-100/80",
    border: "border-teal-200/70",
    iconWrap: "bg-white/70 ring-1 ring-teal-200/50",
  },
];

// Icon mapping for each group
const groupIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "sub-junior": Baby,
  junior: BookMarked,
  intermediate: Lightbulb,
  senior: GraduationCap,
  "super-senior": Crown,
};

// Extended age group data with learning info
const ageGroupDetails: Record<string, { whatTheyLearn: string[]; classFlow: string[] }> = {
  "sub-junior": {
    whatTheyLearn: [
      "Basic Bible stories from Creation to Jesus",
      "Simple prayers and worship songs",
      "God's love and care for them",
      "Being kind and sharing with others",
      "Memory verses with actions",
    ],
    classFlow: [
      "Circle time with songs and prayer",
      "Bible story with visual aids",
      "Creative activity (coloring, crafts)",
      "Snack and fellowship time",
      "Closing prayer and memory verse",
    ],
  },
  junior: {
    whatTheyLearn: [
      "Old Testament patriarchs and prophets",
      "Key events from Genesis to Malachi",
      "Introduction to Jesus' life and ministry",
      "The importance of obedience and faith",
      "Structured memory verse program",
    ],
    classFlow: [
      "Opening worship and prayer",
      "Review of previous lesson",
      "Main Bible teaching with discussion",
      "Workbook activities",
      "Memory verse practice and closing",
    ],
  },
  intermediate: {
    whatTheyLearn: [
      "The Gospels and life of Christ in depth",
      "The early church and Acts",
      "Paul's missionary journeys",
      "Application of biblical principles",
      "Exam-focused scripture memorization",
    ],
    classFlow: [
      "Praise and worship session",
      "Interactive Bible quiz",
      "In-depth scripture study",
      "Group discussion and questions",
      "Prayer requests and closing",
    ],
  },
  senior: {
    whatTheyLearn: [
      "Systematic theology introduction",
      "Biblical interpretation principles",
      "Church history and doctrine",
      "Defending the faith (apologetics)",
      "Personal devotional practices",
    ],
    classFlow: [
      "Contemporary worship",
      "Deep-dive scripture analysis",
      "Theological discussion",
      "Real-life application scenarios",
      "Personal prayer and reflection",
    ],
  },
  "super-senior": {
    whatTheyLearn: [
      "Advanced theological studies",
      "Leadership and ministry skills",
      "Christian worldview and ethics",
      "Preparing for adult life decisions",
      "Comprehensive exam preparation",
    ],
    classFlow: [
      "Youth-led worship",
      "Intensive scripture study",
      "Debate and discussion sessions",
      "Mentorship and guidance",
      "Commissioning prayer",
    ],
  },
};

export default function ScriptureSchool() {
  const [activeAgeGroup, setActiveAgeGroup] = useState<string | null>(null);
  const [accordionValue, setAccordionValue] = useState<string[]>([]);
  const curriculumRef = useRef<HTMLDivElement>(null);

  const handleAgeGroupClick = (groupId: string) => {
    setActiveAgeGroup(groupId);
    setAccordionValue([groupId]);

    setTimeout(() => {
      curriculumRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleShowAll = () => {
    setActiveAgeGroup(null);
    setAccordionValue([]);
  };

  const activeGroup = ageGroups.find((g) => g.id === activeAgeGroup);

  return (
    <Layout>
      <BackToTop />

      <HeroBanner
        title="Scripture School"
        subtitle="Where faith takes root and joy blossoms"
        logo={scriptureSchoolLogo}
        logoAlt="Scripture School Logo"
        primaryCta={{ text: "Explore Classes", link: "#classes" }}
      />

      {/* WHAT CHILDREN EXPERIENCE */}
      <section className="bg-background py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What Children Experience</h2>
              <p className="text-lg text-muted-foreground">Faith, fun, and friendship every week</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`
                    ${exp.tileBg} ${exp.border}
                    border rounded-2xl p-6 text-center
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl
                    min-h-[140px] flex flex-col items-center justify-center
                  `}
                >
                  <div
                    className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3
                      ${exp.iconWrap} backdrop-blur-sm
                    `}
                  >
                    <exp.icon className={`w-7 h-7 ${exp.iconColor}`} />
                  </div>
                  <p className={`text-base font-semibold ${exp.text} leading-tight`}>{exp.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY PHOTO BAND */}
      <section className="relative w-full my-12 md:my-16 lg:my-20">
        <img
          src={communityPhoto}
          alt="Scripture School community group photo"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </section>

      {/* Curved transition */}
      <div className="relative h-10 md:h-12 bg-background">
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-amber-50/70" />
        </svg>
      </div>

      {/* A CLASS FOR EVERY CHILD */}
      <section id="classes" className="bg-amber-50/70 py-10 md:py-14 scroll-mt-20">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 rounded-full mb-4 shadow-sm">
                <Users className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-800">Age Groups</span>
              </div>
              <h2 className="text-2xl md:text-3xl text-foreground">A Class for Every Child</h2>
              <p className="text-muted-foreground mt-2 text-sm">Click a class to explore its curriculum</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {ageGroups.map((group) => {
                const isActive = activeAgeGroup === group.id;
                const IconComponent = groupIcons[group.id] || BookMarked;

                return (
                  <button
                    key={group.id}
                    onClick={() => handleAgeGroupClick(group.id)}
                    className={`
                      bg-white rounded-2xl p-5 shadow-sm text-center group
                      min-h-[168px] flex flex-col items-center justify-center
                      cursor-pointer transition-all duration-300
                      hover:-translate-y-1 hover:shadow-lg
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
                      ${isActive ? `ring-2 ${group.borderActive} shadow-lg -translate-y-1` : "hover:ring-1 hover:ring-gray-200"}
                    `}
                    aria-pressed={isActive}
                  >
                    <div
                      className={`
                        w-12 h-12 ${group.bg} rounded-xl flex items-center justify-center mx-auto mb-3
                        transition-all duration-300
                        ${isActive ? "scale-110" : "group-hover:scale-110"}
                      `}
                    >
                      <IconComponent className={`w-6 h-6 ${group.color}`} />
                    </div>

                    {/* NOTE: leaving your heading logic as-is (we’ll fix the Sub/Super single-line issue next if you want) */}
                    <h3
                      className="
                        font-extrabold text-foreground text-center leading-[1.05]
                        text-[28px] sm:text-[30px] lg:text-[28px]
                        px-2 whitespace-normal break-words
                        min-h-[3.3rem] flex items-center justify-center
                      "
                    >
                      {group.group}
                    </h3>

                    <p className={`text-sm font-semibold ${group.color} mt-1`}>{group.ageRange}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tighter curved transition to curriculum */}
      <div className="relative h-8 md:h-10 bg-amber-50/70">
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-emerald-900" />
        </svg>
      </div>

      {/* CURRICULUM ACCORDION SECTION */}
      <section ref={curriculumRef} className="bg-emerald-900 py-10 md:py-14 scroll-mt-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookMarked className="w-7 h-7 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl text-white mb-2">Explore Our Curriculum</h2>
              <p className="text-emerald-100/70 max-w-md mx-auto text-sm">
                A thoughtful journey from Sub-Junior to Super-Senior, with clear milestones and exam-focused lessons.
              </p>

              {/* Active filter indicator */}
              {activeGroup && (
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <span className="text-white/90 text-sm">
                    Showing: <span className="font-semibold text-amber-300">{activeGroup.group}</span> (
                    {activeGroup.ageRange})
                  </span>
                  <button
                    onClick={handleShowAll}
                    className="ml-1 p-1 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Show all age groups"
                  >
                    <X className="w-4 h-4 text-white/70 hover:text-white" />
                  </button>
                </div>
              )}

              {!activeGroup && (
                <p className="mt-4 text-emerald-100/50 text-sm">Select an age group above or expand any below</p>
              )}
            </div>

            {/* Accordion Panels */}
            <Accordion type="multiple" value={accordionValue} onValueChange={setAccordionValue} className="space-y-3">
              {ageGroups.map((group) => {
                const IconComponent = groupIcons[group.id] || BookMarked;
                const details = ageGroupDetails[group.id];

                return (
                  <AccordionItem
                    key={group.id}
                    value={group.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                  >
                    <AccordionTrigger className="px-5 py-4 hover:bg-white/5 hover:no-underline [&[data-state=open]]:bg-white/10">
                      <div className="flex items-center gap-4 text-left">
                        <div
                          className={`w-10 h-10 ${group.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className={`w-5 h-5 ${group.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">{group.group}</h3>
                          <p className="text-emerald-100/60 text-sm">
                            {group.ageRange} • {group.summary}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-5 pb-5">
                      <div className="grid md:grid-cols-2 gap-6 pt-2">
                        {/* What They Learn */}
                        <div className="bg-white/5 rounded-xl p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle2 className="w-5 h-5 text-amber-400" />
                            <h4 className="font-semibold text-white">What They Learn</h4>
                          </div>
                          <ul className="space-y-2">
                            {details?.whatTheyLearn.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-emerald-100/80 text-sm">
                                <span className="text-amber-400 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Typical Class Flow */}
                        <div className="bg-white/5 rounded-xl p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <Clock className="w-5 h-5 text-amber-400" />
                            <h4 className="font-semibold text-white">Typical Class Flow</h4>
                          </div>
                          <ul className="space-y-2">
                            {details?.classFlow.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-emerald-100/80 text-sm">
                                <span className="text-amber-400 font-medium">{idx + 1}.</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Row */}
                      <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-white/10">
                        <Button
                          asChild
                          size="sm"
                          className="rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 font-medium"
                        >
                          <Link to={`/scripture-school/curriculum#${group.id}`}>
                            <BookMarked className="w-4 h-4 mr-2" />
                            View Lessons
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white"
                        >
                          <Link to={`/scripture-school/curriculum#${group.id}`}>
                            <BookOpen className="w-4 h-4 mr-2" />
                            View Memory Verses
                          </Link>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            {/* Full Curriculum Link */}
            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white hover:bg-amber-50 text-emerald-900 font-semibold shadow-lg hover:shadow-xl transition-all px-8"
              >
                <Link to="/scripture-school/curriculum" className="inline-flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  View Full Curriculum Map
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Curved transition out */}
      <div className="relative h-10 md:h-12 bg-emerald-900">
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-background" />
        </svg>
      </div>

      {/* CONTACT CTA */}
      <section className="bg-background py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Enroll Your Child?</h2>
            <p className="text-muted-foreground mb-6">
              Join our Scripture School family and give your child the gift of biblical education in a nurturing,
              faith-filled environment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-primary-foreground px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary/30 text-primary hover:bg-primary/5 px-8"
              >
                <Link to="/events">Upcoming Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
