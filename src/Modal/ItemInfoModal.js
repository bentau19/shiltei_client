import * as React from 'react';
import CreditCardView from '../CreditCard3/index';
import Modal from '@mui/material/Modal';


// const style = {
//     margin: "auto",
//     marginTop:"5%",
//     padding: '150px',
//     paddingTop: '5px',
//   position: 'dynamic',
//    top: '50%',
//   left: '50%',
//  // transform: 'translate(-50%, -50%)',
//    width: '20%',
//    height:'40%',
//   bgcolor: 'background.paper',
//    border: '2px solid #000',
//    boxShadow: 24,
//    p: 4,
// };

function ItemInfoModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return<div>
    <button className="button-3" onClick={handleOpen}>BUY</button>
    <Modal 
      open={open}
      onClose={handleClose}
    >
     <div><CreditCardView onCloseFunc={handleClose} /></div> 
    </Modal></div>
}

export default ItemInfoModal;