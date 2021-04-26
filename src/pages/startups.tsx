import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayoutExtended/MainLayout';

const pageSettings = {
    title: `Maatwerk Web & Mobiel Ontwikkeling`,
    description: `Een kleinschalig full-service webbureau gespecialiseerd in platformontwikkeling op maat. Passie, kwaliteit en betrouwbaarheid als kernwaarden`,
    keywords: 'bytecode, digital agency',
};

const Startups = () => (
    <Layout pageSettings={pageSettings}>
        <p>Hello world</p>
    </Layout>
);

export default Startups;