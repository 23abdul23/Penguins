import React, { useState, useEffect } from "react";
import './hero.css';
import img from "./assets/logo.png";
import vid from "./assets/penguin.mp4";

function Hero() {
  const [anchorColor, setColor] = useState("white");
  const [navBackground, setNavBack] = useState("transparent");
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY; // Track last scroll position

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change navbar background and text color based on scroll position
      if (currentScrollY > document.getElementById("Home").offsetHeight) {
        setNavBack("rgba(180, 188, 195, 0.69)"); // Add a semi-transparent white background with blur
        setColor("black"); // Change text color to black
      } else {
        setNavBack("transparent");
        setColor("white"); // Reset text color to white
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='Hero' id="Home">
        <video autoPlay muted loop playsInline className='back_video'>
          <source src={vid} type='video/mp4' />
        </video>

        {/* Main Navbar */}
        <nav 
          className='outer_nav' 
          style={{
            background: navBackground,
            transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
            opacity: showNav ? 1 : 0,
            transition: "transform 0.4s ease-in-out, opacity 0.4s ease-in-out",
          }}
        >
          <img src={img} className='logo' alt='Logo' />
          <ul>
            <li><a href='#Home' onClick={(e) => { e.preventDefault(); scrollToSection("Home") }} style={{ color: anchorColor }}>Home</a></li>
            <li><a href="#Intro" onClick={(e) => { e.preventDefault(); scrollToSection("Intro") }} style={{ color: anchorColor }}>Introduction</a></li>
            <li><a href="#EDA" onClick={(e) => { e.preventDefault(); scrollToSection("EDA") }} style={{ color: anchorColor }}>EDA</a></li>
          </ul>
        </nav>

        <div className='content'>
          <h1>PENGUINS</h1>
          <a href="#" onClick={(e) => {e.preventDefault(); scrollToSection("Intro")}}>KNOW MORE</a>
        </div>
      </div>
    </>
  );
};

export default Hero;
