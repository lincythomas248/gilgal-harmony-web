
import { Link } from "react-router-dom";
import { BookOpen, Users, ArrowRight, Globe, HandHeart, Church, Video, PlayCircle, Calendar, BookOpenText, Bus } from "lucide-react";
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

const exploreTiles = [
  { title: "About Us", description: "Our story and community", icon: Users, link: "/about", color: "gold" },
  { title: "Our Beliefs", description: "Faith foundations", icon: BookOpen, link: "/beliefs", color: "navy" },
  { title: "Ministries", description: "How we serve", icon: Church, link: "/ministries", color: "gold" },
  { title: "Media & Events", description: "Sermons & gatherings", icon: Video, link: "/media", color: "navy" },
];

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

      {/* Explore IPC Gilgal - Hub Grid */}
      <section className="section-cream py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-8 right-8 w-64 h-64 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-8 left-8 w-56 h-56 bg-dove/8 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <div className="text-center mb-8">
            <span className="label-badge mb-2">Welcome</span>
            <h2 className="text-foreground text-2xl md:text-3xl">Explore IPC Gilgal</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {exploreTiles.map((tile) => (
              <Link
                key={tile.title}
                to={tile.link}
                onClick={() => window.scrollTo(0, 0)}
                className={`group relative p-5 md:p-6 rounded-2xl border transition-all duration-400 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
                  tile.color === 'gold' 
                    ? 'bg-gradient-to-br from-card via-gold-soft/30 to-card border-gold/20 hover:border-gold/40' 
                    : 'bg-gradient-to-br from-card via-dove-light/40 to-card border-dove/20 hover:border-dove/40'
                }`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500 ${
                  tile.color === 'gold' ? 'bg-accent/10' : 'bg-primary/10'
                }`} />
                
                <div className="relative">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform ${
                    tile.color === 'gold' 
                      ? 'bg-gradient-to-br from-accent to-gold-dark' 
                      : 'bg-gradient-to-br from-primary to-navy-light'
                  }`}>
                    <tile.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{tile.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{tile.description}</p>
                  <span className={`inline-flex items-center gap-1 mt-3 font-semibold text-xs group-hover:gap-2 transition-all ${
                    tile.color === 'gold' ? 'text-accent' : 'text-primary'
                  }`}>
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries + Media/Events - Two Column Layout */}
      <section className="section-light py-10 md:py-14 relative overflow-hidden">
        {/* Subtle background accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-dove/5 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <div className="grid lg:grid-cols-[1fr_320px] gap-6 lg:gap-8">
            
            {/* Left Column - How We Serve (Dominant) */}
            <div className="relative">
              {/* Subtle background highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-cream/50 via-gold-soft/20 to-transparent rounded-3xl -m-4 md:-m-6" />
              
              <div className="relative p-4 md:p-6">
                <div className="text-center lg:text-left mb-6 md:mb-8">
                  <span className="label-badge mb-3">Our Ministries</span>
                  <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold">How We Serve</h2>
                </div>

                {/* Ministry Pills - Larger */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                  {ministries.map((ministry) => (
                    <Link
                      key={ministry.id}
                      to={ministry.link}
                      onClick={() => window.scrollTo(0, 0)}
                      className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 flex items-center gap-2.5 bg-card border-2 border-border hover:border-accent hover:bg-accent/5 hover:shadow-lg hover:-translate-y-0.5 text-foreground"
                    >
                      <ministry.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                      <span>{ministry.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Info Pills */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/80 border border-gold/20 text-muted-foreground text-xs">
                    <Globe className="w-3.5 h-3.5 text-accent/70" />
                    <span>Services in Malayalam</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/80 border border-gold/20 text-muted-foreground text-xs">
                    <Bus className="w-3.5 h-3.5 text-accent/70" />
                    <span>Transportation available (contact in advance)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Media & Events (Secondary) */}
            <div className="flex flex-col gap-4">
              {/* Media - Compact */}
              <Link 
                to="/media" 
                onClick={() => window.scrollTo(0, 0)}
                className="group relative rounded-2xl overflow-hidden flex-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary to-navy" />
                <div className="absolute inset-0 pattern-grid opacity-10" />
                
                <div className="relative p-4 md:p-5">
                  <div className="w-8 h-8 bg-primary-foreground/15 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-primary-foreground mb-1">Media</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
                    Sermons, teachings, and worship sessions
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Visit Media <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>

              {/* Events - Compact */}
              <Link 
                to="/events" 
                onClick={() => window.scrollTo(0, 0)}
                className="group relative rounded-2xl overflow-hidden flex-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-gold to-accent" />
                <div className="absolute inset-0 pattern-dots-gold opacity-15" />
                
                <div className="relative p-4 md:p-5">
                  <div className="w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-primary mb-1">Events</h3>
                  <p className="text-primary/80 text-sm leading-relaxed mb-2">
                    Upcoming services and gatherings
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                    View Events <ArrowRight className="w-3.5 h-3.5" />
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
