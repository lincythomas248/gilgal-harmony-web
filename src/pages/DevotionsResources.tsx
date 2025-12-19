import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { AudioEmbeds } from "@/components/resources/AudioEmbeds";
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
            {/* Scripture & Daily Devotions Section */}
            <ScriptureDailyDevotions />

            {/* Audio Section - Full Width Below */}
            <div className="mt-10">
              <AudioEmbeds />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevotionsResources;
