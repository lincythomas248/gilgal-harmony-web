import worshipCommunity from "@/assets/worship-community.jpg";
import worshipHands from "@/assets/worship-hands.jpg";
import pentecostSpirit from "@/assets/pentecost-holy-spirit.jpg";

const tiles = [
  { position: "object-[20%_30%]", label: "Worship", image: worshipCommunity },
  { position: "object-[50%_40%]", label: "Fellowship", image: worshipHands },
  { position: "object-[60%_50%]", label: "Service", image: pentecostSpirit },
  { position: "object-[40%_60%]", label: "Prayer", image: worshipCommunity },
  { position: "object-[70%_35%]", label: "Community", image: worshipHands },
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
                className="group relative h-32 md:h-36 rounded-2xl overflow-hidden shadow-lg ring-1 ring-border/50 transition-all duration-300 hover:shadow-xl hover:ring-accent/30 hover:scale-[1.02]"
              >
                <img
                  src={tile.image}
                  alt={tile.label}
                  className={`w-full h-full object-cover ${tile.position} transition-transform duration-500 group-hover:scale-110`}
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Pill caption */}
                <span className="absolute bottom-2 left-2 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
                  {tile.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
