import { useDispatch } from "react-redux";
import { changeTheme } from "../store/themeSlice";
import ChangeUser from "../components/ChangeUser";

export default function Settings() {
    const dispatch = useDispatch();
  return (
    <>
    <div className="pageContainer">
        <button onClick={() => dispatch(changeTheme())}>
            change color theme
        </button>
        <ChangeUser/>
    </div>
    </>
  )
}
