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
    <Container>
        <StyledRow src={src} justify="center">
            <StyledCol xl={8.4}>
                <TextBlockContainer>
                    <TextBlock title={title} subtitle={subtitle} href={link}>
                        {text}
                    </TextBlock>
                </TextBlockContainer>

                <ImageContainer>
                    <StyledImage src={src} />
                </ImageContainer>
            </StyledCol>
        </StyledRow>
    </Container>
);

export default ServiceCard;
