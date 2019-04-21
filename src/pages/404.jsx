import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container404 = styled.div`
    text-align: center;
    margin: 20rem 0;
`;

const pageSettings = {
    title: 'Error',
    description: 'Er ging iets fout',
    keywords: 'error',
};

const NotFound = () => (
    <Layout pageSettings={pageSettings}>
        <Container404>
            <h1>Oeps, deze pagina bestaat niet...</h1>
        </Container404>
    </Layout>
);

export default NotFound;
