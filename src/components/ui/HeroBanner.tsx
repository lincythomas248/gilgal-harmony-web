import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bible.jpg";

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
    <section className="relative min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px] flex items-start overflow-hidden">
      {/* Full-bleed Bible background - rendered as-is without overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
        }}
      />
      
      {/* Content container - positioned at top to stay above the Bible */}
      <div className="section-container relative z-10 pt-8 pb-36 md:pt-12 md:pb-44 lg:pb-52">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo - transparent, no background */}
          {logo && (
            <img 
              src={logo} 
              alt={logoAlt}
              className="block w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain mb-4 mx-auto animate-fade-in"
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
          
          {/* Title - with text shadow for readability */}
          <h1 
            className="animate-fade-in"
            style={{ 
              animationDelay: '0.2s', 
              animationFillMode: 'both',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)'
            }}
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              {title}
            </span>
            {titleSecondLine && (
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 mt-1">
                {titleSecondLine}
              </span>
            )}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p 
              className="text-base sm:text-lg md:text-xl text-accent font-serif italic leading-relaxed mt-3 animate-fade-in"
              style={{ 
                animationDelay: '0.4s', 
                animationFillMode: 'both',
                textShadow: '0 1px 4px rgba(0,0,0,0.5)'
              }}
            >
              {subtitle}
            </p>
          )}
          
          {/* Location */}
          {location && (
            <p 
              className="text-xs sm:text-sm text-white/80 tracking-[0.2em] uppercase font-medium mt-2 animate-fade-in"
              style={{ 
                animationDelay: '0.5s', 
                animationFillMode: 'both',
                textShadow: '0 1px 4px rgba(0,0,0,0.5)'
              }}
            >
              {location}
            </p>
          )}
          
          {/* CTA Buttons */}
          {(primaryCta || secondaryCta) && (
            <div 
              className="flex flex-col sm:flex-row gap-3 justify-center mt-5 animate-fade-in"
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
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white/40 hover:border-white/70 hover:bg-white/20 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
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
