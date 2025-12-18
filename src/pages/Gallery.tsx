import { useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { Camera, ImageIcon } from "lucide-react";
import { GalleryCollection } from "@/components/gallery/GalleryCollection";
import { galleryCollections } from "@/data/galleryData";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const hasCollections = galleryCollections.length > 0;

  // Flatten ALL collections into ONE continuous gallery
  const allImages = useMemo(() => {
    return galleryCollections.flatMap((collection) =>
      collection.images
        .filter((img) => !!img.src)
        .map((img) => ({
          ...img,
          // keep collection context for future (filters / badges), harmless extra fields
          category: collection.title,
        })),
    );
  }, []);

  const hasAnyImages = allImages.length > 0;

  // Optional: keep simple category chips (All + per collection)
  const categories = useMemo(() => {
    const set = new Set<string>();
    galleryCollections.forEach((c) => set.add(c.title));
    return ["All", ...Array.from(set)];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") return allImages;
    return allImages.filter((img: any) => img.category === selectedCategory);
  }, [allImages, selectedCategory]);

  const mergedCollection = useMemo(() => {
    return {
      id: "merged-gallery",
      title: "Gallery",
      description: "Swipe sideways to browse photos and videos.",
      images: filteredImages,
    };
  }, [filteredImages]);

  return (
    <Layout>
      <BackToTop />
      <HeroBanner title="Gallery" subtitle="Glimpses of our church life and community gatherings" />

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
                  <p className="font-medium text-foreground text-sm">Photo Gallery Coming Soon</p>
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
                <h2 className="text-h3 font-heading font-semibold text-foreground mb-3">Gallery Coming Soon</h2>
                <p className="text-muted-foreground">
                  We're preparing a beautiful collection of photos from our church activities and events. Check back
                  soon for updates.
                </p>
              </div>
            </div>
          )}

          {/* ONE continuous gallery + optional filter chips */}
          {hasCollections && hasAnyImages && (
            <div className="mt-6">
              {/* Filter chips (optional but helpful) */}
              {categories.length > 1 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCategory(c)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm border transition",
                        selectedCategory === c
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border hover:bg-muted",
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}

              {/* Single merged carousel */}
              <GalleryCollection collection={mergedCollection as any} showViewAllLink={false} />
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
