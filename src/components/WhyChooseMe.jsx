import React from 'react';
import { motion } from 'framer-motion';
import './components.css';

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "AI Availability" },
  { value: "Fast", label: "Delivery" },
  { value: "Modern", label: "Technology" },
  { value: "Reliable", label: "Support" }
];

const WhyChooseMe = () => {
  return (
    <section className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="heading-medium text-gradient">Why Choose Me</h2>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item glass-panel"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="stat-number text-gradient-accent">{stat.value}</div>
            <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseMe;
