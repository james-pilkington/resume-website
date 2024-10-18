import React from "react";
import logo from "../images/logo.jpeg"

const About = () => {
    return(
        <header>

            <section intro id="intro" >
                <img src={logo} alt="me" />
                <section id="intro_details">
                <h1>JAMES PILKINGTON
                <span style={{ color: "#8000ff" }}>.</span>
                </h1>
                <h2 id="tagline">Client-Obsessed Product & Implementation Expert: Coaching and Empowering Teams towards Triumphs</h2>
                <h2>Phone:</h2>
                <p>9784089868</p>
                <h2>Email:</h2>
                <p>James.Pilkington2@gmail.com</p>
                <h2>Location:</h2>
                <p>Boston, MA</p>
                </section>
            </section>
            
            <section summary id="summary">
                <h2>Hello! I'm James</h2>
                <p>Welcome to my resume website, 
                    where I showcase my skills and experience. 
                    I am a driven and motivated player-coach Manager 
                    with a passion for product and customer experience. 
                    Please take a moment to browse my page and 
                    learn more about me. <br/><br/>
                    
                    
                    
                    With over 15 years experience spanning client-facing technical roles and the last 5 being increasingly focussed within  product roles, I excel in managing and delivering products and results. I have a demonstrated track record of leading both local and virtual teams and collaborating effectively with internal and external stakeholders. My approach revolves around closely understanding client needs and use cases to ensure tailored solutions. I possess a knack for swiftly acquiring technical skills and leveraging them to propel team success with energy and enthusiasm. Having worked in diverse cultural settings, I've honed my communication and delivery skills, enabling me to adapt my approach to suit varied audiences effectively.
                    </p>
            </section>

        </header>
    )
}

export default About;