import styled from 'styled-components';

export const StyledContainer = styled.section`
    height: ${props => (props.src ? '95vmin' : '45vmin')};
    width: 95vw;
    margin-left: 5vw;
    display: flex;
    flex-direction: row;
    background-color: ${props => (props.light ? '#262626' : '#1a1a1a')};
    position: relative;
    margin-bottom: 5%;
    margin-top: 5%;
    overflow: hidden;

`;

export const ImageContainer = styled.section`
    max-height: 90vmin;
    max-width: 65vw;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #262626;
`;

export const StyledTextContainer = styled.section`
    height: 90vmin;
    width: ${props => (props.image ? '26%' : '40%')};
    margin-left: 5%;
    padding-top: 6%;
    display: flex;
    flex-direction: column;

`;

export const StyledText = styled.p`
    max-height: 70vmin;
    opacity: 0.99;
    color: #f7f7f7;
    font-family: Lato;
    font-size: 2.3vmin;
    letter-spacing: 0;
    line-height: 3.6vmin;
    font-weight: 400;
    text-align: left;

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
    height: 4vh;
    color: #f2f2f2;
    font-family: Lato;
    font-size: 2.1vh;
    font-weight: 400;
    letter-spacing: 0.04vh;
    line-height: 2.5vh;
`;
