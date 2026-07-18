import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';
import './components.css';

const Contact = () => {
  return (
    <section className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="heading-medium text-gradient">Get In Touch</h2>
      </div>

      <div className="contact-grid">
        <motion.div 
          className="contact-info glass-panel"
          style={{ padding: '3rem' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent-blue)' }}>Ifeoma Stellamarris Ezeilo</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Ready to automate and scale your business with an intelligent AI chatbot? Let's talk about your project.
          </p>

          <div className="contact-item">
            <Phone size={24} color="var(--accent-purple)" />
            <span>08038292000</span>
          </div>
          <div className="contact-item" style={{ marginTop: '1rem' }}>
            <Mail size={24} color="var(--accent-purple)" />
            <span>ifeoma.ezeilo2016@gmail.com</span>
          </div>
        </motion.div>

        <motion.div
          className="glass-panel"
          style={{ padding: '3rem' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input type="text" className="input-field" placeholder="Your Name" required />
            </div>
            <div>
              <input type="email" className="input-field" placeholder="Your Email" required />
            </div>
            <div>
              <textarea className="input-field" placeholder="Tell me about your project" required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
