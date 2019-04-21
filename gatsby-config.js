module.exports = {
    siteMetadata: {
        title: `Bytecode Digital Agency`,
        description: `The Bytecode Digital Agency website, made in GatsbyJS`,
        author: `@bytecodebv`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `bytecode-digital-agency`,
                short_name: `bytecode`,
                start_url: `/`,
                background_color: `#23be87`,
                theme_color: `#23be87`,
                display: `minimal-ui`,
                icon: `src/images/icons/icon-512x512.png`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ],
};
