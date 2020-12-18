import React from 'react';
import {
    StyledImage,
    ImageContainer,
    TextBlockContainer,
    StyledCol,
    StyledRow,
} from './ServiceCard.components';
import { Container } from '../../lib/Grid';
import TextBlock from '../TextBlock/TextBlock';

interface Props {
    subtitle: string;
    title: string;
    text: string;
    src: string;
    link: string;
}

const ServiceCard: React.FC<Props> = ({ subtitle, title, text, src, link }) => (
    <Container>
        <StyledRow justify="center">
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
