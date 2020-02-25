import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import ArrowButton from '../components/ArrowButton';

const { colors, mediaQueryMin, containerWidth } = theme;

const arrowDown = require('../images/icons/ui/carret-down.svg');

const HeaderBase = styled.header`
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent),
        url(${props => props.backgroundImage});
    background-size: cover !important;
    background-position: center !important;
    height: 100vh;
    padding: 1em ${containerWidth.xs};
    display: flex;
    align-items: flex-end;
    @media (${mediaQueryMin.sm}) {
        padding: 3em ${containerWidth.sm};
        background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.9),
                transparent 50%
            ),
            url(${props => props.backgroundImage});
    }
    @media (${mediaQueryMin.md}) {
        padding: 2em ${containerWidth.md};
    }
    @media (${mediaQueryMin.lg}) {
        padding: 3em ${containerWidth.lg};
    }
    @media (${mediaQueryMin.xxl}) {
        padding: 7em ${containerWidth.xl};
    }
`;

const HeaderInformation = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: baseline;

    @media (${mediaQueryMin.xs}) {
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        & > * {
            width: 50%;
            padding: 1em;
            justify-content: center;
        }
    }
    @media (${mediaQueryMin.md}) {
        & > * {
            width: 40%;
        }
    }
`;

const StyledSubtitle = styled.p`
    color: ${colors.lightgray} !important;
`;

const ArrowDown = styled.img`
    width: 1em;
    position: absolute;
    right: 50vw;
    margin-right: 0.5em;
    opacity: 0.5;
`;



const Header = ({ title, subtitle, text, href, button, tagline, img, children, useGatsbyLink }) => {
    return (
        <HeaderBase backgroundImage={img}>
            <HeaderInformation>
                <div>
                    <StyledSubtitle className="white subtitle">
                        {subtitle}
                    </StyledSubtitle>
                    <h2>{title}</h2>
                </div>
                <div>
                    <p>{tagline || text}</p>
                    {children}
                    {href && <ArrowButton useGatsbyLink={useGatsbyLink} href={href}>{button || 'Lees meer'}</ArrowButton>}
                </div>
            </HeaderInformation>
            <ArrowDown src={arrowDown} />
        </HeaderBase>
    );
};

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
