import styled, { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';
import theme from '../../styles/extended/theme';
import Button from '../../components/Button/Button';
import { ComicSansProps } from './FooterExtended.types';

const { mediaQueryMin } = theme;
const container = theme.containerWidth;

export const FooterCol = styled.div`
    width: 100%;
    margin: 2.5%;
    // Quick fix for small object having a wrong line-height
    p {
        small {
            line-height: 1em;
        }
    }
    @media screen and (${mediaQueryMin.sm}) {
        width: 45%;
    }
    @media screen and (${mediaQueryMin.md}) {
        width: 20%;
    }
`;

export const FooterLogo = styled.img`
    transform: translateX(-1.5rem);
    max-width: 60vw;
    height: 100%;
    padding: 0.75em;
    width: auto;
    @media (${mediaQueryMin.md}) {
        max-width: unset;
    }
    @media (${mediaQueryMin.sm}) {
        transform: translateX(-3rem);
    }
`;

export const FooterLinkContainer = styled.p`
    margin: 1rem 0;
    font-size: 1.33rem;
    line-height: 1.33em;
`;

export const FooterLink = styled.a`
    display: block;
    text-decoration: none;
    cursor: pointer;
    color: ${theme.colors.lightgray};
`;

export const FooterHeadingContainer = styled.div`
    margin: 2em 0 0.66em 0;
    p {
        margin-bottom: 0;
    }
    @media (${mediaQueryMin.sm}) {
        height: 5rem;
        display: flex;
        align-items: end;
    }
`;

export const FooterButton = styled(Button)`
    margin-top: 0;
    font-size: 0.9rem !important;
    padding: 0.5em 2rem;
`;

export const FooterSpacer = styled.div`
    height: 3.4rem;
`;

export const FooterContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 3em ${container.xs} 1em ${container.xs};
    @media screen and (${mediaQueryMin.sm}) {
        padding: 3em ${container.sm} 3em ${container.sm};
        flex-direction: row;
    }
    @media screen and (${mediaQueryMin.md}) {
        padding: 3em ${container.md} 0 ${container.md};
    }
    @media screen and (${mediaQueryMin.lg}) {
        padding: 3em ${container.lg} 0 1em;
    }
    @media screen and (${mediaQueryMin.xl}) {
        padding: 3em ${container.xl} 0 ${container.xl};
    }
    background: ${theme.colors.secondary};
`;

export const Copyright = styled(FooterContainer)`
    justify-content: center;
    flex-direction: column !important;
    text-align: center;

    * {
    }
    hr {
        margin: 0;
        opacity: 0.75;
    }

    p {
        padding-top: 1em;
        opacity: 0.8;
    }
`;

export const ComicSans: React.FC<ComicSansProps> = ({ children }) => {
    const [showComicSans, setShowComicSans] = useState(false);
    const switchComicSans = () => setShowComicSans(!showComicSans);
    const ComicSansText = styled.span`
        cursor: pointer;
    `;
    const ComicSansCSS = createGlobalStyle`
        html * {
            font-family: "Comic Sans MS" !important;
        }
    `;

    return (
        <>
            <ComicSansText onClick={switchComicSans}>{children}</ComicSansText>
            {showComicSans && <ComicSansCSS />}
        </>
    );
};
