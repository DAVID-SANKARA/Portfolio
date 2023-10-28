import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Bonjour à tous, je suis <span className="purple">SANKARA David Charles Yamba </span> de 
          <span className="purple"> OUAGADOUGOU.</span>
          <br /> J'ai un niveau d'étude Licence en Ingénierie Logiciel.<br /> 
          De plus, je suis actuellement employé a Cetelcom en tant que stagiaire en  développeur de logiciels .
          <br />
          <br /> 
          En dehors de la programmation, voici quelques autres activités que j'aime!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Lecture
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Football / FC BARCELONE
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Aspire à créer des choses qui font la différence !{" "}
          </p>
          <footer className="blockquote-footer">David</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
