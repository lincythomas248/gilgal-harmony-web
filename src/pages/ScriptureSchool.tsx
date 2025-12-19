import { useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { BackToTop } from "@/components/ui/BackToTop";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { Button } from "@/components/ui/button";
import { AgeGroupCards } from "@/components/scripture-school/AgeGroupCards";
import { CurriculumAccordion } from "@/components/scripture-school/CurriculumAccordion";
import {
  BookOpen,
  Users,
  Music,
  Palette,
  Award,
  PartyPopper,
  BookMarked,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import scriptureSchoolLogo from "@/assets/scripture-school-logo-transparent.png";
import communityPhoto from "@/assets/scripture-school-community.jpg";
import { ageGroups } from "@/data/curriculumData";

const experiences = [
  {
    icon: BookOpen,
    label: "Bible Stories",
    color: "text-amber-600",
    bg: "bg-amber-100",
    borderColor: "border-amber-200",
  },
  { icon: Music, label: "Worship Songs", color: "text-sky-600", bg: "bg-sky-100", borderColor: "border-sky-200" },
  {
    icon: Palette,
    label: "Creative Arts",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    borderColor: "border-emerald-200",
  },
  { icon: Heart, label: "Friendship", color: "text-rose-500", bg: "bg-rose-100", borderColor: "border-rose-200" },
  {
    icon: Award,
    label: "Achievements",
    color: "text-violet-600",
    bg: "bg-violet-100",
    borderColor: "border-violet-200",
  },
  {
    icon: PartyPopper,
    label: "Celebrations",
    color: "text-orange-500",
    bg: "bg-orange-100",
    borderColor: "border-orange-200",
  },
  {
    icon: BookMarked,
    label: "IPC Region Curriculum",
    color: "text-primary",
    bg: "bg-primary/10",
    borderColor: "border-primary/30",
  },
];


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
                  className={`${exp.bg} ${exp.borderColor} border-2 rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 min-h-[140px] flex flex-col items-center justify-center`}
                >
                  <div className={`w-14 h-14 ${exp.bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                    <exp.icon className={`w-7 h-7 ${exp.color}`} />
                  </div>
                  <p className={`text-base font-semibold ${exp.color} leading-tight`}>{exp.label}</p>
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

            <AgeGroupCards activeAgeGroup={activeAgeGroup} onAgeGroupClick={handleAgeGroupClick} />
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
      <CurriculumAccordion
        ageGroups={ageGroups}
        accordionValue={accordionValue}
        onAccordionChange={setAccordionValue}
        activeGroup={activeGroup}
        onShowAll={handleShowAll}
        curriculumRef={curriculumRef}
      />

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
