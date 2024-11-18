import React, { useRef } from 'react';
//import { BrowserRouter as Router, Routes, Navigate, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav"
import About from "./components/About"
// import Main from "./components/Main"
import Main2 from "./components/Main2"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Portfolio from "./components/portfolio"
//import Footer from "./components/Footer"



function App() {

    // Create refs for each section
    const aboutRef = useRef(null);
    //const mainRef = useRef(null);
    const main2Ref = useRef(null);
    const testimonialsRef = useRef(null);
    const contactRef = useRef(null);
    const portfolioRef = useRef(null);
    
  return (
    <div>
    <React.Fragment>
      <Nav 
      aboutRef={aboutRef}
      mainRef={main2Ref}
      testimonialsRef={testimonialsRef}
      portfolioRef={portfolioRef}
      contactRef={contactRef}
      />
      <section ref={aboutRef}>
      <About />
      </section>
      {/* <section ref={mainRef}>
      <Main />
      </section> */}
      <section ref={main2Ref}>
      <Main2 />
      </section>
      <section ref={testimonialsRef}>
      <Testimonials />
      </section>
      <section ref={portfolioRef}>
      <Portfolio /> 
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
