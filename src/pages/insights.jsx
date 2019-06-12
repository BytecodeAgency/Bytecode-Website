/* eslint-disable max-len, object-curly-newline, camelcase, prettier/prettier */

import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts/MainLayout';
import theme from '../styles/theme';
import { Container, Row, Col } from '../lib/Grid';
import Author from '../components/Author';
import ContactForm from '../components/ContactForm';
import ContentPageHeader from '../components/ContentPageHeader';
import Wrapper from '../components/Wrapper';

const pageSettings = {
    title: 'Bytecode Insights - Bytecode Digital Agency B.V.',
    description:
        'Bytecode insights, vergroot je kennis en leer meer over hoe je digitale assets kan inzetten voor jouw business! Samen halen we alles uit jouw digitale zelf!',
    keywords: 'bytecode insights',
};

const Blogpost = ({ data: post }, key) => (
    <BlogThumbnail
        key={key}
        title={post.frontmatter.title}
        slug={post.fields.slug}
        posted_on={post.frontmatter.posted_on}
        article_image_url={post.frontmatter.article_image_url}
        author_name={post.frontmatter.author_name}
        author_role={post.frontmatter.author_role}
        author_image_url={post.frontmatter.author_image_url}
        category_name={post.frontmatter.category_name}
        reading_time={post.frontmatter.reading_time}
    />
);

const blogArchive = ({ data }) => {
    const { edges: posts } = data.allMdx;

    return (
        <Layout pageSettings={pageSettings}>
            <ContentPageHeader
                img={require('../images/img/content/vision_web.png')}
                subtitle="Insights"
                title="Een frisse blik op het internet."
                text="Hier zie je artikelen die met passie zijn geschreven
                door Bytecode, een jonge en moderne web agency. Wij
                laten jou graag zien hoe je de kracht van het
                internet kunt gebruiken om alles uit jezelf te
                halen. Dit doen we door interessante artikelen te
                schrijven, maar ook door deze inzichten in onze
                werkzaamheden te verwerken."
            />
            <Posts>
                <Container fluid>
                    <Row>
                        <Col offset={{ md: 1 }} md={10}>
                            <Container fluid>
                                <Row>
                                    {
                                        posts.map(({ node: post }, _, key) => <Blogpost data={post} key={key} />)
                                    }
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Posts>
            <Wrapper>
                <ContactForm />
            </Wrapper>
        </Layout>
    );
};

export const pageQuery = graphql`
    query blogIndex {
        allMdx {
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        id
                        title
                        slug
                        subtitle
                        posted_on
                        article_image_url
                        summary
                        author_name
                        author_role
                        author_image_url
                        catergory_name
                        category_slug
                        reading_time
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default blogArchive;

const BlogThumbnail = props => {
    const {
        title,
        slug,
        posted_on,
        article_image_url,
        author_name,
        author_role,
        author_image_url,
        category_name,
        reading_time,
    } = props;
    const articleImage = require(`../images/img/articles/${article_image_url}`);
    return (
        <Col xl={4} lg={4}>
            <Link to={slug}>
                <BlogThumbnailContentWrapper>
                    <BlogThumbnailImage url={articleImage} />
                    <h6 className="subtitle">{category_name}</h6>
                    <h3>{title}</h3>
                    <AuthorContainer>
                        <Author
                            name={author_name}
                            title={author_role}
                            img={author_image_url}
                        />
                    </AuthorContainer>
                    <p>
                        {reading_time} min read <br /> {posted_on}
                    </p>
                </BlogThumbnailContentWrapper>
            </Link>
        </Col>
    );
};

const Posts = styled.section`
    margin: 0;
`;

const BlogThumbnailContentWrapper = styled.a`
    cursor: pointer;
    text-decoration: none;
    padding: 2rem;
    margin: 1rem;
`;

const BlogThumbnailImage = styled.div`
    background-image: url(${props => props.url || '../images/img/header/noise.jpg'});
    width: 100%;
    height: 25rem;
    background-size: cover;
    background-position: center center;
    margin: 0 0 1.6rem;
    @media screen and (max-width: ${theme.breakpoints[1]}) {
        height: 25rem;
    }
`;

const AuthorContainer = styled.div`
    margin: 2rem 0;
`;
