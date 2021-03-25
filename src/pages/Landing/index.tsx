import Main from "../../components/Main";
import Buttons from "../../components/Buttons";

import "./styles.css";

const Landing = () => {
  return (
  <div className="landing-page">
    <Main 
      title="Felipe" 
      subtitle="Antoniati"
      description="Desenvolvedor web front-end,
      responsável por criar Aplicativos completos,
      modernos e multiplataformas"
    >
      <Buttons 
        primaryText="Saiba Mais"
        primaryPath="/about"
        secondaryText="Solicite um Orçamento"
        secondaryPath="/"
      />
    </Main>
  </div>)

}

export default Landing;