import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledImage,
    ImageContainer,
    TextBlockContainer,
    StyledCol,
    StyledRow,
} from './ServiceCard.components';
import { Container } from '../../lib/Grid';
import TextBlock from '../TextBlock/TextBlock';

const ServiceCard = ({ subtitle, title, text, src, link }) => (
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

ServiceCard.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
