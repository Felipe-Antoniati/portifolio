import Navbar from "../../components/Navbar";
import Main from "../../components/Main";

import "./styles.css";

export default function Landing() {
  return (
    <div id="landing-page">
      <Navbar />
      <Main 
        title="Felipe"
        subtitle="Antoniati"
        description="Desenvolvedor Web Freelancer, 
        responsável por criar Aplicativos 
        modernos e multiplataformas"
      />
    </div>
  );
}
