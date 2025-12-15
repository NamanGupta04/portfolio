import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { value: "8.41", label: "CGPA at VIT Bhopal" },
    { value: "3+", label: "Projects Completed" },
    { value: "2+", label: "Years Experience" },
  ];

  return (
    <main className="pt-24">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative animate-in">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-card border border-border/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl font-display font-bold text-primary">NG</span>
                    </div>
                    <p className="text-muted-foreground">Naman Gupta</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="animate-in-delay-1">
              <SectionHeader
                label="About Me"
                title="DevOps and Data Enthusiast"
              />

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I am a Computer Science graduate at VIT Bhopal, motivated Cloud and DevOps enthusiast 
                  with strong hands-on experience in AWS and Kubernetes from Labs by KodeKloud. I am 
                  currently building expertise in designing, deploying, and managing containerized 
                  applications using Kubernetes, along with core AWS services such as EC2, VPC, IAM, S3, and EKS.
                </p>
                <p>
                  I actively practice real-world scenarios including cluster administration, pod and 
                  deployment management, networking, storage, and troubleshooting — aligned with the 
                  CKA and AWS Solutions Architect Associate learning paths.
                </p>
                <p>
                  I believe in learning by doing and regularly work on labs, demos, and small projects 
                  to strengthen my practical understanding of cloud-native technologies. My goal is to 
                  grow as a DevOps Engineer and contribute to building scalable, reliable, and secure 
                  cloud infrastructure.
                </p>
                <p>
                  My background includes experience in Machine Learning and Data Science, with projects 
                  achieving up to 98% accuracy.
                </p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mt-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Delhi, India</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  English
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Hindi
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Deutsch (A2)
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Let's Talk</Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="https://drive.google.com/file/d/1mq8iKjwT2nZWshm7YYmRnuKese-QmCPa/view?usp=sharing"
              
                      className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 pt-16 border-t border-border/50">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center animate-in-delay-${index + 2}`}>
                <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;