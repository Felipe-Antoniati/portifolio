import { Link } from "react-router-dom";

import "./styles.css";

interface PrimaryButtonProps {
  text: string;
  path: string;
}

const PrimaryButton: 
React.FC<PrimaryButtonProps> = ({text, path}) => {
  return(
    <nav id="nav-btn">
      <Link to={path} className="btn-link">
        {text}
      </Link>
    </nav>
  );
}

export default PrimaryButton;