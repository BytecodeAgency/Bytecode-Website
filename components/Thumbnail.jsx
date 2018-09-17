import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 20vw;
    height: 20vw;
    background-image: url('/static/img/content/interior.png');
    background-size: cover;
    background-blend-mode: overlay;
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.figure`
    width: 7.5vw;
    height: 7.5vw;
`;

const Thumbnail = () => (
    <StyledDiv>
        <Icon>
            <img src="/static/icons/services/api.svg" alt="APIs" />
        </Icon>
    </StyledDiv>
);

export default Thumbnail;
