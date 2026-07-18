import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, CheckCircle, Rocket, HeadphonesIcon } from 'lucide-react';
import './components.css';

const steps = [
  { title: "Requirement Analysis", icon: Search },
  { title: "AI Planning", icon: PenTool },
  { title: "Development", icon: Code },
  { title: "Testing", icon: CheckCircle },
  { title: "Deployment", icon: Rocket },
  { title: "Support", icon: HeadphonesIcon }
];

const Process = () => {
  return (
    <section className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="heading-medium text-gradient">My Process</h2>
      </div>

      <div className="timeline">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-icon">
              <step.icon size={24} color="var(--accent-purple)" />
            </div>
            <div className="timeline-content glass-panel" style={{ padding: '1.5rem', flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{step.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
