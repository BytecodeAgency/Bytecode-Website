declare module 'gatsby-mdx/mdx-renderer' {
    import MDXRenderer from 'gatsby-mdx/mdx-renderer';

    // eslint-disable-next-line prettier/prettier
    export default MDXRenderer;
}

declare module 'styled-components-style-utils' {
    import { reset, debug } from 'styled-components-style-utils';

    export { reset, debug };
}
