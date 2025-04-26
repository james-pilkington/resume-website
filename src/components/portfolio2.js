import React, { useState, useEffect } from 'react';
import app from "./firebase";
import { getDatabase, ref, get } from "firebase/database";
import styled from "styled-components";

const Portfolio = () => {
  const [portfolioArray, setPortfolioArray] = useState([]);

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

  const PortfolioSection = ({ portfolio }) => (
    <Section>
      <CardGrid>
        {portfolio.map((edu, index) => (
          <Card key={index}
          colSpan={edu.size?.split("x")[0] || 1}
          rowSpan={edu.size?.split("x")[1] || 1}
          background={edu.background}
          >
            <h3>{edu.title}</h3>
            <p>{edu.description}</p>
            <a href={edu.liveURL} target="_blank" rel="noopener noreferrer">
              {"Live Sample"}
            </a>
            <a href={edu.gitURL} target="_blank" rel="noopener noreferrer">
                {"Repo"}
              </a>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );

  return (
    <Wrapper>
      <PortfolioSection portfolio={portfolioArray} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden; /* Always safe */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  gap: 40px;
  position: relative;
  background-size: cover;
  background-position: bottom;
  color: white;
  list-style-position: inside;
  list-style-type: square;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 600px) {
    width: 95%;
    padding: 0 10px;
    max-width: 500px; /* limit it so cards don't stretch too far */
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 10px; /* Extra padding for small screens */

  @media (max-width: 600px) {
    width: 95%;
    padding: 0 10px;
    max-width: 500px; /* limit it so cards don't stretch too far */
  }
  
`;

const CardGrid = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Smaller minimum */
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr; /* 1 column on very small screens */
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden; /* Clip the overlay inside the card */
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
  text-align: center;

  background-image: ${(props) =>
    props.background ? `url(${props.background})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  grid-column: span ${(props) => props.colSpan || 1};
  grid-row: span ${(props) => props.rowSpan || 1};

  a {
    display: block;
    margin-top: 10px;
    color: white;
    text-decoration: underline;
  }

  /* 🆕 Dark overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5); /* 0.5 = 50% darkness */
    z-index: 1;
  }

  /* 🆕 Make sure text is above overlay */
  * {
    position: relative;
    z-index: 2;
  }
`;



export default Portfolio;
