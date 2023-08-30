import "./BottomBar.css"
import { NavLink } from "react-router-dom";
export const BottomBar=()=>{

    return <div className="BottomDiv">
        <NavLink style={{padding:"10px"}} to="/managerLogin">MANAGEMENT</NavLink>
    </div>

}
