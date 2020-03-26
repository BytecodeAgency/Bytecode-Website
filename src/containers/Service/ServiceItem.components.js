import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const StyledContainer = styled.section`
    height: 55vmin;
    width: 95vw;
    margin-left: 5vw;
    display: flex;
    flex-direction: row;
    background-color: ${props => (props.light ? '#262626' : '#1a1a1a')};
    position: relative;
    margin-bottom: 10vmin;
    margin-top: 0%;
    overflow: hidden;
    @media (${mediaQueryMin.xs}) {
        height: 56vmin;
    }
    @media (${mediaQueryMin.sm}) {
        height: ${props => (props.src ? '70vmin' : '55vmin')};
    }
    @media (${mediaQueryMin.md}) {
        height: ${props => (props.src ? '95vmin' : '60vmin')};
        margin-top: 15%;
    }
    @media (${mediaQueryMin.lg}) {
        height: 103vmin;
        margin-top: 15%;
    }
`;

export const ImageContainer = styled.section`
    max-height: 90vmin;
    width: ${props => (props.light ? '62vw' : '55vw')};
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #262626;
`;

export const StyledTextContainer = styled.section`
    max-height: 90%;
    width: ${props => (props.image ? '24%' : '40%')};
    margin: ${props => (props.light ? '7%' : '4%')};
    display: flex;
    flex-direction: column;
    position: relative;
    top: ${props => (props.light ? '8%' : '0')};
    @media (${mediaQueryMin.sm}) {
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
    max-width: 100%;
    opacity: 0.99;
    color: #f7f7f7;
    font-family: Lato;
    font-size: 1.15vmin;
    letter-spacing: 0;
    line-height: 2.1vmin;
    font-weight: 400;
    text-align: left;
    @media (${mediaQueryMin.xs}) {
        font-size: 1.25vmin;
        line-height: 2.2vmin;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 1.4vmin;
        line-height: 2.3vmin;
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
    max-height: 100vmin;
    max-width: 100%;
`;

export const ListContainer = styled.section`
    width: 50%;
    padding-top: 7%;
    padding-left: 30%;
`;

export const StyledList = styled.p`
    opacity: 75%;
    height: 4vmin;
    color: #f2f2f2;
    font-family: Lato;
    font-size: 1.7vmin;
    font-weight: 400;
    letter-spacing: 0.04vmin;
    line-height: 2.1vmin;
    @media (${mediaQueryMin.xs}) {
        font-size: 1.9vmin;
        line-height: 2.6vmin;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 2.1vmin;
        line-height: 3.1vmin;
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
    height: 1.5vmin;
    color: #70c197;
    font-family: Lato;
    font-size: 1.6vmin;
    font-weight: bold;
    line-height: 5vmin;
    letter-spacing: 0.4vmin;
    opacity: 75%;
    margin-bottom: 4vmin;
`;

export const StyledTitleMedium = styled.h3`
    width: ${props => (props.wide ? '90%' : '60%')};
    color: #ffffff;
    font-family: Lato;
    font-size: 3.4vmin;
    font-weight: bold;
    letter-spacing: 0.1vmin;
    line-height: 4vmin;
    @media (${mediaQueryMin.xs}) {
        font-size: 3.4vmin;
        line-height: 5vmin;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 4.2vmin;
        line-height: 6vmin;
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
