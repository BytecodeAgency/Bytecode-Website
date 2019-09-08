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
import PostThumbnail from '../components/PostThumbnail';

const { xs, sm, md, lg, xl, xxl } = theme.mediaQueryMin;

const pageSettings = {
    title: 'Bytecode Insights - Bytecode Digital Agency B.V.',
    description:
        'Bytecode insights, vergroot je kennis en leer meer over hoe je digitale assets kan inzetten voor jouw business! Samen halen we alles uit jouw digitale zelf!',
    keywords: 'bytecode insights',
};

const Blogpost = ({ data: post }, key) => (
    <PostThumbnail
        blog
        key={key}
        title={post.frontmatter.title}
        slug={post.fields.slug}
        postedOn={post.frontmatter.posted_on}
        postImageUrl={require(`../images/img/articles/${post.frontmatter.article_image_url}`)}
        authorName={post.frontmatter.author_name}
        authorRole={post.frontmatter.author_role}
        authorImageUrl={post.frontmatter.author_image_url}
        category={post.frontmatter.category_name}
        readingTime={post.frontmatter.reading_time}
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
            <Container>
                <Row>
                    {
                        posts.map(({ node: post }, _, key) => <Blogpost data={post} key={key} />)
                    }
                </Row>
            </Container>
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

const PostThumbnailWrapper = styled.div`
    width: 100%;
    @media ${md} {
        width: 50%;
    }
`;

const Posts = styled(Container)`
    margin: 0;
    display: flex;
    flex-direction: column;
    @media ${sm} {
        flex-direction: row;
    }
`;


const PostThumbnailContentWrapper = styled.div`
    text-decoration: none !important;
    cursor: pointer;
    @media ${md} {
        padding: 2rem;
        margin: 1rem;
    }
`;

const PostThumbnailImage = styled.div`
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
