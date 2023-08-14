import styled from 'styled-components';

export const Wrapper = styled.div`
    grid-area: name;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-self: flex-end;
    flex-direction: column;
    font-size: 16px;
    padding: 5px 10px 5px;
    border-radius: 10px;
    box-sizing: border-box;
    opacity: 0.8;

    border: ${props => (props.isActive ? '3px solid gray' : 0)};
    background: ${props => (props.isActive ? 'rgba(0, 0, 0, 0.3)' : 0)};
`;

export const Title = styled.div`
    font-size: 13px;
    opacity: 0.7;
    padding-bottom: 6px;
`;

export const Name = styled.div`
    font-size: 18px;
    white-space: nowrap;
    text-transform: uppercase;
`;
