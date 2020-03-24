import React from 'react';
import styled from 'styled-components';

const StyledSubtitle = styled.p`
    height: 3vh;
    width: 24vw;
    color: #70c197;
    font-family: Lato;
    font-size: 2vh;
    font-weight: bold;
    line-height: 3vh;
    letter-spacing: 0.4vh;
`;

const StyledTitle = styled.h1`
    height: 18vh;
    width: 30vw;
    color: #ffffff;
    font-family: Lato;
    font-size: 10vh;
    font-weight: 900;
    line-height: 9vh;
    letter-spacing: 0.3vh;
`;

const StyledText = styled.p`
    height: 19vh;
    width: 38vw;
    color: #ffffff;
    font-family: Lato;
    font-size: 3vh;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 4.2vh;
`;

const StyledImage = styled.img.attrs({
    src: require('../../images/img/cases/dawny/mockup small.png'),
})`
    height: 123vh;
    width: 46vw;
    padding-left: 5vh;

`;

const StyledTitleContainer = styled.section`
    height: 42vh;
    width: 50vw;
    padding: 25vh 9vw 10vh 8vw;
`;

const StyledContainer = styled.section`
    height: 123vh;
    width: 90vw;
    display: flex;
    flex-direction: row;

`;

const ServiceHeader = ({ title, subtitle, text, img }) => (
    <StyledContainer>
        <StyledTitleContainer>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
            <StyledTitle>{title}</StyledTitle>
            <StyledText>{text}</StyledText>
        </StyledTitleContainer>
        <StyledImage />
    </StyledContainer>
);

export default ServiceHeader;
