import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BookOpen, ExternalLink, Play, Headphones } from "lucide-react";
import ourDailyBreadBanner from "@/assets/our-daily-bread-banner.jpg";

const DevotionsResources = () => {
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

            {/* Resource Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card A: Our Daily Bread */}
              <a
                href="https://ourdailybread.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group card-elevated block overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={ourDailyBreadBanner}
                    alt="Our Daily Bread - Daily devotional readings"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    Our Daily Bread
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Daily devotional readings to nourish your faith and deepen your walk with God.
                  </p>
                </div>
              </a>

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
