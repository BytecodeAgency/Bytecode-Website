import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import AllSocials from '../lib/Socials';
import theme from '../styles/theme';

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

const FooterCol = ({ children }) => (
    <FooterColInnerContainer>{children}</FooterColInnerContainer>
);

FooterCol.propTypes = {
    children: PropTypes.node.isRequired,
};

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
    <footer>
        <FooterContainer>
            <FooterCol>
                <FooterHeadingContainer>
                    <FooterLogo src={logo} alt="Bytecode" />
                </FooterHeadingContainer>
                <FooterLinkContainer>
                    <AllSocials
                        isFooter
                        facebook="https://www.facebook.com/bytecodeagency"
                        twitter="https://twitter.com/bytecodeagency"
                        instagram="https://www.instagram.com/bytecodeagency"
                        linkedin="https://www.linkedin.com/company/bytecodeagency"
                    />
                    <FooterLink href="mailto:info@bytecode.nl">
                        info@bytecode.nl
                    </FooterLink>
                    <FooterLink href="tel:+31152024222">015-2024222</FooterLink>

                    <FooterSpacer />
                    <p className="subtitle">Legal</p>
                    <p>
                        KvK: 71497560
                        <br />
                        BTW: NL858738703B01
                        <br />
                        IBAN: NL77 BUNQ 2206 3628 13
                    </p>
                </FooterLinkContainer>
            </FooterCol>
            <FooterCol>
                <FooterHeadingContainer>
                    <p className="subtitle">Kom langs</p>
                </FooterHeadingContainer>
                <p>
                    Verl. Spiegelmakersstraat 13
                    <br />
                    2645LZ Delfgauw
                    <br />
                    Nederland
                </p>
                <FooterButton
                    href="https://calendly.com/bytecode"
                    target="_blank"
                    rel="noopener"
                >
                    Plan een afspraak
                </FooterButton>
            </FooterCol>
            <FooterCol>
                <FooterHeadingContainer>
                    <p className="subtitle">Broncode website</p>
                </FooterHeadingContainer>
                <p>
                    Wij dragen graag bij aan open source projecten en vrije
                    software. Om de daad bij het woord te voegen hebben wij de
                    broncode van deze website onder AGPL-3.0 licentie
                    vrijgegeven.
                </p>
                <FooterButton
                    href="https://github.com/BytecodeBV/Bytecode-Website"
                    target="_blank"
                    rel="noopener"
                >
                    Bekijk broncode
                </FooterButton>
            </FooterCol>
            <FooterCol>
                <FooterHeadingContainer>
                    <p className="subtitle">Documenten</p>
                </FooterHeadingContainer>
                <p>
                    <FooterLink
                        href="https://cdn.bytecode.nl/algemene-voorwaarden.pdf"
                        target="_blank"
                    >
                        Algemene Voorwaarden
                    </FooterLink>
                    <FooterLink href="/legal/privacy-policy">
                        Privacy Policy
                    </FooterLink>
                    <FooterLink href="/legal/cookie-policy">
                        Cookie Policy
                    </FooterLink>
                    <FooterLink
                        href="https://security.bytecode.nl"
                        target="_blank"
                        rel="noopener"
                    >
                        Security Policy
                    </FooterLink>
                </p>
            </FooterCol>
        </FooterContainer>
        <Copyright>
            <hr />
            <p>
                <small>
                    &copy; {new Date().getFullYear()}
                    &nbsp;Bytecode Digital Agency B.V.
                    <br />
                    All Rights Reserved on text and image content,
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
