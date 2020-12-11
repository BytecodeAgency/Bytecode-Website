import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout';
import { Container, Row, Col } from '../lib/Grid';
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
    <Layout pageSettings={pageSettings}>
        <NieuwsbriefContainer>
            <Row>
                <Col md={6}>
                    <img
                        src={require('../images/img/content/teamv2.png')}
                        alt="Team Bytecode"
                    />
                </Col>
                <Col md={6}>
                    <NewsletterSubscribe />
                </Col>
            </Row>
        </NieuwsbriefContainer>
    </Layout>
);

export default Nieuwsbrief;
