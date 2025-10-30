interface HeroBannerProps {
  className?: string;
}

export default function HeroBanner({ className = "" }: HeroBannerProps) {
  return (
    <div className={`relative h-48 md:h-64 bg-gradient-to-r from-primary via-primary/90 to-primary/80 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
    </div>
  );
}
