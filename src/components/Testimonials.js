import React, { useState } from 'react';

const Testimonials = () => {
    const dishes = [
        {
          title: "Person1",
          description: "James is definitely someone you want on your team. We first met during his first work trip and right out the gate he was inquisitive, hands on, and always willing to help. He later served as my technical counterpart, hopping on calls to problem solve or strategize in real time. I also enjoyed working with him because our similar philosophies on process development, scaling, and the importance of closing the feedback loop. Outside of that, empathetic leader, grit, curiosity, and killer project manager are some of the things that come to mind when I think about working with James.",
        },
        {
          title: "Person2",
          description: "I managed James at BNY Mellon as part of the Global Fund Accounting Technology team. James always brought his A game to work, always motivated to learn new things and always ready to take on a challenge. Definitely a self starter and someone that can be counted on to work independently as well as part of a team. ",
        },
        {
          title: "Person3",
          description: "Traditional Mediterranean dessert made of layers of filo pastry, filled with nuts and honey.",
        }
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? dishes.length - 1 : prevIndex - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === dishes.length - 1 ? 0 : prevIndex + 1));
      };
    
      return (
        <section id="testimonal">
          <section id="title"><label>REFERENCES</label></section>
            <div className="carousel-container">
              <button onClick={handlePrev} aria-label="Previous Dish">❮</button>
              <div className="carousel-content">
                <h4>{dishes[currentIndex].title}</h4>
                <p>{dishes[currentIndex].description}</p>
              </div>
              <button onClick={handleNext} aria-label="Next Dish">❯</button>
            </div>
        </section>
      );
}

export default Testimonials;