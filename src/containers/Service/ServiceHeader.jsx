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
    position: relative;
    bottom: 10em;
    @media (${mediaQueryMin.sm}) {
        align-self: center;
        bottom: 0;
    }
`;

const Containment = styled(Container)`
    @media (${mediaQueryMin.sm}) {
        margin-right: 0 !important;
        margin-left: 8vw !important;
    }
`;

const StyledRow = styled(Row)`
    flex-direction: column-reverse;
    @media (${mediaQueryMin.sm}) {
        flex-direction: row;
    }
`;

const ServiceHeader = ({ title, subtitle, text, src }) => {
    return (
        <Containment>
            <StyledRow justify="between">
                <TextCol sm={6} lg={5.6} xl={4.3}>
                    <TextBlock title={title} subtitle={subtitle}>
                        {text}
                    </TextBlock>
                </TextCol>
                <Col sm={9} lg={6.3} xl={7.6}>
                    <StyledImage src={src} />
                </Col>
            </StyledRow>
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
