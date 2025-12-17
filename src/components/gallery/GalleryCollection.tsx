import { useState, useCallback, useEffect } from "react";
import { Image as ImageIcon, Camera } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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

  // Empty state for collection with no images
  if (collection.images.length === 0) {
    return (
      <div className="mb-12 last:mb-0">
        <div className="mb-4">
          <h2 className="text-h3 font-heading font-semibold text-foreground mb-1">
            {collection.title}
          </h2>
          <p className="text-body-small text-muted-foreground">
            {collection.description}
          </p>
        </div>
        <div className="aspect-video max-w-3xl mx-auto bg-muted/50 rounded-xl flex items-center justify-center border border-border/50">
          <div className="text-center p-8">
            <Camera className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-muted-foreground font-medium">Photos coming soon</p>
            <p className="text-sm text-muted-foreground/70 mt-1">
              Check back later for photos from this event
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12 last:mb-0">
      {/* Collection header */}
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-h3 font-heading font-semibold text-foreground mb-1">
            {collection.title}
          </h2>
          <p className="text-body-small text-muted-foreground">
            {collection.description}
          </p>
        </div>
        {showViewAllLink && collection.images.length > (maxImages || 0) && (
          <a
            href="/gallery"
            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View Full Gallery →
          </a>
        )}
      </div>

      {/* Main carousel */}
      <div className="relative px-0 md:px-12">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {displayImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                {/* Fixed aspect ratio container to prevent layout shift */}
                <div className="aspect-[16/9] relative rounded-xl overflow-hidden bg-muted">
                  {image.src ? (
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                      style={{
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      }}
                    />
                  ) : (
                    /* Placeholder when src is empty */
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dove-light via-muted to-dove-light/50">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-2" />
                        <span className="text-sm text-muted-foreground/50">
                          {image.alt || "Photo"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                {/* Caption */}
                {image.caption && (
                  <p className="mt-3 text-center text-body-small text-muted-foreground italic">
                    {image.caption}
                  </p>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation arrows - visible on tablet/desktop */}
          <CarouselPrevious
            className="hidden md:flex -left-0 lg:-left-4 h-10 w-10 bg-background/90 hover:bg-background border-border shadow-md"
            aria-label="View previous image"
          />
          <CarouselNext
            className="hidden md:flex -right-0 lg:-right-4 h-10 w-10 bg-background/90 hover:bg-background border-border shadow-md"
            aria-label="View next image"
          />
        </Carousel>

        {/* Dot indicators - visible on mobile/tablet */}
        {count > 1 && (
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  current === index
                    ? "bg-primary w-4"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Thumbnail strip - desktop only */}
        {count > 1 && (
          <div className="hidden md:flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
            {displayImages.map((image, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200",
                  current === index
                    ? "border-primary shadow-md"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
                aria-label={`View image ${index + 1}: ${image.alt}`}
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
                    <ImageIcon className="w-4 h-4 text-muted-foreground/40" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
