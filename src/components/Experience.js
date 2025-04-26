import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import BNY from "../images/bny.png";
import grubhub from "../images/grubhub.png";
import monotype from "../images/monotype.png";
import background from "../images/experience.jpg"
import app from "./firebase";
import { getDatabase, ref, get } from "firebase/database";

export default function Experience() {
  const [selected, setSelected] = useState(null);
  const [portfolioArray, setPortfolioArray] = useState([]);

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

  const getLogo = (company) => {
    switch (company) {
      case "Monotype":
        return monotype;
      case "Grubhub":
        return grubhub;
      case "BNY":
        return BNY;
      default:
        return "";
    }
  };

  const getDateRange = (positions) => {
    if (!Array.isArray(positions)) return "";
  
    const filtered = positions.filter(pos => pos && typeof pos === "object");
  
    if (filtered.length === 0) return "";
  
    const fromDates = filtered.map(p => p.from).filter(Boolean);
    const toDates = filtered.map(p => p.to || "Current").filter(Boolean);
  
    const from = fromDates.sort()[0];
    const to = toDates.includes("Current") ? "Current" : toDates.sort().reverse()[0];
  
    return `${from} – ${to}`;
  };

  return (
    <LayoutGroup>
      <Wrapper>
      {[...portfolioArray].reverse().map((item, index) => {
  const company = Object.keys(item)[0]; // e.g. "Monotype"
  return (
<LogoCardWrapper key={company} $index={index}>
  {index % 2 !== 0 && (
    <>
      <RotatedCompany>{company}</RotatedCompany>
      <RotatedDates>
      {getDateRange(item[company])}
      </RotatedDates>
    </>
  )}
  <LogoCard
    layoutId={`experience-${index}`}
    onClick={() => setSelected({ ...item, id: index })}
    $index={index}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <img src={getLogo(company)} alt={company} />
  </LogoCard>
  {index % 2 === 0 && (
    <>
      <RotatedCompany>{company}</RotatedCompany>
      <RotatedDates>
      {getDateRange(item[company])}
            </RotatedDates>
    </>
  )}
</LogoCardWrapper>
  );
})}

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
              <CenteredCard
                layoutId={selected.id}
                onClick={() => setSelected(null)}
              >
                {Object.entries(selected).map(([company, positions]) =>
                  Array.isArray(positions)
                    ? positions
                        .filter((pos) => pos && typeof pos === "object")
                        .reverse()
                        .map((position, posIndex) => (
                          <CompanySection key={`${company}-${posIndex}`}>
                            <Logo src={getLogo(company)} alt={company} />
                            <CompanyTitle>{company}</CompanyTitle>
                            <JobTitle>
                              {position.title} <br /> {position.from} –{" "}
                              {position.to || "Current"}
                            </JobTitle>
                            <Summary>{position.summary}</Summary>
                            {position.bullets && (
                              <BulletList>
                                {position.bullets
                                  .filter(Boolean)
                                  .map((bullet, bulletIndex) => (
                                    <li key={bulletIndex}>{bullet}</li>
                                  ))}
                              </BulletList>
                            )}
                          </CompanySection>
                        ))
                    : null
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
  background-image: url(${background}); /* Adjusted path */
  background-size: cover;
  background-position: bottom;
  color: white;
  list-style-position: inside;
  list-style-type: square;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); /* Match your old overlay */
    z-index: 1;
  }

  & > * {
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
  color:Black;

  img {
    max-height: 80%;
    max-width: 80%;
    object-fit: contain;
    align-items: center;
  }
`;

const LogoCardWrapper = styled.div`
  position: relative;
  transform: ${({ $index }) =>
    $index % 2 === 0 ? "translateX(-15vw)" : "translateX(15vw)"};
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;

  &::after {
    content: ${({ $index }) =>
      $index % 2 === 0 ? "'⟨|'" : "'|⟩'"};
    position: absolute;
    top: 50%;
    ${({ $index }) => ($index % 2 === 0 ? "right: -28px;" : "left: -28px;")}
    transform: translateY(-50%);
    font-size: 18px;
    color: white;
  }
`;


const CenteredCard = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background: white;
  border-radius: 20px;
  z-index: 11;
  padding: 20px;
  overflow-y: auto;
  max-height: 80vh;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 480px) {
    width: 90%;
    padding: 16px;
  }
`;

const Logo = styled.img`
  max-height: 80px;
  object-fit: contain;
  align-self: center;
`;

const CompanySection = styled.div`
  width: 100%;
`;

const CompanyTitle = styled.h2`
  font-size: 20px;
  margin: 10px 0 5px;
  color: #222;
`;

const JobTitle = styled.h3`
  font-size: 16px;
  color: #444;
  margin-bottom: 5px;
`;

const Summary = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const BulletList = styled.ul`
  padding-left: 20px;
  margin: 0;
  color: #333;

  li {
    font-size: 14px;
    margin-bottom: 5px;
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
const RotatedCompany = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 14px;
  color: white;
  margin: 0 0px;
`;

const RotatedDates = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 12px;
  color: #ccc;
  
`;