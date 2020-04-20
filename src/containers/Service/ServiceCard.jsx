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
    @media (${mediaQueryMin.md}) {
        margin-top: 20vh !important;
        margin-bottom: 20vh !important;
    }
`;

const TextCol = styled(Col)`
    background-color: #262626;
    padding: 10vh 5vw !important;
    height: 45%;
    position: relative;
    left: 10% !important;
    bottom: 10vh !important;
    max-width: 100% !important;
`;
const ImageCol = styled(Col)`
    position: relative;
    right: 10% !important;
    top: 10vh !important;
`;
const ServiceCard = ({ subtitle, title, text, src, link }) => (
    <StyledContainer>
        <Row justify="center" align="center">
            <TextCol md={4}>
                <TextBlock
                    title={title}
                    subtitle={subtitle}
                    href={link}
                    button="Lees meer"
                >
                    {text}
                </TextBlock>
            </TextCol>
            <ImageCol>
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
