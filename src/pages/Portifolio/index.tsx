import Middle from "../../components/Middle";
import Card from "../../components/Card";
import Footer from "../../components/Footer";


import happyImg from "../../assets/templates/happy.png";
import beachImg from "../../assets/templates/beach-control.png";
import heroImg from "../../assets/templates/be-the-hero.png";

import "./styles.css";

export default function Portifolio() {
  return (
    <div id="portifolio-page">
        <Middle>
          <Card
            title="Happy"
            description="Aplicativo para fazer a conexão entre 
            crianças de casas sociais com pessoas que querem ajudar"
          >
            <img src={happyImg} alt="Happy" />
          </Card>
          <Card
            title="Be The Hero"
            description="Aplicativo filantrópico para fazer a 
            conexão entre pessoas e ONG's que precisam de ajuda"
          >
            <img src={heroImg} alt="Be The Hero" />
          </Card>
          <Card
            title="Controle de Praia"
            description="O Jeito mais fácil de ter o 
            controle de acesso ao Serviço de Praia"
          >
            <img src={beachImg} alt="Controle de Praia" />
          </Card>
          <Card
            title="Happy"
            description="Aplicativo para fazer a conexão entre 
            crianças de casas sociais com pessoas que querem ajudar"
          >
            <img src={happyImg} alt="Happy" />
          </Card>
          <Card
            title="Be The Hero"
            description="Aplicativo filantrópico para fazer a 
            conexão entre pessoas e ONG's que precisam de ajuda"
          >
            <img src={heroImg} alt="Be The Hero" />
          </Card>
          <Card
            title="Controle de Praia"
            description="O Jeito mais fácil de ter o 
            controle de acesso ao Serviço de Praia"
          >
            <img src={beachImg} alt="Controle de Praia" />
          </Card>
        </Middle>
        <Footer />
    </div>
  );
};
