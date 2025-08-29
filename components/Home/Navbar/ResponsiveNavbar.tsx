'use client';
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const ResponsiveNavbar = () => {
  const [showNavBar,setShowNavBar] = useState(false);
  const openNavbarHandler = ()=>{
    console.log("this was opened in here")
    setShowNavBar(true);}
  const closeNavbarHandler = ()=>setShowNavBar(false);

  return (
    <div>
      <Navbar openNavBar = {openNavbarHandler}/>
      <MobileNavbar
       showNavBar = {showNavBar}
       
       closeNavBar =
        {closeNavbarHandler}/>
    </div>
  )
}

export default ResponsiveNavbar