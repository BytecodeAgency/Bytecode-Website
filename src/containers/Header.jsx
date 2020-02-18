import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const { colors, mediaQueryMin, containerWidth } = theme;
const { secondary } = colors;

const arrowDown = require('../images/icons/ui/carret-down.svg');

const HeaderBase = styled.header`
    background: linear-gradient(to top, rgba(0,0,0,0.95), transparent 60%), url(${props => props.backgroundImage});
    background-size: cover !important;
    background-position: center !important;
    height: 100vh;
    padding: 5vh ${containerWidth.xs};
    display: flex;
    align-items: flex-end;
    @media (${mediaQueryMin.sm}) {
        padding: 3em ${containerWidth.sm};
    }
    @media (${mediaQueryMin.md}) {
        padding: 2em ${containerWidth.md};
        background: linear-gradient(to top, rgba(0,0,0,0.85), transparent 50%),
            url(${props => props.backgroundImage});
    }
    @media (${mediaQueryMin.lg}) {
        padding: 2em ${containerWidth.lg};

    }
    @media (${mediaQueryMin.xxl}) {
        padding: 5em ${containerWidth.xl};
    }
`;

const HeaderInformation = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    @media (${mediaQueryMin.sm}) {

        & > * {
            width: 50%;
            justify-content: center;
        }
    }
    @media (${mediaQueryMin.md}) {
        flex-direction: row;
        & > * {
            width: 40%;
        }
    }
`;

const StyledSubtitle = styled.p`
    color: ${colors.lightgray2};
`;

const ArrowDown = styled.img`
    width: 1em;
    position: absolute;
    right: 50vw;
    margin-right: 0.5em;
    opacity: 0.5;
`;

const Header = ({ title, subtitle, tagline, img, children }) => {
    return (
        <HeaderBase backgroundImage={img}>
            <HeaderInformation>
                <div>
                    <StyledSubtitle className="white subtitle">{subtitle}</StyledSubtitle>
                    <h3>{title}</h3>
                </div>
                <div>
                    <p>{tagline}</p>
                    {children}
                </div>
            </HeaderInformation>
            <ArrowDown src={arrowDown} />
        </HeaderBase>
    );
};

export default Header;
