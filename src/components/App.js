import { React, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  //increase counter
  const increase = () => {
    setCount((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCount((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1> VÄLKOMMEN TILL FILLES RÄKNARE</h1>
      <span className="counter__output">{count}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
