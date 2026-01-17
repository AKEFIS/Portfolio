import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              À PROPOS DE <span className="purple"> MOI</span>
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              Passionné par les nouvelles technologies et la mécanique automobile, j'aborde le développement web avec une
              exigence de précision et de performance.
              <br />
              <br />
              Actuellement en <b className="purple">Licence Professionnelle "Métiers de l'Informatique"</b> (Parcours Full
              Stack) à l'université de La Rochelle, je ne me contente pas d'apprendre : je construis.
              <br />
              <br />
              Mon objectif est de concevoir des produits web innovants, en mettant un point d'honneur à la qualité
              architecturale et à la <b className="purple">cybersécurité</b>.
              <br />
              Côté technique, je suis polyvalent : je développe des architectures robustes avec{" "}
              <b className="purple">Symfony</b> et <b className="purple">Node.js</b>, tout en créant des interfaces réactives et
              maintenables grâce à <b className="purple">React.js</b> et <b className="purple">TypeScript</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
