import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    margin: 50px auto;
    z-index: 100;
    width: 400px;
    height: 250px;
    box-sizing: border-box;
    text-shadow: 7px 6px 10px rgba(0, 0, 0, 1);
    color: white;
`;

const Side = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;

    background: linear-gradient(120deg, #666, black);

    transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    transform-style: preserve-3d;
    backface-visibility: hidden;

    box-shadow: 10px 10px 30px 5px rgba(0, 0, 0, 0.5);
    will-change: transform;
`;

export const FrontSide = styled(Side)`
    display: grid;
    grid-template-rows: 70px 70px 70px;
    grid-template-columns: 4fr 1fr;
    grid-template-areas:
        'bank service'
        'number number'
        'name expires';

    transform: ${props =>
        props.isFlipped
            ? 'perspective(1000px) rotateY(180deg) rotateX(0deg) rotate(0deg)'
            : 'perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg)'};
`;

export const BackSide = styled(Side)`
    transform: ${props =>
        props.isFlipped
            ? 'perspective(1000px) rotateY(0deg) rotateX(0deg) rotate(0deg)'
            : 'perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg)'};
`;

export const BlackLine = styled.div`
    position: relative;
    width: calc(100% + 40px);
    height: 40px;
    background-color: black;
    top: 30px;
    left: -20px;
`;
