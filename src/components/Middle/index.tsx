import "./styles.css";

interface MiddleProps {
  titleMiddle?: string;
  leftTitle?: string;
  leftDescription?: string;
  rightTitle?: string;
  rightDescription?: string;
  children?: any;
}

const Middle: React.FC<MiddleProps> = ({ 
  titleMiddle,
  leftTitle, 
  leftDescription, 
  children,
  rightTitle,
  rightDescription 
}) => {
  return (
    <section id="middle">
      <h2>{titleMiddle}</h2>
      <div className="middle-content">
        <div className="middle-left">
          <h1>{leftTitle}</h1>
          <p>{leftDescription}</p>
        </div>
        {children}
        <div className="middle-right">
        <h1>{rightTitle}</h1>
          <p>{rightDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default Middle;