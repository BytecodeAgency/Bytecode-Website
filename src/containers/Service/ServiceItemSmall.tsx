import React from 'react';
import {
    StyledLogo,
    Containment,
    CenteredTextBlock,
} from './ServiceItemSmall.components';
import { Row, Col } from '../../lib/Grid';

type Props = {
    title: string,
    text: string,
    src: string,
};

const ServiceItemSmall = ({ title, text, src }: Props) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Containment>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Row justify="center" style={{ textAlign: 'center' }}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Col lg={7} xl={6}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <StyledLogo src={src} />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <CenteredTextBlock title={title}>{text}</CenteredTextBlock>
            </Col>
        </Row>
    </Containment>
);

export default ServiceItemSmall;
