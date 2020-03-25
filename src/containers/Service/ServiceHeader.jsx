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
    margin-top: 10%;
`;

const ImageContainer = styled.section`
    height: 100vh;
    width: 50%;
    padding-left: 5vh;
`;

const StyledTitleContainer = styled.section`
    height: 50%;
    width: 50%;
    padding: 50vh 9vw 10vh 8vw;
`;

const StyledContainer = styled.section`
    height: 120%;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 20%;
`;

const StyledImage = styled.img`
        max-width: 100%;
    `;

const ServiceHeader = ({ title, subtitle, text, src }) => {

    return (
        <StyledContainer>
            <StyledTitleContainer>
                <StyledSubtitle>{subtitle}</StyledSubtitle>
                <StyledTitle>{title}</StyledTitle>
                <StyledText>{text}</StyledText>
            </StyledTitleContainer>
            <ImageContainer>
                <StyledImage src={src}/>
            </ImageContainer>
        </StyledContainer>
    );
};

export default ServiceHeader;
