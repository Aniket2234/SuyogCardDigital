import bannerImage from '@assets/generated_images/Corporate_banner_background_pattern_2700caf7.png';

interface HeroBannerProps {
  className?: string;
}

export default function HeroBanner({ className = "" }: HeroBannerProps) {
  return (
    <div className={`relative h-56 md:h-72 overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-chart-2/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-destructive to-transparent" />
    </div>
  );
}
