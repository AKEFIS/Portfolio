import React from "react";
import { Col, Row } from "react-bootstrap";

// Dynamic import for SVGs
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "").replace(".svg", "")] = r(item);
  });
  return images;
};
const techIcons = importAll(require.context("../../Assets/TechIcons", false, /\.svg$/));

const techMap = {
  js: "Javascript",
  ts: "typescript-original",
  nodejs: "Node",
  react: "React",
  docker: "Docker",
  postgres: "postgresql-original-wordmark",
  tailwind: "Tailwind",
  php: "php-original",
  html: "html5-original",
  css: "css3-original",
  symfony: "symfony-original-wordmark",
  wordpress: "wordpress-original",
};

const userTechs = [
  { key: "symfony", name: "Symfony" },
  { key: "ts", name: "TypeScript" },
  { key: "react", name: "React" },
  { key: "docker", name: "Docker" },
  { key: "postgres", name: "PostgreSQL" },
  { key: "nodejs", name: "Node.js" },
  { key: "tailwind", name: "Tailwind" },
  { key: "php", name: "PHP" },
  { key: "html", name: "HTML" },
  { key: "css", name: "CSS" },
  { key: "js", name: "JavaScript" },
  { key: "wordpress", name: "WordPress" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {userTechs.map((tech, index) => (
        <React.Fragment key={index}>
          <Col xs={4} md={2} className="tech-icons">
            {techIcons[techMap[tech.key] || tech.key] ? (
              <img src={techIcons[techMap[tech.key] || tech.key]} alt={`${tech.name} icon`} className="tech-icon-images" />
            ) : (
              <span className="tech-icon-fallback">{tech.name}</span>
            )}
            <div className="tech-icons-text">{tech.name}</div>
          </Col>
          {index === 6 && <div className="w-100"></div>}
        </React.Fragment>
      ))}
    </Row>
  );
}

export default Techstack;
