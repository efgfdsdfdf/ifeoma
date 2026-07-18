import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import heroImage from '../assets/myy 2.png';
import './components.css';

const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="heading-large">
              <span className="text-gradient">AI Chatbot</span><br/>
              <span className="text-gradient-accent">Developer</span>
            </h1>
          </motion.div>
          
          <h2 className="heading-medium" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
            Helping Businesses Automate, Scale and Grow with AI
          </h2>

          <p className="hero-subtitle">
            I design intelligent AI chatbots that automate customer support, generate leads, answer customer questions 24/7, and improve business efficiency using the latest AI technologies.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Hire Me <ArrowRight size={20} />
            </a>
            <a href="#portfolio" className="btn-secondary">
              View Portfolio <Briefcase size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img src={heroImage} alt="Ifeoma Stellamarris Ezeilo" className="hero-image" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
