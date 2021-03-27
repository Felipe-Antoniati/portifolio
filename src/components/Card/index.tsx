import "./styles.css";

interface CardProps {
  title: string;
  description: string;
  children?: any;
};

const Card: React.FC<CardProps> = ({
  title, description, children
}) => {
  return (
    <div className="card">
      <div className="header-card">
        {children}
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;