import { motion } from "framer-motion";
import avatarImage from "/lovable-uploads/ae2dc402-2d27-42f7-8f5e-84ad94297104.png";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Avatar */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={avatarImage}
                  alt="Sagarteja Cherukuri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
              About Me
            </h2>
            
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p className="text-lg">
                I'm an <strong className="text-text-primary">AI-driven & Enovia Developer</strong> with 
                1+ years of experience specializing in ENOVIA 3DEXPERIENCE platform development 
                and customization. I focus on automating PLM workflows using innovative Agentic AI systems 
                that enhance efficiency and decision-making processes.
              </p>
              
              <p>
                Currently working as a Junior Enovia Developer at PLM Coach Private Limited, I develop 
                Widget Applications, implement JPOs and Triggers for workflow automation, and configure 
                security policies. My expertise spans across Java development, web technologies, and 
                advanced PLM customization using MQL, EKL, and TCL.
              </p>
              
              <p>
                My passion lies in bridging the gap between traditional PLM systems and modern AI 
                technologies. I've successfully built automated validation systems and PLM dashboards 
                that significantly improve data governance and operational insights for enterprise teams.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="px-4 py-2 bg-accent rounded-full text-sm font-medium">
                ENOVIA Development
              </div>
              <div className="px-4 py-2 bg-accent rounded-full text-sm font-medium">
                AI Automation
              </div>
              <div className="px-4 py-2 bg-accent rounded-full text-sm font-medium">
                PLM Customization
              </div>
              <div className="px-4 py-2 bg-accent rounded-full text-sm font-medium">
                Java Development
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};