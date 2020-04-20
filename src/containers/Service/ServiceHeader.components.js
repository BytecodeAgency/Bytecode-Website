import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const StyledContainer = styled.section`
    width:100vw;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    position: relative;
    @media (${mediaQueryMin.xs}){
        height: 120vmin;
        width: 110vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
        margin-bottom: 1%;
        bottom: 10vmin;
    }
    @media (${mediaQueryMin.sm}) {
        bottom: 0;
    }
}

`;

export const StyledText = styled.p`
    max-width: 90%;
    color: #ffffff;
    font-family: Lato;
    letter-spacing: 0;
    font-weight: 400;
    font-size: 3.4vmin;
    @media (${mediaQueryMin.xs}) {
        height: 19vmin;
        max-width: 100%;
        position: relative;
        padding-right: 4rem;
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
    width: 110vmin;
    position: relative;
    bottom: 6vmin;
    @media (${mediaQueryMin.xs}) {
        max-height: 100vmin;
        width: 45%;
        position: relative;
        top: 10%;
        bottom: 0;
    }

    @media (${mediaQueryMin.sm}) {
        top: 0%;
    }
`;

export const StyledTitleContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    bottom: 45vmin;
    z-index: +100;
    padding-left: 10%;

    @media (${mediaQueryMin.xs}) {
        height: 70%;
        width: 50%;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 6%;
        top: 25%;
        left: 5%;
    }

    @media (${mediaQueryMin.lg}) {
        top: 20%;
    }
`;

export const StyledImage = styled.img`
    float: right;
    position: relative;
    bottom: 10vh;
    left: 5vw;
    max-width: 90%;
    @media (${mediaQueryMin.xs}) {
        max-width: 90%;
        max-height: 120vmin;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 15vmin;
    color: #ffffff;
    font-weight: 900;
    letter-spacing: 0.6vmin;
    line-height: 13.4vmin;
    margin-bottom: 4vmin;
    @media (${mediaQueryMin.xs}) {
        max-width: 90%;
        font-family: Lato;
        letter-spacing: 0.3vmin;
        font-size: 6.5vmin;
        line-height: 6.2vmin;
        margin-bottom: 0.66em;
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
    font-weight: 500;
    font-size: 5vmin;
    letter-spacing: 0.6vmin;
    line-height: 3vmin;
    @media (${mediaQueryMin.xs}) {
        height: 1.5vmin;
        font-size: 2vmin;
        line-height: 3vmin;
        letter-spacing: 0.4vmin;
        margin-bottom: 2vmin;
    }
`;
