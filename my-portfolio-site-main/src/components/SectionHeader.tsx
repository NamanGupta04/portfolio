import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ 
  label, 
  title, 
  description, 
  className,
  align = "left" 
}: SectionHeaderProps) => {
  return (
    <div 
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
          {label}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg text-muted-foreground leading-relaxed",
          align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
