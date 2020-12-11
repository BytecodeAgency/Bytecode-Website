import React from 'react';
import {
    StyledImage,
    ImageContainer,
    TextBlockContainer,
    StyledCol,
    StyledRow,
} from './ServiceCard.components';
import { Container } from '../../lib/Grid';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TextBlock/TextBlock' was resolved to '/... Remove this comment to see the full error message
import TextBlock from '../TextBlock/TextBlock';

type Props = {
    subtitle: string,
    title: string,
    text: string,
    src: string,
    link: string,
};

const ServiceCard = ({ subtitle, title, text, src, link }: Props) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <StyledRow src={src} justify="center">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <StyledCol xl={8.4}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TextBlockContainer>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <TextBlock title={title} subtitle={subtitle} href={link}>
                        {text}
                    </TextBlock>
                </TextBlockContainer>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <ImageContainer>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <StyledImage src={src} />
                </ImageContainer>
            </StyledCol>
        </StyledRow>
    </Container>
);

export default ServiceCard;
