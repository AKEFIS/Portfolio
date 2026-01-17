import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <b className="purple">Maxime CURTIL</b>, développeur Full Stack basé à La Rochelle.
            <br />
            <br />
            Actuellement en <b className="purple">Licence Professionnelle "Métiers de l'Informatique : Applications Web"</b>, je
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
            Cette approche, je la mets aujourd'hui en pratique au sein de l'agence <b className="purple">Ancreo</b> et dans mes
            projets personnels.
            <br />
            <br />
            🎯 <b className="purple">Objectif :</b> Je suis à la recherche d'un stage de <b className="purple">3 à 4 mois</b>{" "}
            (dès fin mars 2026) pour relever de nouveaux défis techniques. <br />
            <br />
            📍 <b className="purple">Mobilité :</b> La Rochelle, Sophia-Antipolis, Rennes et Nice.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
