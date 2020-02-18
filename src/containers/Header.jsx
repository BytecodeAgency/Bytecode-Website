import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const { colors, mediaQueryMin, containerWidth } = theme;
const { secondary } = colors;

const HeaderBase = styled.header`
    background: linear-gradient(to top, rgba(0,0,0,0.95), transparent), url(${props => props.backgroundImage});
    background-size: cover !important;
    background-position: center;
    height: 100vh;
    padding: 5vh ${containerWidth.xs};
    display: flex;
    align-items: flex-end;
    @media (${mediaQueryMin.sm}) {
        padding: 3em ${containerWidth.sm};
    }
    @media (${mediaQueryMin.md}) {
        padding: 2em ${containerWidth.md};
    }
    @media (${mediaQueryMin.lg}) {
        padding: 2em ${containerWidth.lg};
        background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 10%), linear-gradient(to top, rgba(0,0,0,0.90), transparent 45%), url(${props => props.backgroundImage});
    }
    @media (${mediaQueryMin.xxl}) {
        padding: 5em ${containerWidth.xl};
    }
`;

const HeaderInformation = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    @media (${mediaQueryMin.sm}) {
        flex-direction: row;
        & > * {
            width: 50%;
            justify-content: center;
        }
    }
`;

const Header = ({ title, subtitle, tagline, img, children }) => {
    return (
        <HeaderBase backgroundImage={img}>
            <HeaderInformation>
                <div>
                    <p className="subtitle">{subtitle}</p>
                    <h1>{title}</h1>
                </div>
                <div>
                    <p>{tagline}</p>
                    {children}
                </div>
            </HeaderInformation>
        </HeaderBase>
    );
};

export default Header;
