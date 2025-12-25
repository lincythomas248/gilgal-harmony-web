
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Globe, HandHeart, PlayCircle, Calendar, BookOpenText, Bus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { PastorMessage } from "@/components/home/PastorMessage";
const ministries = [
  {
    id: "scripture-school",
    label: "Scripture School",
    icon: BookOpen,
    color: "accent",
    description: "Biblical education for children and young adults through engaging, age-appropriate teaching.",
    link: "/ministries/scripture-school"
  },
  {
    id: "pypa",
    label: "PYPA",
    icon: Globe,
    color: "primary",
    description: "Equipping youth to grow in faith, leadership, and service through fellowship.",
    link: "/ministries/pypa"
  },
  {
    id: "prayer-fellowship",
    label: "Prayer & Fellowship",
    icon: HandHeart,
    color: "accent",
    description: "Regular gatherings for prayer, Bible study, and Pentecostal community.",
    link: "/prayer-fellowship"
  }
];

import worshipCommunity from "@/assets/worship-community.jpg";

export default function Home() {
  return (
    <Layout>
      <HeroBanner
        title="IPC Gilgal"
        titleSecondLine="Church"
        subtitle="A welcoming Malayalee Pentecostal community"
        subtitleSecondLine="united in faith and fellowship."
        location="Sharjah & Ras Al Khaimah, UAE"
        primaryCta={{ text: "Discover Our Church", link: "/about" }}
        secondaryCta={{ text: "Get in Touch", link: "/contact" }}
      />

      {/* Discover Life at IPC Gilgal - Asymmetric Feature Grid */}
      <section className="section-cream py-12 md:py-16 relative overflow-hidden">
        {/* Ambient background accents */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-dove/8 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="label-badge mb-2">Welcome Home</span>
            <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-bold">
              Discover Life at IPC Gilgal
            </h2>
          </div>

          {/* Asymmetric Three-Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-4 items-stretch">
            
            {/* Primary Card - Growing Together in Faith */}
            <div className="relative rounded-2xl overflow-hidden min-h-[480px] lg:min-h-[520px] group">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${worshipCommunity})` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/75 to-primary/35" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                {/* Header Content */}
                <div className="mb-5">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                    Growing Together in Faith
                  </h3>
                  <p className="text-white/90 text-sm md:text-base max-w-md leading-relaxed mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                    Join our vibrant community through worship, learning, and fellowship as we journey in Christ together.
                  </p>
                  {/* How We Serve Pill */}
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/90 text-primary text-sm font-bold shadow-lg">
                    <HandHeart className="w-4 h-4" />
                    How We Serve
                  </span>
                </div>

                {/* Ministry Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
                  {ministries.map((ministry) => (
                    <Link
                      key={ministry.id}
                      to={ministry.link}
                      onClick={() => window.scrollTo(0, 0)}
                      className="group/card relative bg-white/12 hover:bg-white/20 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-xl p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-accent/90 flex items-center justify-center shadow-md">
                          <ministry.icon className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="text-white font-semibold text-sm">{ministry.label}</h4>
                      </div>
                      <p className="text-white/75 text-xs leading-relaxed line-clamp-2">{ministry.description}</p>
                      <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold mt-2 group-hover/card:gap-1.5 transition-all">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Info Tags */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/15 backdrop-blur-sm border border-white/10">
                    <Globe className="w-4 h-4 text-accent" />
                    <span className="text-white font-medium text-xs">Services in Malayalam</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/15 backdrop-blur-sm border border-white/10">
                    <Bus className="w-5 h-5 text-accent" />
                    <span className="text-white font-medium text-xs">Transportation available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Cards Column */}
            <div className="flex flex-col gap-4">
              {/* Media Card - Near Square */}
              <Link 
                to="/media" 
                onClick={() => window.scrollTo(0, 0)}
                className="group relative rounded-2xl overflow-hidden flex-1 min-h-[140px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary to-navy-light" />
                <div className="absolute inset-0 pattern-grid opacity-10" />
                <div className="absolute top-0 right-0 w-28 h-28 bg-accent/20 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl" />
                
                <div className="relative h-full flex flex-col justify-center p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/15 transition-all">
                      <PlayCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Media & Teachings</h3>
                    </div>
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed mb-3">
                    Sermons, worship recordings & photo gallery.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* Events Card - Near Square */}
              <Link 
                to="/events" 
                onClick={() => window.scrollTo(0, 0)}
                className="group relative rounded-2xl overflow-hidden flex-1 min-h-[140px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-gold to-gold-dark" />
                <div className="absolute inset-0 pattern-dots-gold opacity-20" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/15 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl" />
                
                <div className="relative h-full flex flex-col justify-center p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/25 transition-all">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">Events & Services</h3>
                    </div>
                  </div>
                  <p className="text-primary/80 text-sm leading-relaxed mb-3">
                    Weekly services & community gatherings.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                    View Schedule <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Pastor's Message Section */}
      <PastorMessage />

      {/* Verse Banner */}
      <section className="bg-primary py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-5" />
        <div className="section-container relative text-center">
          <BookOpenText className="w-8 h-8 text-accent/80 mx-auto mb-4" />
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-serif italic max-w-3xl mx-auto leading-relaxed">
            "For where two or three gather in my name, there am I with them."
          </blockquote>
          <cite className="block mt-4 text-primary-foreground/70 text-sm md:text-base font-medium not-italic">
            Matthew 18:20
          </cite>
        </div>
      </section>
    </Layout>
  );
}
