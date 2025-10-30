import bannerImage from '@assets/generated_images/Corporate_banner_background_pattern_2700caf7.png';

interface HeroBannerProps {
  className?: string;
}

export default function HeroBanner({ className = "" }: HeroBannerProps) {
  return (
    <div className={`relative h-48 sm:h-56 md:h-72 overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-chart-2/70 to-primary/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-chart-2 to-primary" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-chart-2 via-primary to-chart-2" />
    </div>
  );
}
