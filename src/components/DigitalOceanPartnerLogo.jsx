import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const { mediaQueryMin } = theme;

const partnerLogo = require('../images/img/content/do-partner-logo.png');

const LogoContainer = styled.div`
    margin-top: 20px;
    @media (${mediaQueryMin.md}) {
        margin-top: 0;
        display: flex;
        justify-content: right;
    }
`;

const LogoImage = styled.img`
    max-width: 200px;
    height: unset !important;
`;

const DigitalOceanPartnerLogo = () => (
    <LogoContainer>
        <LogoImage alt="Official DigitalOcean Partner" src={partnerLogo} />
    </LogoContainer>
);

export default DigitalOceanPartnerLogo;
