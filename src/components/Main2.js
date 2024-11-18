import React, { useState, useEffect } from 'react';
import BNY from "../images/bny.png";
import grubhub from "../images/grubhub.png";
import monotype from "../images/monotype.png";
import app from "./firebase";
import { getDatabase, ref, get } from "firebase/database";

const Main2 = () => {
  const [portfolioArray, setPortfolioArray] = useState([]);
  const [eduArray, setEduArray] = useState([]);
  const [certArray, setCertArray] = useState([]);

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

    fetchExperience();
    fetchEducation();
    fetchCerts();
  }, []);

  const ExperienceSection = ({ experiences }) => (
    <section id="experience">
      {experiences.slice().reverse().map((companyData, index) => {
        const [company, positions] = Object.entries(companyData)[0];
        let logo;
        switch (company) {
          case 'Monotype':
            logo = monotype;
            break;
          case 'Grubhub':
            logo = grubhub;
            break;
          case 'BNY':
            logo = BNY;
            break;
          default:
            logo = ''; // Default or placeholder image
        }
        return (
          <div key={index}>
            <h2>{company}</h2> <img src={logo} alt={`${company} logo`} />
            {positions.slice().reverse().map((position, posIndex) => (
              <div key={posIndex}>
                <h3>
                  {position.title} <br /> {position.from} – {position.to || 'Current'}
                </h3>
                <p>{position.summary}</p>
                {position.bullets && (
                  <ul>
                    {position.bullets.filter(Boolean).map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );

  const EducationSection = ({ education }) => (
    <section>
      {education.map((edu, index) => (
        <div key={index} className='edu'>
          <h3>{edu.institution}</h3>
          <p>{edu.type}</p>
        </div>
      ))}
    </section>
  );

  const CertificatesSection = ({ certificates }) => (
    <section id="certificates">
      {certificates.map((cert, index) => (
        <div key={index} className='cert'>
          <h3>{cert.institution}</h3>
          <p>{cert.type}</p>
        </div>
      ))}
    </section>
  );

  return (
    <div>
        <section id="title"><label>EXPERIENCE</label></section>
      <ExperienceSection experiences={portfolioArray} />
      <section id="title"><label>EDUCATION & CERTIFICATIONS</label></section>
      <section id="education2">
      <EducationSection education={eduArray} />
      <hr class="rounded"></hr>
      <CertificatesSection certificates={certArray} />
      </section>
    </div>
    
  );
};

export default Main2;
