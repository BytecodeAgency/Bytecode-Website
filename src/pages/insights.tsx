/* eslint-disable react/prop-types */
/* eslint-disable camelcase */

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/MainLayout/MainLayout';
import Container from '../containers/Container';
import PostThumbnail from '../containers/Thumbnails/PostThumbnail';
import Gallery from '../containers/Gallery';
import TextBlock from '../containers/TextBlock/TextBlock';

const pageSettings = {
    title: 'Insights',
    description:
        'Vergoot jouw kennis en leer meer over hoe je digitale tools kan inzetten voor jouw organisatie! Met onze podcasts, opinieartikelen en downloadbare content bengen we onze digitale kennis naar jouw kantoor of huiskamer',
    keywords: 'bytecode insights',
};

// TODO: change variables from message to be camelCase
type Post = {
    id: string;
    fields: {
        slug: string;
    };
    frontmatter: {
        id: number;
        title: string;
        slug: string;
        posted_on: number;
        article_image_url: string;
        author_name: string;
        author_role: string;
        author_image_url: string;
        category_name: string;
        category_slug: string;
        reading_time: string;
        article_intro: string;
        post_content: string;
    };
};

interface Props {
    data: {
        allMdx: {
            edges: {
                node: Post;
            }[];
        };
    };
}
const blogArchive: React.FC<Props> = ({ data }) => {
    const { edges: posts } = data.allMdx;
    return (
        <Layout padded pageSettings={pageSettings}>
            <Container>
                <TextBlock
                    title="Bytecode Insights"
                    subtitle="Artikelen & podcasts"
                />
                <Gallery xs={50} md={33}>
                    {posts.map(({ node: post }) => (
                        <PostThumbnail
                            key={post.id}
                            title={post.frontmatter.title}
                            slug={post.fields.slug}
                            postImageUrl={require(`../images/img/articles/${post.frontmatter.article_image_url}`)}
                            category={post.frontmatter.category_name}
                        />
                    ))}
                </Gallery>
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
                        posted_on
                        article_image_url
                        author_name
                        author_role
                        author_image_url
                        category_name
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
