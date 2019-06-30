import styled, { css } from 'styled-components';
import theme from './theme';

// Below I staticially added new responsive breakpoints. In the end these breakpoints should be incorporated into the main theme.js
const breakpoint = {
    xs: '48em',
    sm: '64em',
    md: '85.375em',
    lg: '120em',
    xl: '160em',
};

const mediaQueries = {
    sm: `(min-width: ${breakpoint.sm})`,
    md: `(min-width: ${breakpoint.md})`,
    lg: `(min-width: ${breakpoint.lg})`,
    xl: `(min-width: ${breakpoint.xl})`,
    xxl: `(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`,
};

const base = {
    fontSize: '1em',
    lineHeight: {
        paragraph: '1.58em',
        header: '1.05em',
    },
};

const TextScaler = `
    body {
        /* Base Font Size */
        font-size: ${base.fontSize};
        line-height: ${base.lineHeight.paragraph};
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: ${base.lineHeight.header}
    }

    @media only screen and ${mediaQueries.md} {
        body {
            font-size: calc(${base.fontSize}*1.2);
            line-height: ${base.lineHeight.paragraph};
        }
    };
    @media only screen and ${mediaQueries.lg} {
        body {
            font-size: calc(${base.fontSize}*1.3);
        }
    };
    @media only screen and ${mediaQueries.xl} {
        body {
            font-size: calc(${base.fontSize}*1.4);
        }
    };
    @media only screen and ${mediaQueries.xxl} {
        body {
            font-size: calc(${base.fontSize}*1.6);
        }
    };
`;

// SCSS-version
// const TextScaler = `
//     body {
//         /* Base Font Size */
//         font-size: ${base.fontSize};
//         line-height: ${base.lineHeight.paragraph};
//            h1, h2, h3, h4, h5, h6 {
//                line-height: ${base.lineHeight.header}
//            }
//         @media ${mediaQueries.md} {
//             font-size: ${base.fontSize}*1.2;
//             line-height: ${base.lineHeight.paragraph};
//         };
//         @media ${mediaQueries.lg} {
//             font-size: ${base.fontSize}*1.3;
//         };
//         @media ${mediaQueries.xl} {
//             font-size: ${base.fontSize}*1.4;
//         };
//         @media ${mediaQueries.xxl} {
//             font-size: ${base.fontSize}*1.6;
//         };
//     }
// `;

// const TextScaler = TextScalerRaw.replace(/\s+/gm, '');
export default TextScaler;
