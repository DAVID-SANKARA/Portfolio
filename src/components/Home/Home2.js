import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            LAISSER MOI ME<span className="purple"> PRÉSENTER</span>
            </h1>
            <p className="home-about-body">
              Je suis passionné de programmation,  et des nouvelle techno en général 🤷‍♂️
            <br />
            <br />Je m'intéresse aux langages classiques comme
            <i><b className="purple"> PHP, Javascript et Java. </b></i>
            <br />
            <br />Mes domaines d'intérêt sont la création de nouvelles technologies et produits Web, ainsi que des domaines liés à la
            <i><b className="purple"> Blockchain.</b></i>
              <br />
              <br />
              Chaque fois que c'est possible, j'applique également ma passion pour le développement avec <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                 des Bibliothèques et frameworks JavaScript modernes ou Php
                </b>
              </i>
              &nbsp; Comme
              <i>
                <b className="purple"> React.js et Laravel</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
            N'hésitez pas <span className="purple">Contacter </span>Moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DAVID-SANKARA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Raphal32843"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/david-charles-yamba-sankara-a8408b21a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://dev.to/eldiablo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
