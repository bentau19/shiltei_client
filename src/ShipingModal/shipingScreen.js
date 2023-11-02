import {useRef,useState} from 'react';
// import CreditCardView from '../CreditCard/index';
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
        if(checked==false){
          alert("מלא את פרטי המשלוח כנדרש");
          return "error"
        }
        return "e"
        
      }
    } 

    const ChangeInput=(val)=>{
      setChecked(val)
      cityRef.current.value ="";
      houseRef.current.value ="";
      streetRef.current.value ="";
      cityRef.current.disabled =val;
      houseRef.current.disabled =val;
      streetRef.current.disabled =val;
    }
    
    const handleOpen =async () =>{
      if(nameRef.current.value!==""&&emailRef.current.value!==""){
      if(createShip()!=="error"){
      handleSend(createShip(),nameRef.current.value,emailRef.current.value);
      alert("נשלח בהצלחה!!!")  
    }}
      else
      alert("מלא את השם ואת האימייל כהלכה")
    };
    
    const handleClose = () =>{
      setOpen(false);};
    return<div>
            <div className='main2'>
                <h1 style={{ textDecoration: "underline"  }}>SHIPPING</h1>
  <div dir="rtl">
    <h3 style={{display:"inline-block", paddingLeft:"15px",margin:"0"}}>איסוף עצמי - </h3> 
    <div style={{display:"inline-block"}}>
  <input onChange={(val) => ChangeInput(val.target.checked)} className='toggleInput' type="checkbox" id="switch" />
  <label  className='toggleLabel' for="switch">Toggle</label> 
  </div>
  </div>
<div className='cont2' dir="rtl">
<div class="form__group field">
    <input ref={houseRef} type="input" class="form__field" placeholder="דירה" />
    <label for="name" class="form__label">דירה</label>
</div>
<div class="form__group field">
    <input ref={streetRef} type="input" class="form__field" placeholder="רחוב"/>
    <label for="name" class="form__label">רחוב</label>
</div>
<div class="form__group field">
    <input ref={cityRef} type="input" class="form__field" placeholder="עיר"/>
    <label for="name" class="form__label">עיר</label>
</div>
</div>
<div className='cont2' dir="rtl">
<div class="form__group field" style={{maxWidth:"280px"}}>
    <input ref={nameRef} type="input" class="form__field" placeholder="שם מלא" required=""/>
    <label for="name" class="form__label">שם מלא</label>
</div>

<div class="form__group field" dir='ltr' style={{maxWidth:"280px"}}>
    <input ref={emailRef} type="input" class="form__field" placeholder="אימייל" required=""/>
    <label for="name" class="form__label">אימייל</label>
</div>
</div>
<button onClick={handleOpen} class="button-29" role="button">שלח</button>

        </div>
    <Modal 
      open={open}
      onClose={handleClose}
    >
     <div>
      {/* <CreditCardView ship={ship} name={nameRef.current.value} email={emailRef.current.value} onCloseFunc={handleSend} /> */}
      </div> 
    </Modal></div>
}

export default ShipModel;