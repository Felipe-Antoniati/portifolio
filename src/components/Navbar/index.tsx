import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { NavbarData } from "./navbarData";
import logoImg from "../../assets/logo.svg";

import "./styles.css";

const Navbar = () => {
  const [openDropBar, setOpenDropBar] = useState("");

  function handleDropBar() {
    openDropBar === ""
      ? setOpenDropBar("active")
      : setOpenDropBar("");
  }

  return (
    <nav id="nav-bar">
      <Link to="/" className="nav-link">
        <img src={logoImg} alt="Logo" />
      </Link>
      <FiMenu
        className="bars"
        color="#FFF"
        size={30}
        onClick={handleDropBar}
      />
      <ul className="nav-menu">
        {NavbarData.map((item, index) => {
          return (
            <li key={index}>
              <Link

                to={item.path}
                className="nav-link"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;