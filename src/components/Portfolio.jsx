import React from 'react';
import { motion } from 'framer-motion';
import customerSupportImg from '../assets/proj_customer_support.jpg';
import schoolAdmissionImg from '../assets/proj_school_admission.jpg';
import onlineStoreImg from '../assets/proj_online_store.jpg';
import healthcareImg from '../assets/proj_healthcare.jpg';
import realEstateImg from '../assets/proj_real_estate.jpg';
import './components.css';

const projects = [
  {
    title: "Customer Support AI Chatbot",
    description: "Built an intelligent chatbot capable of answering customer questions, handling FAQs, and reducing support workload.",
    image: customerSupportImg,
    color: "#3B82F6"
  },
  {
    title: "School Admission Assistant",
    description: "An AI assistant that guides prospective students through admission requirements and answers academic questions.",
    image: schoolAdmissionImg,
    color: "#6D28D9"
  },
  {
    title: "Online Store Chatbot",
    description: "AI chatbot that recommends products, tracks orders, and assists customers with purchases.",
    image: onlineStoreImg,
    color: "#F59E0B"
  },
  {
    title: "Healthcare Booking Assistant",
    description: "An AI-powered appointment booking chatbot for hospitals and clinics.",
    image: healthcareImg,
    color: "#10B981"
  },
  {
    title: "Real Estate AI Assistant",
    description: "Chatbot helping buyers find properties and schedule inspections.",
    image: realEstateImg,
    color: "#EC4899"
  }
];

const Portfolio = () => {
  return (
    <section className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="heading-medium text-gradient">Portfolio</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.1rem' }}>
          Recent AI Chatbot projects delivered to clients.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="portfolio-image-wrapper" style={{ borderBottom: `2px solid ${project.color}33` }}>
              <img src={project.image} alt={project.title} className="portfolio-image" />
            </div>
            <div className="portfolio-content">
              <h3 className="portfolio-title">{project.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
