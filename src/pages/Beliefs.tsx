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

      {/* Beliefs section with full-width background */}
      <section className="relative py-16 md:py-24">
        {/* Full-width background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${pentecostImage})` }}
        />
        {/* Dark gradient overlay for readability */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(10,20,35,0.55), rgba(10,20,35,0.35), rgba(10,20,35,0.55))'
          }}
        />
        
        {/* Content container */}
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section intro */}
            <div className="text-center mb-12">
              <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
                As a congregation of the Indian Pentecostal Church, our beliefs are rooted in historic Christian teachings. The following principles form the foundation of our faith and practice.
              </p>
            </div>

            {/* Belief cards - centered */}
            <div className="space-y-5">
              {beliefs.map((belief, index) => (
                <div 
                  key={index} 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 md:p-6 flex gap-5 md:gap-6 group shadow-lg border border-white/20"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      belief.color === 'gold' 
                        ? 'bg-gradient-to-br from-accent/30 to-gold-soft' 
                        : 'bg-gradient-to-br from-primary/20 to-dove-light'
                    }`}>
                      <belief.icon className={`w-6 h-6 md:w-7 md:h-7 ${belief.color === 'gold' ? 'text-accent' : 'text-primary'}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 font-serif">
                      {belief.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {belief.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
