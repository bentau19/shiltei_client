import React from 'react';
import { useFormik } from 'formik';

import { Wrapper, Button, Input, InputWrapper, Label } from './styles';

const cardNumberMask = '9999 9999 9999 9999';

export const Form = ({ setFormData, cardFlipped, setCardFlipped, sendDataForm,handleClose }) => {
    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            holderName: '',
            expires: '',
            CVV: '',
            payService: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validate: (values) => {
            const validatedFormData = Object.keys(values).reduce((acc, el) => {
                if (values[el] === '') {
                    return acc;
                } else {
                    return { ...acc, [[el]]: values[el] };
                }
            }, {});
            setFormData(validatedFormData);
        },
    });

    const validateCardNumber = (e) => {
        if (e.target.value.replace(/#/g, '').length < 19) {
            formik.setFieldValue('cardNumber', '');
        }
    };

    const flipCard = (isFlipped) => {
        setCardFlipped(isFlipped);
    };
    const buttonPressed = () => {
        sendDataForm();
        handleClose();
    };

    return (
        <Wrapper onSubmit={formik.handleSubmit}>
            <InputWrapper gridArea="number">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.cardNumber}
                    mask={cardNumberMask}
                    maskChar={'#'}
                    onBlur={validateCardNumber}
                    placeholder={''}
                />
            </InputWrapper>
            <InputWrapper gridArea="name">
                <Label htmlFor="holderName">Card Holders</Label>
                <Input
                    id="holderName"
                    name="holderName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.holderName}
                />
            </InputWrapper>
            <InputWrapper gridArea="expires">
                <Label htmlFor="expires">Expiration Date</Label>
                <Input
                    id="expires"
                    name="expires"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.expires}
                    mask={'99/99'}
                    placeholder={'MM/YY'}
                />
            </InputWrapper>
            <InputWrapper gridArea="cvv">
                <Label htmlFor="CVV">CVV</Label>
                <Input
                    id="CVV"
                    name="CVV"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.CVV}
                    onFocus={()=>flipCard(true)}
                    onBlur={()=>flipCard(false)}
                    mask={'999'}
                    maskChar={'#'}
                    placeholder={'###'}
                />
            </InputWrapper>
            <Button gridArea="button" type="submit" onClick={buttonPressed}>
                Submit
            </Button>
        </Wrapper>
    );
};
