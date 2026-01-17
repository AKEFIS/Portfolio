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

const toolMap = {
  figma: "figma-original",
  git: "Git",
  vscode: "vscode",
  windows: "windows11-original",
  linux: "linux-original",
};

const userTools = [
  { key: "windows", name: "Windows" },
  { key: "linux", name: "Linux" },
  { key: "git", name: "Git" },
  { key: "vscode", name: "VS Code" },
  { key: "figma", name: "Figma" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {userTools.map((tool, index) => {
        const iconKey = toolMap[tool.key] || tool.key;
        const iconSrc = techIcons[iconKey];

        return (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            {iconSrc ? (
              <img src={iconSrc} alt={`${tool.name} icon`} className="tech-icon-images" />
            ) : (
              <span className="tech-icon-fallback">{tool.name}</span>
            )}
            <div className="tech-icons-text">{tool.name}</div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
