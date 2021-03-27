import Main from "../../components/Main";
import Middle from "../../components/Middle";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

import "./styles.css";

export default function About() {
  return (
    <div id="about-page">
      <section className="fixed">
        <Main
          title="sobre mim"
          description="Eu sou Felipe Antoniati, 
          desenvolvedor web front-end, 
          especializado em Javascript"
        >
          <p>
            Gosto de transformar linhas de código
            em soluções que facilitam a vida das pessoas
        </p>
          <section className="buttons">
            <PrimaryButton
              text="Saiba Mais"
              path="/about"
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
          leftTitle="Front-end"
          leftDescription="HMTL / CSS Javascript
          React.JS React Native UI / UX Design"
          rightTitle="Back-end"
          rightDescription="Node.JS Express Database 
          SQL / noSQL API RESTfull"
        />
      </section>
    </div>
  );
};
