import { Container, Row, Col } from '../lib/Grid';

const Footer = () => (
    <footer>
        <Container className="text">
            &copy; {new Date().getFullYear()}
            &nbsp;Bytecode Digital Agency B.V. - All Rights Reserved
        </Container>
    </footer>
);

export default Footer;
