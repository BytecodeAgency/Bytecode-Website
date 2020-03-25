import React from 'react'
import styled from "styled-components";
import {Link} from "gatsby";

const image = require('../images/img/arrow@3x.svg');

const LeesMeerContainer = styled(Link)`
    height: 10vh;
    width: 13vw;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const ArrowText = styled.p`
    width: 50%;
    align-self: stretch;
    color: #f7f7f7;
    font-size: 2.3vh;
`;

const ArrowImage = styled.img`
    padding-top: 7%;
    width: ${props=>props.width};
    color: #f7f7f7;
`;

const LeesMeerButton = ({width, link}) => (
    <LeesMeerContainer to={link}>
        <ArrowText>
            Lees meer
        </ArrowText>
        <ArrowImage
            src={image}
            width={width}
        />
    </LeesMeerContainer>
);

export default LeesMeerButton;
