import ExperienceCard from "@/components/ExperienceCard";
import SectionHeader from "@/components/SectionHeader";

const Experience = () => {
  const experiences = [
    {
      title: "Operations",
      company: "Drishti Enterprise",
      period: "Dec 2024 - Nov 2025",
      description: "Managed daily operations - coordinating vendors, orders, and inventory. Developed an application for the company which increased efficiency by more than 50% and reduced human errors.",
      technologies: ["Python", "SQL", "Process Automation"],
    },
    {
      title: "Operations Lead",
      company: "NuGen Eyewear (Startup)",
      period: "Feb 2022 - Feb 2023",
      description: "Operations lead at Nugen Eyewear, overseeing client communication, negotiations, and team management to process over 200 eyewear orders. Led operational optimization, reducing turnaround time by 10%.",
      technologies: ["Business Management", "Client Relations", "Team Leadership"],
    },
  ];

  const projects = [
    {
      title: "Coronary Heart Disease Predictor (CHD)",
      company: "Machine Learning Project",
      period: "Jan 2024 – Mar 2024",
      description: "Designed and deployed ML models including Random Forest and Decision Trees to predict CHD probability. Achieved 91.8% accuracy with explainable AI techniques using SHAP.",
      technologies: ["Machine Learning", "Ensemble Methods", "SHAP", "Python"],
    },
    {
      title: "Predicting Fraudulent Transactions",
      company: "Data Science Project",
      period: "Jul 2024 - Aug 2024",
      description: "Spearheaded development of Ensemble models to detect fraudulent transactions in a dataset of 6.3 million rows. Achieved 98% accuracy with XGBoost.",
      technologies: ["XGBoost", "Python", "Feature Engineering", "Data Preprocessing"],
    },
    {
      title: "Image Captioning Model",
      company: "Deep Learning Project",
      period: "Aug 2024 - Sept 2024",
      description: "Developed an image captioning model using VGG16 for feature extraction. Engineered custom CNN-LSTM architecture processing 8,000 images achieving BLEU score of 0.53.",
      technologies: ["Python", "TensorFlow", "LSTM", "CNN", "VGG16"],
    },
  ];

  const education = [
    {
      title: "B.Tech in Computer Science & Engineering",
      company: "Vellore Institute of Technology, Bhopal",
      period: "2021 - 2025",
      description: "CGPA: 8.41/10. Specializing in software engineering with focus on DevOps, Cloud Computing, and Machine Learning.",
    },
    {
      title: "Class 12th (PCM Stream)",
      company: "St. Johns Academy, CBSE Board",
      period: "2021",
      description: "Scored 90.2% in Physics, Chemistry, and Mathematics stream.",
    },
  ];

  const certifications = [
    {
      title: "KCNA (Kubernetes and Cloud Native Associate)",
      company: "CNCF - In Progress",
      period: "Expected Jan 2026",
      description: "Kubernetes fundamentals, cloud native architecture, and container orchestration certification.",
    },
    {
      title: "AWS Solutions Architect",
      company: "Amazon Web Services - In Progress",
      period: "Expected Jan 2026",
      description: "Cloud architecture, AWS services, and designing distributed systems certification.",
    },
    {
      title: "Data Science and Machine Learning",
      company: "Coding Ninjas",
      period: "Mar 2024",
      description: "Excellence Certificate scoring above 90% in comprehensive Data Science and ML course.",
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      company: "Smart Internz",
      period: "Nov 2023",
      description: "Fundamentals of AI/ML algorithms and practical implementations.",
    },
  ];

  return (
    <main className="pt-24">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="My Journey"
              title="Experience"
              description="A timeline of my professional career and projects I've worked on."
              align="center"
            />

            <div className="mt-16 animate-in">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                  technologies={exp.technologies}
                />
              ))}
            </div>

            <div className="mt-24">
              <SectionHeader
                label="Projects"
                title="Technical Projects"
                align="center"
              />

              <div className="mt-16 animate-in-delay-1">
                {projects.map((project, index) => (
                  <ExperienceCard
                    key={index}
                    title={project.title}
                    company={project.company}
                    period={project.period}
                    description={project.description}
                    technologies={project.technologies}
                  />
                ))}
              </div>
            </div>

            <div className="mt-24">
              <SectionHeader
                label="Certifications"
                title="Credentials & Training"
                align="center"
              />

              <div className="mt-16 animate-in-delay-2">
                {certifications.map((cert, index) => (
                  <ExperienceCard
                    key={index}
                    title={cert.title}
                    company={cert.company}
                    period={cert.period}
                    description={cert.description}
                  />
                ))}
              </div>
            </div>

            <div className="mt-24">
              <SectionHeader
                label="Education"
                title="Academic Background"
                align="center"
              />

              <div className="mt-16 animate-in-delay-3">
                {education.map((edu, index) => (
                  <ExperienceCard
                    key={index}
                    title={edu.title}
                    company={edu.company}
                    period={edu.period}
                    description={edu.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;