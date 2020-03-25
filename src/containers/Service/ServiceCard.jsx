import React from 'react';

import LeesMeerButton from "../../components/LeesMeerButton";
import {StyledTitleMedium, StyledSubtitle} from "./Service.components";
import {CardContainer, TextContainer, StyledText, StyledImage, ImageContainer} from "./ServiceCard.components";

const ServiceCard = ({ subtitle, title, text, src, link }) => (
    <CardContainer>
        <TextContainer>
            <StyledSubtitle width="24vw" lineHeight="5vh">{subtitle}</StyledSubtitle>
            <StyledTitleMedium wide margin={"8vh"}>{title}</StyledTitleMedium>
            <StyledText>{text}</StyledText>
            <LeesMeerButton width={"26%"} link={link}/>
        </TextContainer>
        <ImageContainer>
            <StyledImage src={src} />
        </ImageContainer>
    </CardContainer>
);

export default ServiceCard;
