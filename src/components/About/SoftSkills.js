import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsChatDots, BsPuzzle } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiCompass, FiSearch } from "react-icons/fi";
import { AiOutlineSync } from "react-icons/ai";

const userSoftSkills = [
  { name: "Communication", icon: <BsChatDots /> },
  { name: "Travail d'équipe", icon: <HiOutlineUserGroup /> },
  { name: "Résolution de problèmes", icon: <BsPuzzle /> },
  { name: "Autonomie", icon: <FiCompass /> },
  { name: "Curiosité", icon: <FiSearch /> },
  { name: "Méthodologie Agile", icon: <AiOutlineSync /> },
];

function SoftSkills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {userSoftSkills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="tech-icon-images">{skill.icon}</div>
          <div className="tech-icons-text">{skill.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default SoftSkills;
