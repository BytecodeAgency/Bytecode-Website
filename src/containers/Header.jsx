import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const { colors, mediaQueryMin, containerWidth} = theme;
const { secondary } = colors;


const HeaderBase = styled.header`
    background: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 100vh;
    padding: 5vh ${containerWidth.xs};
    display: flex;
    align-items: flex-end;
    box-shadow: inset 0 -15em 10em 1em rgba(0,0,0,0.60);
    @media (${mediaQueryMin.sm}){
        padding: 3em ${containerWidth.sm};
    }
    @media (${mediaQueryMin.md}){
        padding: 2em ${containerWidth.md};
    }
    @media (${mediaQueryMin.lg}){
        padding: 5em ${containerWidth.lg};
    }
    @media (${mediaQueryMin.xxl}){
        padding: 5em ${containerWidth.xl};
    }
`;

const HeaderInformation = styled.div`
    display: flex;
    align-items: center;
    & > * {
        width: 50%;
    }
`;

const Header = ({title, subtitle, tagline, img, children}) => {
    return (
        <HeaderBase backgroundImage={img}>
            <HeaderInformation>
                <div>
                    <p class="subtitle">{subtitle}</p>
                    <h1>{title}</h1>
                </div>
                <div>
                    <p>{tagline}</p>
                    {children}
                </div>
            </HeaderInformation>
        </HeaderBase>
    )
};

export default Header;
