import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Middle from "../../components/Middle";

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
        <h1>Meio</h1>
      </Middle>
    </div>
  );
}
