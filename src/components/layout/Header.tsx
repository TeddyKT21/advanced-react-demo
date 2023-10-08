import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        display:"flex",
        backgroundColor: "black",
        position: "absolute",
        top: "0",
        width: "100vw",
        justifyContent:'flex-start',
        gap:"16px",
        padding:"4px",
        boxSizing:"border-box"
      }}
    >
      <Link to={"/useReducer"}>reducer demo</Link>
      <Link to={"/useState"}> useState</Link>
      <Link to={"/customHook"}>custom hook</Link>
      <Link to={"/settings"}>settings w/ rtk</Link>
      <Link to={"/"}>home </Link>
      <Link to={'/memo'}> memo example</Link>
      <Link to={"/useMemo"}> useMemo example</Link>
      <Link to={"/useCallback"}> useCallback example</Link>
    </div>
  );
}
