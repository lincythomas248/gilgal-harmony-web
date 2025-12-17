
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
    description: "Regular gatherings for prayer, Bible study, and Christian community.",
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
        subtitle="A welcoming Malayalee Christian community united in faith and fellowship."
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

      {/* Ministries - Compact Tabbed Interface */}
      <section className="section-light py-8 md:py-10 relative">
        <div className="section-container">
          <div className="text-center mb-5">
            <span className="label-badge mb-2">Our Ministries</span>
            <h2 className="text-foreground text-2xl md:text-3xl mb-2">How We Serve</h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {ministries.map((ministry, index) => (
              <Link
                key={ministry.id}
                to={ministry.link}
                className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  index === 0
                    ? ministry.color === 'accent'
                      ? 'bg-gradient-to-r from-accent to-gold-dark text-white shadow-lg'
                      : 'bg-gradient-to-r from-primary to-navy-light text-white shadow-lg'
                    : 'bg-card border border-border hover:border-accent/40 text-foreground'
                }`}
              >
                <ministry.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{ministry.label}</span>
              </Link>
            ))}
          </div>

          {/* Info Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/80 border border-gold/30 text-foreground text-sm">
              <Globe className="w-4 h-4 text-accent" />
              <span>Services in Malayalam</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/80 border border-gold/30 text-foreground text-sm">
              <Bus className="w-4 h-4 text-accent" />
              <span>Transport available (contact in advance)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Media + Events - Combined Strip */}
      <section className="section-cream py-10 md:py-14">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Media */}
            <Link to="/media" className="group relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary to-navy" />
              <div className="absolute inset-0 pattern-grid opacity-10" />
              
              <div className="relative p-6 md:p-8">
                <div className="w-10 h-10 bg-primary-foreground/15 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Media</h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Sermons, teachings, and worship sessions
                </p>
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                  Visit Media <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Events */}
            <Link to="/events" className="group relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-gold to-accent" />
              <div className="absolute inset-0 pattern-dots-gold opacity-15" />
              
              <div className="relative p-6 md:p-8">
                <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Events</h3>
                <p className="text-primary/70 text-sm mb-4">
                  Upcoming services and gatherings
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  View Events <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
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
