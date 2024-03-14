import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
import DesktopDivider from "../assets/pattern-divider-desktop.svg";
import MobileDivider from "../assets/pattern-divider-mobile.svg";
import iconDice from "../assets/icon-dice.svg";

interface AdviceContainerProperties {
  number: number;
  text: string;
  handleGetData: () => void;
}

const AdviceContainer = ({
  number,
  text,
  handleGetData,
}: AdviceContainerProperties) => {
  return (
    <div className="advice-container">
      <AdviceNumber number={number} />
      <Advice advice={text} />
      <img
        src={DesktopDivider}
        alt="Divider"
        className="advice-desktop-divider"
      />
      <img
        src={MobileDivider}
        alt="Divider"
        className="advice-mobile-divider"
      />
      <button className="advice-generator__button" onClick={handleGetData}>
        <img src={iconDice} alt="Icon Dice Button" />
      </button>
    </div>
  );
};

export default AdviceContainer;
