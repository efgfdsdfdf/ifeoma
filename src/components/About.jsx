import React from 'react';
import { motion } from 'framer-motion';
import './components.css';

const About = () => {
  return (
    <section className="container section-padding">
      <motion.div 
        className="glass-panel"
        style={{ padding: '4rem' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="heading-medium text-gradient-accent" style={{ marginBottom: '2rem' }}>
            Meet Ifeoma Stellamarris Ezeilo
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            I specialize in designing intelligent AI chatbots that help businesses automate customer interactions, improve customer satisfaction, and increase productivity. My goal is to create reliable AI solutions that deliver real business value while providing exceptional user experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
