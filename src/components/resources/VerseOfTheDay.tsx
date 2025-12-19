/**
 * 🔒 LOCKED COMPONENT — VerseOfTheDay
 * Premium card for displaying Malayalam verse of the day
 */

import { useState, useEffect, useCallback } from "react";
import { Copy, Share2, RefreshCw, RotateCcw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import versesData from "@/data/verseOfDay.ml.json";

// Import available images
import sereneLake from "@/assets/serene-lake.jpg";
import worshipHands from "@/assets/worship-hands.jpg";
import heroDove from "@/assets/hero-dove.jpg";
import heroBible from "@/assets/hero-bible.jpg";
import worshipCommunity from "@/assets/worship-community.jpg";
import pentecostHolySpirit from "@/assets/pentecost-holy-spirit.jpg";

interface Verse {
  id: number;
  ref: string;
  text_ml: string;
  theme: string;
  imageKey: string;
}

const imageMap: Record<string, string> = {
  "serene-lake": sereneLake,
  "worship-hands": worshipHands,
  "hero-dove": heroDove,
  "hero-bible": heroBible,
  "worship-community": worshipCommunity,
  "pentecost-holy-spirit": pentecostHolySpirit,
};

const allImages = Object.values(imageMap);

// Get deterministic verse for today based on date
function getTodayVerseIndex(): number {
  const today = new Date();
  const dateHash = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return dateHash % versesData.length;
}

export function VerseOfTheDay() {
  const { toast } = useToast();
  const [currentVerseIndex, setCurrentVerseIndex] = useState<number>(getTodayVerseIndex());
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [isManualSelection, setIsManualSelection] = useState(false);

  const currentVerse: Verse = versesData[currentVerseIndex];
  const verseImage = imageMap[currentVerse.imageKey] || allImages[0];

  // Auto-rotate background image every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Check localStorage for manual verse selection
  useEffect(() => {
    const savedIndex = localStorage.getItem("vodManualIndex");
    if (savedIndex !== null) {
      const index = parseInt(savedIndex, 10);
      if (!isNaN(index) && index >= 0 && index < versesData.length) {
        setCurrentVerseIndex(index);
        setIsManualSelection(true);
      }
    }
  }, []);

  const handleNextVerse = useCallback(() => {
    const nextIndex = (currentVerseIndex + 1) % versesData.length;
    setCurrentVerseIndex(nextIndex);
    setIsManualSelection(true);
    localStorage.setItem("vodManualIndex", nextIndex.toString());
  }, [currentVerseIndex]);

  const handleResetToToday = useCallback(() => {
    const todayIndex = getTodayVerseIndex();
    setCurrentVerseIndex(todayIndex);
    setIsManualSelection(false);
    localStorage.removeItem("vodManualIndex");
    toast({
      title: "Reset to Today's Verse",
      description: "Showing the verse of the day.",
    });
  }, [toast]);

  const handleCopy = useCallback(async () => {
    const textToCopy = `"${currentVerse.text_ml}"\n— ${currentVerse.ref}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Verse copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard.",
        variant: "destructive",
      });
    }
  }, [currentVerse, toast]);

  const handleShare = useCallback(async () => {
    const shareText = `"${currentVerse.text_ml}"\n— ${currentVerse.ref}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Verse of the Day",
          text: shareText,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback to copy
      handleCopy();
    }
  }, [currentVerse, handleCopy]);

  const backgroundImage = allImages[currentImageIndex] || verseImage;

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border/30">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/75 to-primary/70" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
        {/* Theme badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold tracking-wide uppercase mb-8 border border-accent/30">
          Verse of the Day
        </div>

        {/* Malayalam verse */}
        <blockquote className="max-w-3xl mx-auto mb-6">
          <p className="text-primary-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-medium" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            "{currentVerse.text_ml}"
          </p>
        </blockquote>

        {/* Reference */}
        <p className="text-accent font-semibold tracking-widest uppercase text-sm md:text-base mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          — {currentVerse.ref}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Button
            onClick={handleNextVerse}
            variant="outline"
            className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:border-primary-foreground/50 gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Next Verse
          </Button>

          <Button
            onClick={handleCopy}
            variant="outline"
            className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:border-primary-foreground/50 gap-2"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied" : "Copy"}
          </Button>

          <Button
            onClick={handleShare}
            variant="outline"
            className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:border-primary-foreground/50 gap-2"
          >
            <Share2 className="w-4 h-4" />
            Share
          </Button>

          {isManualSelection && (
            <Button
              onClick={handleResetToToday}
              variant="outline"
              className="bg-accent/20 text-accent border-accent/40 hover:bg-accent/30 hover:border-accent/60 gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Today's Verse
            </Button>
          )}
        </div>

        {/* Footer note */}
        <p className="text-primary-foreground/50 text-sm mt-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
          A new verse is selected each day • Background rotates every 8 seconds
        </p>
      </div>
    </div>
  );
}
