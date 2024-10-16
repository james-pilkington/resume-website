import React, { useRef } from 'react';
//import { BrowserRouter as Router, Routes, Navigate, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav"
import About from "./components/About"
import Main from "./components/Main"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
//import Footer from "./components/Footer"



function App() {

    // Create refs for each section
    const aboutRef = useRef(null);
    const mainRef = useRef(null);
    const testimonialsRef = useRef(null);
    const contactRef = useRef(null);
    
  return (
    <div>
    <React.Fragment>
      <Nav 
      aboutRef={aboutRef}
      mainRef={mainRef}
      testimonialsRef={testimonialsRef}
      contactRef={contactRef}
      />
      <section ref={aboutRef}>
      <About />
      </section>
      <section ref={mainRef}>
      <Main />
      </section>
      <section ref={testimonialsRef}>
      <Testimonials />
      </section>
      <section ref={contactRef}>
      <Contact /> 
      </section>
      {/*<Footer /> */}
    </React.Fragment>
    </div>
  );
}

export default App;
