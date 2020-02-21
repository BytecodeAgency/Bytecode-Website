import { reset, debug } from 'styled-components-style-utils';
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
    'subtitle',
    'button',
    'menuitem',
    'form',
];

const addStylingExceptions = element => {
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
            font-size: ${theme.typography[element].size};
            line-height: ${theme.typography[element].height};
            letter-spacing: ${theme.typography[element].spacing};
            font-family: ${theme.typography[element].font};
            font-weight: ${theme.typography[element].weight};
            color: ${theme.typography[element].color};
            margin-top: ${theme.typography[element].marginTop};
            margin-bottom: ${theme.typography[element].marginBottom};
            margin-left: ${theme.typography[element].marginLeft};
            margin-right: ${theme.typography[element].marginRight};
            ${addStylingExceptions(element)};
        }
    `,
);

export const TypographyClassStyling = createGlobalStyle`
    ${typographyClasses
        .map(
            element => `.${element} {
            font-size: ${theme.typography[element].size};
            line-height: ${theme.typography[element].height};
            letter-spacing: ${theme.typography[element].spacing};
            font-family: ${theme.typography[element].font};
            font-weight: ${theme.typography[element].weight};
            color: ${theme.typography[element].color};
            margin: ${theme.typography[element].margin};
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
    strong { font-weight: 700}
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
`;

export { GlobalStyles };
