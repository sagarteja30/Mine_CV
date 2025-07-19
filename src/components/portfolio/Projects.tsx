import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "SmartPLM AI Agent System",
    description: "Developed a fully automated Agentic AI system in n8n to validate PLM data (BOM, CR, Drawing, Schema, CA) using rule-based logic and real-time data checks from Google Sheets. Built a PLM Dashboard Generator to consolidate daily validation results and track valid/invalid counts across all sub-domains, supporting better data governance.",
    technologies: ["n8n", "AI Agents", "PLM", "Google Sheets API", "Gmail API", "Data Validation"],
    githubUrl: "https://github.com/sagarteja/smartplm-ai",
    liveUrl: "https://smartplm.sagarteja.dev",
    featured: true
  },
  {
    title: "CRI Master Pump Project",
    description: "Customized ENOVIA Business Objects, Types, and Relationships using MQL to support CRI Master Pump Project requirements. Developed & Implemented JPOs & Triggers to automate part-document connections and lifecycle control. Configured Policies, States, & Access Rules to manage secure access and streamline engineering workflows.",
    technologies: ["ENOVIA", "MQL", "JPO", "Triggers", "Business Objects", "Access Control"],
    githubUrl: "https://github.com/sagarteja/cri-pump-plm",
    liveUrl: "https://cri-pump.sagarteja.dev",
    featured: true
  },
  {
    title: "ENOVIA Widget Applications",
    description: "Designed and developed custom Widget Applications to simplify complex tasks in the 3DEXPERIENCE platform. Created intuitive interfaces for part creation, BOM management, and lifecycle transitions, improving user productivity and reducing manual errors.",
    technologies: ["3DEXPERIENCE", "JavaScript", "HTML", "CSS", "Widget Framework"],
    githubUrl: "https://github.com/sagarteja/enovia-widgets",
    liveUrl: "https://widgets.sagarteja.dev",
    featured: false
  },
  {
    title: "PLM Automation Toolkit",
    description: "Comprehensive toolkit for automating common PLM workflows including automated part creation, document linking, and lifecycle state transitions. Reduces manual effort by 70% and ensures consistent data quality across projects.",
    technologies: ["Java", "ENOVIA API", "Triggers", "Workflow Automation"],
    githubUrl: "https://github.com/sagarteja/plm-automation",
    liveUrl: "https://automation.sagarteja.dev",
    featured: false
  }
];

export const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in ENOVIA PLM development and AI automation
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full surface hover:shadow-medium transition-smooth group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-medium group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text-primary transition-smooth"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text-primary transition-smooth"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full surface hover:shadow-medium transition-smooth group">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-medium group-hover:text-primary transition-smooth">
                    {project.title}
                  </h4>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text-primary transition-smooth"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text-primary transition-smooth"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
