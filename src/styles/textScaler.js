import styled, { css } from 'styled-components';
import theme from './theme';

const mediaQueries = theme.mediaQuery;

const base = {
    fontSize: '1em',
    scale: {
        desktop: 1.25,
        mobile: 1.15,
    },
    lineHeight: {
        paragraph: '1.33em',
        header: '1em',
    },
};

// Calculate size of headings
const setHeadingSize = (scale, baseSize) => {
    const elements = ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'];
    const rawCss = [];
    let multiplier = baseSize;
    for (let i = 0; i < elements.length; i += 1) {
        multiplier *= scale;
        rawCss.push(`${elements[i]} {font-size: ${multiplier}rem};`);
    }

    const headingStyling = rawCss.join('\n');
    return headingStyling;
};

const headerSize = {
    desktop: () => setHeadingSize(base.scale.desktop, 1 * 1.125),
    mobile: () => setHeadingSize(base.scale.mobile, 1 * 1.125),
};

// SCSS-version
const textScaler = css`
    ${headerSize.mobile}
    @media ${mediaQueries.md} {
        ${headerSize.desktop}
    };
    body {
        /* Base Font Size */
        font-size: ${base.fontSize};
        line-height: ${base.lineHeight.paragraph};
        max-width: 100vw;

        h1, h2, h3, h4, h5, h6 {
            line-height: ${base.lineHeight.header}
        }
        /* ${headerSize.mobile} */
        @media ${mediaQueries.md} {
            font-size: calc(${base.fontSize}*1.2));
            line-height: calc(${base.lineHeight.paragraph});
        };
        @media ${mediaQueries.lg} {
            font-size: calc(${base.fontSize}*1.3);
        };
        @media ${mediaQueries.xl} {
            font-size: calc(${base.fontSize}*1.4);
        };
        @media ${mediaQueries.xl} and ${mediaQueries.xxl} {
            font-size: calc(${base.fontSize}*1.6);
        };
    }


`;

export default textScaler;
