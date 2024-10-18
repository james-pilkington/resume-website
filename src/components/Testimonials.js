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
          description: "I am writing this letter to recommend James Pilkington. I have worked closely with James over the last three years since hiring him to my team to work as the Manager of Technical Operations reporting to myself, Director of Technical Operations. James has been promoted during his tenure to his current position of Sr. Manager. James has proven himself both as a respected leader within his own team and a responsible and trusted member of the broader leadership team here at Grubhub. He was able to gain the respect of his team by being an empathic leader, while continuing to raise the bar of performance with continued efforts in growing his team's technical skill sets and soft skills to advance their careers. He built the trust of his peers by listening to their concerns and enabling himself or his team to solve the problems being raised. In James' own career journey here I have been very impressed with his desire to learn and grow his technical and leadership skills. From his first week on the job it was clear that James is driven by an intrinsic desire to learn, we have a complex product and system and he was able to dive right into getting his hands dirty with our hardware, proactively visiting clients, learning our database and schema, teaching himself wherever he can and reaching out to ask questions when appropriate. On top of being an expert in his area, he seeks out additional opportunities to learn outside of his work hours and outside of his domain by taking online courses or absorbing knowledge specific to other departments in Product, Technology, or other business units.",
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