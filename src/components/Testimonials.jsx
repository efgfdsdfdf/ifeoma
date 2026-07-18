import React from 'react';
import { motion } from 'framer-motion';
import client1 from '../assets/client_1.jpg';
import client2 from '../assets/client_2.jpg';
import client3 from '../assets/client_3.jpg';
import './components.css';

const testimonials = [
  { 
    text: "Excellent communication and a fantastic chatbot. Highly recommended.",
    name: "Sarah Jenkins",
    title: "Operations Director",
    image: client1
  },
  { 
    text: "Professional work and delivered on time. Our sales have increased significantly.",
    name: "David Chen",
    title: "E-commerce Founder",
    image: client2
  },
  { 
    text: "Our customer support became much faster and our team is finally less overwhelmed.",
    name: "Michael Roberts",
    title: "Customer Success Lead",
    image: client3
  }
];

const Testimonials = () => {
  return (
    <section className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="heading-medium text-gradient">Client Testimonials</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} className="author-image" />
              <div className="author-info">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
