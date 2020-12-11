// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { reset, debug } from 'styled-components-style-utils';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { css, createGlobalStyle } from 'styled-components';
import theme from './theme';
import textScaler from './textScaler';

const typographyElements = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'li',
    'ul',
    'body',
];

const typographyClasses = [
    'introduction',
    'caption',
    'subtitle',
    'button',
    'menuitem',
    'form',
];

const addStylingExceptions = (element: any) => {
    switch (element) {
        case 'subtitle':
            return 'text-transform: uppercase;';
        case 'button':
            return 'text-decoration: none;';
        default:
            return '';
    }
};

const typographyElementStyling = typographyElements.map(
    element => css`
        ${element} {
            font-size: ${// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            theme.typography[element].size};
            line-height: ${// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            theme.typography[element].height};
            letter-spacing: ${// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            theme.typography[element].spacing};
            font-family: ${// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            theme.typography[element].font};
            font-weight: ${// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            theme.typography[element].weight};
            color: ${// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            theme.typography[element].color};
            margin-top: ${// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            theme.typography[element].marginTop};
            margin-bottom: ${// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            theme.typography[element].marginBottom};
            margin-left: ${// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            theme.typography[element].marginLeft};
            margin-right: ${// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            theme.typography[element].marginRight};
            ${addStylingExceptions(element)};
        }
    `,
);

export const TypographyClassStyling = createGlobalStyle`
    ${typographyClasses
        .map(
            element => `.${element} {
            font-size: ${
                // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                theme.typography[element].size
            };
            line-height: ${
                // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                theme.typography[element].height
            };
            letter-spacing: ${
                // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                theme.typography[element].spacing
            };
            font-family: ${
                // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                theme.typography[element].font
            };
            font-weight: ${
                // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                theme.typography[element].weight
            };
            color: ${
                // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                theme.typography[element].color
            };
            margin: ${
                // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                theme.typography[element].margin
            };
            ${addStylingExceptions(element)};
        }`,
        )
        .join('\n')}
`;

const enableCssReset = false;
const GlobalStyles = createGlobalStyle`
    ${reset()}
    ${enableCssReset ? debug() : ''}
    html { font-size: 1em; background: ${theme.colors.background} }
    a { color: ${theme.colors.primary}; text-decoration: none }
    img { width: 100%; height: auto; margin:0; padding: 0}
    ${typographyElementStyling}

    body { overflow-x: hidden; }
    textarea { resize: vertical; }
    ::selection {
        background: ${theme.colors.tertiary};
        color: ${theme.colors.white}
    }
    strong { font-weight: 700; }
    em { font-style: italic; }
    ${textScaler}
    ul { list-style: circle};
    ol {
        list-style: decimal;
        padding-left: 1rem;
    };
    blockquote {
        margin-left: 10%;
        font-style: italic;
        position: relative;
        ::before {
            content: '‘‘';
            color: ${theme.colors.primary};
            font-size: 60px;
            position: absolute;
            top: 10px;
            left: -30px;
            letter-spacing: -4px;
            font-family: "Times New Roman", Times, serif;
        }
    }
    code { font-family: monospace; }
    pre {
        white-space: pre-wrap;
        font-size: 80%;
    }
    hr { margin: 42px 0; }
`;

export { GlobalStyles };
