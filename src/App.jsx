import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <div className="bg-glow bg-node-1"></div>
      <div className="bg-glow bg-node-2"></div>
      <div className="bg-glow bg-node-3"></div>
      
      <Navbar />
      
      <main>
        <section id="home" className="section"><Hero /></section>
        <section id="about" className="section"><About /></section>
        <section id="services" className="section"><Services /></section>
        <section id="why-choose-me" className="section"><WhyChooseMe /></section>
        <section id="portfolio" className="section"><Portfolio /></section>
        <section id="process" className="section"><Process /></section>
        <section id="testimonials" className="section"><Testimonials /></section>
        <section id="contact" className="section"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
