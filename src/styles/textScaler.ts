import { css } from 'styled-components';
import theme from './theme';
import calcHeaderSize from '../lib/calcHeaderSizes';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const mediaQueries = theme.mediaQueryMin;

const base = {
    fontSize: '1.15em',
    scale: {
        desktop: 1.33,
        mobile: 1.15,
    },
    lineHeight: {
        paragraph: '1.33em',
        header: '1em',
    },
};

const headerSize = {
    desktop: calcHeaderSize(base.scale.desktop, 1 * 1.125),
    mobile: calcHeaderSize(base.scale.mobile, 1 * 1.125),
};

// SCSS-version
const textScaler = css`
    ${headerSize.mobile}
    @media (${mediaQueries.sm}) {
        ${headerSize.desktop}
    }
    body {
        /* Base Font Size */
        font-size: ${base.fontSize};
        line-height: ${base.lineHeight.paragraph};
        max-width: 100vw;

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            line-height: ${base.lineHeight.header};
        }
        /* ${headerSize.mobile} */
        @media (${mediaQueries.xxl}) {
            font-size: calc(${base.fontSize}*1.5);
        }
        @media (${mediaQueries.xl}) {
            font-size: calc(${base.fontSize}*1.4);
        }
        @media (${mediaQueries.lg}) {
            font-size: calc(${base.fontSize}*1.3);
        }
        @media (${mediaQueries.md}) {
            font-size: calc(${base.fontSize} * 1.15);
            line-height: calc(${base.lineHeight.paragraph});
        }
    }
`;

export default textScaler;
