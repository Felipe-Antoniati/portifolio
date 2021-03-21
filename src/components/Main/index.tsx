import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

import "./styles.css";

interface MainProps {
  title: string;
  subtitle?: string;
  description: string;
  children?: any;
}

const Main: React.FC<MainProps> = ({
  title,
  subtitle,
  description
}) => {
  return (
    <section id="main-section">
      <div className="main-content">
        <h1 className="title-main">
          {title}
          <span>{subtitle}</span>
        </h1>
        <p className="description-main">
          {description}
        </p>
      <div className="buttons-main">
        <PrimaryButton
          name="Saiba Mais"
          path="/about"
        />        
        <SecondaryButton
          name="Solicite um orçamento"
          path="/"
        />
      </div>
      </div>
    </section>
  );
};

export default Main;
