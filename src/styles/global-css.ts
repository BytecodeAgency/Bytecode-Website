import { reset, debug } from 'styled-components-style-utils';
import { css, createGlobalStyle } from 'styled-components';
import theme, {Typography} from './theme';
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

const addStylingExceptions = (element: string) => {
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
    (element) => css`
        ${element} {
            font-size: ${theme.typography[element as keyof Typography].size};
            line-height: ${theme.typography[element as keyof Typography].height};
            letter-spacing: ${theme.typography[element as keyof Typography].spacing};
            font-family: ${theme.typography[element as keyof Typography].font};
            font-weight: ${theme.typography[element as keyof Typography].weight};
            color: ${theme.typography[element as keyof Typography].color};
            margin-top: ${theme.typography[element as keyof Typography].marginTop};
            margin-bottom: ${theme.typography[element as keyof Typography].marginBottom};
            margin-left: ${theme.typography[element as keyof Typography].marginLeft};
            margin-right: ${theme.typography[element as keyof Typography].marginRight};
            ${addStylingExceptions(element)};
        }
    `,
);

export const TypographyClassStyling = createGlobalStyle`
    ${typographyClasses
        .map(
            (element) => `.${element} {
            font-size: ${theme.typography[element as keyof Typography].size};
            line-height: ${theme.typography[element as keyof Typography].height};
            letter-spacing: ${theme.typography[element as keyof Typography].spacing};
            font-family: ${theme.typography[element as keyof Typography].font};
            font-weight: ${theme.typography[element as keyof Typography].weight};
            color: ${theme.typography[element as keyof Typography].color};
            margin:
                ${theme.typography[element as keyof Typography].marginTop};
                ${theme.typography[element as keyof Typography].marginRight};
                ${theme.typography[element as keyof Typography].marginBottom};
                ${theme.typography[element as keyof Typography].marginLeft};
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
