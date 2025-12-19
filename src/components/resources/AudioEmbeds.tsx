import { Radio } from "lucide-react";

interface Station {
  title: string;
  source: "Radio India" | "TuneIn";
  embedUrl: string;
}

const malayalamStations: Station[] = [
  {
    title: "BAFA Radio (Malayalam)",
    source: "Radio India",
    embedUrl: "https://radiosindia.com/embed/bafaradio",
  },
  {
    title: "Sehion Radio (Malayalam)",
    source: "Radio India",
    embedUrl: "https://radiosindia.com/embed/sehionradio",
  },
  {
    title: "Harvest Radio (Malayalam)",
    source: "Radio India",
    embedUrl: "https://radiosindia.com/embed/harvestradio",
  },
  {
    title: "Nambikkai FM (Malayalam)",
    source: "Radio India",
    embedUrl: "https://radiosindia.com/embed/nambikkaifm",
  },
  {
    title: "Heavenly Tunes (Malayalam)",
    source: "Radio India",
    embedUrl: "https://radiosindia.com/embed/heavenlytunes",
  },
];

const englishStations: Station[] = [
  {
    title: "Christian Worship Radio",
    source: "TuneIn",
    embedUrl: "https://tunein.com/embed/player/s300613/",
  },
  {
    title: "Faith & Praise Radio",
    source: "TuneIn",
    embedUrl: "https://tunein.com/embed/player/s280249/",
  },
  {
    title: "Christian Teaching & Music",
    source: "TuneIn",
    embedUrl: "https://tunein.com/embed/player/s293800/",
  },
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
        <p className="text-muted-foreground text-sm">Radio stations will appear here soon.</p>
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
          const iframeHeight = station.source === "Radio India" ? "h-[120px]" : "h-[100px]";
          
          return (
            <div key={index} className="bg-background/60 rounded-xl p-3">
              {/* Station Header */}
              <div className="mb-2">
                <span className="font-medium text-sm text-foreground">{station.title}</span>
                <p className="text-xs text-muted-foreground">Source: {station.source}</p>
              </div>
              
              {/* Iframe Player */}
              <div className="rounded-xl overflow-hidden border border-border/50 bg-background">
                <iframe
                  src={station.embedUrl}
                  className={`w-full ${iframeHeight}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allow={station.source === "TuneIn" ? "autoplay" : undefined}
                  title={station.title}
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
      <StationBlock title="Malayalam Christian Radio" stations={malayalamStations} />
      <StationBlock title="English Christian Radio" stations={englishStations} />
    </div>
  );
};
