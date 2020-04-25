import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledLogo,
    Containment,
    CenteredTextBlock,
} from './ServiceItemSmall.components';
import { Row, Col } from '../../lib/Grid';

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
