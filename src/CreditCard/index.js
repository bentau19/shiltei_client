import React, { useState } from 'react';
import { Card } from './components/card/Card';
import { Form } from './components/form/Form';

function CreditCardView({onCloseFunc,ship,name,email}) {
    const [formData, setFormData] = useState({});
    const [cardFlipped, setCardFlipped] = useState(false);
    
    function sendDataForm(){
        console.log(formData);
    }
    return (
        <React.Fragment>
            <Card formData={formData} setCardFlipped={setCardFlipped} cardFlipped={cardFlipped} />
            <Form setFormData={setFormData} setCardFlipped={setCardFlipped} cardFlipped={cardFlipped} sendDataForm={sendDataForm} handleClose={()=>onCloseFunc(ship,name,email)} />
        </React.Fragment>
    );
}

export default CreditCardView;