import React from 'react';
import { StyledTitleLarge, StyledSubtitle } from './Service.components';
import {StyledText, ImageContainer, StyledTitleContainer, StyledContainer, StyledImage} from "./ServiceHeader.components";


const ServiceHeader = ({ title, subtitle, text, src }) => {
    return (
        <StyledContainer>
            <StyledTitleContainer>
                <StyledSubtitle width="24vw" lineHeight="3vmin">
                    {subtitle}
                </StyledSubtitle>
                <StyledTitleLarge>{title}</StyledTitleLarge>
                <StyledText>{text}</StyledText>
            </StyledTitleContainer>
            <ImageContainer>
                <StyledImage src={src} />
            </ImageContainer>
        </StyledContainer>
    );
};

export default ServiceHeader;
