import React, { useState, useEffect } from 'react';
import app from "./firebase";
import { getDatabase, ref, get } from "firebase/database";

const Portfolio = () => {
  const [portfolioArray, setPortfolioArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "resume/portfolio");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setPortfolioArray(Object.values(snapshot.val()));
      } else {
        alert("Error fetching portfolio data");
      }
    };

    fetchData();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolioArray.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === portfolioArray.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="portfolio">
      <section id="title"><label>PORTFOLIO</label></section>
      <div className="carousel-container">
        <button onClick={handlePrev} aria-label="Previous Project">❮</button>
        <div className="carousel-content">
          {portfolioArray.length > 0 && (
            <>
              <h4>{portfolioArray[currentIndex].title}</h4>
              <p>{portfolioArray[currentIndex].description}</p>
              <a href={portfolioArray[currentIndex].liveURL} target="_blank" rel="noopener noreferrer">
                {"Live Sample"}
              </a>
              <a href={portfolioArray[currentIndex].gitURL} target="_blank" rel="noopener noreferrer">
                {"Repo"}
              </a>
            </>
          )}
        </div>
        <button onClick={handleNext} aria-label="Next Project">❯</button>
      </div>
    </section>
  );
};

export default Portfolio;
