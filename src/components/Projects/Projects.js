import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ancreo from "../../Assets/Projects/ancreo.png";
import agcre from "../../Assets/Projects/AGCRE.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import VioletsBookshop from "../../Assets/Projects/Violet's Bookshop.jpg";
import React2Shell from "../../Assets/Projects/react2shell.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong> Récents
        </h1>
        <p style={{ color: "white" }}>Voici quelques projets sur lesquels j'ai travaillé récemment.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ancreo}
              isBlog={false}
              title="Ancreo"
              description="Cofondateur de l'agence Ancreo, je pilote la stratégie technique et la gestion de projets pour des clients réels. De l'analyse des besoins au déploiement, j'assure la livraison de solutions web complètes et sur-mesure."
              ghLink="https://github.com/AKEFIS/ancreo"
              demoLink="https://agence-ancreo.lpmiaw.univ-lr.fr"
              techs={["PHP", "HTML", "CSS", "JS", "Git", "Tailwind"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agcre}
              isBlog={false}
              title="AGCRE"
              description="Application métier développée pour la DDTM 17 afin de piloter les ressources en eau. Elle centralise des données complexes pour offrir des tableaux de bord décisionnels et automatiser la génération de rapports administratifs."
              techs={["Symfony 7", "Docker", "React", "TypeScript", "PostgreSQL", "Chart.js", "Git"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VioletsBookshop}
              isBlog={false}
              title="Violet's Bookshop"
              description="Écosystème E-commerce complet pour une librairie. Développement d'un thème WordPress 100% sur-mesure et d'une extension de gestion d'événements, couplés à une boutique WooCommerce optimisée pour une identité visuelle unique."
              demoLink="https://violetsbookshop.fr"
              techs={["WordPress", "WooCommerce", "PHP", "Figma", "MySQL", "HTML", "CSS", "JS"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="Le site sur lequel vous naviguez. Un portfolio personnel développé avec React pour présenter mon profil, mes compétences et mes projets. Optimisé pour la performance et l'expérience utilisateur."
              techs={["React", "Javascript", "CSS", "HTML"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={React2Shell}
              isBlog={false}
              title="POC - CVE React2Shell"
              description="Projet de veille technologique réalisé à l'Université de La Rochelle (LP MIAW). Ce POC démontre une vulnérabilité RCE dans React, sensibilise aux risques de sécurité et propose des mesures de protection."
              ghLink="https://github.com/AKEFIS/poc-react2shell"
              techs={["React", "TypeScript", "Node.js"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
