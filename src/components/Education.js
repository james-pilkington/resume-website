import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../images/derby.jpg"
import app from "./firebase";
import { getDatabase, ref, get } from "firebase/database";

export default function Education() {
  const [eduArray, setEduArray] = useState([]);
  const [certArray, setCertArray] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "resume/education/education");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setEduArray(Object.values(snapshot.val()));
      } else {
        alert("Error fetching education data");
      }
    };

    const fetchCerts = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "resume/education/certificates");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setCertArray(Object.values(snapshot.val()));
      } else {
        alert("Error fetching education data");
      }
    };

    // fetchExperience();
    fetchEducation();
    fetchCerts();
  }, []);


  return (
    <Wrapper>
      <EducationSection education={eduArray} />
      <CertificatesSection certificates={certArray} />
    </Wrapper>
  );
};

const EducationSection = ({ education }) => (
  <Section>
    <h2>Education</h2>
    <CardGrid>
      {education.map((edu, index) => (
        <Card key={index}>
          <h3>{edu.institution}</h3>
          <p>{edu.type}</p>
        </Card>
      ))}
    </CardGrid>
  </Section>
);

const CertificatesSection = ({ certificates }) => (
  <Section id="certificates">
    <h2>Certificates</h2>
    <CardGrid>
      {certificates.map((cert, index) => (
        <Card key={index}>
          <h3>{cert.institution}</h3>
          <p>{cert.type}</p>
        </Card>
      ))}
    </CardGrid>
  </Section>
);

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

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
  text-align: center;
`;