/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type OwnProps = {
    description?: string,
    lang?: string,
    meta?: any[],
    keywords?: string,
    title: string,
};

type Props = OwnProps & typeof SEO.defaultProps;

function SEO({ description, lang, meta, keywords, title }: Props) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Helmet
            htmlAttributes={{
                lang: lang || 'nl',
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: metaDescription,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: keywords,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `nl`,
    meta: [],
    keywords: [],
    description: ``,
};

export default SEO;
