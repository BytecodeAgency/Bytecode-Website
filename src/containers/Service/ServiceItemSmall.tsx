import React from 'react';
import {
    StyledLogo,
    Containment,
    CenteredTextBlock,
} from './ServiceItemSmall.components';
import { Row, Col } from '../../lib/Grid';

interface Props {
    title: string;
    text: string;
    src: string;
}

const ServiceItemSmall: React.FC<Props> = ({ title, text, src }) => (
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
