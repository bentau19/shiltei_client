import rightImg from './aboutUsRight.png';
import leftImg from './aboutUsLeft.png';
import "../Home/testHome.css"
export const AboutUs=({windowSize})=>{
    return <div className="rela-block page-section new-section">
    <div className="rela-block ">
      <div className="rela-block section-nav">
        <h2 id='aboutUs' style={{marginRight:"40px"}} className="right">עלינו</h2>
      </div>
      <img src={leftImg} style={{paddingLeft:"auto"}} alt="shiltei" width={windowSize.innerWidth>850?"50%":"100%"}></img> 
      <img src={rightImg} style={{paddingLeft:"auto"}} alt="shiltei" width={windowSize.innerWidth>850?"50%":"100%"}></img>
    </div>
  </div>
}