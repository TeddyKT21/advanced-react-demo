import React, { useState } from "react";

export const UseStatePage = () => {
  const initialVal: Count = { count: 1 };
  const [val, setVal] = useState(initialVal);
  const [otherNum, setOtherNum] = useState(1);

  const calculateResult = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setVal((prev) => {
        const newState = {...prev};
      switch ((e.target as HTMLButtonElement).innerText) {
        case "+":
          newState.count += otherNum;
          break;
        case "-":
          newState.count -= otherNum;
          break;
        case "*":
          newState.count *= otherNum;
          break;
        case "/":
          newState.count /= otherNum;
          break;
        default:
          break;
      }
      return newState;
    });
  };

  return (
    <div className="pageContainer">
      <div className="display">{val.count}</div>
      <input
        type="number"
        value={otherNum}
        onChange={(e) => setOtherNum(Number(e.target.value))}
      ></input>
      <button onClick={calculateResult}>+</button>
      <button onClick={calculateResult}>-</button>
      <button onClick={calculateResult}>*</button>
      <button onClick={calculateResult}>/</button>
    </div>
  );
};
