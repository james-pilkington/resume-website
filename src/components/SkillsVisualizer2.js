import * as React from "react";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Icons
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

export const Tools = () => {
  const constraintsRef = useRef(null);
  const iconSize = 70;
  const halfIcon = iconSize / 2;
  const padding = 10;
  const safeMargin = halfIcon + padding;

  const randomPositions = useMemo(() => {
    const containerWidth = window.innerWidth * 0.9;
    const containerHeight = 200;

    const positions: { x: number; y: number }[] = [];

    function isOverlapping(x: number, y: number): boolean {
      return positions.some((pos) => {
        const dx = pos.x - x;
        const dy = pos.y - y;
        return Math.sqrt(dx * dx + dy * dy) < iconSize; // simple collision check
      });
    }

    skills.forEach(() => {
      let x, y, attempts = 0;
      do {
        x = Math.random() * (containerWidth - 2 * safeMargin) + safeMargin;
        y = Math.random() * (containerHeight - 2 * safeMargin) + safeMargin;
        attempts++;
      } while (isOverlapping(x, y) && attempts < 100);

      positions.push({ x: x - halfIcon, y: y - halfIcon });
    });

    return positions;
  }, [safeMargin,halfIcon]);

  return (
    <OuterWrapper>
      <Container ref={constraintsRef}>
        <CentralBubble>Tools</CentralBubble>
        {skills.map((skill, index) => (
          <SkillIcon
            key={index}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.4}
            style={{
              x: randomPositions[index].x,
              y: randomPositions[index].y,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={skill.icon} alt={skill.name} title={skill.name} />
          </SkillIcon>
        ))}
      </Container>
    </OuterWrapper>
  );
};

// Styled Components
const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-bg);

`;

const Container = styled(motion.div)`
  width: 98%;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  margin: 10px;
`;

const SkillIcon = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: center;
    display: block;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const CentralBubble = styled.div`
  width: 90px;
  height: 90px;
  background-color: white;
  border: 3px solid var(--primary-color);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-weight: bold;
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 
    0 0 10px var(--primary-color),
    0 0 20px var(--primary-color),
    0 0 30px rgba(0, 0, 0, 0.1); /* subtle depth */
`;
