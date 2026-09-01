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
  mysql: "mysql-original-wordmark",
  git: "Git",
  figma: "figma-original",
  woocommerce: "woocommerce-original-wordmark",
  chartjs: "chartjs-original",
};

const userTechs = [
  { key: "symfony", name: "Symfony" },
  { key: "php", name: "PHP" },
  { key: "nodejs", name: "Node.js" },
  { key: "react", name: "React" },
  { key: "ts", name: "TypeScript" },
  { key: "js", name: "JavaScript" },
  { key: "html", name: "HTML" },
  { key: "css", name: "CSS" },
  { key: "tailwind", name: "Tailwind" },
  { key: "postgres", name: "PostgreSQL" },
  { key: "mysql", name: "MySQL" },
  { key: "docker", name: "Docker" },
  { key: "git", name: "Git" },
  { key: "wordpress", name: "WordPress" },
  { key: "woocommerce", name: "WooCommerce" },
  { key: "figma", name: "Figma" },
  { key: "chartjs", name: "Chart.js" },
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
