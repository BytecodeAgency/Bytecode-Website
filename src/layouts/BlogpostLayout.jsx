/* eslint-disable max-len */

import React from 'react';
import styled from 'styled-components';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from './MainLayout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col } from '../lib/Grid';
import Author from '../components/Author';
import ContactForm from '../components/ContactForm';

const CallToAction = () => (
    <CallToActionContainer>
        <CallToActionText>
            Dit artikel is met passie geschreven door Bytecode, een jonge en
            moderne web agency. Wij laten jou graag zien hoe je de kracht van
            het internet kunt gebruiken om alles uit jezelf te halen. Dit doen
            we door bijvoorbeeld dit artikel te schrijven, maar ook door deze
            inzichten in onze werkzaamheden te verwerken.
            <br />
            <br />
            Wil je meer over ons weten of kunnen we misschien iets voor je
            betekenen? <a href="/contact">Neem gerust contact met ons op</a> of
            kom een keer langs op de koffie!
        </CallToActionText>
    </CallToActionContainer>
);

const BlogSingle = ({ content }) => (
    <Layout pageSettings={content.pageSettings}>
        <article>
            <HeaderContainer background={content.article_image_url}>
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
            <BlogContentContainer>
                <BlogContent>
                    <div id="blogpost-content">
                        <MDXRenderer>{content.post_content}</MDXRenderer>
                    </div>
                    <CallToAction />
                </BlogContent>
            </BlogContentContainer>
        </article>
        <Container>
            <ContentBlockWrapper>
                <TextBlock
                    subtitle="We staan voor je klaar"
                    headingType="h2"
                    title="Heb je een vraag over dit artikel? Of misschien een suggestie voor een volgende post? Laat het ons weten!"
                />
                <ContactForm hideText={true} />
            </ContentBlockWrapper>
        </Container>
    </Layout>
);

export default BlogSingle;

const HeaderContainer = styled.section`
    padding: 10rem 2% 2%;
    background-color: ${theme.colors.mediumgray};
    background-image: url(${props => props.background});
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

const BlogContentContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const BlogContent = styled.div`
    padding: 4rem 1rem 4rem;
    max-width: 68rem;

    p {
        margin: 1rem 0;
    }

    b,
    strong {
        font-weight: bold;
    }

    p,
    ul,
    li,
    a {
        color: ${theme.colors.white};
        font-kerning: normal;
        line-height: 2.2rem;
        font-size: 1.75rem;
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
    }

    ol {
        list-style-type: decimal;
        margin: 1em 1.5em;
    }

    li {
        margin: 0.5rem 0;
        padding-left: 0.8rem;
        font-family: ${theme.typography.p.font};
        letter-spacing: ${theme.typography.p.spacing};
    }

    figure {
        margin: 4em 0;
    }

    img {
        max-width: 400px;
        margin: 3rem auto 3rem auto;
        display: block;
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

const CallToActionContainer = styled.div`
    margin-top: 4rem;
`;

const CallToActionText = styled.p`
    font-style: italic;
    color: ${theme.colors.lightgray} !important;
`;

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 5% 0% 5% -5%;
    padding: 7.5% 5%;
`;
