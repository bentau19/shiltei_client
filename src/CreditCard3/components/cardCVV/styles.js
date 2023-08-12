import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 300px;
    height: 30px;
    background-color: white;
    text-align: right;
    padding: 0px 10px;
    box-sizing: border-box;
    line-height: 30px;
    top: 30%;
    font-size: 16px;
    color: black;
    opacity: 0.9;
    text-shadow: none;

    border: ${props => (props.isActive ? '3px solid gray' : 0)};
`;
