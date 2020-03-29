import React from 'react';
import PropTypes from 'prop-types';

import ReadMoreButton from '../../components/ReadMoreButton';
import {
    StyledTitleMedium,
    StyledSubtitle,
    CardContainer,
    TextContainer,
    StyledText,
    StyledImage,
    ImageContainer,
} from './ServiceCard.components';

const ServiceCard = ({ subtitle, title, text, src, link }) => (
    <CardContainer>
        <TextContainer>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
            <StyledTitleMedium>{title}</StyledTitleMedium>
            <StyledText>{text}</StyledText>
            <ReadMoreButton small link={link} />
        </TextContainer>
        <ImageContainer>
            <StyledImage src={src} />
        </ImageContainer>
    </CardContainer>
);

export default ServiceCard;

ServiceCard.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
