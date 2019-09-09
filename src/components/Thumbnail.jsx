import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const mediaQuery = theme;

const ThumbnailContainer = styled.div`
    height: 22rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 0.5em;
    &:hover div,
    &:focus div {
        background-color: #080808;
    }
    @media (${mediaQuery.md}) {
        margin: 0 0.5em 3rem;
        width: 100%;
    }
`;

const ServiceImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.background});
    background-size: cover;
    background-blend-mode: overlay;
    background-color: #1a1a1a;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
`;

const Icon = styled.figure`
    width: 80%;
    height: auto;
    max-height: 20rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
`;

const ServiceImage = styled.img`
    max-width: 8rem;
    margin-bottom: 2rem;
`;

const ServiceName = styled.p`
    text-align: center;
`;

const Thumbnail = ({ backgroundImage, serviceIcon, serviceName }) => (
    <ThumbnailContainer>
        <ServiceImageContainer background={backgroundImage}>
            <Icon>
                <ServiceImage src={serviceIcon} alt={serviceName} />
                <ServiceName>{serviceName}</ServiceName>
            </Icon>
        </ServiceImageContainer>
    </ThumbnailContainer>
);

export default Thumbnail;
