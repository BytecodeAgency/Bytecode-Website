import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledImage } from './ServiceHeader.components';
import { Container, Col, Row } from '../../lib/Grid';
import TextBlock from '../TextBlock/TextBlock';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;
/*
const oudHeader = ({ title, subtitle, text, src }) => {
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
*/

const TextCol = styled(Col)`
    align-self: center;
`;

const Containment = styled(Container)`
    @media (${mediaQueryMin.md}) {
        margin-right: 0 !important;
        margin-left: 8vw !important;
    }
`;

const ServiceHeader = ({ title, subtitle, text, src }) => {
    return (
        <Containment>
            <Row justify="between">
                <TextCol md={3.3}>
                    <TextBlock title={title} subtitle={subtitle}>
                        {text}
                    </TextBlock>
                </TextCol>
                <Col>
                    <StyledImage src={src} />
                </Col>
            </Row>
        </Containment>
    );
};
export default ServiceHeader;

ServiceHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};
