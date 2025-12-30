interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const PageHeader = ({ title, subtitle, badge }: PageHeaderProps) => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          {badge}
        </span>
      )}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
