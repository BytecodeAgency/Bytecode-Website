import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const StyledContainer = styled.section`
    width:100vw;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    bottom: 35vmin;
    @media (${mediaQueryMin.xs}){
        height: 60vmin;
        width: 55vw;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        position: relative;
        left: 22.5%;
        bottom: 30vmin;
    }

    @media (${mediaQueryMin.md}) {
        top: 20vmin;
        left: 25%;
    }
`;

export const StyledText = styled.p`
    max-width: 100%;
    text-align: center;
    opacity: 0.99;
    font-size: 3.5vmin;
    padding: 0 5vmin;
    font-weight: 400;
    color: #f7f7f7;
    letter-spacing: 0;
    line-height: 5.3vmin;
    @media (${mediaQueryMin.xs}) {
        height: 16.8vmin;
        font-size: 1.9vmin;
        letter-spacing: 0;
        line-height: 2.6vmin;
        text-align: center;
        padding: 0;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 2.1vmin;
        line-height: 3.1vmin;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 2.3vmin;
        line-height: 3.6vmin;
        max-width: 80%;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 3.2vmin;
        line-height: 4.2vmin;
        max-width: 80%;
    }
`;

export const StyledLogo = styled.img`
    height: 20vmin;
    @media(${mediaQueryMin.xs}){
        height: 7vmin;
        position: relative;
    }

    @media (${mediaQueryMin.md}) {
        right: 10%;
    }
`;

export const StyledTitle = styled.h3`
    text-align: center;
    margin-top: 5vmin;
    @media (${mediaQueryMin.xs}) {
        margin-bottom: 0;
        margin-top: 4vmin;
        height: 13vmin;
        width: 40vw;

        font-size: 5.2vmin;
        letter-spacing: 0.1vmin;
        line-height: 5.4vmin;
        text-align: center;
        position: relative;
        left: 13.5%;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 6.2vmin;
        line-height: 6vmin;
        margin-bottom: 5vmin;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 7vmin;
        line-height: 7.2vmin;
        left: 4%;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 8vmin;
        line-height: 8vmin;
    }
`;
