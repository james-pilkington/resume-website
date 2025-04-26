import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import BNY from "../images/bny.png";
import grubhub from "../images/grubhub.png";
import monotype from "../images/monotype.png";
import app from "./firebase";
import { getDatabase, ref, get } from "firebase/database";

const data = [
  { id: "bny", img: BNY, position: "left" },
  { id: "grubhub", img: grubhub, position: "right" },
  { id: "monotype", img: monotype, position: "left" }
];

export default function Experience() {
  const [selected, setSelected] = useState(null);
  const [portfolioArray, setPortfolioArray] = useState([]);
  // const [index, setIndex] = useState(false);

  // function SingleImage({ item, onClick }) {
  //   return (
  //     <div className="single-image-container" onClick={onClick}>
  //       <motion.div
  //         layoutId={item}
  //         className="single-image"
  //         // style={{ backgroundColor: color }}
  //         layout
  //       />
  //     </div>
  //   );
  // }
  useEffect(() => {
    const fetchExperience = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "resume/experience");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setPortfolioArray(Object.values(snapshot.val()));
      } else {
        alert("Error fetching portfolio data");
      }
    };

    fetchExperience();
  }, []);

  return (
    <LayoutGroup>
      <Wrapper>
        {data.map((item, index) => (
          <LogoCardWrapper key={item.id} $index={index}>
          <LogoCard
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelected(item)}
          $index={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

        >
          <img src={item.img} alt={item.id} />
        </LogoCard>
        </LogoCardWrapper>
        ))}

        <AnimatePresence>
          {selected && (
            <>
              <Overlay
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
              />
              <CenteredCard layoutId={selected.id} onClick={() => setSelected(null)}>
                {/* Render selected company details */}
                {portfolioArray.length > 0 && selected.id && (
                  <>
                    <h2>{portfolioArray[selected.id]?.company}</h2>
                    <img src={portfolioArray[selected.id]?.logo} alt={`${selected.id} logo`} />
                    {portfolioArray[selected.id]?.positions &&
                      portfolioArray[selected.id].positions
                        .slice()
                        .reverse()
                        .map((position, posIndex) => (
                          <div key={posIndex}>
                            <h3>
                              {position.title} <br /> {position.from} – {position.to || "Current"}
                            </h3>
                            <p>{position.summary}</p>
                            {position.bullets && (
                              <ul>
                                {position.bullets
                                  .filter(Boolean)
                                  .map((bullet, bulletIndex) => (
                                    <li key={bulletIndex}>{bullet}</li>
                                  ))}
                              </ul>
                            )}
                          </div>
                        ))}
                  </>
                )}
              </CenteredCard>
            </>
          )}
        </AnimatePresence>
      </Wrapper>
    </LayoutGroup>



  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  gap: 40px;
  position: relative;
  background-image: url("../src/images/experience.jpg");
  position: relative;
  background-size: cover;
  background-position: bottom;
  color: white;
  list-style-position: inside;
  list-style-type: square;
  

fixthis!::before  {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); /* Dark overlay with some transparency */
  z-index: 20; /* Ensure the overlay is below the content */
}

*
  position: relative;
  z-index: 2;
}
`;

const LogoCard = styled(motion.div)`
  width: 180px;
  height: 100px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center; /* All centered vertically */

  img {
    max-height: 80%;
    max-width: 80%;
    object-fit: contain;
  }
`;

const LogoCardWrapper = styled.div`
  transform: ${({ $index }) =>
    $index % 2 === 0 ? "translateX(-15vw)" : "translateX(15vw)"};
  transition: transform 0.3s ease;
`;

const CenteredCard = styled(motion.div)`
 position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;  /* Adjust to half the height (300px / 2) */
  margin-left: -250px;  /* Adjust to half the width (500px / 2) */
  width: 500px;
  height: 300px;
  background: white;
  border-radius: 20px;
  z-index: 11;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-height: 100px;
    object-fit: contain;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;


const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 10;
`;

