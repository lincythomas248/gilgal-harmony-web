import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { Sparkles, Radio, BookOpen, Play, Headphones } from "lucide-react";
import { ResourceSection } from "@/components/resources/ResourceSection";
import { QuickLinks } from "@/components/resources/QuickLinks";
import { VerseCard } from "@/components/resources/VerseCard";
import { AudioEmbeds } from "@/components/resources/AudioEmbeds";
import { OdbSection } from "@/components/resources/OdbSection";

const DevotionsResources = () => {
  return (
    <Layout>
      <HeroBanner
        title="Resources & Devotions"
        subtitle="A curated space for young members to build daily habits of prayer, Scripture, and reflection."
      />

      <section className="page-section section-light">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            {/* Quick Links */}
            <QuickLinks />

            {/* 1. Verse of the Day */}
            <ResourceSection
              icon={<Sparkles className="w-5 h-5 text-primary" />}
              title="Verse of the Day"
              description="Start your day with God's Word"
            >
              <VerseCard />
            </ResourceSection>

            {/* 2. Our Daily Bread */}
            <ResourceSection
              icon={<BookOpen className="w-5 h-5 text-primary" />}
              title="Our Daily Bread"
              description="Daily devotional readings"
              action={{ text: "Visit ODB", href: "https://ourdailybread.org", external: true }}
            >
              <OdbSection />
            </ResourceSection>

            {/* 3. Audio / Live Radio */}
            <ResourceSection
              icon={<Radio className="w-5 h-5 text-primary" />}
              title="Audio Devotions"
              description="Listen to worship music and Christian radio"
            >
              <AudioEmbeds />
            </ResourceSection>

            {/* 4. More Resources */}
            <ResourceSection
              icon={<Play className="w-5 h-5 text-primary" />}
              title="More Resources"
              description="Video content and worship music"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* YouTube Embed */}
                <div className="bg-background/60 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Youth Worship & Teaching"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-foreground mb-1 flex items-center gap-2">
                      <Play className="w-4 h-4 text-primary" />
                      Youth Worship & Teaching
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Watch inspiring messages and worship sessions.
                    </p>
                  </div>
                </div>

                {/* Spotify Embed */}
                <div className="bg-background/60 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <iframe
                      src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m"
                      title="Worship & Christian Music"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-foreground mb-1 flex items-center gap-2">
                      <Headphones className="w-4 h-4 text-primary" />
                      Worship & Christian Music
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Listen to uplifting worship music and podcasts.
                    </p>
                  </div>
                </div>
              </div>
            </ResourceSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevotionsResources;
