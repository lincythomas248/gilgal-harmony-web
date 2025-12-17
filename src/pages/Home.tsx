import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, ArrowRight, Globe, HandHeart, Church, Video, PlayCircle, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroBg from "@/assets/hero-dove.jpg";

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
  const [activeMinistry, setActiveMinistry] = useState(0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-navy">
        {/* Dove image - positioned on the left half only */}
        <div className="absolute inset-y-0 left-0 w-1/2 md:w-[55%]">
          <img 
            src={heroBg} 
            alt="Dove of peace" 
            className="w-full h-full object-cover object-[70%_center]" 
          />
          {/* Fade to navy on the right edge */}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-navy" />
        </div>
        
        {/* Content - positioned on the right half */}
        <div className="section-container relative z-10 py-20 md:py-24">
          <div className="ml-auto w-full md:w-1/2 text-center md:text-left md:pl-8">
            
            {/* Church Name - larger and more prominent */}
            <h1 className="font-serif mb-10">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-tight leading-none drop-shadow-xl">
                IPC Gilgal
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-semibold italic text-accent mt-4 drop-shadow-lg">
                Church
              </span>
            </h1>
            
            {/* Subtitle - elegant serif */}
            <p className="text-xl md:text-2xl text-primary-foreground font-serif italic max-w-lg mb-4 leading-relaxed drop-shadow-md">
              A welcoming Christian community
            </p>
            
            <p className="text-sm md:text-base text-primary-foreground/80 tracking-[0.25em] uppercase mb-12 font-medium">
              Sharjah & Ras Al Khaimah, UAE
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-gold-dark text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Discover Our Church
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/50 hover:border-primary-foreground hover:bg-primary-foreground/20 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore IPC Gilgal - Hub Grid */}
      <section className="section-cream py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-8 right-8 w-64 h-64 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-8 left-8 w-56 h-56 bg-dove/8 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <div className="text-center mb-8">
            <span className="label-badge mb-2">Welcome</span>
            <h2 className="text-foreground text-2xl md:text-3xl font-serif">Explore IPC Gilgal</h2>
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
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1 font-serif">{tile.title}</h3>
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
      <section className="section-light py-12 md:py-16 relative">
        <div className="section-container">
          <div className="text-center mb-8">
            <span className="label-badge mb-2">Our Ministries</span>
            <h2 className="text-foreground text-2xl md:text-3xl mb-2">How We Serve</h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {ministries.map((ministry, index) => (
              <button
                key={ministry.id}
                onClick={() => setActiveMinistry(index)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeMinistry === index
                    ? ministry.color === 'accent'
                      ? 'bg-gradient-to-r from-accent to-gold-dark text-white shadow-lg'
                      : 'bg-gradient-to-r from-primary to-navy-light text-white shadow-lg'
                    : 'bg-card border border-border hover:border-accent/40 text-foreground'
                }`}
              >
                <ministry.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{ministry.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-2xl mx-auto">
            {ministries.map((ministry, index) => (
              <div
                key={ministry.id}
                className={`transition-all duration-400 ${
                  activeMinistry === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 absolute -translate-y-4 pointer-events-none'
                }`}
              >
                {activeMinistry === index && (
                  <div className={`card-warm p-6 md:p-8 rounded-2xl ${
                    ministry.color === 'accent' 
                      ? 'bg-gradient-to-br from-card via-gold-soft/25 to-card border-gold/20' 
                      : 'bg-gradient-to-br from-card via-dove-light/35 to-card border-dove/20'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center shadow-md ${
                        ministry.color === 'accent' 
                          ? 'bg-gradient-to-br from-accent to-gold-dark' 
                          : 'bg-gradient-to-br from-primary to-navy-light'
                      }`}>
                        <ministry.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 font-serif">{ministry.label}</h3>
                        <p className="text-muted-foreground mb-4">{ministry.description}</p>
                        <Link 
                          to={ministry.link}
                          className={`inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all ${
                            ministry.color === 'accent' ? 'text-accent' : 'text-primary'
                          }`}
                        >
                          Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
                <h3 className="text-xl font-bold text-primary-foreground mb-2 font-serif">Media</h3>
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
                <h3 className="text-xl font-bold text-primary mb-2 font-serif">Events</h3>
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
    </Layout>
  );
}
