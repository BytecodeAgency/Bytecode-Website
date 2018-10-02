/* eslint-disable object-curly-newline */

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    height: 25rem;
    background-size: cover;
    background-blend-mode: overlay;
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
`;

const Icon = styled.figure`
    width: 80%;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ServiceImage = styled.img`
    max-width: 8rem;
    margin-bottom: 2rem;
`;

const ServiceName = styled.p`
    text-align: center;
`;

const Thumbnail = ({ backgroundImage, serviceIcon, serviceName }) => {
    const StyledDivWithBackground = styled(StyledDiv)`
        background-image: url('${backgroundImage}');
    `;
    return (
        <StyledDivWithBackground>
            <Icon>
                <ServiceImage src={serviceIcon} alt={serviceName} />
                <ServiceName>{serviceName}</ServiceName>
            </Icon>
        </StyledDivWithBackground>
    );
};

export default Thumbnail;
