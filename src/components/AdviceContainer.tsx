import React, { useEffect, useState } from "react";
import axios from "axios";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
import DesktopDivider from "../assets/pattern-divider-desktop.svg";
import MobileDivider from "../assets/pattern-divider-mobile.svg";
import iconDice from "../assets/icon-dice.svg";

interface AdviceContainerProperties {
  number: string;
  text: string;
}

const AdviceContainer = ({ number, text }: AdviceContainerProperties) => {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState();

  function getData() {
    axios.get(`https://api.adviceslip.com/advice`).then((res) => {
      const advice = res.data;
      setAdvice(JSON.stringify(advice.slip.advice));
      setAdviceNumber(advice.slip.id);
    });
  }

  useEffect(() => {
    getData();
  });

  return (
    <div className="advice-container">
      <AdviceNumber number={adviceNumber} />
      <Advice advice={advice} />
      <img src={DesktopDivider} alt="Divider" />
      <button className="advice-generator__button" onClick={getData}>
        <img src={iconDice} alt="Icon Dice Button" />
      </button>
    </div>
  );
};

export default AdviceContainer;
