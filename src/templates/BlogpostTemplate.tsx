import React from 'react';
import { graphql } from 'gatsby';
import BlogpostLayout from '../layouts/BlogpostLayout';
import { BlogpostTemplateProps } from './BlogpostTemplate.types';

// TODO: Add props validation for Gatbsy query
const BlogpostTemplate: React.FC<BlogpostTemplateProps> = ({ data }) => {
    const { mdx } = data;
    const content = {
        pageSettings: {
            title: mdx.frontmatter.title,
            description: mdx.frontmatter.description,
            keywords: mdx.frontmatter.keywords,
        },
        id: mdx.frontmatter.id,
        article_image_url: mdx.frontmatter.article_image_url,
        category_name: mdx.frontmatter.category_name,
        category_slug: mdx.frontmatter.category_slug,
        title: mdx.frontmatter.title,
        author_name: mdx.frontmatter.author_name,
        author_role: mdx.frontmatter.author_role,
        author_image_url: mdx.frontmatter.author_image_url,
        posted_on: mdx.frontmatter.posted_on,
        reading_time: mdx.frontmatter.reading_time,
        article_intro: mdx.frontmatter.article_intro,
        post_content: mdx.code.body,
    };

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
