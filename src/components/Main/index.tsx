import "./styles.css";

interface MainProps {
  title: string;
  subtitle?: string;
  description: string;
  children?: any;
}

const Main: 
  React.FC<MainProps> = ({
    title, subtitle, description, children
  }) => {
  return (
    <section id="main-section">
      <div className="main-content">
        <div className="left-main">
          <h1>{title}<span>{subtitle}</span></h1>
          <p>{description}</p>
          {children}
        </div>
      </div>
    </section>
  );  
};

export default Main;