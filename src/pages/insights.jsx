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

const { xs, sm, md, lg, xl, xxl } = theme.mediaQuery;

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
            <Container>
                <Row>
                    <Col md={5}>
                        <h1>Een frisse blik op het internet</h1>
                    </Col>
                    <Col offset={{ md: 1 }} md={6}>
                        <p>
                        Hier zie je artikelen die met passie zijn geschreven
                        door Bytecode, een jonge en moderne web agency. Wij
                        laten jou graag zien hoe je de kracht van het
                        internet kunt gebruiken om alles uit jezelf te
                        halen. Dit doen we door interessante artikelen te
                        schrijven, maar ook door deze inzichten in onze
                        werkzaamheden te verwerken
                        </p>
                    </Col>
                </Row>
            </Container>
            <Posts>

                {
                    posts.map(({ node: post }, _, key) => <Blogpost data={post} key={key} />)
                }

            </Posts>
        </Layout>
    );
};

export const pageQuery = graphql`
    query blogIndex {
        allMdx
        (sort: { fields: [frontmatter___id], order: DESC })
        {
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

const BlogThumbnailWrapper = styled.div`
    width: 100%;
    @media ${md} {
        width: 50%;
    }
`;

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
        <BlogThumbnailWrapper>
            <Link to={slug}>
                <BlogThumbnailContentWrapper>
                    <BlogThumbnailImage url={articleImage} />
                    <h6 className="subtitle">{category_name}</h6>
                    <h4>{title}</h4>
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
        </BlogThumbnailWrapper>
    );
};

const Posts = styled(Container)`
    margin: 0;
    display: flex;
    flex-direction: column;
    @media ${sm} {
        flex-direction: row;
    }
`;


const BlogThumbnailContentWrapper = styled.div`
    text-decoration: none !important;
    cursor: pointer;
    @media ${md} {
        padding: 2rem;
        margin: 1rem;
    }
`;

const BlogThumbnailImage = styled.div`
    background-image: url(${props => props.url || '../images/img/header/noise.jpg'});
    height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: center center;
    @media ${md} {

        width: 100%;
        height: 25rem;

        margin: 0 0 1.6rem;
    }
`;

const AuthorContainer = styled.div`
    margin: 2rem 0;
`;
