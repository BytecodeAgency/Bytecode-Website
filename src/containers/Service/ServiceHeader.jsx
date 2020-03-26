import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledTitle,
    StyledSubtitle,
    StyledText,
    ImageContainer,
    StyledTitleContainer,
    StyledContainer,
    StyledImage,
} from './ServiceHeader.components';

const ServiceHeader = ({ title, subtitle, text, src }) => {
    return (
        <StyledContainer>
            <StyledTitleContainer>
                <StyledSubtitle>{subtitle}</StyledSubtitle>
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

ServiceHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};
