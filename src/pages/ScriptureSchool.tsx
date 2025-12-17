import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { BackToTop } from "@/components/ui/BackToTop";
import { 
  BookOpen, 
  Users, 
  Star, 
  Sparkles, 
  FileText, 
  Heart,
  Music,
  Palette,
  Award,
  PartyPopper,
  Baby,
  GraduationCap,
  BookMarked,
  Lightbulb,
  Crown
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import pencilsBg from "@/assets/scripture-school-bg.jpg";
import scriptureSchoolBadge from "@/assets/scripture-school-badge.png";

const ageGroups = [
  { 
    name: "Beginners", 
    ages: "3-5 years", 
    description: "Discovering God's love through stories and play", 
    icon: Baby,
    bgColor: "bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200/60"
  },
  { 
    name: "Primary", 
    ages: "6-9 years", 
    description: "Learning Bible heroes and God's promises", 
    icon: BookMarked,
    bgColor: "bg-gradient-to-br from-sky-50 via-blue-50/80 to-cyan-50/60",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    borderColor: "border-sky-200/60"
  },
  { 
    name: "Juniors", 
    ages: "10-12 years", 
    description: "Exploring Scripture with curiosity and wonder", 
    icon: Lightbulb,
    bgColor: "bg-gradient-to-br from-emerald-50 via-green-50/80 to-teal-50/60",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200/60"
  },
  { 
    name: "Intermediates", 
    ages: "13-15 years", 
    description: "Building faith foundations for life", 
    icon: GraduationCap,
    bgColor: "bg-gradient-to-br from-violet-50 via-purple-50/80 to-indigo-50/60",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    borderColor: "border-violet-200/60"
  },
  { 
    name: "Seniors", 
    ages: "16+ years", 
    description: "Preparing to lead and serve with purpose", 
    icon: Crown,
    bgColor: "bg-gradient-to-br from-rose-50 via-pink-50/80 to-orange-50/60",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200/60"
  },
];

const activities = [
  { icon: BookOpen, text: "Weekly Bible lessons & memory verses", color: "text-amber-600", bg: "bg-amber-100" },
  { icon: Music, text: "Joyful songs and worship", color: "text-sky-600", bg: "bg-sky-100" },
  { icon: Palette, text: "Creative arts & crafts", color: "text-emerald-600", bg: "bg-emerald-100" },
  { icon: Award, text: "Annual examinations & awards", color: "text-violet-600", bg: "bg-violet-100" },
  { icon: PartyPopper, text: "Special programs & celebrations", color: "text-rose-600", bg: "bg-rose-100" },
];

export default function ScriptureSchool() {
  return (
    <Layout>
      <BackToTop />
      {/* Hero Section with Badge */}
      <section className="relative bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 py-12 md:py-20 overflow-hidden">
        {/* Background pencils image with overlay */}
        <div className="absolute inset-0">
          <img src={pencilsBg} alt="" className="w-full h-full object-cover object-bottom opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-800/90 to-emerald-900/95" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-amber-300/40 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-amber-200/30 rounded-full animate-pulse delay-300" />
        
        <div className="section-container relative">
          <div className="flex flex-col items-center text-center">
            {/* Scripture School Badge - Prominent */}
            <img 
              src={scriptureSchoolBadge} 
              alt="Scripture School" 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 drop-shadow-2xl mb-6 md:mb-8"
            />
            
            {/* Subtitle */}
            <p className="text-amber-200/90 text-lg md:text-xl font-medium max-w-md">
              Where faith takes root and joy blossoms
            </p>
          </div>
        </div>
      </section>

      {/* Curved Divider */}
      <div className="relative -mt-1 z-10">
        <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12 fill-amber-50/90">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Welcome Section */}
      <section className="bg-gradient-to-b from-amber-50/90 via-background to-background pt-4 pb-12 md:pb-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Friendly Welcome Card */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 rounded-full mb-6">
              <Heart className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-amber-800">Every child is welcome here</span>
              <Heart className="w-4 h-4 text-rose-500" />
            </div>
            
            <p className="text-muted-foreground leading-loose text-lg max-w-2xl mx-auto">
              A place where children discover the joy of God's Word through 
              <span className="text-amber-600 font-medium"> stories</span>, 
              <span className="text-sky-600 font-medium"> songs</span>, and 
              <span className="text-emerald-600 font-medium"> friendship</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Card */}
      <section className="bg-background pb-8 md:pb-12">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-sky-50/80 via-white to-amber-50/60 rounded-3xl p-6 md:p-8 border border-sky-100/60 shadow-sm overflow-hidden">
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-sky-200/30 rounded-full blur-2xl" />
              
              <div className="relative flex flex-col md:flex-row gap-5 items-center text-center md:text-left">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <BookOpen className="w-8 h-8 text-amber-700" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2 font-serif">Our Heart</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We nurture young hearts with biblical truth in a loving, safe environment 
                    where every child can grow in faith and friendship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved transition to Age Groups */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12 fill-gradient-to-r from-amber-50/50 to-sky-50/50" style={{ background: 'linear-gradient(to right, rgb(255 251 235 / 0.5), rgb(240 249 255 / 0.5))' }}>
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-background" />
        </svg>
      </div>

      {/* Age Groups Section */}
      <section className="bg-gradient-to-b from-amber-50/30 via-sky-50/20 to-emerald-50/20 py-12 md:py-16 relative overflow-hidden">
        {/* Soft decorative circles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-200/10 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/80 rounded-full mb-4">
                <Users className="w-4 h-4 text-sky-600" />
                <span className="text-sm font-medium text-sky-800">Age Groups</span>
              </div>
              <h2 className="text-2xl md:text-3xl text-foreground font-serif">
                A Class for Every Child
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ageGroups.map((group, index) => (
                <div 
                  key={index} 
                  className={`${group.bgColor} ${group.borderColor} rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group`}
                >
                  <div className={`w-12 h-12 ${group.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <group.icon className={`w-6 h-6 ${group.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 font-serif text-lg">{group.name}</h3>
                  <p className={`text-sm mb-2 font-medium ${group.iconColor}`}>
                    {group.ages}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curved transition */}
      <div className="relative bg-gradient-to-b from-emerald-50/20 to-background">
        <svg viewBox="0 0 1440 40" className="w-full h-6 md:h-10">
          <path d="M0,40 Q720,0 1440,40 L1440,40 L0,40 Z" className="fill-background" />
        </svg>
      </div>

      {/* Curriculum Section */}
      <section className="bg-background py-12 md:py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-violet-50/80 via-white to-amber-50/60 rounded-3xl p-8 md:p-10 border border-violet-100/60 shadow-sm text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-amber-300/60 rounded-full" />
              <div className="absolute top-8 right-8 w-3 h-3 bg-violet-300/50 rounded-full" />
              <div className="absolute bottom-6 left-10 w-2 h-2 bg-sky-300/60 rounded-full" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-200/30 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-200 to-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <FileText className="w-8 h-8 text-violet-700" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 font-serif">
                  Curriculum Map
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
                  Thoughtfully designed from Beginners to Grade 12, 
                  with clear steps and exam-focused lessons.
                </p>
                <Button asChild className="rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-md transition-all">
                  <Link to="/scripture-school/curriculum" className="inline-flex items-center gap-2">
                    <BookMarked className="w-4 h-4" />
                    View Full Curriculum Map
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-gradient-to-b from-background via-emerald-50/30 to-amber-50/30 py-12 md:py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/80 rounded-full mb-4">
                <Star className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-800">What We Do</span>
              </div>
              <h2 className="text-2xl md:text-3xl text-foreground font-serif">
                Fun & Faith Together
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
                >
                  <div className={`w-11 h-11 ${activity.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  </div>
                  <p className="text-foreground font-medium text-sm leading-snug">{activity.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Verse - Softer Design */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-amber-100/80 via-sky-50/60 to-emerald-50/60 overflow-hidden">
        {/* Soft decorative elements */}
        <div className="absolute top-6 left-10 w-2 h-2 bg-amber-400/40 rounded-full" />
        <div className="absolute top-12 left-20 w-1.5 h-1.5 bg-sky-400/40 rounded-full" />
        <div className="absolute bottom-8 right-16 w-2 h-2 bg-emerald-400/40 rounded-full" />
        <div className="absolute bottom-14 right-28 w-1.5 h-1.5 bg-violet-400/40 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-rose-400/40 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber-400/40 rounded-full" />
        
        {/* Soft blurs */}
        <div className="absolute -top-20 left-1/4 w-48 h-48 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-40 h-40 bg-sky-200/30 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-1 mb-4">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <Star className="w-4 h-4 text-sky-500" />
              <Sparkles className="w-5 h-5 text-amber-500" />
            </div>
            <blockquote className="text-lg md:text-xl text-foreground/90 font-serif leading-relaxed">
              "Train up a child in the way he should go, 
              <br className="hidden md:block" />
              and when he is old he will not depart from it."
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
