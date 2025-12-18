import { useCallback, useMemo, useRef, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * Media format guidance:
 * - Use JPG for photographs (better compression, smaller file size)
 * - Use PNG only for graphics with transparency
 * - Recommended max width: 1200px for main images, 200px for thumbnails
 *
 * NOTE:
 * This component uses a native horizontal scroll + CSS scroll-snap carousel (v0-style),
 * so it supports swipe on mobile naturally without external carousel libs.
 */

export interface GalleryImage {
  /** Optional id (recommended). If missing, index is used internally. */
  id?: string;
  /** "image" by default for backward compatibility */
  type?: "image" | "video";
  src: string;
  alt: string;
  /** Legacy name (still supported) */
  caption?: string;
  /** New: shows under media (admin editable) */
  subtitle?: string;
  /** Optional for video poster */
  poster?: string;
}

export interface GalleryCollectionData {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

interface GalleryCollectionProps {
  collection: GalleryCollectionData;
  maxImages?: number;
  showViewAllLink?: boolean;
}

export function GalleryCollection({ collection, maxImages, showViewAllLink = false }: GalleryCollectionProps) {
  const items = useMemo(() => {
    const sliced = maxImages ? collection.images.slice(0, maxImages) : collection.images;

    // Normalize so old data still works:
    // - type defaults to "image"
    // - subtitle falls back to caption
    return sliced.map((it, idx) => ({
      id: it.id ?? `${collection.id}-${idx}`,
      type: it.type ?? "image",
      src: it.src,
      alt: it.alt,
      poster: it.poster,
      subtitle: it.subtitle ?? it.caption,
    }));
  }, [collection.id, collection.images, maxImages]);

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const count = items.length;

  const getSlideStep = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return 0;

    const firstSlide = container.querySelector<HTMLElement>("[data-slide]");
    if (!firstSlide) return 0;

    // gap-4 = 16px; we add it so index math remains stable
    return firstSlide.offsetWidth + 16;
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const step = getSlideStep();
      if (!step) return;

      container.scrollTo({
        left: step * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    },
    [getSlideStep],
  );

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const step = getSlideStep();
    if (!step) return;

    const newIndex = Math.round(container.scrollLeft / step);
    if (newIndex !== activeIndex) setActiveIndex(newIndex);
  }, [activeIndex, getSlideStep]);

  const goToPrevious = useCallback(() => {
    if (count <= 1) return;
    const newIndex = activeIndex > 0 ? activeIndex - 1 : count - 1;
    scrollToIndex(newIndex);
  }, [activeIndex, count, scrollToIndex]);

  const goToNext = useCallback(() => {
    if (count <= 1) return;
    const newIndex = activeIndex < count - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  }, [activeIndex, count, scrollToIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    },
    [goToNext, goToPrevious],
  );

  // Empty state
  if (collection.images.length === 0) {
    return (
      <section className="py-8 first:pt-0">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-h3 font-heading font-semibold text-foreground">{collection.title}</h2>
            <p className="text-body-small text-muted-foreground mt-1">{collection.description}</p>
          </div>
          <span className="text-sm text-muted-foreground/60 cursor-not-allowed">View all</span>
        </div>

        <div className="aspect-video md:aspect-[16/9] max-w-4xl bg-muted/30 rounded-xl border border-border/40 flex items-center justify-center shadow-sm">
          <div className="text-center px-6 py-8">
            <Camera className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground/70 font-medium text-sm">Photos coming soon</p>
          </div>
        </div>

        <div className="mt-10 border-b border-border/30" />
      </section>
    );
  }

  return (
    <section className="py-8 first:pt-0">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-h3 font-heading font-semibold text-foreground">{collection.title}</h2>
          <p className="text-body-small text-muted-foreground mt-1">{collection.description}</p>
        </div>

        {showViewAllLink && collection.images.length > (maxImages || 0) ? (
          <a
            href="/gallery"
            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors whitespace-nowrap"
          >
            View all →
          </a>
        ) : (
          <span className="text-sm text-muted-foreground/50 whitespace-nowrap">View all</span>
        )}
      </div>

      {/* v0-style scroll-snap carousel frame */}
      <div
        className="relative max-w-6xl rounded-xl border border-border/60 bg-card shadow-md overflow-hidden"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`${collection.title} gallery`}
      >
        {/* Desktop arrows */}
        {count > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 rounded-full bg-background/80 hover:bg-background shadow-lg border border-border/50 z-10"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 rounded-full bg-background/80 hover:bg-background shadow-lg border border-border/50 z-10"
              aria-label="Next item"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}

        {/* Scroll rail */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 md:px-16 py-5"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {items.map((item) => (
            <div key={item.id} data-slide className="flex-none w-[85%] md:w-[420px] snap-center">
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Media */}
                <div className="aspect-[4/3] md:aspect-[16/9] bg-muted relative">
                  {item.type === "video" ? (
                    item.src ? (
                      <video src={item.src} poster={item.poster} controls muted className="w-full h-full object-cover">
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted via-muted/80 to-muted">
                        <div className="text-center">
                          <Camera className="w-12 h-12 text-muted-foreground/20 mx-auto mb-2" />
                          <span className="text-sm text-muted-foreground/40">Video</span>
                        </div>
                      </div>
                    )
                  ) : item.src ? (
                    <img
                      src={item.src}
                      alt={item.alt || collection.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted via-muted/80 to-muted">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-muted-foreground/20 mx-auto mb-2" />
                        <span className="text-sm text-muted-foreground/40">{item.alt || "Photo"}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtitle under media (admin caption) */}
                {item.subtitle && (
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground text-left line-clamp-2">{item.subtitle}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Slide counter (bottom-right) */}
        {count > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full font-medium z-10">
            {activeIndex + 1} / {count}
          </div>
        )}
      </div>

      {/* Pagination dots */}
      {count > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                activeIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Section divider */}
      <div className="mt-10 border-b border-border/30 last:hidden" />
    </section>
  );
}
