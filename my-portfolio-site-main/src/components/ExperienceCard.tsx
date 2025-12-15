import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  className?: string;
}

const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  description, 
  technologies,
  className 
}: ExperienceCardProps) => {
  return (
    <div 
      className={cn(
        "group relative pl-8 pb-12 last:pb-0",
        className
      )}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:hidden" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_10px_hsl(38_92%_50%/0.5)]" />

      <div className="space-y-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-primary font-medium">{company}</p>
          </div>
          <span className="text-sm text-muted-foreground font-medium">{period}</span>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
