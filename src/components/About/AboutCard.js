import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <b className="purple">Maxime CURTIL</b>, développeur Full Stack basé à Valbonne.
            <br />
            <br />
            Diplômé d'une <b className="purple">Licence Professionnelle "Métiers de l'Informatique : Applications Web"</b> (mention Bien), je
            suis passionné par la conception d'applications performantes et intuitives.
            <br />
            <br />
            En dehors du code, j'ai des passions variées qui nourrissent ma curiosité et mon équilibre.
            <br />
            La <b className="purple">mécanique automobile</b> et les <b className="purple">échecs</b> satisfont mon goût pour la
            précision technique et la stratégie.
            <br />
            La <b className="purple">cuisine</b> et les <b className="purple">jeux vidéo</b> sont pour moi des terrains
            d'expression privilégiés où créativité et évasion prennent le relais.
            <br />
            <br />
            De la <b className="purple">mécanique de précision</b> à la <b className="purple">stratégie des échecs</b>, j'aborde
            le code avec la même rigueur.
            <br />
            J'aime construire des solutions logiques et élégantes, que ce soit pour optimiser un moteur ou un algorithme.
            <br />
            Cette approche, je l'ai mise en pratique au sein de l'agence <b className="purple">Ancreo</b>, lors de mon stage à la{" "}
            <b className="purple">DDTM de la Charente-Maritime</b>, et dans mes projets personnels.
            <br />
            <br />
            🎯 <b className="purple">Objectif :</b> Je suis à la recherche d'un poste de{" "}
            <b className="purple">Développeur Web Fullstack, Frontend ou Backend</b>, disponible immédiatement. <br />
            <br />
            📍 <b className="purple">Mobilité :</b> Sophia-Antipolis et alentours (Nice, Antibes, Cannes...).
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
