import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import Button from './Button';

const FooterColInnerContainer = styled.div`
    margin-bottom: 5rem;
`;

const FooterCol = ({ props, children }) => (
    <Col {...props} md={6} lg={6} xl={3}>
        <FooterColInnerContainer>{children}</FooterColInnerContainer>
    </Col>
);

const FooterLogo = styled.img`
    height: 6rem;
    width: auto;
`;

const FooterLinkContainer = styled.h4`
    margin: 1rem 0;
`;

const FooterLink = styled.a`
    display: block;
    text-decoration: none;
`;

const FooterHeadingContainer = styled.div`
    height: 3.2rem;
`;

const TopPaddedParagraph = styled.p`
    margin-top: 1.4rem;
`;

const FooterButton = styled(Button)`
    margin-top: 2rem;
`;

const FooterText = styled.p`
    font-size: 1.4rem;
`;

const FooterSpacer = styled.div`
    height: 3.4rem;
`;

const Copyright = styled.p`
    margin: 1rem 0 2rem;
    text-align: center;
`;

const Footer = () => (
    <footer>
        <Container fluid={true}>
            <Row>
                <FooterCol>
                    <FooterLogo src="/static/img/logo.svg" alt="Bytecode" />
                    <FooterLinkContainer>
                        <FooterLink href="mailto:info@bytecode.nl">
                            info@bytecode.nl
                        </FooterLink>
                        <FooterLink href="tel:+31152024222">
                            015-2024222
                        </FooterLink>
                        <br />
                        Social Icons
                    </FooterLinkContainer>
                </FooterCol>
                <FooterCol>
                    <FooterHeadingContainer>
                        <p className="subtitle">Kom langs</p>
                    </FooterHeadingContainer>
                    <h4>Verlengde Spiegelmakerstraat 13</h4>
                    <h4>2645LZ Delfgauw, Nederland</h4>
                    <TopPaddedParagraph>
                        Onze deur staat altijd open, maar een afspraak plannen
                        is wel gewenst
                    </TopPaddedParagraph>
                    <FooterButton href="https://calendly.com/bytecode">
                        Plan een afspraak
                    </FooterButton>
                </FooterCol>
                <FooterCol>
                    <FooterHeadingContainer>
                        <p className="subtitle">Open Source</p>
                    </FooterHeadingContainer>
                    <p>
                        Wij dragen graag bij aan open source projecten en vrije
                        software. Om de daad bij het woord te voegen hebben wij
                        de broncode van deze website onder AGPL-3.0 licentie
                        vrijgegeven.
                    </p>
                    {/* eslint-disable-next-line max-len */}
                    <FooterButton href="https://github.com/BytecodeBV/Bytecode-Website">
                        Bekijk broncode
                    </FooterButton>
                </FooterCol>
                <FooterCol>
                    <FooterHeadingContainer>
                        <p className="subtitle">Documenten</p>
                    </FooterHeadingContainer>
                    <FooterText>
                        <FooterLink href="#">Algemene Voorwaarden</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Cookie Policy</FooterLink>
                        <FooterLink href="#">Security Policy</FooterLink>
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
        </Container>
    </footer>
);

export default Footer;
