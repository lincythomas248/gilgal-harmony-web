import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { BackToTop } from "@/components/ui/BackToTop";
import { Image, Camera } from "lucide-react";

const galleryImages = [
  { id: 1, alt: "Worship service gathering", span: "col-span-2 row-span-2" },
  { id: 2, alt: "Scripture School session", span: "" },
  { id: 3, alt: "Youth fellowship meeting", span: "" },
  { id: 4, alt: "Prayer gathering", span: "" },
  { id: 5, alt: "Community celebration", span: "col-span-2" },
  { id: 6, alt: "Church event", span: "" },
  { id: 7, alt: "Fellowship dinner", span: "" },
  { id: 8, alt: "Special service", span: "col-span-2" },
  { id: 9, alt: "Church anniversary", span: "" },
  { id: 10, alt: "Bible study group", span: "" },
  { id: 11, alt: "Christmas celebration", span: "" },
  { id: 12, alt: "Easter service", span: "" },
];

export default function Gallery() {
  return (
    <Layout>
      <BackToTop />
      <PageHeader
        title="Gallery"
        subtitle="Glimpses of our church life and community gatherings"
      />

      <section className="section-light page-section">
        <div className="section-container">
          {/* Staggered masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className={`bg-muted rounded-xl overflow-hidden group relative hover-zoom ${image.span}`}
              >
                {/* Placeholder with icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dove-light via-muted to-dove-light/50">
                  <div className="text-center">
                    <Image className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/30 mx-auto mb-2" />
                    <span className="text-xs text-muted-foreground/40 hidden md:block">Photo</span>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <p className="text-primary-foreground text-sm text-center font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="mt-12 text-center">
            <div className="card-warm inline-block max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Camera className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground font-serif">Photo Gallery Coming Soon</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                We're preparing a beautiful collection of photos from our church activities. Stay connected for updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
