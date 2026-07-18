import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './components.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">Ifeoma Ezeilo</div>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Hire Me</a>
        </div>

        {/* Custom Animated Hamburger Button */}
        <button 
          className={`custom-hamburger ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Sidebar Overlay Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                className="sidebar-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />
              
              {/* Sidebar */}
              <motion.div 
                className="sidebar-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              >
                <div className="sidebar-header">
                  <span className="logo">Menu</span>
                  <button onClick={closeMenu} className="close-btn"><X size={28} /></button>
                </div>
                <div className="sidebar-links">
                  <a href="#home" onClick={closeMenu}>Home</a>
                  <a href="#about" onClick={closeMenu}>About</a>
                  <a href="#services" onClick={closeMenu}>Services</a>
                  <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
                  <a href="#contact" className="btn-primary" onClick={closeMenu} style={{ justifyContent: 'center' }}>Hire Me</a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
