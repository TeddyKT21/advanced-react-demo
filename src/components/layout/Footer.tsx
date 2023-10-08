import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Footer() {
  const user = useSelector((state:RootState) => state.user);
    return (
      <div
        style={{
          display:"flex",
          backgroundColor: "black",
          position: "absolute",
          bottom: "0",
          width: "100vw",
          justifyContent:'center',
          gap:"16px",
          padding:"4px",
          boxSizing:"border-box",
          color:'white'
        }}
      >
       <div> user name: {user.name}</div>
       <div> email: {user.email}</div>
      </div>
    );
  }