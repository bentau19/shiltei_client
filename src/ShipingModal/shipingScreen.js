import {useRef,useState} from 'react';
import CreditCardView from '../CreditCard/index';
import Modal from '@mui/material/Modal';
import './shipingScreen.css'
import ReactSwitch from 'react-switch';


function ShipModel({handleSend}) {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const houseRef=useRef("");
    const streetRef=useRef("");
    const cityRef=useRef("");
    const nameRef=useRef("");
    const emailRef=useRef("");
    const [ship,setShip]=useState();
    const createShip = () => {
      const refs = [houseRef, streetRef, cityRef, nameRef, emailRef];
      const allRefsFilled = refs.every(ref => ref.current.value !== "");
      if (allRefsFilled) {
        const ship = {
          house: houseRef.current.value,
          street: streetRef.current.value,
          city: cityRef.current.value,
        };
        return ship
      } else {
        alert("Please fill in all fields before creating a ship.");
        return "e"
      }
    } 

    const ChangeInput=(val)=>{
      setChecked(val)
      cityRef.current.disabled =val;
      houseRef.current.disabled =val;
      streetRef.current.disabled =val;
    }
    
    
    const handleOpen = () =>{
      if(checked){
        if(nameRef.current.value!==""&&emailRef.current.value!=="")
          setOpen(true);
        else
        alert("Please fill Email and Name.");
      }else{
      setShip(createShip())
      if (ship!=="e")
      setOpen(true);
    }
    };
    const handleClose = () =>{
      setOpen(false);};
    return<div>
            <div className='main2'>
                <h1 style={{ textDecoration: "underline" }}>SHIPPING</h1>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <div style={{ paddingTop: "20px", marginRight: "8px" }}>
    <ReactSwitch
      checked={checked}
      onChange={(val) => ChangeInput(val)}
      style={{ verticalAlign: "middle" }}
    />
  </div>
  <h3 style={{ paddingTop: "0px", margin: "0", verticalAlign: "middle" }}>איסוף עצמי</h3>
</div>
                <div className='cont2'>
                <input  ref={houseRef} dir="rtl" />
                :דירה
                <input ref={streetRef} dir="rtl" />
                :רחוב
                <input ref={cityRef}  dir="rtl" />
                :עיר
                </div>
                <div className='cont2'>
                <input ref={emailRef} style={{width:"350px", fontSize:"20px"}} />
                :שם
                <input ref={nameRef} style={{fontSize:"20px"}} dir="rtl" />
                :אימייל
            </div>

            <button onClick={handleOpen}>SEND</button>
        </div>
    <Modal 
      open={open}
      onClose={handleClose}
    >
     <div><CreditCardView ship={ship} name={nameRef.current.value} email={emailRef.current.value} onCloseFunc={handleSend} /></div> 
    </Modal></div>
}

export default ShipModel;