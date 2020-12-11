import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/MainLayout' was resolved to '/h... Remove this comment to see the full error message
import Layout from '../layouts/MainLayout';

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

const NotFound = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container404>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h1>Oeps, deze pagina bestaat niet...</h1>
        </Container404>
    </Layout>
);

export default NotFound;
