import "./styles.css";

interface CardProps {
  title: string;
  description: string;
  children: any;
}

const Card: React.FC<CardProps> = ({
  title, description, children
}) => {
  return(
    <div id="card">
      <div className="header-card">
        {children}
      </div>
      <div className="content-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;