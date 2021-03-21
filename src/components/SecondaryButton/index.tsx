import { Link } from "react-router-dom";
import "./styles.css";

interface SecondaryButtonProps {
  name: string;
  path: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ 
  name, path 
}) => {
  return (
    <div className="btn-secondary">
      <Link to={path}>{name}</Link>
    </div>
  );
};

export default SecondaryButton;
