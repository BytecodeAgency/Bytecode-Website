import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import Button from './Button';

const FooterCol = ({ props, children }) => (
    <Col {...props} md={6} lg={3}>
        {children}
    </Col>
);

const FooterLogo = styled.img`
    height: 6rem;
`;

const FooterLinkContainer = styled.h4`
    margin: 1rem 0;
`;

const FooterLink = styled.a`
    display: block;
    text-decoration: none;
`;

const FooterHeadingContainer = styled.div`
    height: 2.8rem;
`;

const FooterButton = styled(Button)`
    margin-top: 2rem;
`;

const FooterText = styled.p`
    font-size: 1.4rem;
`;

const FooterSpacer = styled.div`
    height: 4rem;
`;

const Copyright = styled.p`
    margin: 6rem 0 4rem;
    text-align: center;
`;

const Footer = () => (
    <footer>
        <Container>
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
                    </FooterLinkContainer>
                </FooterCol>
                <FooterCol>
                    <FooterHeadingContainer>
                        <p className="subtitle">Kom langs</p>
                    </FooterHeadingContainer>
                    <h4>Verlengde Spiegelmakerstraat 13</h4>
                    <h4>2645LZ Delfgauw, Nederland</h4>
                    <p style={{ marginTop: '1.4rem' }}>
                        Onze deur staat altijd open, maar een afspraak plannen
                        is wel gewenst
                    </p>
                    <FooterButton href="#">Plan een afspraak</FooterButton>;
                </FooterCol>
                <FooterCol>
                    <FooterHeadingContainer>
                        <p className="subtitle">Open Source</p>
                    </FooterHeadingContainer>
                    <FooterText>
                        Wij dragen graag bij aan open source projecten en vrije
                        software. Om de daad bij het woord te voegen hebben wij
                        de broncode van deze website onder AGPL-3.0 licentie
                        vrijgegeven.
                    </FooterText>
                    <FooterButton href="#">Bekijk broncode</FooterButton>;
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
                        <FooterLink href="#">KvK: 71497560</FooterLink>
                        <FooterLink href="#">BTW: NL858738703B01</FooterLink>
                        <FooterLink href="#">
                            IBAN: NL77 BUNQ 2206 3628 13
                        </FooterLink>
                    </FooterText>
                </FooterCol>
            </Row>
            <Copyright>
                <p>
                    &copy; {new Date().getFullYear()}
                    &nbsp;Bytecode Digital Agency B.V. - All Rights Reserved
                </p>
            </Copyright>
        </Container>
    </footer>
);

export default Footer;
