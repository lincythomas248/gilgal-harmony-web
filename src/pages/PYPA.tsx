import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { Users, Heart, BookOpen, Music, Sparkles, HeartHandshake, Calendar, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PYPAPhotoStrip } from "@/components/pypa/PYPAPhotoStrip";
import { ResourcesDevotionsTeaser } from "@/components/resources/ResourcesDevotionsTeaser";

const activities = [
  {
    icon: BookOpen,
    title: "Bible Study",
    description: "Regular study of Scripture to deepen understanding and application of God's Word.",
    label: "Weekly",
    color: "gold",
  },
  {
    icon: Heart,
    title: "Fellowship",
    description: "Building meaningful friendships and supporting one another in faith.",
    label: "Community",
    color: "navy",
  },
  {
    icon: Music,
    title: "Worship",
    description: "Opportunities to participate in praise and worship through music and prayer.",
    label: "Praise",
    color: "gold",
  },
  {
    icon: Users,
    title: "Service",
    description: "Engaging in various church activities and community service initiatives.",
    label: "Outreach",
    color: "navy",
  },
];

// Activity Card component - Premium styling
const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => (
  <div className="group relative rounded-2xl p-7 bg-gradient-to-br from-background to-dove-light/50 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border/50 hover:border-accent/30 shadow-lg">
    {/* Premium pill badge */}
    <span className={`absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-sm ${
      activity.color === 'gold' 
        ? 'bg-accent/10 text-accent border-accent/25' 
        : 'bg-primary/10 text-primary border-primary/20'
    }`}>
      {activity.label}
    </span>
    
    {/* Premium icon container with gradient border effect */}
    <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md ${
      activity.color === 'gold' 
        ? 'bg-gradient-to-br from-accent/25 via-accent/15 to-accent/5 ring-1 ring-accent/20' 
        : 'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 ring-1 ring-primary/15'
    }`}>
      <activity.icon className={`w-7 h-7 ${activity.color === 'gold' ? 'text-accent' : 'text-primary'}`} />
    </div>
    
    <h3 className="text-xl font-bold text-foreground mb-3 leading-snug tracking-tight">
      {activity.title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {activity.description}
    </p>
    
    {/* Subtle bottom accent line on hover */}
    <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
      activity.color === 'gold' ? 'bg-gradient-to-r from-accent/50 via-accent to-accent/50' : 'bg-gradient-to-r from-primary/50 via-primary to-primary/50'
    }`} />
  </div>
);

export default function PYPA() {
  return (
    <Layout>
      <BackToTop />
      <HeroBanner
        title="PYPA"
        subtitle="Pentecostal Young People's Association"
        primaryCta={{ text: "Join PYPA", link: "/contact" }}
      />

      {/* Introduction Section */}
      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-5">
              Empowering Youth in Faith
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              PYPA is the youth ministry of IPC Gilgal Church. We provide a welcoming space for young people to grow spiritually, develop their gifts, and connect with peers who share their faith.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission - Premium Card with glow border */}
      <section className="bg-dove-light/50 py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Outer glow wrapper */}
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-accent/40 via-primary/20 to-accent/30 shadow-xl shadow-accent/10">
              <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-background via-background to-dove-light/80">
                {/* Floating icon badge */}
                <div className="absolute -top-6 left-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-accent via-accent to-accent/80 flex items-center justify-center shadow-xl ring-4 ring-background">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                
                {/* Section label */}
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-accent mb-4 mt-2">Our Purpose</span>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">Our Mission</h2>
                
                {/* Accent divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full mb-5" />
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  PYPA exists to nurture the spiritual growth of young people, equipping them with a strong foundation of faith. We create opportunities for youth to discover their purpose, develop leadership qualities, and build lasting friendships within the church community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Activity Cards */}
      <section className="bg-background py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-accent mb-3">Our Activities</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
                What We Do
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full mx-auto mb-5" />
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Discover the various ways we come together to grow, serve, and worship.
              </p>
            </div>
            
            {/* 2x2 Grid with better gap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PYPA Photo Strip */}
      <PYPAPhotoStrip />

      {/* Join PYPA - Premium CTA Band */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/90" />
        <div className="absolute inset-0 pattern-stars opacity-30" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-8 h-8 mx-auto mb-5 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join PYPA
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
              Young people of all backgrounds are welcome to participate in PYPA activities. Connect with us to learn more about upcoming youth gatherings and programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="w-full sm:w-auto group">
                  <Mail className="mr-2 w-4 h-4" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                  <Calendar className="mr-2 w-4 h-4" />
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Devotions - Premium Card */}
      <section className="bg-dove-light/50 py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <ResourcesDevotionsTeaser />
          </div>
        </div>
      </section>
    </Layout>
  );
}
