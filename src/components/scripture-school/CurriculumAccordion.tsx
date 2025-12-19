import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookMarked, BookOpen, CheckCircle2, Clock, GraduationCap, X, Baby, Lightbulb, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import type { AgeGroup } from "@/data/curriculumData";

// Icon mapping for accordion
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

type Props = {
  ageGroups: AgeGroup[];
  accordionValue: string[];
  onAccordionChange: (value: string[]) => void;
  activeGroup: AgeGroup | undefined;
  onShowAll: () => void;
  curriculumRef: React.RefObject<HTMLDivElement>;
};

export function CurriculumAccordion({
  ageGroups,
  accordionValue,
  onAccordionChange,
  activeGroup,
  onShowAll,
  curriculumRef,
}: Props) {
  return (
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
                  onClick={onShowAll}
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
          <Accordion type="multiple" value={accordionValue} onValueChange={onAccordionChange} className="space-y-3">
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
  );
}
