import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Globe, BookOpen, Building2, ShoppingBag, FileText, Zap } from 'lucide-react';
import './components.css';

const services = [
  { icon: Bot, title: "Custom AI Chatbots" },
  { icon: MessageSquare, title: "ChatGPT Integration" },
  { icon: Globe, title: "Website AI Assistant" },
  { icon: BookOpen, title: "FAQ Chatbots" },
  { icon: Building2, title: "Business Automation" },
  { icon: ShoppingBag, title: "E-commerce Chatbots" },
  { icon: FileText, title: "AI Knowledge Base Bots" },
  { icon: Zap, title: "AI Workflow Automation" }
];

const Services = () => {
  return (
    <section className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="heading-medium text-gradient">My Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="glass-panel service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="service-icon" style={{ color: 'var(--accent-blue)' }}>
              <service.icon size={48} strokeWidth={1.5} />
            </div>
            <h3 className="service-title">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
