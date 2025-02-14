import React from "react";
import "./SkillsVisualizer.css";
import yourImage from "../images/icons/my-image.png";

// Importing all tool icons from src/images/icons/
import apiIcon from "../images/icons/API.png";
import sqlIcon from "../images/icons/SQL.png";
import pythonIcon from "../images/icons/Python.webp";
import jiraIcon from "../images/icons/Jira.png";
import splunkIcon from "../images/icons/Splunk.png";
import amplitudeIcon from "../images/icons/Amplitude.png";
import htmlIcon from "../images/icons/HTML.webp";
import cssIcon from "../images/icons/css.png";
import jsIcon from "../images/icons/Javascript.webp";
import postmanIcon from "../images/icons/Postman.png";
import swaggerIcon from "../images/icons/Swagger.png";
import lookerIcon from "../images/icons/Looker.webp";
import tableauIcon from "../images/icons/tableau.png";
import datadogIcon from "../images/icons/datadog.png";
import confluenceIcon from "../images/icons/confluence.png";
import awsIcon from "../images/icons/aws.png";
import githubIcon from "../images/icons/github.png";
import zapierIcon from "../images/icons/zapier.png";
import figmaIcon from "../images/icons/figma.png";

const skills = [
  { name: "APIs", icon: apiIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "Python", icon: pythonIcon },
  { name: "JIRA", icon: jiraIcon },
  { name: "Splunk", icon: splunkIcon },
  { name: "Amplitude", icon: amplitudeIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Postman", icon: postmanIcon },
  { name: "Swagger", icon: swaggerIcon },
  { name: "Looker", icon: lookerIcon },
  { name: "Tableau", icon: tableauIcon },
  { name: "Datadog", icon: datadogIcon },
  { name: "Confluence", icon: confluenceIcon },
  { name: "AWS", icon: awsIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Zapier", icon: zapierIcon },
  { name: "Figma", icon: figmaIcon },
];

const SkillsVisualizer = () => {
  return (
    <>
    <section id="title"><label>TOOLS</label></section>
    <div className="skills-container">
      <div className="center-icon">
        <img src={yourImage} alt="Your Icon" />
      </div>
      {skills.map((skill, index) => (
        <div key={index} className={`floating-icon icon-${index}`}>
          <img src={skill.icon} alt={skill.name} title={skill.name} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SkillsVisualizer;
