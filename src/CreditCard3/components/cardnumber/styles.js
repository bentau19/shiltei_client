import styled from 'styled-components';

export const Wrapper = styled.div`
    grid-area: number;
    font-size: 32px;
    display: flex;
    align-self: center;
    padding: 5px 10px 5px;
    border-radius: 10px;
    box-sizing: border-box;
    opacity: 0.8;

    border: ${props => (props.isActive ? '3px solid gray' : 0)};
    background: ${props => (props.isActive ? 'rgba(0, 0, 0, 0.3)' : 0)};
`;
