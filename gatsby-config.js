module.exports = {
    pathPrefix: '/bytecode-website',
    siteMetadata: {
        title: `Bytecode Digital Agency`,
        description: `The Bytecode Digital Agency website, made in GatsbyJS`,
        author: `@bytecodebv`,
        siteUrl: 'https://bytecode.nl',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-mdx`,
            extensions: ['.mdx'],
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                useMozJpeg: false,
                stripMetadata: true,
                defaultQuality: 75,
            },
        },
        {
            resolve: `gatsby-remark-images`,
            options: {
                maxWidth: 1000,
            },
        },
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
            resolve: `gatsby-plugin-sitemap`,
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts/`,
            },
        },
        `gatsby-plugin-offline`,
        // this (optional) plugin enables Progressive Web
        // App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ],
};
