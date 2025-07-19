import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ExperienceItem {
  company: string;
  title: string;
  duration: string;
  type: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "PLM Coach Private Limited",
    title: "Junior Enovia Developer",
    duration: "2023 - Present",
    type: "Full-time",
    description: "Designed and developed Widget Applications to simplify tasks in the 3DEXPERIENCE platform. Developed JPOs and Triggers to automate workflows like Part creation and lifecycle transitions. Configured Policies, Access Rules, and Lifecycle States to control user actions and ensure data security.",
    technologies: ["ENOVIA 3DEXPERIENCE", "JPO", "MQL", "Triggers", "Widget Development", "Access Rules"]
  },
  {
    company: "Omega Infotech Solutions",
    title: "Software Developer Intern",
    duration: "2023 (4 Months)",
    type: "Internship",
    description: "Developed scalable web applications using Java to address core business requirements. Utilized RESTful APIs and collaborated with cross-functional teams for efficient back-end service design. Implemented responsive front-end features leveraging HTML, CSS, & JavaScript to improve user experience.",
    technologies: ["Java", "RESTful APIs", "HTML", "CSS", "JavaScript", "Web Development"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-surface-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Work Experience
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            My professional journey in software development and PLM systems
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 surface hover:shadow-medium transition-smooth">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="text-sm text-text-tertiary mb-2">{exp.duration}</div>
                    <div className="text-sm font-medium text-accent-foreground px-3 py-1 bg-accent rounded-full inline-block">
                      {exp.type}
                    </div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-medium mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-text-secondary mb-4">{exp.company}</h4>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};