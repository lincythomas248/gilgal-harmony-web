import { Radio } from "lucide-react";

interface Station {
  title: string;
  source: "Radio India" | "TuneIn";
  embedUrl: string;
}

// Malayalam TuneIn stations (currently none confirmed - placeholder for future)
const malayalamTuneInStations: Station[] = [];

// Malayalam Radio India stations
const malayalamRadioIndiaStations: Station[] = [
  { title: "BAFA Radio (Malayalam)", source: "Radio India", embedUrl: "https://radiosindia.com/embed/bafaradio" },
  { title: "Sehion Radio (Malayalam)", source: "Radio India", embedUrl: "https://radiosindia.com/embed/sehionradio" },
  { title: "Harvest Radio (Malayalam)", source: "Radio India", embedUrl: "https://radiosindia.com/embed/harvestradio" },
  { title: "Nambikkai FM (Malayalam)", source: "Radio India", embedUrl: "https://radiosindia.com/embed/nambikkaifm" },
  { title: "Heavenly Tunes (Malayalam)", source: "Radio India", embedUrl: "https://radiosindia.com/embed/heavenlytunes" },
];

// English TuneIn stations - ALL admin-provided stations
const englishTuneInStations: Station[] = [
  { title: "Station s105741", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s105741/" },
  { title: "Station s49370", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s49370/" },
  { title: "Station s17132", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s17132/" },
  { title: "Station s125788", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s125788/" },
  { title: "Station s300613", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s300613/" },
  { title: "Station s280249", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s280249/" },
  { title: "Station s293800", source: "TuneIn", embedUrl: "https://tunein.com/embed/player/s293800/" },
];

interface StationCardProps {
  station: Station;
}

const TuneInStationCard = ({ station }: StationCardProps) => (
  <div className="bg-background/60 rounded-xl p-3">
    <div className="mb-2">
      <span className="font-medium text-sm text-foreground">{station.title}</span>
      <p className="text-xs text-muted-foreground">Source: {station.source}</p>
    </div>
    <div className="rounded-xl overflow-hidden border border-border/50 bg-background shadow-sm">
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
  <div className="bg-background/60 rounded-xl p-3">
    <div className="mb-2">
      <span className="font-medium text-sm text-foreground">{station.title}</span>
      <p className="text-xs text-muted-foreground">Source: {station.source}</p>
    </div>
    <div className="rounded-xl overflow-hidden border border-border/50 bg-background shadow-sm relative">
      <div className="absolute top-2 right-2 z-10 text-xs px-2 py-1 rounded-full bg-muted/80 backdrop-blur">
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

interface SectionBlockProps {
  title: string;
  subtitle?: string;
  stations: Station[];
  isRadioIndia?: boolean;
}

const SectionBlock = ({ title, subtitle, stations, isRadioIndia = false }: SectionBlockProps) => {
  if (stations.length === 0) {
    return null;
  }

  return (
    <div className="card-warm rounded-2xl p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Radio className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle || "Tap play to listen"}</p>
        </div>
      </div>

      <div className="space-y-4 mt-4">
        {stations.map((station, index) => (
          isRadioIndia ? (
            <RadioIndiaStationCard key={index} station={station} />
          ) : (
            <TuneInStationCard key={index} station={station} />
          )
        ))}
      </div>
    </div>
  );
};

export const AudioEmbeds = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Column: Malayalam Christian Radio */}
      <div className="space-y-6">
        {malayalamTuneInStations.length > 0 && (
          <SectionBlock 
            title="Malayalam Christian Radio" 
            subtitle="TuneIn stations"
            stations={malayalamTuneInStations} 
          />
        )}
        <SectionBlock 
          title="Malayalam Christian Radio" 
          subtitle="Radio India stations"
          stations={malayalamRadioIndiaStations} 
          isRadioIndia 
        />
      </div>

      {/* Right Column: English Christian Radio */}
      <div>
        <SectionBlock 
          title="English Christian Radio" 
          subtitle="TuneIn stations"
          stations={englishTuneInStations} 
        />
      </div>
    </div>
  );
};
