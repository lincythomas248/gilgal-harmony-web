import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { QuickLinks } from "@/components/resources/QuickLinks";
import { VerseCardLarge } from "@/components/resources/VerseCardLarge";
import { AudioEmbeds } from "@/components/resources/AudioEmbeds";
import { OdbCompact } from "@/components/resources/OdbCompact";
import { ScriptureDailyDevotions } from "@/components/resources/ScriptureDailyDevotions";

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

            {/* Main Grid: Horizontal on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column - Verse of the Day (Featured) */}
              <div className="lg:col-span-7">
                <VerseCardLarge />
              </div>

              {/* Right Column - ODB */}
              <div className="lg:col-span-5">
                <OdbCompact />
              </div>
            </div>

            {/* Scripture & Daily Devotions Section */}
            <div className="mt-10">
              <ScriptureDailyDevotions />
            </div>

            {/* Audio Section - Full Width Below */}
            <div className="mt-8">
              <AudioEmbeds />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevotionsResources;
