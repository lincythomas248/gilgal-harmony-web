import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-dove.jpg";

interface CTAButton {
  text: string;
  link: string;
}

interface HeroBannerProps {
  title: string;
  titleSecondLine?: string;
  subtitle?: string;
  location?: string;
  primaryCta?: CTAButton;
  secondaryCta?: CTAButton;
  logo?: string;
  logoAlt?: string;
  showCurvedDivider?: boolean;
}

export function HeroBanner({
  title,
  titleSecondLine,
  subtitle,
  location,
  primaryCta,
  secondaryCta,
  logo,
  logoAlt = "Logo",
  showCurvedDivider = true,
}: HeroBannerProps) {
  return (
    <section className="relative min-h-[360px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center overflow-hidden">
      {/* Full-bleed dove background */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: '15% 40%'
        }}
      />
      
      {/* Subtle warm glow behind dove area */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-radial from-gold/15 via-transparent to-transparent opacity-60" />
      
      {/* Right-to-left gradient overlay - lighter on left for dove visibility */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/50 to-black/10" />
      
      {/* Content container */}
      <div className="section-container relative z-10 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - Empty for dove visibility */}
          <div className="hidden md:block" />
          
          {/* Right column - Content */}
          <div className="text-center md:text-left">
            {/* Logo - transparent, no background */}
            {logo && (
              <img 
                src={logo} 
                alt={logoAlt}
                className="block w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain mb-5 mx-auto md:mx-0 animate-fade-in"
                style={{ 
                  background: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                  padding: 0,
                  animationDelay: '0.1s',
                  animationFillMode: 'both'
                }}
              />
            )}
            
            {/* Title */}
            <h1 
              className="font-serif animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                {title}
              </span>
              {titleSecondLine && (
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mt-1">
                  {titleSecondLine}
                </span>
              )}
            </h1>
            
            {/* Subtitle */}
            {subtitle && (
              <p 
                className="text-base sm:text-lg md:text-xl text-accent font-serif italic leading-relaxed mt-4 animate-fade-in"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
              >
                {subtitle}
              </p>
            )}
            
            {/* Location */}
            {location && (
              <p 
                className="text-xs sm:text-sm text-white/60 tracking-[0.2em] uppercase font-medium mt-3 animate-fade-in"
                style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
              >
                {location}
              </p>
            )}
            
            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div 
                className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-6 animate-fade-in"
                style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
              >
                {primaryCta && (
                  <Link 
                    to={primaryCta.link}
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-gold-dark text-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    {primaryCta.text}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {secondaryCta && (
                  <Link 
                    to={secondaryCta.link}
                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/5 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    {secondaryCta.text}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Curved bottom divider */}
      {showCurvedDivider && (
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full h-10 md:h-14" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" className="fill-background" />
        </svg>
      )}
    </section>
  );
}
