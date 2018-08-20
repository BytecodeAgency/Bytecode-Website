import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';

const FooterCol = ({ props, children }) => (
    <Col {...props} md={6} lg={3}>
        {children}
    </Col>
);

const Copyright = styled.p`
    margin: 6rem 0 4rem;
    text-align: center;
`;

const Footer = () => (
    <footer>
        <Container>
            <Row>
                <FooterCol>Footerdinges</FooterCol>
                <FooterCol>Footerdinges</FooterCol>
                <FooterCol>Footerdinges</FooterCol>
                <FooterCol>Footerdinges</FooterCol>
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
