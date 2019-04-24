/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        frontmatter {
                            id
                            title
                            description
                            keywords
                            subtitle
                            posted_on
                            slug
                            article_image_url
                            summary
                            author_name
                            author_role
                            author_image_url
                            catergory_name
                            category_slug
                            reading_time
                        }
                        code {
                            body
                        }
                    }
                }
            }
        }
    `);

    data.allMdx.edges.forEach(edge => {
        const mdx = edge.node;
        const { slug } = edge.node.frontmatter;
        const template = path.resolve(`./src/templates/BlogpostTemplate.jsx`);
        actions.createPage({
            path: slug,
            component: template,
            context: { mdx },
        });
    });
};
