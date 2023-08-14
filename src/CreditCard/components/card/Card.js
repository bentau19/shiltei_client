import React from 'react';

import { CardHolder } from '../cardholder/CardHolder';
import { CardExpire } from '../cardexpire/CardExpire';
import { CardNumber } from '../cardnumber/CardNumber';
import { CardPayService } from '../cardpayservice/CardPayService';
import { CardCVV } from '../cardCVV/CardCVV';

import { getPayService } from '../../utils/getPayService';

import { Wrapper, FrontSide, BackSide, BlackLine } from './styles';

export const Card = ({ formData, cardFlipped,setCardFlipped }) => {
    const { cardNumber = '#### #### #### ####', holderName = 'SHILTEI', expires = 'MM/YY', CVV = '###' } = formData;
    const flipCard = () => {
        setCardFlipped(!cardFlipped);
    };
    return (
        <Wrapper onClick={flipCard}>
            <FrontSide isFlipped={cardFlipped}>
                <CardPayService service={getPayService(cardNumber)} />
                <CardNumber number={cardNumber} />
                <CardHolder name={holderName} />
                <CardExpire expires={expires} />
            </FrontSide>
            <BackSide isFlipped={cardFlipped}>
                <BlackLine />
                <CardCVV CVV={CVV} />
            </BackSide>
        </Wrapper>
    );
};
