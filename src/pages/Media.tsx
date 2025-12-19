import { useMemo, useState, useCallback } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { Youtube, PlayCircle, BookOpen, Sparkles } from "lucide-react";

import { GalleryCollection } from "@/components/gallery/GalleryCollection";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { galleryCollections } from "@/data/galleryData";
import { cn } from "@/lib/utils";
import { ResourcesDevotionsTeaser } from "@/components/resources/ResourcesDevotionsTeaser";
import { ScriptureDevotionsSection } from "@/components/media/ScriptureDevotionsSection";

export default function Media() {
  // ✅ ONE continuous gallery (flatten + filter)
  const allImages = useMemo(() => {
    return galleryCollections.flatMap((collection) =>
      collection.images
        .filter((img) => !!img.src)
        .map((img) => ({
          ...img,
          category: collection.title,
        })),
    );
  }, []);

  const hasAnyImages = allImages.length > 0;

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
      id: "media-merged-gallery",
      title: "Gallery",
      description: "Swipe sideways to browse photos and videos.",
      images: filteredImages,
    };
  }, [filteredImages]);

  // ✅ Lightbox state (tap → full screen)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const prevLightbox = useCallback(() => {
    if (!filteredImages.length) return;
    setLightboxIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  const nextLightbox = useCallback(() => {
    if (!filteredImages.length) return;
    setLightboxIndex((i) => (i + 1) % filteredImages.length);
  }, [filteredImages.length]);

  return (
    <Layout>
      <BackToTop />
      <HeroBanner
        title="Media"
        subtitle="Access sermons, teachings, and other media resources"
        primaryCta={{ text: "Visit YouTube", link: "https://www.youtube.com/@ipcgilgalshj" }}
      />

      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* ✅ Gallery Carousel ABOVE YouTube */}
            {hasAnyImages && (
              <div className="mt-12">
                {/* Filter chips */}
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

                <GalleryCollection collection={mergedCollection as any} showViewAllLink={false} />

                <GalleryLightbox
                  open={lightboxOpen}
                  items={filteredImages as any}
                  index={lightboxIndex}
                  onClose={closeLightbox}
                  onPrev={prevLightbox}
                  onNext={nextLightbox}
                />
              </div>
            )}

            {/* YouTube Channel - Featured */}
            <div className="card-warm mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-destructive/10 rounded-full blur-3xl" />
              <div className="relative flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Youtube className="w-12 h-12 text-destructive" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Our YouTube Channel</h2>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Visit our YouTube channel to access recorded sermons, teachings, and special programs from IPC
                    Gilgal Church.
                  </p>
                  <a
                    href="https://www.youtube.com/@ipcgilgalshj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Visit YouTube Channel
                  </a>
                </div>
              </div>
            </div>

            {/* Content Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-warm group bg-gradient-to-br from-card via-gold-soft/30 to-card">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-gold-soft rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sermon Archive</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Browse our collection of recorded sermons and messages from our pastors and guest speakers.
                </p>
              </div>

              <div className="card-warm group bg-gradient-to-br from-card via-dove-light/40 to-card">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-dove-light rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Bible Teachings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access Bible study sessions and teaching series designed to help deepen your understanding of
                  Scripture.
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-4 h-4 text-accent" />
                <p className="text-sm">
                  New content is regularly added to our channel. Subscribe to stay updated with the latest uploads.
                </p>
              </div>
            </div>

            {/* Scripture & Daily Devotions Section */}
            <div className="mt-14">
              <ScriptureDevotionsSection />
            </div>

            {/* Resources & Devotions CTA */}
            <div className="mt-10">
              <ResourcesDevotionsTeaser />
            </div>
          </div>
        </div>
      </section>

      {/* Scripture band */}
      <section className="section-reflective py-14 md:py-16 relative">
        <div className="absolute inset-0 pattern-stars" />
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-lg md:text-xl italic text-primary-foreground/90 font-serif">
              "Faith comes from hearing the message, and the message is heard through the word about Christ."
            </blockquote>
            <p className="text-sm text-primary-foreground/50 mt-3 tracking-[0.2em] uppercase">Romans 10:17</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
