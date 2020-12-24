import React from 'react';
import AllSocials from '../../lib/Socials/Socials';
import { Subtitle } from '../../components/Typography/Typography';
import {
    FooterContainer,
    ComicSans,
    Copyright,
    FooterButton,
    FooterCol,
    FooterHeadingContainer,
    FooterLink,
    FooterLinkContainer,
    FooterLogo,
    FooterSpacer,
} from './Footer.components';

const logo = require('../../images/img/logo.svg');

const Footer: React.FC<Record<string, never>> = () => (
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
                        linkedin="https://linkedin.com/company/bytecodeagency"
                    />
                    <FooterLink href="mailto:info@bytecode.nl">
                        info@bytecode.nl
                    </FooterLink>
                    <FooterLink href="tel:+31152024222">015-2024222</FooterLink>
                    <FooterSpacer />
                    <Subtitle>Legal</Subtitle>
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
                    <Subtitle>Kom langs</Subtitle>
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
                    <Subtitle>Broncode website</Subtitle>
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
                    <Subtitle>Documenten</Subtitle>
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
                </p>
            </FooterCol>
        </FooterContainer>
        <Copyright>
            <hr />
            <p>
                <small>
                    <ComicSans>&copy;</ComicSans> {new Date().getFullYear()}
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
