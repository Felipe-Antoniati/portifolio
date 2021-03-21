import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Middle from "../../components/Middle";
import Card from "../../components/Card";
import SecondaryButton from "../../components/SecondaryButton";

import imgHappy from "../../images/templates/happy.png";
import imgBeachControl from "../../images/templates/beach-control.png";
import imgBeTheHero from "../../images/templates/be-the-hero.png";

import "./styles.css";

export default function Landing() {
  return (
    <div id="landing-page">
      <Navbar />
      <div className="fixed-content">
        <Main
          title="Felipe"
          subtitle="Antoniati"
          description="Desenvolvedor Web Freelancer, 
          responsável por criar Aplicativos 
          modernos e multiplataformas"
        />
      </div>
      <Middle title="Veja alguns dos projetos que participei">
        <div className="cards">
          <Card
            title="Happy"
            description="Aplicativo para fazer a conexão entre 
          crianças de casas sociais com pessoas 
          que querem ajudar"
          >
            <img src={imgHappy} alt="Happy" />
          </Card>
          <Card
            title="Controle de Praia"
            description="Aplicativo para faciliar o controle de 
          Acesso ao Serviço de Praia de 
          condomínios"
          >
            <img src={imgBeachControl} alt="Controle de Praia" />
          </Card>
          <Card
            title="Be The Hero"
            description="Aplicativo  para fazer a conexão entre 
          ONG's, e pessoas que querem ajudar"
          >
            <img src={imgBeTheHero} alt="Be The Hero" />
          </Card>
        </div>
        <div className="footer-landing">
          <SecondaryButton 
            name="ACESSE O PORTIFOLIO"
            path="/portifolio"
          />
        </div>
      </Middle>
    </div>
  );
}
