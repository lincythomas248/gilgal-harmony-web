import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BookOpen, ExternalLink, Play, Headphones, Calendar, ChevronRight, Sparkles } from "lucide-react";
import { useODBDevotionals, getExcerpt } from "@/hooks/useODBDevotionals";
import { format } from "date-fns";

const DevotionsResources = () => {
  const { devotionals, loading, error } = useODBDevotionals(7);

  return (
    <Layout>
      <HeroBanner
        title="Resources & Devotions"
        subtitle="A curated space for young members to build daily habits of prayer, Scripture, and reflection."
      />

      <section className="page-section">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Explore devotionals, Bible reading plans, worship music, and faith-building content designed for youth.
            </p>

            {/* Daily Inspiration Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Daily Inspiration</h2>
              <Link
                to="/resources/verse-of-the-day"
                className="group card-elevated block p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-olive-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-7 h-7 text-olive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                      Verse of the Day (Malayalam)
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Daily Malayalam verse with a beautiful rotating background. Start your day with God's Word.
                    </p>
                    <span className="inline-flex items-center text-sm text-primary font-medium">
                      Open Verse of the Day
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Our Daily Bread Section */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Our Daily Bread</h2>
                <a
                  href="https://ourdailybread.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  Visit ODB <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="card-elevated p-4 animate-pulse">
                      <div className="h-32 bg-muted rounded-lg mb-3" />
                      <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                      <div className="h-4 bg-muted rounded w-1/2" />
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="card-elevated p-6 text-center">
                  <p className="text-muted-foreground mb-4">{error}</p>
                  <a
                    href="https://ourdailybread.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Visit Our Daily Bread directly
                  </a>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {devotionals.map((devotional) => (
                    <Link
                      key={devotional.slug}
                      to={`/resources/devotions/odb/${devotional.slug}`}
                      className="group card-elevated overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      {devotional.thumbnail && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={devotional.thumbnail}
                            alt={devotional.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {devotional.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {getExcerpt(devotional.description, 20)}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {devotional.pubDate && format(new Date(devotional.pubDate), 'MMM d')}
                          </span>
                          <span className="flex items-center gap-0.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            Read <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Resources Grid */}
            <h2 className="text-2xl font-bold text-foreground mb-6">More Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Card B: YouTube Embed */}
              <div className="card-elevated overflow-hidden">
                <div className="aspect-video bg-muted">
                  {/* 
                    REPLACE the src below with your actual YouTube embed URL
                    Example: https://www.youtube.com/embed/VIDEO_ID
                  */}
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Youth Worship & Teaching"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Play className="w-5 h-5 text-primary" />
                    Youth Worship & Teaching
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Watch inspiring messages, worship sessions, and youth-focused content.
                  </p>
                </div>
              </div>

              {/* Card C: Spotify/Podcast Embed */}
              <div className="card-elevated overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  {/* 
                    REPLACE the src below with your actual Spotify embed URL
                    Example: https://open.spotify.com/embed/playlist/PLAYLIST_ID
                  */}
                  <iframe
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m"
                    title="Worship & Christian Music"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-primary" />
                    Worship & Christian Music
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Listen to uplifting worship music and faith-based podcasts.
                  </p>
                </div>
              </div>

              {/* Card D: Bible Reading / Verse of the Day */}
              <a
                href="https://www.bible.com/verse-of-the-day"
                target="_blank"
                rel="noopener noreferrer"
                className="group card-elevated block p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-olive-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-olive" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      Verse of the Day
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Start each day with Scripture. Get daily verses and reading plans from YouVersion Bible App.
                    </p>
                    {/* 
                      EDIT LINKS: You can change these to any Bible reading resources
                    */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-cream px-3 py-1 rounded-full text-foreground/70">
                        Daily Verses
                      </span>
                      <span className="text-xs bg-cream px-3 py-1 rounded-full text-foreground/70">
                        Reading Plans
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevotionsResources;
