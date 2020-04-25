import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledImage } from './ServiceHeader.components';
import { Container, Col, Row } from '../../lib/Grid';
import TextBlock from '../TextBlock/TextBlock';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

const TextCol = styled(Col)`
    align-self: center;
    padding-left: 6em !important;
    padding-right: 6em !important;
`;

const Containment = styled(Container)`
    @media (${mediaQueryMin.sm}) {
        margin: 0 !important;
    }
`;

const StyledRow = styled(Row)`
    flex-direction: column-reverse;
    @media (${mediaQueryMin.sm}) {
        flex-direction: row;
    }
`;

const ImageCol = styled(Col)``;

const ServiceHeader = ({ title, subtitle, text, src }) => {
    return (
        <Containment>
            <StyledRow>
                <TextCol xl={6}>
                    <TextBlock title={title} subtitle={subtitle}>
                        {text}
                    </TextBlock>
                </TextCol>
                <ImageCol xl={6}>
                    <StyledImage src={src} />
                </ImageCol>
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
