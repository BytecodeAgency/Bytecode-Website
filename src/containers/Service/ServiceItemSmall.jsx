import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLogo } from './ServiceItemSmall.components';
import { Row, Col, Container } from '../../lib/Grid';
import TextBlock from '../TextBlock/TextBlock';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

const CenteredTextBlock = styled(TextBlock)`
    text-align: center;
`;
const Containment = styled(Container)`
    margin-top: 0 !important;
    margin-bottom: 3em !important;

`;
const ServiceItemSmall = ({ title, text, src }) => (
    <Containment>
        <Row justify="center" style={{ textAlign: 'center' }}>
            <Col lg={7} xl={6}>
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
