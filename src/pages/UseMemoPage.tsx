import { useMemo, useRef, useState } from "react";

export default function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [bool, setBool] = useState(true);

  const square = (num: number) => {
    squareRuns.current++;
    return num ** 2;
  };
  const squareForMemo = (num: number) => {
    memoSquareRuns.current++;
    return num ** 2;
  };

  const squareRuns = useRef(0);
  const memoSquareRuns = useRef(0);

  const squareResult = square(number);
  const memoSquareResult = useMemo(() => squareForMemo(number), [number]);
  return (
    <div className="pageContainer">
      <button onClick={() => setBool(!bool)}>reload page</button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <div>
        <div>the number squared: {squareResult}</div>
        <div>square function runs: {squareRuns.current}</div>
      </div>
      <div>
        <div>the number squared with useMemo: {memoSquareResult}</div>
        <div> memoSquare function runs: {memoSquareRuns.current}</div>
      </div>
    </div>
  );
}
