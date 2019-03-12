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

export default class Error extends React.Component {
    constructor(props) {
        super(props);
        this.getErrorContent = this.getErrorContent.bind(this);
    }

    static getInitialProps({ res, err }) {
        // eslint-disable-next-line no-nested-ternary
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    getErrorContent() {
        const { statusCode } = this.props;
        switch (statusCode) {
            case 404:
                return 'Oeps, deze pagina bestaat niet...';
            case 500:
                return 'Oeps, er ging iets fout op onze server...';
            default:
                return 'Oeps, iets ging niet helemaal goed...';
        }
    }

    render() {
        return (
            // eslint-disable-next-line react/jsx-filename-extension
            <Layout pageSettings={pageSettings}>
                <Container404>
                    <h1>{this.getErrorContent()}</h1>
                </Container404>
            </Layout>
        );
    }
}
