import React from 'react';
import styled from 'styled-components';
import {StyledTitleSmall} from "./Service.components";
import {StyledContainer,StyledText,StyledLogo} from "./ServiceItemSmall.components";


const ServiceItemSmall = ({ title, text, src }) => (
    <StyledContainer>
        <StyledLogo src={src} />
        <StyledTitleSmall>{title}</StyledTitleSmall>
        <StyledText>{text}</StyledText>
    </StyledContainer>
);

export default ServiceItemSmall;
