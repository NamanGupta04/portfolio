import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  className?: string;
}

const SkillCard = ({ icon: Icon, title, description, skills, className }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "group p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm",
        "hover:border-primary/30 hover:shadow-[var(--shadow-glow)] transition-all duration-500",
        "hover-lift",
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
