import React, { useState } from 'react';
import sonic from "../images/sonic.png";
import pacman from "../images/pacman.jpg";

const Portfolio = () => {
    const samples = [
        {
          title: "Sonic",
          description: "Simple infinite runner game",
          live: "https://james-pilkington.github.io/sonic/",
          repo: "https://github.com/james-pilkington/sonic.git",
          image: sonic, // replace with actual image path
        },
        {
          title: "Pacman",
          description: "Pacman Game built in JS",
          live: "https://james-pilkington.github.io/sonic/",
          repo: "https://github.com/james-pilkington/sonic.git",
          image: pacman, // replace with actual image path
        }
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? samples.length - 1 : prevIndex - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === samples.length - 1 ? 0 : prevIndex + 1));
      };
    
      return (
        <section id="portfolio">
          <section id="title"><label>PORTFOLIO</label></section>
            <div className="carousel-container">
              <button onClick={handlePrev} aria-label="Previous Dish">❮</button>
              <div className="carousel-content">
                <img src={samples[currentIndex].image} alt={samples[currentIndex].title} />
                <h4>{samples[currentIndex].title}</h4>
                <p>{samples[currentIndex].description}</p>
                <a href={samples[currentIndex].live} target="_blank" rel="noopener noreferrer">
                  {"Live Sample"}
                </a>
                <a href={samples[currentIndex].repo} target="_blank" rel="noopener noreferrer">
                  {"Repo"}
                </a>
              </div>
              <button onClick={handleNext} aria-label="Next Dish">❯</button>
            </div>
        </section>
      );
}

export default Portfolio;