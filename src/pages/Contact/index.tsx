import Main from "../../components/Main";
import Middle from "../../components/Middle";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

import "./styles.css";

export default function About() {
  return (
    <div id="contact-page">
      <Main
        title="Contato"
        description="Mande uma mensagem para mim, 
          caso tenha alguma dúvida,  ou para iniciarmos 
          um projeto juntos"
      >
      </Main>
      <Middle>
        <form className="form">
          <div className="input-group">
            <input type="text" name="name" value="Seu Nome"/>
            <input type="email" name="email" value="Seu E-mail"/>
          </div>
        <textarea name="mensagem" value="" placeholder="Escreva sua mensagem..." />
          <Button 
            text="Enviar"
            path="/"
            styleClass="blue-btn"
          />
        </form>
      </Middle>
      <Footer />
    </div>
  );
};
