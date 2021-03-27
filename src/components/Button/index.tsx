import { Link } from "react-router-dom";

import "./styles.css";

interface ButtonProps {
  text: string;
  path: string;
  styleClass: string;
};

const Button: React.FC<ButtonProps> = ({
  text, path, styleClass
}) => {
  return (
    <div id="button">
      <Link 
        to={path} 
        id="button-link" 
        className={styleClass}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;