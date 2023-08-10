import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';


const style = {
    margin: "auto",
    marginTop:"5%",
    padding: '150px',
    paddingTop: '5px',
  position: 'dynamic',
   top: '50%',
  left: '50%',
 // transform: 'translate(-50%, -50%)',
   width: '20%',
   height:'40%',
  bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

function ItemInfoModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return<div>
    <button class="button-3" onClick={handleOpen}>BUY</button>
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
      <h1 style={{textAlign:"center", color: "black",textDecoration:"underline"}}>coffee</h1>
      </Box>
    </Modal></div>
}

export default ItemInfoModal;