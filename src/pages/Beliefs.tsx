import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { BookOpen, Droplets, Flame, Heart, Cross, Sparkles } from "lucide-react";
import pentecostImage from "@/assets/pentecost-holy-spirit.jpg";

const beliefs = [
  {
    icon: BookOpen,
    title: "Authority of the Bible",
    description:
      "We believe the Bible is the inspired Word of God, providing guidance and truth for Christian life and faith. The Scriptures serve as the foundation for our beliefs and practices.",
    color: "gold",
  },
  {
    icon: Cross,
    title: "Salvation through Jesus Christ",
    description:
      "We believe in salvation through faith in Jesus Christ, recognizing Him as the Son of God and Savior. Through His life, death, and resurrection, redemption is offered to all who believe.",
    color: "navy",
  },
  {
    icon: Droplets,
    title: "Water Baptism",
    description:
      "We practice water baptism by immersion as an outward expression of an inward faith. This ordinance signifies the believer's identification with Christ in His death, burial, and resurrection.",
    color: "gold",
  },
  {
    icon: Flame,
    title: "Baptism of the Holy Spirit",
    description:
      "We believe in the baptism of the Holy Spirit as described in the New Testament, empowering believers for Christian life and service. This experience is available to all believers.",
    color: "navy",
  },
  {
    icon: Heart,
    title: "Divine Healing",
    description:
      "We believe that God provides for healing according to His will. Prayer for the sick is practiced as part of the church's ministry, trusting in God's care and sovereignty.",
    color: "gold",
  },
];

export default function Beliefs() {
  return (
    <Layout>
      <BackToTop />
      <HeroBanner
        title="Our Beliefs"
        subtitle="The foundational teachings that guide our faith community"
      />

      {/* Beliefs section with full-width background - NO overlay */}
      <section className="relative pt-64 md:pt-80 pb-24 md:pb-36 overflow-hidden">
        {/* Full-width background image - unmodified, positioned to show dove at top */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${pentecostImage})`,
            backgroundPosition: 'center 15%'
          }}
        />
        
        {/* Content container - starts below dove area */}
        <div className="section-container relative z-10">
          {/* Glass panel for heading + intro only */}
          <div className="max-w-4xl mx-auto mb-16 md:mb-24">
            <div 
              className="rounded-3xl bg-black/42 backdrop-blur-sm ring-1 ring-white/10 px-6 py-8 sm:px-10 sm:py-10 text-center"
              style={{ boxShadow: '0 18px 70px rgba(0,0,0,0.55)' }}
            >
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 md:mb-8"
                style={{ textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
              >
                Foundations of Our Faith
              </h2>
              <p 
                className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed md:leading-[1.9] max-w-3xl mx-auto"
                style={{ textShadow: '0 6px 18px rgba(0,0,0,0.75)' }}
              >
                As a congregation of the Indian Pentecostal Church, our beliefs are rooted in historic Christian teachings. The following principles form the foundation of our faith and practice.
              </p>
            </div>
          </div>

          {/* Belief cards - Arc layout on desktop, stack on mobile */}
          {/* Mobile: stacked */}
          <div className="md:hidden space-y-6 max-w-lg mx-auto">
            {beliefs.map((belief, index) => (
              <div 
                key={index} 
                className="rounded-2xl p-6 flex gap-5 bg-white/90 backdrop-blur-sm ring-1 ring-black/5 shadow-xl"
              >
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    belief.color === 'gold' 
                      ? 'bg-accent/15' 
                      : 'bg-primary/10'
                  }`}>
                    <belief.icon className={`w-7 h-7 ${belief.color === 'gold' ? 'text-accent' : 'text-primary'}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {belief.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Wider arc layout */}
          <div className="hidden md:block relative max-w-7xl mx-auto" style={{ height: '520px' }}>
            {beliefs.map((belief, index) => {
              // Arc positioning: center card highest, sides lower, outer lowest
              // Positions spread wider toward edges
              const positions = [
                { left: '2%', top: '55%', rotate: -5 },      // Far left - lowest
                { left: '18%', top: '30%', rotate: -3 },     // Left - lower
                { left: '50%', top: '8%', rotate: 0, center: true }, // Center - highest
                { left: '82%', top: '30%', rotate: 3 },      // Right - lower
                { left: '98%', top: '55%', rotate: 5 },      // Far right - lowest
              ];
              const pos = positions[index];
              
              return (
                <div 
                  key={index} 
                  className="absolute w-[280px] lg:w-[300px] rounded-2xl p-6 lg:p-7 bg-white/90 backdrop-blur-sm ring-1 ring-black/5 shadow-xl transition-transform duration-300 hover:scale-105"
                  style={{ 
                    left: pos.left,
                    top: pos.top,
                    transform: `translateX(-50%) rotate(${pos.rotate}deg)`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center ${
                        belief.color === 'gold' 
                          ? 'bg-accent/15' 
                          : 'bg-primary/10'
                      }`}>
                        <belief.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${belief.color === 'gold' ? 'text-accent' : 'text-primary'}`} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2 leading-tight">
                        {belief.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mt-3">
                    {belief.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scripture reflection band */}
      <section className="section-reflective py-16 md:py-20 relative">
        <div className="absolute inset-0 pattern-stars" />
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-6 h-6 mx-auto mb-4 text-accent" />
            <blockquote className="text-xl md:text-2xl italic text-primary-foreground/90 mb-4 font-serif leading-relaxed">
              "Your word is a lamp for my feet, a light on my path."
            </blockquote>
            <p className="text-sm text-primary-foreground/50 tracking-[0.2em] uppercase">Psalm 119:105</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
