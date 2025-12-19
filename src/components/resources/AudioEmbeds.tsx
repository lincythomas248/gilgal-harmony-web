import { useState } from "react";
import { Radio } from "lucide-react";

interface Station {
  title: string;
  source: "Radio India" | "TuneIn";
  embedUrl: string;
}

// Malayalam TuneIn stations
const malayalamTuneInStations: Station[] = [
  { title: "Psalms Radio Malayalam Channel", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s125788/" },
  { title: "Shalom Beats Channel", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s300613/" },
  { title: "Voice of Gospel Channel", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s280249/" },
  { title: "Ephphatha Malayalam Channel", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s293800/" },
];

// Malayalam Radio India stations
const malayalamRadioIndiaStations: Station[] = [
  { title: "BAFA Radio (Malayalam)", source: "Radio India", embedUrl: "https://radiosindia.com/embed/bafaradio" },
  { title: "Sehion Radio (Malayalam)", source: "Radio India", embedUrl: "https://radiosindia.com/embed/sehionradio" },
  { title: "Harvest Radio (Malayalam)", source: "Radio India", embedUrl: "https://radiosindia.com/embed/harvestradio" },
  { title: "Nambikkai FM (Malayalam)", source: "Radio India", embedUrl: "https://radiosindia.com/embed/nambikkaifm" },
  { title: "Heavenly Tunes (Malayalam)", source: "Radio India", embedUrl: "https://radiosindia.com/embed/heavenlytunes" },
];

// English TuneIn stations
const englishTuneInStations: Station[] = [
  { title: "Praise and Worship Channel", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s105741/" },
  { title: "All Worship Channel", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s49370/" },
  { title: "Praise Channel", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s17132/" },
];

interface StationCardProps {
  station: Station;
}

const TuneInStationCard = ({ station }: StationCardProps) => (
  <div className="min-w-[300px] md:min-w-[360px] snap-start rounded-2xl border border-border/50 bg-background shadow-sm p-4">
    <div className="flex items-center justify-between mb-3">
      <span className="font-medium text-sm text-foreground truncate pr-2">{station.title}</span>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary shrink-0">TuneIn</span>
    </div>
    <div className="rounded-xl overflow-hidden border border-border/30 bg-muted/30">
      <iframe
        src={station.embedUrl}
        className="w-full h-[100px]"
        loading="lazy"
        referrerPolicy="no-referrer"
        title={station.title}
        scrolling="no"
      />
    </div>
  </div>
);

const RadioIndiaStationCard = ({ station }: StationCardProps) => (
  <div className="min-w-[300px] md:min-w-[360px] snap-start rounded-2xl border border-border/50 bg-background shadow-sm p-4">
    <div className="flex items-center justify-between mb-3">
      <span className="font-medium text-sm text-foreground truncate pr-2">{station.title}</span>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/80 text-accent-foreground shrink-0">Radio India</span>
    </div>
    <div className="relative rounded-xl overflow-hidden border border-border/30 bg-muted/30">
      <div className="absolute top-2 right-2 z-10 text-[11px] px-2 py-0.5 rounded-full bg-muted/80 backdrop-blur">
        Embedded player
      </div>
      <iframe
        src={station.embedUrl}
        className="w-full h-[120px]"
        loading="lazy"
        referrerPolicy="no-referrer"
        title={station.title}
        scrolling="no"
      />
    </div>
  </div>
);

interface CarouselRowProps {
  title: string;
  stations: Station[];
  isRadioIndia?: boolean;
}

const CarouselRow = ({ title, stations, isRadioIndia = false }: CarouselRowProps) => {
  if (stations.length === 0) return null;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-muted-foreground px-1">{title}</h4>
      <div className="overflow-x-auto pb-2 -mx-2 px-2">
        <div className="flex gap-4 snap-x snap-mandatory">
          {stations.map((station, index) => (
            isRadioIndia ? (
              <RadioIndiaStationCard key={index} station={station} />
            ) : (
              <TuneInStationCard key={index} station={station} />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export const AudioEmbeds = () => {
  const [activeTab, setActiveTab] = useState<"malayalam" | "english">("malayalam");

  return (
    <div className="card-warm rounded-2xl p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Radio className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">Christian Radio</h3>
          <p className="text-xs text-muted-foreground">Tap play to listen</p>
        </div>
      </div>

      {/* Pill Tabs */}
      <div className="flex gap-2 mb-5">
        <button
          onClick={() => setActiveTab("malayalam")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            activeTab === "malayalam"
              ? "bg-primary text-primary-foreground"
              : "bg-muted/60 text-muted-foreground hover:bg-muted"
          }`}
        >
          Malayalam
        </button>
        <button
          onClick={() => setActiveTab("english")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            activeTab === "english"
              ? "bg-primary text-primary-foreground"
              : "bg-muted/60 text-muted-foreground hover:bg-muted"
          }`}
        >
          English
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "malayalam" && (
        <div className="space-y-6">
          <CarouselRow title="TuneIn Stations" stations={malayalamTuneInStations} />
          <CarouselRow title="Radio India Stations" stations={malayalamRadioIndiaStations} isRadioIndia />
        </div>
      )}

      {activeTab === "english" && (
        <div className="space-y-6">
          <CarouselRow title="TuneIn Stations" stations={englishTuneInStations} />
        </div>
      )}
    </div>
  );
};
