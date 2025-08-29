import Hero from './Hero/Hero';
import React from 'react';
import Service from './Service/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import ClientReview from './ClientReview/ClientReview';

const Home = () => {
  return (
    <div className= 'overflow-hidden'>
      <Hero />
      <Service />
      <Resume />
      <Projects />
      <Skills />
      <ClientReview />
      <Contact/>
      </div>
  )
}

export default Home

