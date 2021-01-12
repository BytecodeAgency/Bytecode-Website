import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout/MainLayout';

const Container404 = styled.div`
    text-align: center;
    margin: 20rem 0;
    min-height: 20vh;
`;

const pageSettings = {
    title: 'Error',
    description: 'Er ging iets fout',
    keywords: 'error',
};

const NotFound: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <Container404>
            <h1>Oeps, deze pagina bestaat niet...</h1>
        </Container404>
    </Layout>
);

export default NotFound;
