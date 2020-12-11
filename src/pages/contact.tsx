import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/MainLayout' was resolved to '/h... Remove this comment to see the full error message
import Layout from '../layouts/MainLayout';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/ContactForm/ContactForm' was... Remove this comment to see the full error message
import ContactForm from '../containers/ContactForm/ContactForm';
import { Container, Row, Col } from '../lib/Grid';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/Button' was resolved to '/ho... Remove this comment to see the full error message
import Button from '../components/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Header' was resolved to '/ho... Remove this comment to see the full error message
import Header from '../containers/Header';

const pageSettings = {
    title: `Contact`,
    description: `Neem vrijblijvend contact met ons op door te bellen naar 015-2024222 of door een mailtje te sturen naar info@bytecode.nl. Langskomen mag altijd, wij staan voor je klaar!`,
    keywords: 'contact',
};

const ContactHeading = styled.h4`
    margin: 3em 0 2em;
    line-height: 1.4em;
`;

const Contact = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Header
            img={require('../images/img/header/telefoon.jpg')}
            subtitle="Contact"
            title="Langskomen? Gezellig!"
            text="Geef ons een belletje of stuur een mailtje
            en het is zo geregeld.
            De koffie, thee en koekjes staan al klaar.
            Bij wijze van spreken, natuurlijk. Koffie en thee moeten warm zijn.
            Dat weten wij ook wel."
            bgSize="cover"
            shadow
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Col lg={7}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <ContactForm />
                </Col>

                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Col lg={4} offset={{ lg: 1 }}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <ContactHeading>
                        Zin om samen te werken? Stuur een berichtje naar&nbsp;
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <a href="mailto:info@bytecode.nl">info@bytecode.nl</a>
                        &nbsp;of bel ons op&nbsp;
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <a href="tel:0152024222">015-2024222</a>
                    </ContactHeading>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <ContactHeading>
                        Of kom eens bij ons langs op de&nbsp;
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://goo.gl/maps/9P6in4Qf6i62"
                        >
                            Verlengde Spiegelmakerstraat 13 in Delfgauw
                        </a>
                    </ContactHeading>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
