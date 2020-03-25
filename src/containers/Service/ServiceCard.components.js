import styled from 'styled-components';

export const CardContainer = styled.section`
    margin-top: 30vh;
    width: 80%;
    height: 100vh;
    left: 10%;
    position: relative;
`;

export const TextContainer = styled.section`
    width: 35vw;
    height: 60vh;
    background: #262626;
    padding: 8% 5%;
    margin-left: 10%;
`;


export const StyledText = styled.p`
    max-width: 80%;
    color: #ffffff;
    font-family: Lato;
    font-size: 2.2vh;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 4.2vh;
    margin-top: 10%;
`;

export const ImageContainer = styled.section`
    width: 40vw;
    height: 65vh;
`;

export const StyledImage = styled.img`
    position: relative;
    bottom: 40vh;
    left: 30vw;
    z-index: -1;
`;
