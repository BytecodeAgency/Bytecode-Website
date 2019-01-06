/* eslint-disable object-curly-newline */

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    height: 25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    overflow: hidden;
    &:hover div,
    &:focus div {
        -ms-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -o-transform: scale(1.2);
        transform: scale(1.2);
        transition: all 0.5s;
    }
    div {
        background-image: url(${props => props.background});
        background-size: cover;
        background-blend-mode: overlay;
        background-color: #1a1a1a;
        width: 100%;
        height: 100%;
        z-index: -10;
        -ms-transform: scale(1);
        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        transition: all 0.5s;
    }
`;

const Icon = styled.figure`
    width: 80%;
    height: auto;
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
    <StyledDiv background={backgroundImage}>
        <Icon>
            <ServiceImage src={serviceIcon} alt={serviceName} />
            <ServiceName>{serviceName}</ServiceName>
        </Icon>
    </StyledDiv>
);

export default Thumbnail;
