import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";
import { Cloud, Container, Terminal } from "lucide-react";

const Index = () => {
  const skills = [
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Building and managing cloud infrastructure with modern DevOps practices and automation.",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus", "Ansible"],
    },
    {
      icon: Terminal,
      title: "Development",
      description: "Writing efficient code and building applications with focus on scalability and performance.",
      skills: ["Python", "Go", "SQL", "Selenium", "Machine Learning", "Data Science"],
    },
    {
      icon: Container,
      title: "Infrastructure",
      description: "Containerization, orchestration, and infrastructure as code for reliable deployments.",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Linux"],
    },
  ];

  return (
    <main>
      <Hero />
      
      {/* Skills Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="What I Do"
            title="Skills & Expertise"
            description="Combining DevOps practices with development skills to build and deploy scalable solutions."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                skills={skill.skills}
                className={`animate-in-delay-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;