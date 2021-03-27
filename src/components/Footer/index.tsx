import { Link } from "react-router-dom";
import { 
  AiOutlineGithub, 
  AiOutlineLinkedin, 
  AiOutlineCopyright 
} from "react-icons/ai";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

const Footer = () => {

  return (
    <footer id="footer-container">
      <div className="social-content">
        <Link to="/">
          <AiOutlineLinkedin className="social-icon" />      
        </Link>
        <Link to="/">
          <AiOutlineGithub className="social-icon"/>
        </Link>
      </div>
      <div className="footer-content">
        <h2>
          <AiOutlineCopyright className="copy-icon"/>
          2021 - Felipe 
          <span>Antoniati</span>
        </h2>
        <p>antoniati.felipe@gmail.com</p>
      </div>
      <img src={logoImg} alt="Logo" />
    </footer>
  );
};

export default Footer;