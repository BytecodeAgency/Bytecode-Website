import styled from "styled-components";
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const StyledText = styled.p`
    height: 19vmin;
    width: 38vw;
    color: #ffffff;
    font-family: Lato;
    font-size: 3vmin;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 4.2vmin;
    margin-top: 10vmin;
`;

export const ImageContainer = styled.section`
    height: 100vmin;
    width: 50%;
    padding-left: 5vmin;

`;

export const StyledTitleContainer = styled.section`
    height: 50%;
    width: 50%;
    padding: 50vmin 9vw 10vmin 8vw;

`;

export const StyledContainer = styled.section`
    height: 120%;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 10%;
`;

export const StyledImage = styled.img`
    max-width: 90%;
`;
