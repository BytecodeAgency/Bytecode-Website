import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const { mediaQueryMin } = theme;

const image = require('../images/img/arrow@3x.svg');

const LeesMeerContainer = styled(Link)`
    height: 10vh;
    width: 13vw;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    color: #f7f7f7;
`;

const ArrowText = styled.p`
    width: 50%;
    align-self: stretch;

    font-size: 1.3vmin;
    @media (${mediaQueryMin.xs}) {
        font-size: 1.35vmin;
    }
    @media (${mediaQueryMin.sm}) {
        font-size: 1.45vmin;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 2vmin;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 2.4vmin;
    }
`;

const ArrowImage = styled.img`
    padding-top: 7%;
    width: ${props => props.width};
    color: #f7f7f7;
`;

const LeesMeerButton = ({ width, link }) => (
    <LeesMeerContainer to={link}>
        <ArrowText>Lees meer</ArrowText>
        <ArrowImage src={image} width={width} />
    </LeesMeerContainer>
);

export default LeesMeerButton;

LeesMeerButton.propTypes = {
    width: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
};
