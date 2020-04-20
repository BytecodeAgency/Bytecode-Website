import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLogo } from './ServiceItemSmall.components';
import { Row, Col, Container } from '../../lib/Grid';
import TextBlock from '../TextBlock/TextBlock';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

/*
const oldServiceItemSmall = ({ title, text, src }) => (
    <StyledContainer>
        <StyledLogo src={src} />
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
    </StyledContainer>
);
*/

const CenteredTextBlock = styled(TextBlock)`
    text-align: center;
`;
const Containment = styled(Container)`
    @media (${mediaQueryMin.md}) {
        margin-top: 0 !important;
        margin-bottom: 5vw !important;
        position: relative;
        bottom: 10vh;
    }
`;
const ServiceItemSmall = ({ title, text, src }) => (
    <Containment>
        <Row justify="center" style={{ textAlign: 'center' }}>
            <Col md={5.6}>
                <StyledLogo src={src} />
                <CenteredTextBlock title={title}>{text}</CenteredTextBlock>
            </Col>
        </Row>
    </Containment>
);

export default ServiceItemSmall;

ServiceItemSmall.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};
