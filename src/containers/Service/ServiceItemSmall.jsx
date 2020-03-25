import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
    height: 39.3%;
    width: 40%;
    padding: 0 30% 5% 30%;
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

const StyledLogo = styled.img`
    height: 30%;
    width: 4vw;
    margin: 0vh 18vw 4vh 18vw;
`;

const ServiceItemSmall = ({ title, text, src }) => (
    <StyledContainer>
        <StyledLogo src={src} />
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
    </StyledContainer>
);

export default ServiceItemSmall;
