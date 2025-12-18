import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from "lucide-react";

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
      <HeroBanner
        title="Events"
        subtitle="Upcoming gatherings, services, and special programs"
        primaryCta={{ text: "Contact Us", link: "/contact" }}
      />

      {/* Regular Events */}
      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="label-badge mb-4">Regular Services</span>
              <h2 className="text-foreground mb-4">Weekly Gatherings</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay connected with our church community through regular services and events. Contact us for specific
                dates and times.
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
                      <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{event.description}</p>

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

                    {/* optional CTA for future (keeps layout premium) */}
                    <div className="md:self-stretch md:flex md:items-center">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Enquire <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="section-cream page-section relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-dove/10 rounded-full blur-3xl" />

        <div className="section-container relative">
          <div className="max-w-5xl mx-auto">
            {/* Header row: fixes spacing + adds useful right-side action */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div className="text-center md:text-left">
                <span className="label-badge mb-4 inline-flex">Updates</span>
                <h2 className="text-foreground mb-3">Latest News</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Recent happenings and announcements from our church community.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Get updates <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Premium card layout: equal height + stronger hierarchy */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestUpdates.map((update, index) => (
                <div key={index} className="card-warm group hover:shadow-lg transition-all h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                          index === 0
                            ? "bg-accent/20 text-accent"
                            : index === 1
                              ? "bg-primary/15 text-primary"
                              : "bg-dove/30 text-foreground"
                        }`}
                      >
                        {update.month}
                      </span>

                      <span className="text-xs text-muted-foreground">Update</span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground leading-snug mb-3">{update.title}</h3>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{update.description}</p>

                    {/* subtle CTA line for “this is clickable” feel (even if not linked yet) */}
                    <div className="mt-5 pt-4 border-t border-border/40">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Removes “dead space” feeling with a compact follow-on block */}
            <div className="mt-10">
              <div className="card-warm bg-gradient-to-br from-card via-dove-light/40 to-card border-dove/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Special Programs</h3>
                      <p className="text-sm text-muted-foreground">
                        Christmas, Easter, and fellowship events throughout the year.
                      </p>
                    </div>
                  </div>

                  <a href="/contact" className="btn-gold inline-flex items-center justify-center gap-2">
                    Contact for details <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (Old Special Programs section removed — now integrated above to avoid extra vertical space) */}
    </Layout>
  );
}
