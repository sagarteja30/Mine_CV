import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sagarteja",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sagarteja-cherukuri",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:sagartejacherukuri4@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-text-tertiary hover:text-text-primary transition-smooth"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-text-secondary">
              © {currentYear} Sagarteja Cherukuri. All rights reserved.
            </p>
           
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
