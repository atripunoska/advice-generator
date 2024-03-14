import { useEffect, useState } from "react";
import AdviceContainer from "./components/AdviceContainer";
import axios from "axios";
function App() {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState(0);

  function getData() {
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then((res) => {
        const advice = res.data;
        setAdvice(JSON.stringify(advice.slip.advice));
        setAdviceNumber(advice.slip.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  });

  return (
    <div className="advice-generator">
      <AdviceContainer
        number={adviceNumber}
        text={advice}
        handleGetData={getData}
      />
    </div>
  );
}

export default App;
