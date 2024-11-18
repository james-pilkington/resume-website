import React, { useState, useEffect } from 'react';
import app from "./firebase";
import { getDatabase, ref, get } from "firebase/database";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [portfolioArray, setPortfolioArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "resume/references");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setPortfolioArray(Object.values(snapshot.val()));
      } else {
        console.error("Error fetching portfolio data");
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

  if (portfolioArray.length === 0) {
    return <p>Loading references...</p>;
  }

  return (
    <section id="testimonal">
      <section id="title"><label>REFERENCES</label></section>
      <div className="carousel-container">
        <button onClick={handlePrev} aria-label="Previous Reference">❮</button>
        <div className="carousel-content">
          <h4>{portfolioArray[currentIndex].referee}</h4>
          <p>{portfolioArray[currentIndex].referenceDetails}</p>
        </div>
        <button onClick={handleNext} aria-label="Next Reference">❯</button>
      </div>
    </section>
  );
}

export default Testimonials;
