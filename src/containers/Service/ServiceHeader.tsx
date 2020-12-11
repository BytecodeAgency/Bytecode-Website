import React from 'react';
import {
    StyledImage,
    StyledRow,
    TextCol,
    StyledContainer,
} from './ServiceHeader.components';
import { Col } from '../../lib/Grid';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TextBlock/TextBlock' was resolved to '/... Remove this comment to see the full error message
import TextBlock from '../TextBlock/TextBlock';

type Props = {
    title: string,
    subtitle: string,
    text: string,
    src: string,
};

const ServiceHeader = ({ title, subtitle, text, src }: Props) => {
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <StyledContainer>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <StyledRow>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TextCol xl={6}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <TextBlock title={title} subtitle={subtitle}>
                        {text}
                    </TextBlock>
                </TextCol>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Col xl={6}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <StyledImage src={src} />
                </Col>
            </StyledRow>
        </StyledContainer>
    );
};
export default ServiceHeader;
