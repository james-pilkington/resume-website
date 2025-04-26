import React, { useRef } from 'react';
import './App.css';
import Nav from "./components/Nav"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Portfolio from "./components/portfolio2"
import { Tools } from './components/SkillsVisualizer2';
import HeaderScroller from './components/heading';
import Carousel from './components/Testimonials2';


function App() {

    // Create refs for each section
    const aboutRef = useRef(null);
    //const mainRef = useRef(null);
    // const main2Ref = useRef(null);
    // const testimonialsRef = useRef(null);
    const contactRef = useRef(null);
    // const portfolioRef = useRef(null);
    
  return (
    <div>
    <React.Fragment>
      <Nav 
      aboutRef={aboutRef}
      // mainRef={main2Ref}
      // testimonialsRef={testimonialsRef}
      // portfolioRef={portfolioRef}
      contactRef={contactRef}
      />
      <section ref={aboutRef}>
      <About />
      </section>
      <Tools />
      <HeaderScroller text="-Experience Highlights-" />
      <Experience />
      <HeaderScroller text="-Education & Certifications-" />
      <Education />
      {/* <Main2 /> */}
      <HeaderScroller text="-Professional References-" />
      <Carousel />
      <HeaderScroller text="-Portfolio of Work-" />
      <Portfolio /> 
      <section ref={contactRef}>
        <HeaderScroller text="-CONTACT FORM-" />
      <Contact /> 
      </section>
    </React.Fragment>
    </div>
  );
}

export default App;
