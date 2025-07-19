import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Layers3, 
  Settings, 
  Workflow,
  Cpu,
  Cloud
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Array<{ name: string; level: number }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: "PLM & ENOVIA",
    icon: Workflow,
    skills: [
      { name: "ENOVIA 3DEXPERIENCE", level: 95 },
      { name: "Engineering BOMs", level: 90 },
      { name: "JPO Development", level: 85 },
      { name: "Matrix Query Language", level: 85 }
    ]
  },
  {
    title: "Java Development",
    icon: Code2,
    skills: [
      { name: "Core Java", level: 90 },
      { name: "Advanced Java", level: 85 },
      { name: "Web Services", level: 80 },
      { name: "RESTful APIs", level: 85 }
    ]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "JSON & Widgets", level: 85 },
      { name: "Responsive Design", level: 80 }
    ]
  },
  {
    title: "Customization & Automation",
    icon: Settings,
    skills: [
      { name: "EKL & TCL", level: 80 },
      { name: "Triggers & Workflows", level: 85 },
      { name: "N8N Automation", level: 90 },
      { name: "AI Agent Systems", level: 85 }
    ]
  }
];

const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-text-tertiary">{skill.level}%</span>
      </div>
      <div className="w-full bg-accent rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-surface-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Technical skills developed through professional experience in ENOVIA development and AI automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="surface p-8 rounded-2xl shadow-subtle"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-xl mr-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional certifications or highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-medium">Clean Code</h4>
              <p className="text-sm text-text-tertiary">Enterprise Standards</p>
            </div>
            <div className="space-y-2">
              <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto">
                <Layers3 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-medium">PLM Architecture</h4>
              <p className="text-sm text-text-tertiary">ENOVIA Expertise</p>
            </div>
            <div className="space-y-2">
              <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-medium">AI Automation</h4>
              <p className="text-sm text-text-tertiary">Intelligent Systems</p>
            </div>
            <div className="space-y-2">
              <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-medium">Data Governance</h4>
              <p className="text-sm text-text-tertiary">Quality Assurance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};