import { Layout } from "@/components/layout/Layout";
import { BackToTop } from "@/components/ui/BackToTop";
import { Users, Heart, BookOpen, Music, ArrowRight, Sparkles, HeartHandshake, Calendar, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import worshipImage from "@/assets/worship-hands.jpg";

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

// Activity Card component
const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => (
  <div className="group relative rounded-2xl p-6 bg-[#FAF8F3] shadow-md border border-black/[0.04] h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    {/* Micro label */}
    <span className={`absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${
      activity.color === 'gold' 
        ? 'bg-accent/15 text-accent' 
        : 'bg-primary/10 text-primary'
    }`}>
      {activity.label}
    </span>
    
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
      activity.color === 'gold' 
        ? 'bg-gradient-to-br from-accent/20 to-accent/10' 
        : 'bg-gradient-to-br from-primary/15 to-primary/5'
    }`}>
      <activity.icon className={`w-7 h-7 ${activity.color === 'gold' ? 'text-accent' : 'text-primary'}`} />
    </div>
    
    <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
      {activity.title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {activity.description}
    </p>
  </div>
);

export default function PYPA() {
  return (
    <Layout>
      <BackToTop />
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - no fadeout */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${worshipImage})` }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Glass Card Content */}
        <div className="relative z-10 section-container py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                PYPA
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
                Pentecostal Young People's Association
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="group">
                  Join PYPA
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-background py-16 md:py-20">
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

      {/* Our Mission - Premium Card */}
      <section className="bg-dove-light/50 py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl p-8 md:p-10 bg-gradient-to-br from-[#FAF8F3] to-white shadow-lg border border-black/[0.04]">
              {/* Icon badge */}
              <div className="absolute -top-5 left-8 w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
                <HeartHandshake className="w-5 h-5 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-2">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                PYPA exists to nurture the spiritual growth of young people, equipping them with a strong foundation of faith. We create opportunities for youth to discover their purpose, develop leadership qualities, and build lasting friendships within the church community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Activity Cards */}
      <section className="bg-background py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
                What We Do
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Discover the various ways we come together to grow, serve, and worship.
              </p>
            </div>
            
            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <Link
              to="/resources/devotions"
              className="group block relative rounded-2xl p-8 bg-gradient-to-br from-[#FAF8F3] to-white shadow-lg border-2 border-accent/20 transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">Resources & Devotions</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Weekly devotionals, Bible reading, and youth-friendly resources to grow in faith.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-accent ml-4">
                  <span className="text-sm font-semibold hidden sm:inline">Explore</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
