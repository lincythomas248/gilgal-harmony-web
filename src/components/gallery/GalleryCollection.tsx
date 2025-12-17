import { useState, useCallback, useEffect } from "react";
import { Image as ImageIcon, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * Image format guidance:
 * - Use JPG for photographs (better compression, smaller file size)
 * - Use PNG only for graphics with transparency
 * - Recommended max width: 1200px for main images, 200px for thumbnails
 */

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
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

export function GalleryCollection({
  collection,
  maxImages,
  showViewAllLink = false,
}: GalleryCollectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const displayImages = maxImages
    ? collection.images.slice(0, maxImages)
    : collection.images;

  // Check if any images have actual src
  const hasRealImages = displayImages.some((img) => img.src);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  const currentImage = displayImages[current];
  const currentCaption = currentImage?.caption;
  const currentAlt = currentImage?.alt || collection.title;

  // Empty state for collection with no images
  if (collection.images.length === 0) {
    return (
      <section className="py-8 first:pt-0">
        {/* Collection header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-h3 font-heading font-semibold text-foreground">
              {collection.title}
            </h2>
            <p className="text-body-small text-muted-foreground mt-1">
              {collection.description}
            </p>
          </div>
          <span className="text-sm text-muted-foreground/60 cursor-not-allowed">
            View all
          </span>
        </div>

        {/* Empty placeholder */}
        <div className="aspect-video md:aspect-[16/9] max-w-4xl bg-muted/30 rounded-xl border border-border/40 flex items-center justify-center shadow-sm">
          <div className="text-center px-6 py-8">
            <Camera className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground/70 font-medium text-sm">Photos coming soon</p>
          </div>
        </div>

        {/* Section divider */}
        <div className="mt-10 border-b border-border/30" />
      </section>
    );
  }

  return (
    <section className="py-8 first:pt-0">
      {/* Collection header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-h3 font-heading font-semibold text-foreground">
            {collection.title}
          </h2>
          <p className="text-body-small text-muted-foreground mt-1">
            {collection.description}
          </p>
        </div>
        {showViewAllLink && collection.images.length > (maxImages || 0) ? (
          <a
            href="/gallery"
            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors whitespace-nowrap"
          >
            View all →
          </a>
        ) : (
          <span className="text-sm text-muted-foreground/50 whitespace-nowrap">
            View all
          </span>
        )}
      </div>

      {/* Carousel container with frame */}
      <div
        className="relative max-w-4xl rounded-xl border border-border/60 bg-card shadow-md overflow-hidden"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`${collection.title} photo gallery`}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {displayImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0 basis-full">
                {/* Fixed aspect ratio container - 16:9 desktop, 4:3 mobile */}
                <div className="aspect-[4/3] md:aspect-[16/9] relative bg-muted group">
                  {image.src ? (
                    <img
                      src={image.src}
                      alt={image.alt || collection.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    /* Placeholder when src is empty */
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted via-muted/80 to-muted">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-muted-foreground/20 mx-auto mb-2" />
                        <span className="text-sm text-muted-foreground/40">
                          {image.alt || "Photo"}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Hover overlay for caption preview on desktop */}
                  {image.caption && image.src && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                      <p className="text-white/90 text-sm italic">{image.caption}</p>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation arrows - inside carousel */}
          {count > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background shadow-lg border border-border/50 z-10"
                aria-label="View previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background shadow-lg border border-border/50 z-10"
                aria-label="View next image"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}

          {/* Slide counter - bottom right */}
          {count > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full font-medium z-10">
              {current + 1} / {count}
            </div>
          )}
        </Carousel>

        {/* Caption area - below carousel */}
        {currentCaption && (
          <div className="px-4 py-3 bg-muted/30 border-t border-border/30">
            <p className="text-body-small text-muted-foreground italic text-center">
              {currentCaption}
            </p>
          </div>
        )}
      </div>

      {/* Dot indicators - mobile only */}
      {count > 1 && (
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                current === index
                  ? "bg-primary w-5"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail strip - desktop only */}
      {count > 1 && (
        <div className="hidden md:flex justify-start gap-2 mt-4 max-w-4xl overflow-x-auto pb-1">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200",
                current === index
                  ? "border-primary ring-2 ring-primary/20 shadow-md"
                  : "border-border/40 opacity-60 hover:opacity-100 hover:border-border"
              )}
              aria-label={`View image ${index + 1}: ${image.alt || collection.title}`}
            >
              {image.src ? (
                <img
                  src={image.src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <ImageIcon className="w-4 h-4 text-muted-foreground/30" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Section divider */}
      <div className="mt-10 border-b border-border/30 last:hidden" />
    </section>
  );
}
