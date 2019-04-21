import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Container, Row, Col } from '../lib/Grid';
import Button from './Button';
import AllSocials from '../lib/Socials';
import theme from '../styles/theme';

const FooterColInnerContainer = styled.div`
    margin-bottom: 2rem;
    @media (max-width: ${theme.breakpoints[1]}px) {
        margin: 3.5em 2rem;
    }
`;

const FooterCol = ({ props, children }) => (
    <Col {...props} md={6} lg={6} xl={3}>
        <FooterColInnerContainer>{children}</FooterColInnerContainer>
    </Col>
);

const FooterIcon = styled.img`
    height: 4.5rem;
    width: auto;
`;

const FooterLogo = styled(FooterIcon)`
    transform: translateX(-3rem);
`;

const OpenSourceIcon = styled(FooterIcon)`
    height: 3.2rem;
`;

const FooterLinkContainer = styled.h4`
    margin: 1rem 0;
`;

const FooterLink = styled.a`
    display: block;
    text-decoration: none;
    cursor: pointer;
`;

const FooterHeadingContainer = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
`;

const FooterButton = styled(Button)`
    margin-top: 2rem;
    font-size: 1.2rem;
    padding: 0.7rem 2.5rem;
`;

const FooterText = styled.p`
    font-size: 1.4rem;
`;

const FooterSpacer = styled.div`
    height: 3.4rem;
`;

const Copyright = styled.p`
    margin: 2rem 2rem;
    text-align: center;
    font-size: 1rem;
    color: ${theme.colors.white};
`;

const FooterContainer = styled(Container)`
    max-width: 80vw;
`;

const Footer = () => (
    <footer>
        <FooterContainer fluid>
            <Row>
                <FooterCol>
                    <FooterHeadingContainer>
                        <FooterLogo src="/static/img/logo.svg" alt="Bytecode" />
                    </FooterHeadingContainer>
                    <FooterLinkContainer>
                        <FooterLink href="mailto:info@bytecode.nl">
                            info@bytecode.nl
                        </FooterLink>
                        <FooterLink href="tel:+31152024222">
                            015-2024222
                        </FooterLink>
                        <br />
                        <AllSocials
                            isFooter={true}
                            facebook="https://www.facebook.com/bytecodeagency"
                            twitter="https://twitter.com/bytecodeagency"
                            instagram="https://www.instagram.com/bytecodeagency"
                            linkedin="
                            https://www.linkedin.com/company/bytecodeagency"
                        />
                    </FooterLinkContainer>
                </FooterCol>
                <FooterCol>
                    <FooterHeadingContainer>
                        <p className="subtitle">Kom langs</p>
                    </FooterHeadingContainer>
                    <FooterText>
                        Onze deur staat altijd open, maar een afspraak plannen
                        is wel gewenst. <br /> <br />
                        Ons adres is Verlengde Spiegelmakerstraat 13, 2645LZ
                        Delfgauw.
                    </FooterText>
                    <FooterButton
                        href="https://calendly.com/bytecode"
                        target="_blank"
                    >
                        Plan een afspraak
                    </FooterButton>
                </FooterCol>
                <FooterCol>
                    <FooterHeadingContainer>
                        <OpenSourceIcon
                            src="/static/icons/social/open-source.svg"
                            alt="Open source"
                        />
                    </FooterHeadingContainer>
                    <FooterText>
                        Wij dragen graag bij aan open source projecten en vrije
                        software. Om de daad bij het woord te voegen hebben wij
                        de broncode van deze website onder AGPL-3.0 licentie
                        vrijgegeven.
                    </FooterText>
                    <FooterButton
                        href="https://github.com/BytecodeBV/Bytecode-Website"
                        target="_blank"
                    >
                        Bekijk broncode
                    </FooterButton>
                </FooterCol>
                <FooterCol>
                    <FooterHeadingContainer>
                        <p className="subtitle">Documenten</p>
                    </FooterHeadingContainer>
                    <FooterText>
                        <FooterLink
                            href="/static/docs/algemene-voorwaarden.pdf"
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
                        >
                            Security Policy
                        </FooterLink>
                    </FooterText>
                    <FooterSpacer />
                    <FooterHeadingContainer>
                        <p className="subtitle">Legal</p>
                    </FooterHeadingContainer>
                    <FooterText>
                        KvK: 71497560
                        <br />
                        BTW: NL858738703B01
                        <br />
                        IBAN: NL77 BUNQ 2206 3628 13
                    </FooterText>
                </FooterCol>
            </Row>
            <Copyright>
                &copy; {new Date().getFullYear()}
                &nbsp;Bytecode Digital Agency B.V. - All Rights Reserved
            </Copyright>
        </FooterContainer>
    </footer>
);

export default Footer;
