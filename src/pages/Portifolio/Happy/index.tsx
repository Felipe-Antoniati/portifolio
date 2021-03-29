import { Link } from "react-router-dom";

import Main from "../../../components/Main";
import Middle from "../../../components/Middle";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";

import typescriptImg from "../../../assets/icons/typescript.png";
import reactImg from "../../../assets/icons/react-js.png";
import nodeImg from "../../../assets/icons/node-js.png";
import typeormImg from "../../../assets/icons/typeorm.png";

import "./styles.css";

export default function Happy() {
  return (
    <div id="happy-page">
        <Main
          title="Happy"
          description="Aplicativo desenvolvido para levar 
          felicidade às crianças de casas sociais, por meio 
          da conexão com pessoas que desejam ajudar"
        >
          <section className="buttons">
            <Button
              styleClass="blue-btn"
              text="Acesse o Site"
              path="/portifolio"
            />
            <Button
              styleClass="black-btn"
              text="Repositorio"
              path="/"
            />
          </section>
        </Main>
        <Middle
          leftTitle="Como funciona"
          leftDescription="
            A conexão é feita a partir do cadastro das casas sociais na 
            plataforma, e então as pessoas podem entrar em contato com as 
            casas sociais através do Aplicativo Mobile ou Aplicativo Web
          "
        >
          <div className="about-project">
            <h2>Sobre o projeto</h2>
            <p>            
              Este Aplicativo foi desenvolvido durante à Next Level Week 3 (NLW)
              um evento oferecido pela RocketSeat. À NLW é um curso intensivo
              online e gratuito, com muito conteúdo prático e informativo
            </p>
          </div>
          <div className="techs">
            <h3>Tecnologias utilizadas:</h3>
            <Link to="/portifolio/happy">
              <img src={typescriptImg} alt="Typescript" />
            </Link>
            <Link to="/portifolio/happy">
              <img src={reactImg} alt="React Js" />
            </Link>
            <Link to="/portifolio/happy">
              <img src={nodeImg} alt="Node Js" />
            </Link>
            <Link to="/portifolio/happy">
              <img src={typeormImg} alt="Type ORM" />
            </Link>
          </div>
        </Middle>
        <Footer />
    </div>
  );
};