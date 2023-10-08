import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setEmail, setName } from "../store/userSlice";

export default function ChangeUser() {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();
    const setUser = () =>{
        dispatch(setName(nameInputRef.current?.value!))
        dispatch(setEmail(emailInputRef.current?.value!))
    }
    
    
  return (
    <div style={{border:"1px solid", display:"flex", flexDirection:"column", gap:"12px"}}>
        <input type="text" ref={nameInputRef} placeholder="name..."/>
        <input type="text" ref={emailInputRef}  placeholder="email..."/>
        <button onClick={() =>{setUser()}}>change User</button>
    </div>
  )
}
