import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AdviceContainer from "./components/AdviceContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AdviceContainer number={""} text={""} />
    </div>
  );
}

export default App;
