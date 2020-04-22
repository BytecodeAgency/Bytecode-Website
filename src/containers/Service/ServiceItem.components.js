import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const StyledContainer = styled.section`
    width: ${props => (props.src ? '100vw' : '90vw')};
    position: relative;
    bottom: 20vmin;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    margin-bottom: 10vmin;
    margin-top: 0;
    margin-left: ${props => (props.src ? '10vw' : '0vw')};
    background-color: ${props => (props.light ? '#262626' : '#1a1a1a')};
    @media (${mediaQueryMin.xs}) {
        bottom: 40vmin;
    }
    @media (${mediaQueryMin.sm}) {
        width: 95vw;
        margin-left: 5vw;
        display: flex;
        flex-direction: row;
        margin-bottom: 10vmin;
        margin-top: 0%;
        bottom: 0;
        height: ${props => (props.src ? '70vmin' : '55vmin')};
    }

    @media (${mediaQueryMin.md}) {
        height: ${props => (props.src ? '80vmin' : '60vmin')};
        margin-top: 15%;
    }
    @media (${mediaQueryMin.lg}) {
        height: 103vmin;
        margin-top: 15%;
    }
`;

export const ImageContainer = styled.section`
    position: relative;
    background-color: #262626;
    overflow: hidden;
    @media (${mediaQueryMin.sm}) {
        max-height: 90vmin;
        width: ${props => (props.light ? '62vw' : '55vw')};
        position: absolute;
        right: 0;
        bottom: 0;
    }
`;

export const StyledTextContainer = styled.section`
    max-height: 90%;
    width: 80%;
    padding-left: 11%;
    display: flex;
    flex-direction: column;
    margin-top: 5%;

    @media (${mediaQueryMin.sm}) {
        padding-left: 0;
        padding-right: 0;
        max-height: 90%;
        width: ${props => (props.image ? '24%' : '40%')};
        margin: ${props => (props.light ? '7%' : '4%')};
        display: flex;
        flex-direction: column;
        position: relative;
        top: ${props => (props.light ? '8%' : '4.5%')};
    }
    @media (${mediaQueryMin.lg}) {
        top: ${props => (props.light ? '8%' : '7%')};
    }
    @media (${mediaQueryMin.xl}) {
        top: ${props => (props.light ? '8%' : '9%')};
    }
`;

export const StyledText = styled.p`
    color: #f7f7f7;
    opacity: 0.99;
    font-size: 3.5vmin;
    font-weight: 400;
    text-align: left;
    @media (${mediaQueryMin.xs}) {
        font-size: 3vmin;
        margin-bottom: 0.4em;
    }
    @media (${mediaQueryMin.sm}) {
        max-width: 100%;
        font-size: 1.4vmin;
        line-height: 2.3vmin;
        letter-spacing: 0;
        text-align: left;
        margin-bottom: 1.33em;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 2vmin;
        line-height: 3.1vmin;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 2.2vmin;
        line-height: 3.5vmin;
    }
`;

export const StyledImage = styled.img`
    max-width: 100%;
    max-height: 50em;
    width: auto;
    height: auto;
    float: right;
    @media (${mediaQueryMin.sm}) {
        max-height: 100%;
        max-width: 60vw;
    }

`;

export const ListContainer = styled.section`
    width: 50%;
    position: relative;
    left: 35%;
    @media (${mediaQueryMin.xs}) {
        left: 40%;
    }
    @media (${mediaQueryMin.sm}) {
        //left: 0; for old item
        padding-top: 7%;
        padding-left: 30%;
    }
`;

export const StyledList = styled.p`
    opacity: 75%;
    color: #f2f2f2;
    font-weight: 400;
    font-size: 5vmin;
    letter-spacing: 0.04vmin;
    line-height: 5.5vmin;
    @media (${mediaQueryMin.xs}) {
        font-size: 4vmin;
        line-height: 4vmin;
    }
    @media (${mediaQueryMin.sm}) {
        height: 4vmin;
        font-size: 2.1vmin;
        line-height: 3.1vmin;
        letter-spacing: 0.04vmin;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 2.2vmin;
        line-height: 2.8vmin;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 2.5vmin;
        line-height: 3vmin;
    }
`;

export const StyledSubtitle = styled.p`
    color: #70c197;
    font-weight: bold;
    letter-spacing: 0.4vmin;
    opacity: 75%;
    margin-bottom: 3vmin;
    font-size: 4.3vmin;
    @media (${mediaQueryMin.xs}) {
        font-size: 3.5vmin;
    }
    @media (${mediaQueryMin.sm}) {
        height: 1.5vmin;

        font-size: 1.6vmin;

        line-height: 5vmin;
        margin-bottom: 4vmin;
    }
`;

export const StyledTitleMedium = styled.h3`
    font-size: 12vmin;
    margin-bottom: 3vmin;
    @media (${mediaQueryMin.xs}) {
        font-size: 9vmin;
    }
    @media (${mediaQueryMin.sm}) {
        width: ${props => (props.wide ? '90%' : '60%')};
        color: #ffffff;
        font-family: Lato;
        font-size: 4.2vmin;
        line-height: 6vmin;
        font-weight: bold;
        letter-spacing: 0.1vmin;
        margin-bottom: 0.66em;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 5.6vmin;
        line-height: 7.2vmin;
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
