/* eslint-disable react/prop-types */

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/MainLayout';
import { Container, Row, Col } from '../lib/Grid';
import PostThumbnail from '../containers/Thumbnails/PostThumbnail';

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
                    {posts.map(({ node: post }, _, key) => (
                        <Blogpost data={post} key={key} />
                    ))}
                </Row>
            </Container>
        </Layout>
    );
};

export const pageQuery = graphql`
    query blogIndex {
        allMdx(sort: { fields: [frontmatter___id], order: DESC }) {
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
                        author_name
                        author_role
                        author_image_url
                        catergory_name
                        category_slug
                        reading_time
                        article_intro
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
