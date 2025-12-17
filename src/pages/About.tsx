import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { MapPin, Users, Heart, Sparkles, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { LeadershipCard } from "@/components/home/LeadershipCard";

const leadership = [
  { name: "Pr. John Varghese", role: "President", phone: "+971 50 189 2016" },
  { name: "Br. Sajan K George", role: "Secretary", phone: "+971 50 575 6808" },
  { name: "Br. Siby Mathew", role: "Joint Secretary", phone: "+971 50 219 5883" },
];

export default function About() {
  const [leaderIndex, setLeaderIndex] = useState(0);

  const nextLeader = () => setLeaderIndex((prev) => (prev + 1) % leadership.length);
  const prevLeader = () => setLeaderIndex((prev) => (prev - 1 + leadership.length) % leadership.length);

  return (
    <Layout>
      <BackToTop />
      <HeroBanner
        title="About Us"
        subtitle="Learn about our church community and our presence in the UAE"
        primaryCta={{ text: "Contact Us", link: "/contact" }}
      />

      {/* Main content with alternating sections */}
      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* History & Mission */}
            <div className="card-warm mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-accent" />
                <div className="accent-line-sm" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 font-serif">Our Church</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                IPC Gilgal Church is a congregation of the Indian Pentecostal Church, one of the largest Pentecostal denominations with a rich heritage of Christian faith and worship. Our church serves as a spiritual home for believers in the Sharjah and Ras Al Khaimah emirates of the United Arab Emirates.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are a community of families, individuals, and young people who come together for worship, fellowship, and mutual encouragement in our Christian faith. Our services and programs are designed to nurture spiritual growth and build meaningful connections among our members.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As part of the broader IPC family, we maintain strong ties with fellow congregations while serving the unique needs of our local community in the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Colored band */}
      <section className="section-cream page-section relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-dove/10 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="label-badge mb-4">Our Values</span>
              <h2 className="text-foreground font-serif">What We Stand For</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-warm text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-gold-soft rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">Local Presence</h3>
                <p className="text-muted-foreground">
                  Serving communities in Sharjah and Ras Al Khaimah with regular worship services and fellowship gatherings.
                </p>
              </div>

              <div className="card-warm text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/15 to-dove-light rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">Community</h3>
                <p className="text-muted-foreground">
                  A welcoming family of believers from diverse backgrounds, united in faith and fellowship.
                </p>
              </div>

              <div className="card-warm text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-gold-soft rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">Spiritual Growth</h3>
                <p className="text-muted-foreground">
                  Programs for all ages designed to deepen understanding and strengthen personal faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Moved from Home */}
      <section className="section-light page-section relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="label-badge mb-4">Our Leaders</span>
              <h2 className="text-foreground mb-3 font-serif">Serving With Dedication</h2>
              <p className="text-subtitle max-w-lg mx-auto">
                Our leaders shepherd our church community with love, care, and commitment to spiritual growth.
              </p>
            </div>
            
            {/* Carousel on mobile, grid on desktop */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {leadership.map((leader) => (
                <LeadershipCard key={leader.name} {...leader} />
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative max-w-sm mx-auto">
              <button
                onClick={prevLeader}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-warm transition-all"
                aria-label="Previous leader"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              <button
                onClick={nextLeader}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-warm transition-all"
                aria-label="Next leader"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
              
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${leaderIndex * 100}%)` }}
                >
                  {leadership.map((leader) => (
                    <div key={leader.name} className="w-full flex-shrink-0 px-4">
                      <LeadershipCard {...leader} />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-6">
                {leadership.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setLeaderIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      leaderIndex === index 
                        ? 'bg-accent w-6' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to leader ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
