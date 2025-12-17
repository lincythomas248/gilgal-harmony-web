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

      {/* Beliefs section - Dove-centred sacred composition */}
      <section className="relative pt-[420px] sm:pt-[480px] md:pt-[520px] pb-20 md:pb-32 overflow-hidden">
        {/* Background image - unmodified, dove at top centre */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${pentecostImage})`,
            backgroundPosition: 'center top'
          }}
        />
        
        {/* Content container - positioned below the dove */}
        <div className="section-container relative z-10">
          
          {/* Quiet glass plaque - smaller, respectful, anchored */}
          <div className="max-w-2xl mx-auto mb-12 md:mb-16 text-center">
            <div 
              className="inline-block rounded-2xl bg-black/35 backdrop-blur-sm px-8 py-6 sm:px-10 sm:py-7"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.35)' }}
            >
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3"
                style={{ textShadow: '0 4px 16px rgba(0,0,0,0.6)' }}
              >
                Foundations of Our Faith
              </h2>
              <p 
                className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl mx-auto"
                style={{ textShadow: '0 3px 12px rgba(0,0,0,0.5)' }}
              >
                The principles that guide our congregation, rooted in historic Christian teachings.
              </p>
            </div>
          </div>

          {/* Mobile: Clean vertical stack */}
          <div className="md:hidden space-y-5 max-w-md mx-auto px-2">
            {beliefs.map((belief, index) => (
              <div 
                key={index} 
                className="rounded-xl p-5 bg-[#FAF8F3] shadow-md border border-black/[0.04]"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    belief.color === 'gold' ? 'bg-accent/12' : 'bg-primary/8'
                  }`}>
                    <belief.icon className={`w-6 h-6 ${belief.color === 'gold' ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1.5 leading-snug">
                      {belief.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Wide, shallow, grounded arc */}
          <div className="hidden md:flex justify-center items-end gap-4 lg:gap-5 max-w-6xl mx-auto px-4">
            {beliefs.map((belief, index) => {
              // Wide shallow arc: center slightly elevated, outer cards level
              // Minimal rotation for stability
              const arcConfig = [
                { translateY: 24, rotate: -2 },   // Far left
                { translateY: 10, rotate: -1 },   // Left
                { translateY: 0, rotate: 0 },     // Center - highest
                { translateY: 10, rotate: 1 },    // Right
                { translateY: 24, rotate: 2 },    // Far right
              ];
              const config = arcConfig[index];
              
              return (
                <div 
                  key={index} 
                  className="w-[200px] lg:w-[220px] rounded-xl p-5 lg:p-6 bg-[#FAF8F3] shadow-lg border border-black/[0.05] transition-shadow duration-200 hover:shadow-xl"
                  style={{ 
                    transform: `translateY(${config.translateY}px) rotate(${config.rotate}deg)`,
                  }}
                >
                  <div className={`w-11 h-11 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mb-4 ${
                    belief.color === 'gold' ? 'bg-accent/12' : 'bg-primary/8'
                  }`}>
                    <belief.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${belief.color === 'gold' ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2 leading-snug">
                    {belief.title}
                  </h3>
                  <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
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
