import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
    height: 39.3vh;
    width: 40vw;
    padding: 0 30vw 5vh 30vw;
`;

const StyledLogo = styled.img.attrs({
    src: require('../../images/icons/icon-72x72.png'),
})`
    height: 5.6vh;
    width: 2.8vw;
    margin: 0vh 18.6vw 4vh 18.6vw;
`;

const StyledTitle = styled.h3`
    height: 13vh;
    width: 40vw;
    color: #ffffff;
    font-family: Lato;
    font-size: 7vh;
    font-weight: bold;
    letter-spacing: 0.1vh;
    line-height: 7vh;
    text-align: center;

`;

const StyledText = styled.p`
    height: 16.8vh;
    width: 40vw;
    opacity: 0.99;
    color: #f7f7f7;
    font-family: Lato;
    font-size: 2.3vh;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 3.6vh;
    text-align: center;
`;

const ServiceItemSmall = ({ title, text }) => (
    <StyledContainer>
        <StyledLogo />
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
    </StyledContainer>
);

export default ServiceItemSmall;
