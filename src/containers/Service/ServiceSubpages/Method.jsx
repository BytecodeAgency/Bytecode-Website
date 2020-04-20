import React from 'react';
import PropTypes from 'prop-types';
import {
    ArrowImage,
    ArrowLink,
    StyledContainer,
    StyledImage,
    StyledImageContainer,
    StyledImageSubtitle,
    StyledImageTitle,
    StyledImageTitleContainer,
    StyledImageTitleTextContainer,
    StyledText,
    StyledTextContainer,
    StyledTitle,
} from './Method.components';

const Method = ({ title, subtitle, text, src, link }) => (
    <StyledContainer>
        <StyledTextContainer>
            <StyledTitle>Werkwijze</StyledTitle>
            <StyledText>{text}</StyledText>
        </StyledTextContainer>
        <StyledImageContainer>
            <StyledImage src={src} />
            <StyledImageTitleContainer>
                <StyledImageTitleTextContainer>
                    <StyledImageTitle>{title}</StyledImageTitle>
                    <StyledImageSubtitle>{subtitle}</StyledImageSubtitle>
                </StyledImageTitleTextContainer>
                <ArrowLink to={link}>
                    <ArrowImage
                        src={require('../../../images/img/services/subpages/arrow@3x.svg')}
                    />
                </ArrowLink>
            </StyledImageTitleContainer>
        </StyledImageContainer>
    </StyledContainer>
);

export default Method;

Method.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
