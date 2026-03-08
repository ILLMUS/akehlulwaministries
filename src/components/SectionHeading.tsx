interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, light = false, className = "" }: SectionHeadingProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className={`font-heading text-2xl sm:text-3xl lg:text-4xl tracking-wide mb-4 ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      <div className="gold-divider mb-4" />
      {subtitle && (
        <p className={`font-body text-base sm:text-lg max-w-2xl mx-auto ${
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
