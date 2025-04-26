import React, { useState, useEffect } from "react";
import logo from "../images/logo.jpeg"
import app from "./firebase";
import { getDatabase, ref, get } from "firebase/database";
import linkedin from '../images/linkedin.png'
import ReactMarkdown from 'react-markdown';

 



const About = () => {

    const [portfolioArray, setPortfolioArray] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "resume/hero");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setPortfolioArray(Object.values(snapshot.val()));
        } else {
          alert("Error fetching portfolio data");
        }
      };

      fetchData();
    }, []);

    
    const email = portfolioArray[0];
    const location = portfolioArray[1];
    const phone = portfolioArray[2];

    const summaryDetail = portfolioArray[3];
    const summaryHeadline = portfolioArray[4];

    const tagline = portfolioArray[5];

    return(
        <header>

            <section intro id="intro" >
                <img src={logo} alt="me" />
                <section id="intro_details">
                <h1>JAMES PILKINGTON
                <span style={{ color: "#8000ff" }}>.</span>
                </h1>
                <h2 id="tagline">{tagline}</h2>
                <h2>Phone:</h2>
                <p>{phone}</p>
                <h2>Email:</h2>
                <p>{email}</p>
                <h2>Location:</h2>
                <p>{location}</p>
                <h2> Connect with me on</h2>
                <a href="https://www.linkedin.com/in/jamespilkington1" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin" />
                </a>
                </section>
            </section>
            
            <section summary id="summary">
                <h2>{summaryHeadline}</h2>
                <ReactMarkdown>{summaryDetail}</ReactMarkdown>
            </section>

        </header>
    )
}

export default About;