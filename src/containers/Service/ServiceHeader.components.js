import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const StyledContainer = styled.section`
    height: 120vmin;
    width: 110vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 1%;
`;

export const StyledText = styled.p`
    height: 19vmin;
    max-width: 100%;
    color: #ffffff;
    font-family: Lato;
    font-size: 1.7vmin;
    letter-spacing: 0;
    font-weight: 300;
    line-height: 2.5vmin;
    position: relative;
    padding-right: 4rem;
    @media (${mediaQueryMin.xs}) {
        font-size: 1.9vmin;
        line-height: 2.6vmin;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 2.1vmin;
        line-height: 3.1vmin;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 3vmin;
        line-height: 4.2vmin;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 3.2vmin;
        line-height: 4.2vmin;
    }
`;

export const ImageContainer = styled.section`
    max-height: 100vmin;
    width: 45%;
    position: relative;
    top: 10%;
    @media (${mediaQueryMin.sm}) {
        top: 0%;
    }
`;

export const StyledTitleContainer = styled.section`
    height: 70%;
    width: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 6%;
    top: 25%;
    left: 5%;
    @media (${mediaQueryMin.lg}) {
        top: 20%;
    }
`;

export const StyledImage = styled.img`
    max-width: 90%;
    max-height: 120vmin;
`;

export const StyledTitle = styled.h1`
    max-width: 90%;
    color: #ffffff;
    font-family: Lato;
    font-size: 6vmin;
    font-weight: 900;
    line-height: 5.6vmin;
    letter-spacing: 0.3vmin;
    @media (${mediaQueryMin.xs}) {
        font-size: 6.5vmin;
        line-height: 6.2vmin;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 8.4vmin;
        line-height: 7.5vmin;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 11.1vmin;
        line-height: 9vmin;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 12vmin;
        line-height: 11vmin;
    }
`;

export const StyledSubtitle = styled.p`
    height: 1.5vmin;
    width: 100%;
    color: #70c197;
    font-family: Lato;
    font-size: 2vmin;
    font-weight: bold;
    line-height: 3vmin;
    letter-spacing: 0.4vmin;
    margin-bottom: 2vmin;
`;
