/* eslint-disable max-len, react/no-danger */

import { Fragment } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import theme from '../../styles/theme';
import TextBlock from '../../components/TextBlock';
import { Container, Row, Col } from '../../lib/Grid'; // eslint-disable-line
import Author from '../../components/Author';
import ContactForm from '../../components/ContactForm';

const content = {
    id: 1,
    title: 'Website laten maken en hoe je de beste website bouwer vindt',
    subtitle: 'Hoe vind je een webbouwer die bij je past',
    slug: 'website-laten-maken',
    posted_on: '10 december 2018',
    article_image_url: 'https://cataas.com/cat',
    summary: 'This is the summary of the article',
    author_name: 'Nick Broekarts',
    author_role: 'Online Marketeer',
    author_image_url: 'https://cataas.com/cat?width=400?height=400',
    catergory_name: 'Websites',
    category_slug: 'websites',
    reading_time: 7,
    html_content:
        '<p> Voordat we starten met ontwikkelen, maken we eerst een gedetailleerde analyse. Dit stelt ons in staat om een helder en volledig overzicht te krijgen van de huidige situatie. Hierdoor kunnen wij de pijnpunten in beeld brengen en analyseren welke punten het meeste prioriteit hebben. Voordat we starten met ontwikkelen, maken we eerst een gedetailleerde analyse. Dit stelt ons in staat om een helder en volledig overzicht te krijgen van de huidige situatie. Hierdoor kunnen wij de pijnpunten in beeld brengen en analyseren welke punten het meeste prioriteit hebben. </p>',
};

const pageSettings = {
    title: `${content.title} - Bytecode Insights`,
    description: content.subtitle,
    keywords: content.title,
};

const HeaderContainer = styled.section`
    padding: 10rem 2% 2%;
    background-color: ${theme.colors.mediumgray};
    background-image: url('https://martinfletcher.files.wordpress.com/2015/01/plato.jpg');
    background-blend-mode: soft-light;
    background-size: cover;
    background-position: center center;
    opacity: 60%;
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
    padding: 4rem 0 12rem;

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
    <Fragment>
        <p className="call-to-action">
            Dit artikel is geschreven het team van Bytecode. Een klein maar
            fijne web agency in Rotterdam. Net als in deze artikelen willen wij
            jou in ons werk graag nieuwe inzichten geven hoe je het internet kan
            gebruiken. Heb je vragen over dit artikel of wil je meer over ons
            weten?
            <a href="/contact"> Neem eens contact met ons op!</a>
        </p>
        <ContactForm />
    </Fragment>
);

const BlogSingle = () => (
    <Layout pageSettings={pageSettings}>
        <article>
            <HeaderContainer>
                <Container>
                    <Row>
                        <Col md={12}>
                            <TextBlock
                                subtitle={content.catergory_name}
                                title={content.title}
                            />
                            <BlogMetaDataWrapper>
                                <Author
                                    name={content.author_name}
                                    title={content.author_role}
                                    img={content.author_image_url}
                                />
                                <BlogMetaData>
                                    {content.posted_on} <br />
                                    {content.reading_time} min. read
                                </BlogMetaData>
                            </BlogMetaDataWrapper>
                        </Col>
                    </Row>
                </Container>
            </HeaderContainer>
            <BlogContent>
                <Row>
                    <Col offset={{ md: 1, lg: 2, xl: 3 }} md={10} lg={8} xl={6}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content.html_content,
                            }}
                        />
                        <CallToAction />
                    </Col>
                </Row>
            </BlogContent>
        </article>
    </Layout>
);

export default BlogSingle;
