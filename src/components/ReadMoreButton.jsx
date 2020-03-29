import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const { mediaQueryMin } = theme;

const image = require('../images/img/arrow@3x.svg');

const LeesMeerContainer = styled(Link)`
    width:${props => (props.small ? '70%': '90%')};
    height:15vmin;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    color: #f7f7f7;
    z-index: +100;
    text-align: left;
    @media(${mediaQueryMin.xs}){
        height: 10vh;
        width: 10vw;
    }
`;

const ArrowText = styled.p`
    width: 70%;
    align-self: stretch;
    font-weight: 400;
    font-size: ${props => (props.small ? '4.7vmin' : '6vmin')};
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
        font-size: 2.2vmin;
    }
`;

const ArrowImage = styled.img`
    position: relative;
    top: ${props => (props.small ? '20%' : '30%')};
    right: ${props => (props.small ? '5%' : '15%')};
    width: 40%;
    @media (${mediaQueryMin.xs}){
        top:15%;
        right:0;
    }
`;

const ReadMoreButton = ({ link, small }) => (
    <LeesMeerContainer to={link} small={small}>
        <ArrowText small={small}>Lees meer</ArrowText>
        <ArrowImage src={image} small={small}/>
    </LeesMeerContainer>
);

export default ReadMoreButton;

ReadMoreButton.propTypes = {
    small: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
};
