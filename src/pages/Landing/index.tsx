import Main from "../../components/Main";
import Middle from "../../components/Middle";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import Card from "../../components/Card";

import happyImg from "../../assets/templates/happy.png";
import beachImg from "../../assets/templates/beach-control.png";
import heroImg from "../../assets/templates/be-the-hero.png";

import "./styles.css";

export default function Landing() {
  return (
    <div id="landing-page">
      <section className="fixed">
        <Main
          title="Felipe"
          subtitle="Antoniati"
          description="Desenvolvedor web front-end, responsável por 
          criar Aplicativos completos, modernos e multiplataformas"
        >
          <section className="buttons">
            <PrimaryButton
              text="Portifolio"
              path="/portifolio"
            />
            <SecondaryButton
              text="Solicite um Orçamento"
              path="/"
            />
          </section>
        </Main>
      </section>
      <section className="absolute">
        <Middle
          titleMiddle="Veja alguns dos projetos"
        >
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
      </section>
    </div>
  );
};