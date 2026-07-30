import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceFinalCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function ServiceFinalCTA({
  title = "Ready to start your project?",
  subtitle = "Partner with our team of elite engineers and designers to build transformative digital solutions.",
  buttonText = "Get in Touch"
}: ServiceFinalCTAProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-space-32 bg-primary-container text-on-primary rounded-2xl p-8 sm:p-12 text-center"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display-md text-2xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-6"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-body-lg text-base sm:text-lg text-on-primary-container mb-8 max-w-2xl mx-auto opacity-90"
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link 
          className="inline-flex items-center justify-center px-8 py-4 bg-surface text-primary font-body-md font-medium rounded-DEFAULT hover:bg-surface-variant transition-colors shadow-sm hover:shadow-md" 
          to="/start-project"
        >
          {buttonText}
        </Link>
      </motion.div>
    </motion.section>
  );
}
