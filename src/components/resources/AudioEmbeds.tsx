import { Radio, ExternalLink } from "lucide-react";

interface Station {
  title: string;
  embedUrl: string;
}

const malayalamStations: Station[] = [
  { title: "Malayalam Station 1", embedUrl: "https://tunein.com/embed/player/s105741/" },
  { title: "Malayalam Station 2", embedUrl: "https://tunein.com/embed/player/s49370/" },
  { title: "Malayalam Station 3", embedUrl: "https://tunein.com/embed/player/s17132/" },
  { title: "Malayalam Station 4", embedUrl: "https://tunein.com/embed/player/s125788/" },
];

const englishStations: Station[] = [
  { title: "English Station 1", embedUrl: "https://tunein.com/embed/player/s300613/" },
  { title: "English Station 2", embedUrl: "https://tunein.com/embed/player/s280249/" },
  { title: "English Station 3", embedUrl: "https://tunein.com/embed/player/s293800/" },
];

interface StationBlockProps {
  title: string;
  stations: Station[];
}

const StationBlock = ({ title, stations }: StationBlockProps) => {
  if (stations.length === 0) {
    return (
      <div className="card-warm rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Radio className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-lg text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm">No stations added yet</p>
      </div>
    );
  }

  return (
    <div className="card-warm rounded-2xl p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Radio className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">Tap play to listen</p>
        </div>
      </div>

      {/* Station List */}
      <div className="space-y-4 mt-4">
        {stations.map((station, index) => {
          // Extract station ID from embedUrl for the external link
          const stationId = station.embedUrl.match(/\/s(\d+)\//)?.[0]?.replace(/\//g, "") || "";
          
          return (
            <div key={index} className="bg-background/60 rounded-xl p-3">
              {/* Station Header */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm text-foreground">{station.title}</span>
                <a
                  href={`https://tunein.com/radio/${stationId}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Open in TuneIn
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              
              {/* Iframe Player */}
              <div className="rounded-xl overflow-hidden border border-border/50 bg-background">
                <iframe
                  src={station.embedUrl}
                  className="w-full h-[100px]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allow="autoplay"
                  title={`TuneIn ${station.title}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const AudioEmbeds = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StationBlock title="Malayalam Radio" stations={malayalamStations} />
      <StationBlock title="English Radio" stations={englishStations} />
    </div>
  );
};
