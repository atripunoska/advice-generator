import React, { useEffect, useState } from "react";
import axios from "axios";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";

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
      <button onClick={getData}>Click</button>
    </div>
  );
};

export default AdviceContainer;
