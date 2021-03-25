import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

import "./styles.css";

interface BunttonsProps {
  primaryText: string;
  primaryPath: string;
  secondaryText: string;
  secondaryPath: string;
}

const Buttons: React.FC<BunttonsProps> = ({
    primaryText, primaryPath, secondaryText, secondaryPath
  }) => {
    return (
      <section className="buttons">
        <PrimaryButton
          text={primaryText}
          path={primaryPath}
        />
        <SecondaryButton
          text={secondaryText}
          path={secondaryPath}
        />
      </section>
    );
  }

export default Buttons;