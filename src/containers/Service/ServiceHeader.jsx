import React from 'react';
import {StyledTitle,StyledSubtitle, StyledText, ImageContainer, StyledTitleContainer, StyledContainer, StyledImage} from "./ServiceHeader.components";


const ServiceHeader = ({ title, subtitle, text, src }) => {
    return (
        <StyledContainer>
            <StyledTitleContainer>
                <StyledSubtitle>
                    {subtitle}
                </StyledSubtitle>
                <StyledTitle>{title}</StyledTitle>
                <StyledText>{text}</StyledText>
            </StyledTitleContainer>
            <ImageContainer>
                <StyledImage src={src} />
            </ImageContainer>
        </StyledContainer>
    );
};

export default ServiceHeader;
