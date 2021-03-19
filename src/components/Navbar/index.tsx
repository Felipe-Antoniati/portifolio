import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMenu } from "react-icons/fi";
import "./styles.css";

export default function Navbar() {
  return (
    <div id="nav-container">
      <div className="nav-content">
        <div className="content-left">
          <a href="https://github.com/felipe-antoniati">
          <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/felipe-antoniati-1288041b7/">
            <FiLinkedin />
          </a>
        </div>
        <nav className="content-right">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Portifolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Contato</Link>
            </li>
          </ul>
          <div className="drop-menu">
            <FiMenu />
          </div>
        </nav>
      </div>
    </div>
  );
}
