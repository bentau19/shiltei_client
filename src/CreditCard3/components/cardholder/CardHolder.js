import React from 'react';

import { Wrapper, Title, Name } from './styles';

export const CardHolder = ({ name }) => {
    return (
        <Wrapper>
            <Title>Card Holder</Title>
            <Name>{name}</Name>
        </Wrapper>
    );
};
