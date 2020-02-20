/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: `insights` });
        createNodeField({
            node,
            name: `slug`,
            value: `/insights${slug}`,
        });
    }
};

exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        query {
            allMdx {
                edges {
                    node {
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
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    data.allMdx.edges.forEach(edge => {
        const { id } = edge.node;
        const { slug } = edge.node.fields;
        const template = path.resolve(`./src/templates/BlogpostTemplate.jsx`);
        actions.createPage({
            path: slug,
            component: template,
            context: { id },
        });
    });
};
