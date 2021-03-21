import { Link } from "react-router-dom";
import "./styles.css";

interface PrimaryButtonProps {
  name: string;
  path: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  name, path 
}) => {
  return (
    <div className="btn-primary">
      <Link to={path}>{name}</Link>
    </div>
  );
};

export default PrimaryButton;
