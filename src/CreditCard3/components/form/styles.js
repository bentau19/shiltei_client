import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Wrapper = styled.div`
    position: relative;
    margin: -180px auto;
    width: 570px;
    height: 570px;
    box-sizing: border-box;
    display: grid;
    background: #fff;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    border-radius: 10px;
    padding: 35px;
    padding-top: 180px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr 1fr 1.5fr;
    grid-column-gap: 35px;
    grid-row-gap: 25px;
    grid-template-areas:
        'number number number'
        'name name name'
        'expires expires cvv'
        'button button button';
`;

export const Button = styled.button`
    grid-area: button;
    width: 100%;
    height: 55px;
    background: #2364d2;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 500;
    font-family: 'Source Sans Pro', sans-serif;
    box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
    color: #fff;
    cursor: pointer;
    grid-area: ${props => props.gridArea};
`;

export const Input = styled(InputMask)`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #ced6e0;
    transition: all 0.3s ease-in-out;
    font-size: 18px;
    padding: 5px 15px;
    background: none;
    color: #1a3b5d;
    font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
`;

export const InputWrapper = styled.div`
    grid-area: ${props => props.gridArea};
`;

export const Label = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
    color: #1a3b5d;
    width: 100%;
    display: block;
    user-select: none;
`;
