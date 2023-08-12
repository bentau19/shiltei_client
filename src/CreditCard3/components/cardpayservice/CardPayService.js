import React from 'react';
import { useTransition, animated } from 'react-spring';
import { ReactComponent as MastercardLogo } from './images/mastercard.svg';
import { ReactComponent as MirLogo } from './images/mir.svg';
import { ReactComponent as VisaLogo } from './images/visa.svg';
import { Wrapper } from './styles';

const services = {
    mastercard: <MastercardLogo />,
    visa: <VisaLogo />,
    mir: <MirLogo />,
};

const AnimatedWrapper = animated(Wrapper);

export const CardPayService = ({ service }) => {
    const transitions = useTransition(service, service, {
        from: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        leave: { transform: 'translate3d(0,40px,0)', opacity: 0 },
    });
    return transitions.map(({ item, props, key }) => (
        <AnimatedWrapper key={key} style={props}>
            {services[item]}
        </AnimatedWrapper>
    ));
};
