import { Layout } from "@/components/layout/Layout";
import { BackToTop } from "@/components/ui/BackToTop";
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
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import scriptureSchoolLogo from "@/assets/scripture-school-logo-new.png";
import heroBg from "@/assets/hero-dove.jpg";

const experiences = [
  { icon: BookOpen, label: "Bible Stories", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Music, label: "Worship Songs", color: "text-sky-600", bg: "bg-sky-50" },
  { icon: Palette, label: "Creative Arts", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Heart, label: "Friendship", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: Award, label: "Achievements", color: "text-violet-600", bg: "bg-violet-50" },
  { icon: PartyPopper, label: "Celebrations", color: "text-orange-500", bg: "bg-orange-50" },
];

const ageGroups = [
  { name: "Beginners", ages: "3–5 yrs", icon: Baby, color: "text-amber-600", bg: "bg-amber-100" },
  { name: "Primary", ages: "6–9 yrs", icon: BookMarked, color: "text-sky-600", bg: "bg-sky-100" },
  { name: "Juniors", ages: "10–12 yrs", icon: Lightbulb, color: "text-emerald-600", bg: "bg-emerald-100" },
  { name: "Intermediates", ages: "13–15 yrs", icon: GraduationCap, color: "text-violet-600", bg: "bg-violet-100" },
  { name: "Seniors", ages: "16+ yrs", icon: Crown, color: "text-rose-600", bg: "bg-rose-100" },
];

export default function ScriptureSchool() {
  return (
    <Layout>
      <BackToTop />
      
      {/* HERO SECTION - Dove & Golden Light */}
      <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center overflow-hidden">
        {/* Background base - dark navy like homepage */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(218,44%,14%)] via-navy to-[hsl(218,44%,18%)]" />
        
        {/* Dove image - positioned to left */}
        <div className="absolute inset-y-0 left-0 w-1/2 md:w-2/5 flex items-center justify-center">
          <div className="relative">
            {/* Golden glow behind dove */}
            <div className="absolute inset-0 bg-gradient-radial from-gold/20 via-accent/10 to-transparent blur-3xl scale-150" />
            <img 
              src={heroBg} 
              alt="Dove of peace" 
              className="relative w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain drop-shadow-2xl opacity-90"
            />
          </div>
        </div>
        
        {/* Vignette overlay - darker edges, warm center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_0%,rgba(15,23,42,0.4)_50%,rgba(15,23,42,0.8)_100%)]" />
        
        {/* Subtle warm glow near center */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Content Container */}
        <div className="section-container relative z-10 py-12 md:py-16">
          {/* Floating Content Panel */}
          <div className="ml-auto w-full md:w-3/5 lg:w-1/2">
            <div className="bg-background/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 border border-accent/10">
              {/* Two-column layout inside panel */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                {/* Left: Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4 leading-tight">
                    SCRIPTURE SCHOOL
                  </h1>
                  <p className="text-base md:text-lg text-muted-foreground font-serif italic mb-8">
                    Where faith takes root and joy blossoms
                  </p>
                  <Button 
                    asChild 
                    size="lg"
                    className="rounded-full bg-accent hover:bg-gold-dark text-foreground font-semibold shadow-lg hover:shadow-xl transition-all px-8"
                  >
                    <a href="#classes" className="inline-flex items-center gap-2">
                      Explore Classes
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                
                {/* Right: Logo */}
                <div className="flex-shrink-0 order-first md:order-last">
                  <div className="relative">
                    {/* Subtle glow behind logo */}
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl scale-110" />
                    <img 
                      src={scriptureSchoolLogo} 
                      alt="Scripture School Logo" 
                      className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full h-10 md:h-14" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" className="fill-background" />
        </svg>
      </section>

      {/* WHAT CHILDREN EXPERIENCE */}
      <section className="bg-background py-14 md:py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                What Children Experience
              </h2>
              <p className="text-muted-foreground">Faith, fun, and friendship every week</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`${exp.bg} rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-200`}
                >
                  <div className={`w-10 h-10 ${exp.bg} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <exp.icon className={`w-5 h-5 ${exp.color}`} />
                  </div>
                  <p className={`text-sm font-medium ${exp.color}`}>{exp.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curved transition */}
      <div className="relative h-12 md:h-16 bg-background">
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-amber-50/70" />
        </svg>
      </div>

      {/* A CLASS FOR EVERY CHILD */}
      <section id="classes" className="bg-amber-50/70 py-14 md:py-20 scroll-mt-20">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 rounded-full mb-4 shadow-sm">
                <Users className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-800">Age Groups</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                A Class for Every Child
              </h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {ageGroups.map((group, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 text-center group"
                >
                  <div className={`w-12 h-12 ${group.bg} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <group.icon className={`w-6 h-6 ${group.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground font-serif">{group.name}</h3>
                  <p className={`text-sm font-medium ${group.color}`}>{group.ages}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curved transition to curriculum */}
      <div className="relative h-12 md:h-16 bg-amber-50/70">
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-emerald-900" />
        </svg>
      </div>

      {/* CURRICULUM TEASER */}
      <section className="bg-emerald-900 py-14 md:py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookMarked className="w-7 h-7 text-amber-400" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">
              Explore Our Curriculum
            </h2>
            <p className="text-emerald-100/70 mb-8 max-w-md mx-auto">
              A thoughtful journey from Beginners to Grade 12, with clear milestones and exam-focused lessons.
            </p>
            <Button 
              asChild 
              size="lg"
              className="rounded-full bg-white hover:bg-amber-50 text-emerald-900 font-semibold shadow-lg hover:shadow-xl transition-all px-8"
            >
              <Link to="/scripture-school/curriculum" className="inline-flex items-center gap-2">
                <BookMarked className="w-4 h-4" />
                View Full Curriculum Map
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Wave divider to verse */}
      <svg viewBox="0 0 1440 60" className="w-full h-10 md:h-14 bg-emerald-900" preserveAspectRatio="none">
        <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-amber-50/80" />
      </svg>

      {/* SCRIPTURE VERSE */}
      <section className="bg-amber-50/80 py-12 md:py-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <blockquote className="text-lg md:text-xl text-foreground/90 font-serif italic leading-relaxed">
              "Train up a child in the way he should go, and when he is old he will not depart from it."
            </blockquote>
            <p className="text-sm text-muted-foreground mt-4 tracking-wider uppercase font-medium">
              Proverbs 22:6
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
