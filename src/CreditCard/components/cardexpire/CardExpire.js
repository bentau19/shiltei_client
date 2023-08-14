import React from 'react';

import { Wrapper, Title, Name } from './styles';

export const CardExpire = ({ expires }) => {
    return (
        <Wrapper>
            <Title>Expires</Title>
            <Name>{expires}</Name>
        </Wrapper>
    );
};
