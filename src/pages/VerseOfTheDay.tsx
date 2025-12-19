import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { VerseOfTheDay as VerseCard } from "@/components/resources/VerseOfTheDay";
import { BackToTop } from "@/components/ui/BackToTop";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VerseOfTheDay() {
  return (
    <Layout>
      <HeroBanner
        title="Verse of the Day"
        subtitle="Daily inspiration from God's Word in Malayalam"
        showCurvedDivider={true}
      />

      {/* Breadcrumb navigation */}
      <section className="section-cream py-6">
        <div className="section-container">
          <Link
            to="/resources/devotions"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Devotions & Resources
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="section-cream page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <VerseCard />

            {/* Additional info card */}
            <div className="mt-12 card-warm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">About This Feature</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Each day, a new verse is automatically selected for you. The background image 
                    rotates every 8 seconds to create a peaceful, meditative experience. You can 
                    browse through other verses using the "Next Verse" button, copy the verse to 
                    share with others, or use the share button to send it directly to friends 
                    and family.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA to resources */}
            <div className="mt-8 text-center">
              <Link to="/resources/devotions">
                <Button variant="outline" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  Explore More Devotional Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </Layout>
  );
}
