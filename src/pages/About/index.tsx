import Main from "../../components/Main";
import Buttons from "../../components/Buttons";

import "./styles.css";

const About = () => {
  return (
    <div className="about-page">
      <Main
        title="sobre mim"
        description="Eu sou Felipe Antoniati, 
      desenvolvedor web front-end, 
      especializado em Javascript"
      >
        <p>
          Gosto de transformar linhas de código
          em soluções que facilitam a vida das pessoas, 
          utilizando às tecnologias: Node.Js, React.Js e React Native
      </p>
      <Buttons 
        primaryText="Portifolio"
        primaryPath="/about"
        secondaryText="Solicite um Orçamento"
        secondaryPath="/"
      />
      </Main>
    </div>)

}

export default About;