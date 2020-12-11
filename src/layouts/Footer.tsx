import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/Button' was resolved to '/ho... Remove this comment to see the full error message
import Button from '../components/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../lib/Socials' was resolved to '/home/tik... Remove this comment to see the full error message
import AllSocials from '../lib/Socials';
import theme from '../styles/theme';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin } = theme;
const container = theme.containerWidth;

const FooterColInnerContainer = styled.div`
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

type FooterColProps = {
    children: React.ReactNode,
};

const FooterCol = ({ children }: FooterColProps) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FooterColInnerContainer>{children}</FooterColInnerContainer>
);

const FooterIcon = styled.img`
    height: 100%;
    padding: 0.75em;
    width: auto;
    max-width: 20em;
    @media (${mediaQueryMin.md}) {
        max-width: unset;
    }
`;

const FooterLogo = styled(FooterIcon)`
    transform: translateX(-1.5rem);
    max-width: 60vw;
    @media (${mediaQueryMin.sm}) {
        transform: translateX(-3rem);
    }
`;

const FooterLinkContainer = styled.p`
    margin: 1rem 0;
    font-size: 1.33rem;
    line-height: 1.33em;
`;

const FooterLink = styled.a`
    display: block;
    text-decoration: none;
    cursor: pointer;
    color: ${theme.colors.lightgray};
`;

const FooterHeadingContainer = styled.div`
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

const FooterButton = styled(Button)`
    margin-top: 0em;
    font-size: 0.9rem !important;
    padding: 0.5em 2rem;
`;

const FooterSpacer = styled.div`
    height: 3.4rem;
`;

const FooterContainer = styled.section`
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

const Copyright = styled(FooterContainer)`
    justify-content: center;
    flex-direction: column !important;
    text-align: center;
    padding: 0;
    margin: 0;
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

const logo = require('../images/img/logo.svg');

const Footer = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <footer>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FooterContainer>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <FooterCol>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <FooterHeadingContainer>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <FooterLogo src={logo} alt="Bytecode" />
                </FooterHeadingContainer>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <FooterLinkContainer>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <AllSocials
                        isFooter
                        facebook="https://www.facebook.com/bytecodeagency"
                        twitter="https://twitter.com/bytecodeagency"
                        instagram="https://www.instagram.com/bytecodeagency"
                        linkedin="https://linkedin.com/company/bytecodeagency"
                    />
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <FooterLink href="mailto:info@bytecode.nl">
                        info@bytecode.nl
                    </FooterLink>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <FooterLink href="tel:+31152024222">015-2024222</FooterLink>

                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <FooterSpacer />
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p className="subtitle">Legal</p>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p>
                        KvK: 71497560
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <br />
                        BTW: NL858738703B01
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <br />
                        IBAN: NL77 BUNQ 2206 3628 13
                    </p>
                </FooterLinkContainer>
            </FooterCol>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <FooterCol>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <FooterHeadingContainer>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p className="subtitle">Kom langs</p>
                </FooterHeadingContainer>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Verl. Spiegelmakersstraat 13
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <br />
                    2645LZ Delfgauw
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <br />
                    Nederland
                </p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <FooterButton
                    href="https://calendly.com/bytecode"
                    target="_blank"
                    rel="noopener"
                >
                    Plan een afspraak
                </FooterButton>
            </FooterCol>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <FooterCol>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <FooterHeadingContainer>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p className="subtitle">Broncode website</p>
                </FooterHeadingContainer>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Wij dragen graag bij aan open source projecten en vrije
                    software. Om de daad bij het woord te voegen hebben wij de
                    broncode van deze website onder AGPL-3.0 licentie
                    vrijgegeven.
                </p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <FooterButton
                    href="https://github.com/BytecodeBV/Bytecode-Website"
                    target="_blank"
                    rel="noopener"
                >
                    Bekijk broncode
                </FooterButton>
            </FooterCol>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <FooterCol>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <FooterHeadingContainer>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p className="subtitle">Documenten</p>
                </FooterHeadingContainer>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <FooterLink
                        href="https://cdn.bytecode.nl/algemene-voorwaarden.pdf"
                        target="_blank"
                    >
                        Algemene Voorwaarden
                    </FooterLink>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <FooterLink href="/legal/privacy-policy">
                        Privacy Policy
                    </FooterLink>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <FooterLink href="/legal/cookie-policy">
                        Cookie Policy
                    </FooterLink>
                </p>
            </FooterCol>
        </FooterContainer>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Copyright>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <hr />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <small>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <ComicSans>&copy;</ComicSans> {new Date().getFullYear()}
                    &nbsp;Bytecode Digital Agency B.V.
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <br />
                    All Rights Reserved on text and image content,
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a href="https://github.com/BytecodeBV/Bytecode-Website">
                        &nbsp;source code&nbsp;
                    </a>
                    is available under the AGPL-3.0 license.
                </small>
            </p>
        </Copyright>
    </footer>
);

export default Footer;

type ComicSansProps = {
    children: React.ReactNode,
};

const ComicSans = ({ children }: ComicSansProps) => {
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
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ComicSansText onClick={switchComicSans}>{children}</ComicSansText>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            {showComicSans && <ComicSansCSS />}
        </>
    );
};
