import { memo, useRef } from "react";

function MemoExample({ text }: MemoComponentProps) {
  const renderCount = useRef(0);
  renderCount.current++;
  console.log(`re-render count : ${renderCount.current}`);

  return (
    <div style={{ border: " 1px solid", padding: "4px" }}>
      <div> re-renders :{renderCount.current}</div>
      <div>{text}</div>
    </div>
  );
}

export default memo(MemoExample);
export { MemoExample };
