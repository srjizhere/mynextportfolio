"use client";
import Hero from './Hero/Hero';
import React, { useEffect } from 'react';
import Service from './Service/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import ClientReview from './ClientReview/ClientReview';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles





const Home = () => {

useEffect(() => {
  const initAOS = async()=>{
    await import('aos');
    AOS.init({
      duration:1000,
      easing:'ease',
      once:true,
      anchorPlacement:"top-bottom"
      ,
    });
  };
  initAOS();
}, [])



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

