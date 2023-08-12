import React, { useState } from 'react';
import { Card } from './components/card/Card';
import { Form } from './components/form/Form';

function CreditCardView() {
    const [formData, setFormData] = useState({});
    const [cardFlipped, setCardFlipped] = useState(false);

    return (
        <React.Fragment>
            <Card formData={formData} setCardFlipped={setCardFlipped} cardFlipped={cardFlipped} />
            <Form setFormData={setFormData} setCardFlipped={setCardFlipped} cardFlipped={cardFlipped} />
        </React.Fragment>
    );
}

export default CreditCardView;