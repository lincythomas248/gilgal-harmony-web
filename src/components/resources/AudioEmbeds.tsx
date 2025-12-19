import { ExternalLink } from "lucide-react";

const stations = [
  { id: "s105741", title: "Family Radio", description: "Christian teaching & worship" },
  { id: "s49370", title: "KLOVE Radio", description: "Contemporary Christian music" },
  { id: "s17132", title: "BBN Radio", description: "Bible Broadcasting Network" },
  { id: "s125788", title: "Moody Radio", description: "Biblical teaching & music" },
  { id: "s300613", title: "Praise FM", description: "Uplifting worship songs" },
  { id: "s280249", title: "Faith Radio", description: "Gospel & inspirational" },
];

export const AudioEmbeds = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stations.map((station) => (
        <div
          key={station.id}
          className="bg-background/60 rounded-xl p-4 transition-all duration-300 hover:shadow-md hover:bg-background/80"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-semibold text-foreground">{station.title}</h3>
              <p className="text-sm text-muted-foreground">{station.description}</p>
            </div>
            <a
              href={`https://tunein.com/radio/${station.id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Open in TuneIn"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
            <iframe
              src={`https://tunein.com/embed/player/${station.id}/`}
              className="w-full h-[100px]"
              frameBorder="0"
              scrolling="no"
              title={station.title}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
