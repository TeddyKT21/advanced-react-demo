import { useCallback, useState } from "react";

export const UseCallbackPage = () => {
  const [reload, setReload] = useState(true);
  const [value, setValue] = useState(0);

  const logNum = () =>
    console.log(`(without useCallback) current value: ${value}`);


    //show how adding the value to the dependecies array changes the behavior of the callback
  const logNumCallback = useCallback(
    () => console.log(`(with useCallback) current value: ${value}`),
    [value]
  );

  return (
    <div className="pageContainer">
      <button
        onClick={() => {
          logNum();
          logNumCallback();
          setReload(!reload);
        }}
      >
        run both funtions
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
};
