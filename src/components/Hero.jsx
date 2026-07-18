import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import heroImage from '../assets/myy 2.png';
import './components.css';

const Hero = () => {
  return (
    <div className="hero section" id="home">
      {/* Background ambient glows */}
      <div className="hero-ambient-glow glow-1"></div>
      <div className="hero-ambient-glow glow-2"></div>

      <div className="container">
        <div className="hero-layout">
          
          <div className="hero-top-section">
            <motion.div 
              className="hero-titles"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-badge">
                <Sparkles size={16} color="#6D28D9" />
                <span>Available for Freelance Projects</span>
              </div>
              
              <h1 className="heading-large">
                AI Chatbot <br />
                <span className="text-gradient">Developer</span>
              </h1>
              
              <h2 className="heading-medium" style={{ marginTop: '0.5rem' }}>
                Helping Businesses Automate, Scale and Grow with AI
              </h2>
            </motion.div>

            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-image-wrapper">
                <img src={heroImage} alt="Ifeoma Stellamarris Ezeilo" className="hero-image" />
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="hero-bottom-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
