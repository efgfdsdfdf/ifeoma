import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import './components.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      e.target.reset();
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

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
          style={{ padding: '3rem', position: 'relative' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <input type="text" className="input-field" placeholder="Your Name" required />
            </div>
            <div>
              <input type="email" className="input-field" placeholder="Your Email" required />
            </div>
            <div>
              <textarea className="input-field" placeholder="Tell me about your project" required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
            {status === 'sent' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}
              >
                <CheckCircle2 size={20} /> Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
