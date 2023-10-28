import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes Recent <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai récemment travaillé        
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="3CA"
              description="3CA est une application de centre d'appels développée en utilisant Laravel, MySQL, etc. J'ai participé au developpement de ce projet lors de mon stage au sein d'une structure spécialisée dans les réseaux, l'équipement informatique et le développement informatique."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SANDAGE"
              description="SONDAGE Une application Web de sondage Developper en Yii, MySQL... J'ai participé au developpement de ce projet lors de mon stage au sein d'une entreprise De la ville de Ouagadougou"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={true}
              title="My BLOG"
              description="Un projet personnel, un simple blog Creer en REACT MYSQL "
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="METEO"
              description="Une Application Meteo toute simple utilisant l'API de openwheather fait en VanillaJs"
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
