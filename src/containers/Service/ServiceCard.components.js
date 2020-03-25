import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

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

export const StyledSubtitle = styled.p`
    height: 1.5vmin;
    width: 24vw;
    color: #70c197;
    font-family: Lato;
    font-size: 2vmin;
    font-weight: bold;
    line-height: 5vh;
    letter-spacing: 0.4vmin;
    margin-bottom: 2vmin;
`;


export const StyledTitleMedium = styled.h3`
    height: 20%;
    width: 90%;
    color: #ffffff;
    font-family: Lato;
    font-size: 7vmin;
    font-weight: bold;
    letter-spacing: 0.1vmin;
    line-height: 7vmin;
    margin-bottom: 8vh;


`;
