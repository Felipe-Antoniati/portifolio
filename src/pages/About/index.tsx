import Main from "../../components/Main";
import Middle from "../../components/Middle";
import Buttons from "../../components/Buttons";

import "./styles.css";

const About = () => {
  return (
    <div id="about-page">
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
      <Buttons 
        primaryText="Portifolio"
        primaryPath="/portifolio"
        secondaryText="Solicite um Orçamento"
        secondaryPath="/"
      />
      </Main>
      <Middle
      leftTitle="Front-end"
      leftDescription="HMTL / CSS Javascript
      React.JS React Native UI / UX Design"
      rightTitle="Back-end"
      rightDescription="Node.JS Express Database 
      SQL / noSQL API RESTfull"
    />
    </div>
  );
};

export default About;