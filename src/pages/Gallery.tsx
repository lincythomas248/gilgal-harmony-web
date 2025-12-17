import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { Camera, ImageIcon } from "lucide-react";
import { GalleryCollection } from "@/components/gallery/GalleryCollection";
import { galleryCollections } from "@/data/galleryData";

export default function Gallery() {
  // Check if all collections have empty images (no actual src)
  const hasAnyImages = galleryCollections.some((collection) =>
    collection.images.some((img) => img.src)
  );

  // Check if there are any collections at all
  const hasCollections = galleryCollections.length > 0;

  return (
    <Layout>
      <BackToTop />
      <HeroBanner
        title="Gallery"
        subtitle="Glimpses of our church life and community gatherings"
      />

      <section className="section-light page-section">
        <div className="section-container">
          {/* Slim info banner when images are coming */}
          {hasCollections && !hasAnyImages && (
            <div className="mb-10 max-w-3xl">
              <div className="flex items-center gap-4 px-5 py-4 bg-muted/40 border border-border/40 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    Photo Gallery Coming Soon
                  </p>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    We're preparing beautiful photos from our church events and gatherings.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* All empty state - only when NO collections exist */}
          {!hasCollections && (
            <div className="py-16">
              <div className="max-w-md mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-6">
                  <ImageIcon className="w-10 h-10 text-muted-foreground/40" />
                </div>
                <h2 className="text-h3 font-heading font-semibold text-foreground mb-3">
                  Gallery Coming Soon
                </h2>
                <p className="text-muted-foreground">
                  We're preparing a beautiful collection of photos from our church
                  activities and events. Check back soon for updates.
                </p>
              </div>
            </div>
          )}

          {/* Gallery Collections */}
          {hasCollections && (
            <div className="space-y-2">
              {galleryCollections.map((collection) => (
                <GalleryCollection
                  key={collection.id}
                  collection={collection}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
