import React from 'react'
import {StyledTitle, StyledContainer,StyledText,StyledLogo} from "./ServiceItemSmall.components";


const ServiceItemSmall = ({ title, text, src }) => (
    <StyledContainer>
        <StyledLogo src={src} />
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
    </StyledContainer>
);

export default ServiceItemSmall;
