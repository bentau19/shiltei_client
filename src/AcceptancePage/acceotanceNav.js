import { useNavigate } from 'react-router-dom';
import '../NavBar/designedNavBar.css';
import logo from '../NavBar/shiltei.ico'
export const AccaptanceNav = ()=>{
    const navigate = useNavigate();
    return <div id="app">
  <div  className={`rela-block nav-bar`}>
    <div className="rela-block gutter-container inner-nav-container">
      <div className={`nav-flip top`}>
        <div className="abs-center logo link">קבלה</div>
        <div onClick={()=>navigate("/")} className={`right`} style={{cursor:"pointer",color:"#333",fontSize:"24px",textDecoration:"underline"}}>
            מסך בית       
        </div>
      </div>
      <img className="navbar_img" src={logo} alt="shiltei" height={"50px"}></img> 

    </div>
  </div>
 
  </div>
}
