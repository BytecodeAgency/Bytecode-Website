import styled from 'styled-components';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import Button from '../components/Button';
import ContentPageHeader from '../components/ContentPageHeader';

/* eslint-disable */
const pageSettings = {
    title: 'Contact - Bytecode Digital Agency | Eerste stap tot digitaal succes!',
    description: 'Contact, neem contact met ons op door een belletje of door een mailtje te sturen. Langskomen mag altijd, Bytecode staat voor je klaar!',
    keywords: 'contact',
};

const ContactHeading = styled.h3`
    margin: 1.5em 0;
    line-height: 1.4em;
`;

const Contact = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader
            img = "static/img/header/post-it-full.jpg"
            subtitle ="Contact"
            title="Een keertje langskomen? Gezellig!"
            href="#"
            button="Plan een afspraak"
        />
        <Container fluid>
            <Row>
                <Col xl={7} lg={6} md={12} xs={12}>
                    {/* <TextBlock
                        subtitle="We staan voor je klaar"
                        headingType="h2"
                        title="Stuur ons een berichtje"
                    /> */}
                    <ContactForm />
                </Col>
                <Col
                    offset={({ xl: 0 }, { lg: 1 })}
                    xl={3}
                    lg={5}
                    md={12}
                    xs={12}
                >
                    <ContactHeading>
                        Zin om samen te werken? Stuur een berichtje naar&nbsp;
                        <a href="mailto:info@bytecode.nl">info@bytecode.nl</a>
                        &nbsp;of bel ons op&nbsp;
                        <a href="tel:0152024222">015-2024222</a>
                    </ContactHeading>
                    <ContactHeading>
                        Of kom een keertje (op afspraak) langs bij ons op
                        kantoor aan de de&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://goo.gl/maps/9P6in4Qf6i62"
                        >
                            Verlengde Spiegelmakerstraat 13, Delfgauw
                        </a>
                    </ContactHeading>
                    <Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://calendly.com/bytecode"
                    >
                        Plan een afspraak
                    </Button>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Contact;
