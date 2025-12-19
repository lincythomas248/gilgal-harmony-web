import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { QuickLinks } from "@/components/resources/QuickLinks";
import { VerseCardLarge } from "@/components/resources/VerseCardLarge";
import { AudioCompact } from "@/components/resources/AudioCompact";
import { OdbCompact } from "@/components/resources/OdbCompact";

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

              {/* Right Column - Audio + ODB stacked */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <AudioCompact />
                <OdbCompact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevotionsResources;
