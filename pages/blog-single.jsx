/* eslint-disable max-len */

import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col } from '../lib/Grid'; // eslint-disable-line
import Author from '../components/Author';

const pageSettings = {
    title: 'Services',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const HeaderContainer = styled.section`
    padding: 10rem 2% 2%;
    background-color: ${theme.colors.mediumgray};
    background-image: url('https://martinfletcher.files.wordpress.com/2015/01/plato.jpg');
    background-blend-mode: soft-light;
    opacity: 60%;
    background-size: cover;
    @media (min-width: ${theme.breakpointMobileMenu}) {
        padding: 40vh 2% 5vh 5%;
    }
    @media (max-width: ${theme.breakpointMobileMenu}) {
        h1 {
            font-size: 2.6rem;
        }
    }
`;

const BlogContent = styled(Container)`
    padding: 4rem 0;

    p {
        margin: 1rem 0;
    }

    p,
    ul,
    li,
    a {
        color: ${theme.colors.white};
        font-kerning: normal;
        line-height: 2.2rem;
        font-size: 1.75rem;
        &.call-to-action {
            font-style: italic;
            color: ${theme.colors.lightgray};
            margin-top: 2em;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 1.5em 0 0em 0;
    }

    ul {
        list-style-type: circle;
        margin: 1em 1.5em;
        li {
            margin: 0.25rem 0;
        }
    }

    figure {
        margin: 4em 0;
    }
`;

const BlogMetaDataWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    margin-top: 6rem;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        margin-top: 2.4rem;
    }
`;

const BlogMetaData = styled.p`
    text-align: right;
    font-size: 1.25rem;
    display: flex;
    align-self: center;
    max-width: 20rem;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: none;
    }
`;

const CallToAction = () => (
    <p className="call-to-action">
        Dit artikel is geschreven het team van Bytecode. Een klein maar fijne
        web agency in Rotterdam. Net als in deze artikelen willen wij jou in ons
        werk graag nieuwe inzichten geven hoe je het internet kan gebruiken. Heb
        je vragen over dit artikel of wil je meer over ons weten?
        <a href="/contact"> Neem eens contact met ons op!</a>
    </p>
);

const BlogSingle = () => (
    <Layout pageSettings={pageSettings}>
        <article>
            <HeaderContainer>
                <Container>
                    <Row>
                        <Col md={12}>
                            <TextBlock
                                subtitle="UX-Design"
                                title="Waarom je filosofen moet betrekken in het ontwikkelproces"
                            />
                            <BlogMetaDataWrapper>
                                <Author
                                    name="Richard van 't Hof"
                                    title="Art-director & Front-end Developer"
                                    img="/static/img/team/Jeroen.png"
                                />
                                <BlogMetaData>
                                    2 november 2018 <br />4 min. read
                                </BlogMetaData>
                            </BlogMetaDataWrapper>
                        </Col>
                    </Row>
                </Container>
            </HeaderContainer>
            <BlogContent>
                <Row>
                    <Col offset={{ md: 1, lg: 2, xl: 3 }} md={10} lg={8} xl={6}>
                        <p>
                            Voordat we starten met ontwikkelen, maken we eerst
                            een gedetailleerde analyse. Dit stelt ons in staat
                            om een helder en volledig overzicht te krijgen van
                            de huidige situatie. Hierdoor kunnen wij de
                            pijnpunten in beeld brengen en analyseren welke
                            punten het meeste prioriteit hebben. Voordat we
                            starten met ontwikkelen, maken we eerst een
                            gedetailleerde analyse. Dit stelt ons in staat om
                            een helder en volledig overzicht te krijgen van de
                            huidige situatie. Hierdoor kunnen wij de pijnpunten
                            in beeld brengen en analyseren welke punten het
                            meeste prioriteit hebben.
                        </p>
                        <CallToAction />
                    </Col>
                </Row>
            </BlogContent>
        </article>
    </Layout>
);

export default BlogSingle;
