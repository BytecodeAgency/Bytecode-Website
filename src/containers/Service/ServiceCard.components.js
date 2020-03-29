import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const CardContainer = styled.section`
    width: 70%;
    height: 70vmin;
    left: 10%;
    position: relative;
    bottom: 20vmin;
    @media (${mediaQueryMin.sm}) {
        margin-top: 30vmin;
        margin-bottom: 10vmin;
        bottom:30vmin;
    }
    @media (${mediaQueryMin.sm}) {
        margin-bottom: 30vmin;
        bottom: 0;
    }
`;

export const TextContainer = styled.section`
    width:90%;
    height: 90%;
    background: #262626;
    padding: 12% 10%;
    @media (${mediaQueryMin.sm}){
    padding: 10% 8% 10% 6%;
        width: 35vw;
        height: 35vw;
        margin-left: 10%;
    }

`;

export const StyledText = styled.p`
    max-width: 80%;
    color: #ffffff;
    font-size: 3.5vmin;
    letter-spacing: 0;
    font-weight: 400;
    @media (${mediaQueryMin.xs}){
        font-size: 3vmin;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 2vmin;
        line-height: 2.6vmin;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 2.6vmin;
        line-height: 2.8vmin;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 2.6vmin;
        line-height: 3vmin;
    }
`;

export const ImageContainer = styled.section`
    width: 120vw;
    @media (${mediaQueryMin.sm}){
        width: 40vw;
        height: 65vmin;
    }
`;

export const StyledImage = styled.img`
    position: relative;
    bottom: 80vmin;
    left: 10vw;
    z-index: -1;
    @media (${mediaQueryMin.sm}) {
        bottom: 38vmin;
        left: 30vw;
    }
`;

export const StyledSubtitle = styled.p`
    width: 100%;
    color: #70c197;
    font-weight: bold;
    font-size: 3vmin;
    line-height: 0.1vmin;
    letter-spacing: 0.6vmin;
    margin-bottom: 3vmin;
    @media (${mediaQueryMin.xs}){
        font-size: 2.5vmin;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 1.6vmin;
        letter-spacing: 0.4vmin;
        margin-bottom: 1.33em;
    }
`;

export const StyledTitleMedium = styled.h3`

    width: 90%;
    color: #ffffff;
    font-family: Lato;
    font-size: 10vmin;
    font-weight: bold;
    letter-spacing: 0.1vmin;
    line-height: 10vmin;
    margin-bottom: 4vmin;
    @media (${mediaQueryMin.xs}){
        font-size: 9vmin;
        line-height: 9vmin;
        margin-bottom: 3.4vmin;
    }
    @media (${mediaQueryMin.sm}) {
        height:20%;
        font-size: 5.6vmin;
        line-height: 6vmin;
        margin-bottom: 6vmin;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 7vmin;
        line-height: 7vmin;
        margin-bottom: 8vmin;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 6.6vmin;
        line-height: 7vmin;
    }
    @media (${mediaQueryMin.xl}) {
        font-size: 6.5vmin;
        line-height: 6vmin;
    }
`;
