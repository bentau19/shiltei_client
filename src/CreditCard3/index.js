import React, { useState } from 'react';
import { Card } from './components/card/Card';
import { Form } from './components/form/Form';

function CreditCardView({onCloseFunc}) {
    const [formData, setFormData] = useState({});
    const [cardFlipped, setCardFlipped] = useState(false);
    
    function sendDataForm(){
        console.log(formData);
    }
    return (
        <React.Fragment>
            <Card formData={formData} setCardFlipped={setCardFlipped} cardFlipped={cardFlipped} />
            <Form setFormData={setFormData} setCardFlipped={setCardFlipped} cardFlipped={cardFlipped} sendDataForm={sendDataForm} handleClose={onCloseFunc} />
        </React.Fragment>
    );
}

export default CreditCardView;