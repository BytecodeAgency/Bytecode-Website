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
        <StyledContainer>
            <StyledRow>
                <TextCol xl={6}>
                    <TextBlock title={title} subtitle={subtitle}>
                        {text}
                    </TextBlock>
                </TextCol>

                <Col xl={6}>
                    <StyledImage src={src} />
                </Col>
            </StyledRow>
        </StyledContainer>
    );
};
export default ServiceHeader;
