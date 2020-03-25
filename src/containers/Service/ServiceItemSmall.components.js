import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const StyledContainer = styled.section`
    height: 60vmin;
    width: 55vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    left:22.5%;
    @media (${mediaQueryMin.md}){
      top:20vmin;
      left:25%
    }


`;

export const StyledText = styled.p`
    height: 16.8vmin;
    max-width: 100%;
    opacity: 0.99;
    color: #f7f7f7;
    font-family: Lato;
    font-size: 1.8vmin;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 3vmin;
    text-align: center;
    @media (${mediaQueryMin.xs}){
        font-size: 1.9vmin;
        line-height: 2.6vmin;
    }
    @media (${mediaQueryMin.sm}){
        font-size: 2.1vmin;
        line-height: 3.1vmin;
    }
    @media (${mediaQueryMin.md}){
        font-size: 2.3vmin;
        line-height: 3.6vmin;
        max-width: 80%;
    }
    @media (${mediaQueryMin.lg}){
        font-size: 3.2vmin;
        line-height: 4.2vmin;
        max-width: 80%;
    }
`;

export const StyledLogo = styled.img`
    height: 7vmin;
    position: relative;
    @media (${mediaQueryMin.md}){
        right:10%;
    }
`;

export const StyledTitle = styled.h3`
    margin-bottom: 0;
    margin-top: 4vmin;
    height: 13vmin;
    width: 40vw;
    color: #ffffff;
    font-family: Lato;
    font-size: 5vmin;
    font-weight: bold;
    letter-spacing: 0.1vmin;
    line-height: 5.5vmin;
    text-align: center;
    position: relative;
    left:13.5%;

    @media (${mediaQueryMin.xs}){
        font-size: 5.2vmin;
        line-height: 5.4vmin;
        margin-bottom: 0;
    }
    @media (${mediaQueryMin.sm}){
        font-size: 6.2vmin;
        line-height: 6vmin;
        margin-bottom: 5vmin;
    }
    @media (${mediaQueryMin.md}){
        font-size: 7vmin;
        line-height: 7.2vmin;
        left:4%;
    }
    @media (${mediaQueryMin.lg}){
        font-size: 8vmin;
        line-height: 8vmin;
    }
`;
