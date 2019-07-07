import React from 'react';
import Layout from '../layouts/MainLayout';

import { Container, Row, Col } from '../lib/Grid';

import CaseThumbnail from '../components/CaseThumbnail';

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const testImg = require('../images/img/content/team.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <h1>Case</h1>
    </Layout>
);

export default Case;
