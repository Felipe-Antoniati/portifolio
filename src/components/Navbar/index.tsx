import { useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import "./styles.css";

const Navbar = () => {
  const [addActive, setAddActive] = useState("");

  function handleActive() {
    if (addActive === "") {
      setAddActive("active");
    } else {
      setAddActive("");
    }
  }

  return (
    <>
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
            <div className="drop-menu">
              <FiMenu onClick={handleActive} />
            </div>
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
          </nav>
        </div>
      </div>
      <div id="drop-container" className={addActive}>
        <div className="close-icon">
          <FiX onClick={handleActive}/>
        </div>
        <div className="drop-content">
          <ul>
            <li className="drop-item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="drop-item">
              <Link to="/">Sobre</Link>
            </li>
            <li className="drop-item">
              <Link to="/">Portifolio</Link>
            </li>
            <li className="drop-item">
              <Link to="/">Contato</Link>
            </li>
          </ul>
          <div className="content-bottom">
            <a href="https://github.com/felipe-antoniati">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/felipe-antoniati-1288041b7/">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
