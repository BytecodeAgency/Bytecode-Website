import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { StyledImage } from './ServiceCard.components';
import { Container, Row, Col } from '../../lib/Grid';
import TextBlock from '../TextBlock/TextBlock';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

const StyledContainer = styled(Container)`

`;
const TextBlockContainer = styled(Container)`
    background-color: #262626;
    padding: 10% !important;
    z-index: 1;
    @media (${mediaQueryMin.sm}) {
        margin: 10% 45% 10% 0 !important;
    }
`;
const ImageContainer = styled(Container)`
    position: absolute !important;
    left: 30% !important;
    top: 20% !important;
    @media (${mediaQueryMin.sm}) {
        margin: 0 !important;
    }
    min-width: 100%;
    z-index: -1;
`

const StyledRow = styled(Row)`
    min-height: 100vh;
`;

const ServiceCard = ({ subtitle, title, text, src, link }) => (
    <StyledContainer>
        <StyledRow src={src} justify="center">
            <Col xl={8.4}>
                <TextBlockContainer>
                    <TextBlock
                        title={title}
                        subtitle={subtitle}
                        href={link}
                        button="Lees meer"
                    >
                        {text}
                    </TextBlock>
                </TextBlockContainer>
                <ImageContainer>
                    <StyledImage src={src} />
                </ImageContainer>
            </Col>
        </StyledRow>
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
