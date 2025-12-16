import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { BackToTop } from "@/components/ui/BackToTop";
import { Calendar, Clock, MapPin, Megaphone, Sparkles } from "lucide-react";

const upcomingEvents = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "Regular worship gathering",
    location: "Sharjah",
    description: "Join us for our weekly worship service with praise, prayer, and teaching from God's Word.",
  },
  {
    title: "Friday Fellowship",
    date: "Every Friday",
    time: "Evening fellowship",
    location: "RAK",
    description: "Our Ras Al Khaimah fellowship gathers for worship and community.",
  },
  {
    title: "Prayer Meeting",
    date: "Weekly",
    time: "Regular gathering",
    location: "Sharjah",
    description: "Join us for corporate prayer as we seek God together for our church and community.",
  },
  {
    title: "Scripture School",
    date: "Weekly",
    time: "During service",
    location: "Sharjah",
    description: "Biblical education classes for children and youth of all age groups.",
  },
];

const latestUpdates = [
  {
    month: "Dec",
    title: "Christmas Celebrations",
    description: "Join us for special Christmas services and fellowship gatherings as we celebrate together.",
  },
  {
    month: "Nov",
    title: "Annual Day Celebrations",
    description: "Scripture School annual day with performances and awards for our young learners.",
  },
  {
    month: "Oct",
    title: "Youth Camp",
    description: "PYPA youth camp focusing on spiritual growth and leadership development.",
  },
];

export default function Events() {
  return (
    <Layout>
      <BackToTop />
      <PageHeader
        title="Events"
        subtitle="Upcoming gatherings, services, and special programs."
      />

      {/* Regular Events */}
      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="label-badge mb-4">Regular Services</span>
              <h2 className="text-foreground font-serif mb-4">Weekly Gatherings</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay connected with our church community through regular services and events. Contact us for specific dates and times.
              </p>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="card-warm group hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-gold-soft rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Calendar className="w-7 h-7 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-accent" />
                          {event.date} • {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates - Moved from Home */}
      <section className="section-cream page-section relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-dove/10 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="label-badge mb-4">Updates</span>
              <h2 className="text-foreground font-serif mb-4">Latest News</h2>
              <p className="text-muted-foreground">
                Recent happenings and announcements from our church community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {latestUpdates.map((update, index) => (
                <div key={index} className="card-warm group hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                        index === 0 
                          ? 'bg-accent/20 text-accent' 
                          : index === 1 
                            ? 'bg-primary/15 text-primary'
                            : 'bg-dove/30 text-foreground'
                      }`}>
                        {update.month}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 font-serif">{update.title}</h3>
                      <p className="text-sm text-muted-foreground">{update.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="card-warm bg-gradient-to-br from-card via-dove-light/40 to-card border-dove/20 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-semibold text-foreground font-serif">Special Programs</h2>
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Throughout the year, we hold special programs including Christmas celebrations, Easter services, and other fellowship events. Contact us or follow our social media for announcements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
