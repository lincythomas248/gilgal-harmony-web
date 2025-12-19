import worshipCommunity from "@/assets/worship-community.jpg";

const tiles = [
  { position: "object-[20%_30%]", delay: "0ms" },
  { position: "object-[40%_50%]", delay: "50ms" },
  { position: "object-[60%_40%]", delay: "100ms" },
  { position: "object-[80%_60%]", delay: "150ms" },
  { position: "object-[50%_70%]", delay: "200ms" },
];

export const PYPAPhotoStrip = () => {
  return (
    <section className="bg-dove-light/30 py-16 md:py-20 overflow-hidden">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
              PYPA Moments
            </h2>
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              Worship • Fellowship • Service
            </p>
          </div>

          {/* Photo Strip - Horizontal on desktop, grid on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {tiles.map((tile, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:ring-accent/20 hover:-translate-y-1"
                style={{ animationDelay: tile.delay }}
              >
                <img
                  src={worshipCommunity}
                  alt={`PYPA moment ${index + 1}`}
                  className={`w-full h-full object-cover ${tile.position} transition-transform duration-500 group-hover:scale-110`}
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
