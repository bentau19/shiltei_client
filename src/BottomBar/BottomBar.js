import "./BottomBar.css"
import { NavLink } from "react-router-dom";
export const BottomBarClient=()=>{

    return <div className="BottomDiv">
        <NavLink style={{padding:"10px"}} to="/managerLogin">MANAGEMENT</NavLink>
    </div>

}
export const BottomBarManager=()=>{

    return <div className="BottomDiv">
        <NavLink style={{padding:"10px"}} to="/">HOME</NavLink>
    </div>

}
