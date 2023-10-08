import { useState } from "react";
import { MemoExample as NoMemo } from "../components/MemoExample";
import MemoExample from "../components/MemoExample";

export default function MemoExamplePage() {
  const [text, setText] = useState("");
  const [bool, setBool] = useState(false);
  return (
    <div className="pageContainer">
      <div>comonent without memo:</div>
      <NoMemo text={text} />
      <div>component with memo:</div>
      <MemoExample text={text} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="enter text..."
      />
      <button onClick={() => setBool(!bool)}>change some other state</button>
    </div>
  );
}
