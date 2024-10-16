import {useRef,useState} from 'react';
// import CreditCardView from '../CreditCard/index';
import Modal from '@mui/material/Modal';
import './shipingScreen.css'

import { Icon } from '@iconify/react';
import { ToastContainer, toast } from 'react-toastify';

function ShipModel({handleSend,handleParentClose}) {
  const success_notify = (message) =>toast.success(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;
    const error_notify=(message)=>toast.error(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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
          error_notify("נא מלא את כל השדות")
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
      success_notify("נשלח בהצלחה!!")
    }}
      else
      error_notify("נא מלא את כל השדות")
    };
    
    const handleClose = () =>{
      handleParentClose(false);};
    return<div>
            <div className='main2'>
            <Icon  className='exit-button'  width="32" onClick={() => handleClose()} icon="carbon:close-outline" /> 
                <h1 style={{ textDecoration: "underline"  }}>פרטים ומשלוח</h1>
  <div style={{overflowY:"scroll",overflowX:"hidden",maxHeight:"400px"}}>
  <div dir="rtl">
    <h3 style={{display:"inline-block", paddingLeft:"15px",margin:"0"}}>איסוף עצמי - </h3> 
    <div style={{display:"inline-block"}}>
  <input onChange={(val) => ChangeInput(val.target.checked)} className='toggleInput' type="checkbox" id="switch" />
  <label  className='toggleLabel' for="switch">Toggle</label> 
  </div>
  </div>
<div className='cont2' dir="rtl">
<div className="form__group field">
    <input ref={houseRef} type="input" className="form__field" placeholder="דירה" />
    <label for="name" className="form__label">דירה</label>
</div>
<div className="form__group field">
    <input ref={streetRef} type="input" className="form__field" placeholder="רחוב"/>
    <label for="name" className="form__label">רחוב</label>
</div>
<div className="form__group field">
    <input ref={cityRef} type="input" className="form__field" placeholder="עיר"/>
    <label for="name" className="form__label">עיר</label>
</div>
</div>
<div className='cont2' dir="rtl">
<div className="form__group field" style={{maxWidth:"280px"}}>
    <input ref={nameRef} type="input" className="form__field" placeholder="שם מלא" required=""/>
    <label for="name" className="form__label">שם מלא</label>
</div>

<div className="form__group field" dir='ltr' style={{maxWidth:"280px"}}>
    <input ref={emailRef} type="input" className="form__field" placeholder="אימייל" required=""/>
    <label for="name" className="form__label">אימייל</label>
</div>
</div>
<button onClick={handleOpen} className="button-29" role="button">שלח</button>
</div>
        </div>
    <Modal 
      open={open}
      onClose={handleClose}
    >
     <div>
      {/* <CreditCardView ship={ship} name={nameRef.current.value} email={emailRef.current.value} onCloseFunc={handleSend} /> */}
      </div> 
    </Modal>
    <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
/>
  <ToastContainer
  position="bottom-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  />
    </div>
    
}

export default ShipModel;