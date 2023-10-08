import React, { useReducer, useState } from "react";

export const UseReducerPage = () => {
  const initialVal: Count = { count: 1 };
  const reducer = (state: Count, action: MyReducerAction) => {
    const newState = {...state};
    switch (action.type) {
      case "+":
        newState.count += action.payload!;
        break;
      case "-":
        newState.count -= action.payload!;
        break;
      case "*":
        newState.count *= action.payload!;
        break;
      case "/":
        newState.count /= action.payload!;
        break;
      default:
        break;
    }
    return newState;
  };
  const [state, dispatch] = useReducer(reducer, initialVal);
  const [otherNum, setOtherNum] = useState(1);

  const calculateResult = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch({
      type: (e.target as HTMLElement).innerText,
      payload: otherNum,
    });
  };

  return (
    <div className="pageContainer">
      <div className="display">{state.count}</div>
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
