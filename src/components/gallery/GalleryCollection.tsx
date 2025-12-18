import { useState, useCallback, useEffect } from "react";
import { Image as ImageIcon, Camera, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  subtitle?: string;

  // ✅ Video support
  type?: "image" | "video";
  poster?: string; // recommended for video previews
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
  onItemClick?: (index: number) => void;
}

export function GalleryCollection({
  collection,
  maxImages,
  showViewAllLink = false,
  onItemClick,
}: GalleryCollectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const displayImages = maxImages ? collection.images.slice(0, maxImages) : collection.images;

  const hasRealMedia = displayImages.some((img) => !!img.src);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    },
    [scrollPrev, scrollNext],
  );

  const currentItem = displayImages[current];
  const caption = currentItem?.subtitle ?? currentItem?.caption;

  // Empty state (no media at all)
  if (!hasRealMedia) {
    return (
      <section className="py-8 first:pt-0">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-h3 font-heading font-semibold text-foreground">{collection.title}</h2>
            <p className="text-body-small text-muted-foreground mt-1">{collection.description}</p>
          </div>
          <span className="text-sm text-muted-foreground/60">View all</span>
        </div>

        <div className="aspect-video md:aspect-[16/9] max-w-4xl bg-muted/30 rounded-xl border border-border/40 flex items-center justify-center">
          <div className="text-center px-6 py-8">
            <Camera className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground/70 font-medium text-sm">Media coming soon</p>
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
        {showViewAllLink ? (
          <a href="/gallery" className="text-sm text-primary hover:text-primary/80 font-medium">
            View all →
          </a>
        ) : (
          <span className="text-sm text-muted-foreground/50">View all</span>
        )}
      </div>

      {/* Carousel */}
      <div
        className="relative max-w-4xl rounded-xl border border-border/60 bg-card shadow-md overflow-hidden"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`${collection.title} gallery`}
      >
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="ml-0">
            {displayImages.map((item, index) => {
              const type = item.type ?? "image";
              const isVideo = type === "video";

              return (
                <CarouselItem key={index} className="pl-0 basis-full">
                  <div
                    className={cn(
                      "aspect-[4/3] md:aspect-[16/9] relative bg-muted group",
                      onItemClick && "cursor-zoom-in",
                    )}
                    onClick={() => onItemClick?.(index)}
                    role={onItemClick ? "button" : undefined}
                    tabIndex={onItemClick ? 0 : undefined}
                    onKeyDown={(e) => {
                      if (!onItemClick) return;
                      if (e.key === "Enter" || e.key === " ") onItemClick(index);
                    }}
                  >
                    {/* ✅ IMAGE */}
                    {item.src && !isVideo && (
                      <img
                        src={item.src}
                        alt={item.alt || collection.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}

                    {/* ✅ VIDEO (proper preview + safe playback) */}
                    {item.src && isVideo && (
                      <>
                        {/* We use a real <video> so it works everywhere. */}
                        <video
                          src={item.src}
                          poster={item.poster}
                          controls
                          muted
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 w-full h-full object-cover bg-black"
                          // Prevent carousel swipe feeling “stuck” when user taps controls
                          onClick={(e) => {
                            // If you later add a lightbox, this prevents toggling slide by accident.
                            // Keep it simple: allow playback, but still allow onItemClick if you want.
                            e.stopPropagation();
                          }}
                        />

                        {/* Optional subtle play badge (premium hint) */}
                        <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/60 text-white text-xs flex items-center gap-1 pointer-events-none">
                          <Play className="w-3.5 h-3.5" />
                          Video
                        </div>
                      </>
                    )}

                    {/* Placeholder */}
                    {!item.src && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Arrows */}
          {count > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 shadow-lg"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 shadow-lg"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}

          {/* Counter */}
          {count > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full">
              {current + 1} / {count}
            </div>
          )}
        </Carousel>

        {/* Caption */}
        {caption && (
          <div className="px-4 py-3 bg-muted/30 border-t border-border/30">
            <p className="text-body-small text-muted-foreground italic text-center">{caption}</p>
          </div>
        )}
      </div>

      <div className="mt-10 border-b border-border/30 last:hidden" />
    </section>
  );
}
