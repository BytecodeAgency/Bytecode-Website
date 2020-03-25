import React from 'react';

import LeesMeerButton from "../../components/LeesMeerButton";
import {StyledTitleMedium, StyledSubtitle, CardContainer, TextContainer, StyledText, StyledImage, ImageContainer} from "./ServiceCard.components";

const ServiceCard = ({ subtitle, title, text, src, link }) => (
    <CardContainer>
        <TextContainer>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
            <StyledTitleMedium>{title}</StyledTitleMedium>
            <StyledText>{text}</StyledText>
            <LeesMeerButton width="26%" link={link}/>
        </TextContainer>
        <ImageContainer>
            <StyledImage src={src} />
        </ImageContainer>
    </CardContainer>
);

export default ServiceCard;
