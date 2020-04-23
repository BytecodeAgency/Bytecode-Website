import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { StyledImage } from './ServiceCard.components';
import { Container, Row, Col } from '../../lib/Grid';
import TextBlock from '../TextBlock/TextBlock';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;
/*
const oldServiceCard = ({ subtitle, title, text, src, link }) => (
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
*/
const StyledContainer = styled(Container)`
    margin-top: 20vh !important;
    margin-bottom: 20vh !important;
    max-height: 18em;
    @media (${mediaQueryMin.xs}) {
        max-height: 30em;
    }
    @media (${mediaQueryMin.sm}) {
        max-height: 30em;
    }
    @media (${mediaQueryMin.md}) {
        max-height: 38em;
    }
    @media (${mediaQueryMin.lg}) {
        max-height: 100%;
    }
    @media (${mediaQueryMin.xxl}) {
        max-height: 100%;
    }
`;

const TextCol = styled(Col)`
    background-color: #262626;
    padding: 5% !important;
    position: relative;
    max-width: 100% !important;
    @media (${mediaQueryMin.xs}) {
        right: 4em !important;
        height: 27em;
    }
    @media (${mediaQueryMin.sm}) {
        right: 8em !important;
        height: 45%;
        padding: 6% !important;
    }
    @media (${mediaQueryMin.lg}) {
        left: 10em !important;
    }
    @media (${mediaQueryMin.xxl}) {
        height: 50em;
        left: 10% !important;
    }
`;
const ImageCol = styled(Col)`
    position: relative;
    bottom: 30em;
    right: 15em !important;
    @media (${mediaQueryMin.xs}) {
        bottom: 30em;
    }

    max-height: 100% !important;
    @media (${mediaQueryMin.sm}) {
        left: 10em !important;
        bottom: 18em;
    }
    @media (${mediaQueryMin.lg}) {
        top: 8em;
        left: auto !important;
        right: 4em !important;
    }
    @media (${mediaQueryMin.xxl}) {
        top: 10vh !important;
    }
`;
const ServiceCard = ({ subtitle, title, text, src, link }) => (
    <StyledContainer>
        <Row justify="center" align="center">
            <TextCol sm={9} lg={4.7}>
                <TextBlock
                    title={title}
                    subtitle={subtitle}
                    href={link}
                    button="Lees meer"
                >
                    {text}
                </TextBlock>
            </TextCol>
            <ImageCol sm={12} lg={7.2}>
                <StyledImage src={src} />
            </ImageCol>
        </Row>
    </StyledContainer>
);

export default ServiceCard;

ServiceCard.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
