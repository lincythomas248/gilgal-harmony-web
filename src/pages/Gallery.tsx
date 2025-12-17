import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { Camera } from "lucide-react";
import { GalleryCollection } from "@/components/gallery/GalleryCollection";
import { galleryCollections } from "@/data/galleryData";

export default function Gallery() {
  // Check if all collections have empty images
  const hasAnyImages = galleryCollections.some(
    (collection) => collection.images.some((img) => img.src)
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
          {/* All empty state - shown when no collections or all images empty */}
          {(!hasCollections || !hasAnyImages) && (
            <div className="mb-12">
              <div className="card-warm max-w-2xl mx-auto text-center py-12">
                <Camera className="w-16 h-16 text-accent mx-auto mb-4 opacity-60" />
                <h2 className="text-h3 font-heading font-semibold text-foreground mb-3">
                  Photo Gallery Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We're preparing a beautiful collection of photos from our church 
                  activities and events. Stay connected for updates as we add 
                  moments from our community gatherings.
                </p>
              </div>
            </div>
          )}

          {/* Gallery Collections */}
          {hasCollections && (
            <div className="space-y-16">
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
