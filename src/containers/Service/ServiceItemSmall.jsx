import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledTitle,
    StyledContainer,
    StyledText,
    StyledLogo,
} from './ServiceItemSmall.components';

const ServiceItemSmall = ({ title, text, src }) => (
    <StyledContainer>
        <StyledLogo src={src} />
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
    </StyledContainer>
);

export default ServiceItemSmall;

ServiceItemSmall.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};
