import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/MainLayout' was resolved to '/h... Remove this comment to see the full error message
import Layout from '../layouts/MainLayout';
import { Container, Row, Col } from '../lib/Grid';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/NewsletterSubscribe/Newslett... Remove this comment to see the full error message
import NewsletterSubscribe from '../containers/NewsletterSubscribe/NewsletterSubscribe';

const pageSettings = {
    title: `Nieuwsbrief |
        Blijf op de hoogte`,
    description: `Blijf op de hoogte van onze nieuwste content en ontwikkelingen bij Bytecode`,
    keywords: 'nieuwsbrief, bytecode',
};

const NieuwsbriefContainer = styled(Container)`
    padding-top: 120px;
`;

const Nieuwsbrief = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <NieuwsbriefContainer>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Col md={6}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <img
                        src={require('../images/img/content/teamv2.png')}
                        alt="Team Bytecode"
                    />
                </Col>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Col md={6}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <NewsletterSubscribe />
                </Col>
            </Row>
        </NieuwsbriefContainer>
    </Layout>
);

export default Nieuwsbrief;
