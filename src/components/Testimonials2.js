import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import app from "./firebase";
import { getDatabase, ref, get } from "firebase/database";
import styled from "styled-components";

export default function Carousel() {
  const [current, setCurrent] = useState(3);
  const [direction, setDirection] = useState(0);
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

  const items = Array.from(portfolioArray)
  const scroll = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + items.length) % items.length);
  };

  const getWrappedIndex = (index) => {
    return (index + items.length) % items.length;
  };

  return (
    <Wrapper>

      <CarouselContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Arrow */}
        <motion.button
          onClick={() => scroll(-1)}
          whileHover={{ scale: 1.2 }}
          style={arrowStyle(false)}
        >
          <ChevronLeft />
        </motion.button>

        {/* Carousel Items */}
        <CarouselInner>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                height:"auto"
              }}
            >
              {[...Array(5)].map((_, i) => {
                const offset = i - 2;
                const itemIndex = getWrappedIndex(current + offset);
                const item = items[itemIndex];

                if (!item) return null; // ✅ Skip rendering if item is undefined

                const scale = offset === 0 ? 1.4 : 0.8;
                const opacity = offset === 0 ? 1 : 0.5;
                const translateY = offset === 0 ? 0 : 10;

                return (
                  <motion.div
                    key={item.id}
                    style={{
                      position: "relative",
                      transformOrigin: "center",
                      flexShrink: 0,
                      zIndex: 10 - Math.abs(offset),
                      height: "auto"
                    }}
                    animate={{ scale,
                        y: translateY,
                        opacity, }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <SpeechBubble>
                    <h2 className="heading">{item.referee}</h2>
                    <h3 className="subheading">{item.Level}</h3>
                    {offset === 0 && <p>{item.referenceDetails}</p>}
                      {/* {offset !== 0 && <p>{item.Level}</p>} */}
                    </SpeechBubble>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </CarouselInner>

        {/* Right Arrow */}
        <motion.button
          onClick={() => scroll(1)}
          whileHover={{ scale: 1.2 }}
          style={arrowStyle(false)}
        >
          <ChevronRight />
        </motion.button>
      </CarouselContainer>

    </Wrapper>
  );
}

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    position: "absolute",
  }),
};

const arrowStyle = (disabled) => ({
  background: "var(--primary-color)",
  color: "white",
  border: "none",
  borderRadius: "50%",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.3 : 1,
});

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  
  background-color: var(--dark-bg);
  min-height: 50vh;
  
  @media (max-width: 600px) {
    height: auto;
    }


`;

const CarouselContainer = styled(motion.div)`
  position: relative;
  background-color: var(--dark-bg);
  padding: 40px 60px;
  border-radius: 25px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 92%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 90%;  // Adjust width to 90% of the screen width
    max-width: 350px;  // Ensure the bubble doesn't get too wide on small screens
    padding: 0px 0px;  // Adjust padding for mobile view
   
  }
`;

const SpeechBubble = styled.div`
  position: relative;
  background-color: white;
  color: black;
  border-radius: 20px;
  padding: 20px 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 400px;
  font-size: 10px;
  //overflow-y: auto;  // Allow vertical scroll when content overflows

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 40px;
    border-width: 10px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }

  p {
    font-size: 8px;
    margin-top: 10px;
    font-style: italic;
  }
  
  h2 {
  margin: 0;
  padding: 0;
}

  h3 {
  font-size: 10px;
  font-weight: normal;  /* ✅ removes bold */
  margin-top: 0px;      /* ✅ small space closer to h2 */
  margin-bottom: 8px;   /* optional if you want space before the paragraph */
  color: #555;          /* optional: a slightly lighter gray to separate visually */
}

 /* 📱 Mobile-specific adjustments ONLY */
  @media (max-width: 600px) {
  padding: 10px 10px;
  width: 120px;
  height: auto;
  
  }

`;

const CarouselInner = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 400px;
  position: relative;

  @media (max-width: 600px) {
    height: 1000px; // 👈 or set something like 250px if you want a specific mobile height
  }
`;