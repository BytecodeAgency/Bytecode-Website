/* eslint-disable react/prop-types, @typescript-eslint/camelcase */

import React from 'react';
import { graphql } from 'gatsby';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/BlogpostLayout' was resolved to... Remove this comment to see the full error message
import BlogpostLayout from '../layouts/BlogpostLayout';

// TODO: Add props validation for Gatbsy query
const BlogpostTemplate = ({ data }: any) => {
    const { mdx } = data;
    const content = {
        pageSettings: {
            title: mdx.frontmatter.title,
            description: mdx.frontmatter.description,
            keywords: mdx.frontmatter.keywords,
        },
        article_image_url: mdx.frontmatter.article_image_url,
        category_name: mdx.frontmatter.category_name,
        title: mdx.frontmatter.title,
        author_name: mdx.frontmatter.author_name,
        author_role: mdx.frontmatter.author_role,
        author_image_url: mdx.frontmatter.author_image_url,
        posted_on: mdx.frontmatter.posted_on,
        reading_time: mdx.frontmatter.reading_time,
        article_intro: mdx.frontmatter.article_intro,
        post_content: mdx.code.body,
    };
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <BlogpostLayout content={content} />;
};

export default BlogpostTemplate;

export const query = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            frontmatter {
                id
                title
                description
                keywords
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
            code {
                body
            }
        }
    }
`;
