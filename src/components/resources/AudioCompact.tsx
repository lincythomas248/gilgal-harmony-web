import { Radio, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AudioCompact = () => {
  return (
    <div className="card-warm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <Radio className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-lg font-bold text-foreground">Audio</h2>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        Christian radio & worship music
      </p>
      
      <div className="flex flex-wrap gap-2">
        <Button asChild variant="outline" size="sm" className="gap-1.5">
          <a
            href="https://tunein.com/radio/Christian-Music-g19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open TuneIn
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </Button>
        <Button asChild variant="outline" size="sm" className="gap-1.5">
          <a
            href="https://www.youtube.com/@ipcgilgalshj"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </Button>
      </div>
    </div>
  );
};
