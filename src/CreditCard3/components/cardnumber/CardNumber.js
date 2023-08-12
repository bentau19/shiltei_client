import React from 'react';

import { Wrapper } from './styles';

export const CardNumber = ({ number, isActive }) => {
    return <Wrapper isActive={isActive}>{number}</Wrapper>;
};
