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

// Belief Card component for consistent styling
const BeliefCard = ({ belief }: { belief: typeof beliefs[0] }) => (
  <div className="rounded-xl p-6 bg-[#FAF8F3] shadow-md border border-black/[0.04] h-full">
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
      belief.color === 'gold' ? 'bg-accent/12' : 'bg-primary/8'
    }`}>
      <belief.icon className={`w-6 h-6 ${belief.color === 'gold' ? 'text-accent' : 'text-primary'}`} />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
      {belief.title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {belief.description}
    </p>
  </div>
);

export default function Beliefs() {
  return (
    <Layout>
      <BackToTop />
      <HeroBanner
        title="Our Beliefs"
        subtitle="The foundational teachings that guide our faith community"
      />

      {/* Transition band - visual rest between hero and beliefs */}
      <section className="bg-background py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-5">
              Foundations of Our Faith
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              As a congregation of the Indian Pentecostal Church, our beliefs are rooted in historic Christian teachings. The following principles form the foundation of our faith and practice.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs section with dove backdrop */}
      <section className="relative pt-56 sm:pt-72 md:pt-96 lg:pt-[26rem] pb-16 md:pb-24 overflow-hidden">
        {/* Background image - dove visible at top */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${pentecostImage})`,
            backgroundPosition: 'center 12%'
          }}
        />
        
        {/* Sacred Grid of Belief Cards - positioned below dove safe zone */}
        <div className="section-container relative z-10">
          
          {/* Desktop: 3 + 2 centered grid */}
          <div className="hidden lg:block max-w-5xl mx-auto">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {beliefs.slice(0, 3).map((belief, index) => (
                <BeliefCard key={index} belief={belief} />
              ))}
            </div>
            {/* Second row - 2 cards centered */}
            <div className="flex justify-center gap-6">
              {beliefs.slice(3, 5).map((belief, index) => (
                <div key={index} className="w-[calc(33.333%-1rem)]">
                  <BeliefCard belief={belief} />
                </div>
              ))}
            </div>
          </div>

          {/* Tablet: 2 + 2 + 1 grid */}
          <div className="hidden md:block lg:hidden max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-5 mb-5">
              {beliefs.slice(0, 4).map((belief, index) => (
                <BeliefCard key={index} belief={belief} />
              ))}
            </div>
            <div className="flex justify-center">
              <div className="w-1/2">
                <BeliefCard belief={beliefs[4]} />
              </div>
            </div>
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden space-y-4 max-w-md mx-auto">
            {beliefs.map((belief, index) => (
              <BeliefCard key={index} belief={belief} />
            ))}
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
