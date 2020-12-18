/* eslint-disable react/prop-types */

import React from 'react';
import { graphql } from 'gatsby';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/MainLayout' was resolved to '/h... Remove this comment to see the full error message
import Layout from '../layouts/MainLayout';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Container' was resolved to '... Remove this comment to see the full error message
import Container from '../containers/Container';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Thumbnails/PostThumbnail' wa... Remove this comment to see the full error message
import PostThumbnail from '../containers/Thumbnails/PostThumbnail';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Gallery' was resolved to '/h... Remove this comment to see the full error message
import Gallery from '../containers/Gallery';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/TextBlock/TextBlock' was res... Remove this comment to see the full error message
import TextBlock from '../containers/TextBlock/TextBlock';

const pageSettings = {
    title: 'Insights',
    description:
        'Vergoot jouw kennis en leer meer over hoe je digitale tools kan inzetten voor jouw organisatie! Met onze podcasts, opinieartikelen en downloadbare content bengen we onze digitale kennis naar jouw kantoor of huiskamer',
    keywords: 'bytecode insights',
};

// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'post' implicitly has an 'any' typ... Remove this comment to see the full error message
const Blogpost = ({ data: post }, key: any) => (
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

const blogArchive = ({ data }: any) => {
    const { edges: posts } = data.allMdx;
    return (
        <Layout padded pageSettings={pageSettings}>
            <Container>
                <TextBlock
                    title="Bytecode Insights"
                    subtitle="Artikelen & podcasts"
                />

                <Gallery xs={50} md={33}>
                    {/* @ts-expect-error ts-migrate(7031) FIXME: Binding element 'post' implicitly has an 'any' typ... Remove this comment to see the full error message */}
                    {posts.map(({ node: post }, _: any, key: any) => (
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Blogpost data={post} key={key} />
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
