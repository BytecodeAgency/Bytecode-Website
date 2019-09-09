/* eslint-disable max-len */

import React from 'react';
import styled from 'styled-components';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from './MainLayout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col } from '../lib/Grid';
import Author from '../components/Author';

const { mediaQueryMin, colors } = theme;

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
            <HeaderContainer
                background={require(`../images/img/articles/${
                    content.article_image_url
                }`)}
            >
                <Container>
                    <Row>
                        <Col offset={{ lg: 2 }} lg={8} md={12}>
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
            <Container>
                <BlogContent>
                    <div id="blogpost-content">
                        <MDXRenderer>{content.post_content}</MDXRenderer>
                    </div>
                    <CallToAction />
                </BlogContent>
            </Container>
        </article>
    </Layout>
);

export default BlogSingle;

const HeaderContainer = styled.header`
    padding: 20em 2% 2%;
    background-color: ${theme.colors.mediumgray};
    background-image: url(${props => props.background});
    background-blend-mode: soft-light;
    background-size: cover;
    background-position: center center;
    opacity: 60%;
`;

const BlogContent = styled.div`
    @media (${mediaQueryMin.sm}) {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        ol {
            padding: 0 15vw;
        }
        img,
        figure,
        svg {
            padding: 0 5vw;
        }
        ol,
        ul {
            list-style-position: outside;
            margin: 0em;
        }
    }


    ul {
        list-style: circle;
    }
    ol {
        list-style: decimal;
    }
    ol,
    ul {
        list-style-position: outside;
    }
    a {
        color: ${colors.primary};
    }
    img,
    figure,
    svg {
        margin: 2em 0;
    }
`;

const BlogMetaDataWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    margin-top: 6rem;
    font-size: 0.66em;
    line-height: 1em;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        margin-top: 2.4rem;
    }
`;

const BlogMetaData = styled.p`
    text-align: right;
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
