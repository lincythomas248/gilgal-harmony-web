import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { Sparkles, Radio, BookOpen } from "lucide-react";
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevotionsResources;
