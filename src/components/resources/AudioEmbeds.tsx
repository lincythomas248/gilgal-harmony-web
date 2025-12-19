import { Radio } from "lucide-react";

const stations = [
  { id: "s105741", title: "Family Radio", description: "Christian teaching & worship" },
  { id: "s49370", title: "KLOVE Radio", description: "Contemporary Christian music" },
  { id: "s17132", title: "BBN Radio", description: "Bible Broadcasting Network" },
  { id: "s125788", title: "Moody Radio", description: "Biblical teaching & music" },
  { id: "s300613", title: "Praise FM", description: "Uplifting worship songs" },
  { id: "s280249", title: "Faith Radio", description: "Gospel & inspirational" },
  { id: "s293800", title: "Hope FM", description: "Christian talk & music" },
];

export const AudioEmbeds = () => {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Radio className="w-6 h-6 text-primary" />
          Audio Devotions
        </h2>
        <p className="text-muted-foreground mt-1">
          Listen to worship music and Christian radio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stations.map((station) => (
          <div
            key={station.id}
            className="card-elevated p-4 transition-all duration-300 hover:shadow-lg"
          >
            <div className="mb-3">
              <h3 className="font-semibold text-foreground">{station.title}</h3>
              <p className="text-sm text-muted-foreground">{station.description}</p>
            </div>
            <div className="rounded-xl border bg-background p-3 overflow-hidden">
              <iframe
                src={`https://tunein.com/embed/player/${station.id}/`}
                className="w-full h-[110px]"
                frameBorder="0"
                scrolling="no"
                title={station.title}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
