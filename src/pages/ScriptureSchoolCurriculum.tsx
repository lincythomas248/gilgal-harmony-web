import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, GraduationCap, Star, ArrowLeft, Baby, BookMarked, Lightbulb, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import scriptureSchoolLogo from "@/assets/scripture-school-logo-transparent.png";
import { curriculumData, type CurriculumGroup } from "@/data/curriculumData";

// Icon mapping for each group
const groupIcons: Record<string, React.ReactNode> = {
  "Sub-Junior": <Baby className="w-5 h-5" />,
  "Junior": <BookMarked className="w-5 h-5" />,
  "Intermediate": <Lightbulb className="w-5 h-5" />,
  "Senior": <GraduationCap className="w-5 h-5" />,
  "Super-Senior": <Crown className="w-5 h-5" />,
};

// Color mapping for each group
const groupColors: Record<string, { bg: string; text: string; accent: string }> = {
  "Sub-Junior": { bg: "bg-amber-100", text: "text-amber-600", accent: "from-amber-500/20 to-amber-300/30" },
  "Junior": { bg: "bg-sky-100", text: "text-sky-600", accent: "from-sky-500/20 to-sky-300/30" },
  "Intermediate": { bg: "bg-emerald-100", text: "text-emerald-600", accent: "from-emerald-500/20 to-emerald-300/30" },
  "Senior": { bg: "bg-violet-100", text: "text-violet-600", accent: "from-violet-500/20 to-violet-300/30" },
  "Super-Senior": { bg: "bg-rose-100", text: "text-rose-600", accent: "from-rose-500/20 to-rose-300/30" },
};

export default function ScriptureSchoolCurriculum() {
  return (
    <Layout>
      <BackToTop />
      <HeroBanner
        title="Scripture School"
        titleSecondLine="Curriculum Map"
        subtitle="A structured journey through biblical education from Beginners to Grade 12"
        logo={scriptureSchoolLogo}
        logoAlt="Scripture School Logo"
        showCurvedDivider={true}
      />

      {/* Introduction */}
      <section className="section-cream page-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                <Link to="/ministries/scripture-school">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Scripture School
                </Link>
              </Button>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our curriculum is thoughtfully designed to nurture spiritual growth at every stage of a child's development. 
                From Beginners through Grade 12, students progress through age-appropriate lessons that build a strong foundation in Scripture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Lessons marked with <Badge variant="outline" className="mx-1 border-accent/50 text-accent bg-accent/5">Region Exam Focus</Badge> are 
                emphasized for regional examinations, helping students prepare for assessments while deepening their biblical knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Accordion */}
      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" className="space-y-4">
              {curriculumData.map((group, groupIndex) => {
                const colors = groupColors[group.group] || groupColors["Junior"];
                const icon = groupIcons[group.group] || <BookOpen className="w-5 h-5" />;
                
                return (
                  <AccordionItem
                    key={group.group}
                    value={`group-${groupIndex}`}
                    className="border border-border/50 rounded-xl bg-card/50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-4 text-left">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.accent} flex items-center justify-center ${colors.text} shrink-0`}>
                          {icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {group.group}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            Age {group.ageRange}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <Accordion type="multiple" className="space-y-3 mt-2">
                        {group.sections.map((section, sectionIndex) => (
                          <AccordionItem
                            key={section.title}
                            value={`section-${groupIndex}-${sectionIndex}`}
                            className="border border-border/30 rounded-lg bg-background/50 overflow-hidden"
                          >
                            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/20 transition-colors text-base">
                              <span className="font-medium text-foreground">
                                {section.title}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4">
                              <ul className="space-y-2.5 mt-2">
                                {section.lessons.map((lesson) => (
                                  <li
                                    key={lesson.number}
                                    className="flex items-start gap-3 py-2 px-3 rounded-lg bg-muted/20"
                                  >
                                    <span className="text-sm font-medium text-accent min-w-[2rem]">
                                      {lesson.number}.
                                    </span>
                                    <span className="text-sm text-foreground flex-1">
                                      {lesson.title}
                                    </span>
                                    {lesson.regionExamFocus && (
                                      <Badge
                                        variant="outline"
                                        className="border-accent/50 text-accent bg-accent/5 text-xs shrink-0"
                                      >
                                        Region Exam Focus
                                      </Badge>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-cream page-section">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Enroll Your Child?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join our Scripture School family and give your child the gift of biblical education in a nurturing environment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-primary-foreground">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary/5">
                <Link to="/ministries/scripture-school">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
