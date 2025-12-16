import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { BackToTop } from "@/components/ui/BackToTop";
import { BookOpen, Users, Star, Sparkles } from "lucide-react";
import scriptureSchoolLogo from "@/assets/scripture-school-logo.png";

const ageGroups = [
  { name: "Beginners", ages: "3-5 years", description: "Introduction to Bible stories through interactive activities", color: "gold" },
  { name: "Primary", ages: "6-9 years", description: "Building biblical knowledge through engaging lessons", color: "navy" },
  { name: "Juniors", ages: "10-12 years", description: "Deeper study of Scripture and its application", color: "gold" },
  { name: "Intermediates", ages: "13-15 years", description: "Exploring faith questions and building conviction", color: "navy" },
  { name: "Seniors", ages: "16+ years", description: "Preparing for Christian leadership and service", color: "gold" },
];

export default function ScriptureSchool() {
  return (
    <Layout>
      <BackToTop />
      <PageHeader
        title="Scripture School"
        subtitle="Biblical education for children and youth of all ages."
      />

      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Logo and Introduction */}
            <div className="text-center mb-12">
              <img
                src={scriptureSchoolLogo}
                alt="Scripture School"
                className="h-28 md:h-36 mx-auto mb-6"
              />
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                Scripture School is our dedicated ministry for teaching biblical principles to children and young people. Through age-appropriate curriculum and engaging activities, we help young believers build a strong foundation in Christian faith.
              </p>
            </div>

            {/* Purpose */}
            <div className="card-warm mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative flex gap-5 items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-gold-soft rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 font-serif">Our Purpose</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Scripture School aims to instill biblical values, teach the stories and teachings of the Bible, and nurture a personal faith in each child. Our teachers are committed to creating a welcoming and enriching environment for learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups - Colored band */}
      <section className="section-cream page-section relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-dove/10 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="label-badge mb-4">Age Groups</span>
              <h2 className="text-foreground font-serif flex items-center justify-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Classes for Every Age
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ageGroups.map((group, index) => (
                <div 
                  key={index} 
                  className={`card-warm group ${
                    group.color === 'gold' 
                      ? 'bg-gradient-to-br from-card via-gold-soft/30 to-card border-gold/20' 
                      : 'bg-gradient-to-br from-card via-dove-light/40 to-card border-dove/20'
                  }`}
                >
                  <h3 className="font-semibold text-foreground mb-1 font-serif text-lg">{group.name}</h3>
                  <p className={`text-sm mb-3 font-medium ${group.color === 'gold' ? 'text-accent' : 'text-primary'}`}>
                    {group.ages}
                  </p>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="card-warm relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative flex gap-5 items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-gold-soft rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-serif">Activities</h2>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      Weekly Bible lessons and memory verses
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Songs and worship for children
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      Arts and crafts related to biblical themes
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Annual Scripture School examinations
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      Special programs and presentations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture band */}
      <section className="section-reflective py-14 md:py-16 relative">
        <div className="absolute inset-0 pattern-stars" />
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-6 h-6 mx-auto mb-4 text-accent" />
            <blockquote className="text-lg md:text-xl italic text-primary-foreground/90 font-serif">
              "Train up a child in the way he should go, and when he is old he will not depart from it."
            </blockquote>
            <p className="text-sm text-primary-foreground/50 mt-3 tracking-[0.2em] uppercase">Proverbs 22:6</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
