import React from 'react';
import styled from 'styled-components';

const partnerLogo = require('../images/img/content/do-partner-logo.png');

const LogoContainer = styled.div`
    display: flex;
    justify-content: right;
    /* margin-top: 20px; */
`;

const LogoImage = styled.img`
    /* margin-left: 5%; */
    max-width: 200px;
`;

const DigitalOceanPartnerLogo = () => (
    <LogoContainer>
        <LogoImage alt="Official DigitalOcean Partner" src={partnerLogo} />
    </LogoContainer>
);

export default DigitalOceanPartnerLogo;
