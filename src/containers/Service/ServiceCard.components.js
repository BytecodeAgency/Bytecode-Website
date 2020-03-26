import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const CardContainer = styled.section`
    margin-top: 30vmin;
    width: 80%;
    height: 70vmin;
    left: 10%;
    position: relative;
    @media (${mediaQueryMin.xs}) {
        margin-bottom: 10vmin;
    }
    @media (${mediaQueryMin.sm}) {
        margin-bottom: 30vmin;
    }
`;

export const TextContainer = styled.section`
    width: 35vw;
    height: 35vw;
    background: #262626;
    padding: 10% 8% 10% 6%;
    margin-left: 10%;
`;

export const StyledText = styled.p`
    max-width: 80%;
    color: #ffffff;
    font-family: Lato;
    font-size: 1.2vmin;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 2.1vh;
    @media (${mediaQueryMin.xs}) {
        font-size: 1.4vmin;
        line-height: 2.4vmin;
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
    width: 40vw;
    height: 65vmin;
`;

export const StyledImage = styled.img`
    position: relative;
    bottom: 25vmin;
    left: 30vw;
    z-index: -1;
    @media (${mediaQueryMin.sm}) {
        bottom: 38vmin;
    }
    @media (${mediaQueryMin.md}) {
        bottom: 38vmin;
    }
`;

export const StyledSubtitle = styled.p`
    width: 100%;
    color: #70c197;
    font-family: Lato;
    font-size: 1.2vmin;
    font-weight: bold;
    line-height: 0.1vmin;
    letter-spacing: 0.4vmin;
    @media (${mediaQueryMin.xs}) {
        font-size: 1.6vmin;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 1.6vmin;
    }
`;

export const StyledTitleMedium = styled.h3`
    height: 20%;
    width: 90%;
    color: #ffffff;
    font-family: Lato;
    font-size: 3.4vmin;
    font-weight: bold;
    letter-spacing: 0.1vmin;
    line-height: 4vmin;
    margin-bottom: 4vmin;
    @media (${mediaQueryMin.xs}) {
        font-size: 4.1vmin;
        line-height: 4.3vmin;
    }
    @media (${mediaQueryMin.sm}) {
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
