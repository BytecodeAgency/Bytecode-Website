import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    height: 40rem;
    background-image: url('/static/img/content/interior.png');
    background-size: cover;
    background-blend-mode: overlay;
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
`;

const Icon = styled.figure`
    width: 40%;
    height: auto;
    overflow: hidden;
`;

const Thumbnail = () => (
    <StyledDiv>
        <Icon>
            <img src="/static/icons/services/api.svg" alt="APIs" />
            <p>Service</p>
        </Icon>
    </StyledDiv>
);

export default Thumbnail;
