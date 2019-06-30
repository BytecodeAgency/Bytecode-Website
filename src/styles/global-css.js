/* eslint-disable no-unused-expressions, function-paren-newline, prettier/prettier, max-len  */
import { reset, debug } from 'styled-components-style-utils';
import { setConfiguration } from 'react-grid-system';
import theme from './theme';

const typographyElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'big', 'small', 'li', 'ul', 'body'];

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



const typographyElementStyling = typographyElements
    .map(
        element => `${element} {
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
    }`,
    )
    .join('\n\n');

const typographyClassStyling = typographyClasses
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
    .join('\n\n');

const enableCssReset = false;
const GlobalStylesRaw = `
    ${reset()}
    ${enableCssReset ? debug() : ''}
    html { font-size: 1em; background: ${theme.colors.background} }
    a { color: inherit; text-decoration: none }
    img { width: 100%; height: auto; margin:0; padding: 0}
    ${typographyElementStyling}
    ${typographyClassStyling}
    @media (max-width: ${theme.breakpoints[0]}px) { h1 { font-size: 4rem; } }
    body { overflow-x: hidden; }
    textarea { resize: vertical; }
    ::selection {
        background: ${theme.colors.tertiary};
        color: ${theme.colors.white}
    }
`;

export const GlobalStyles = GlobalStylesRaw.replace(/\s+/gm, '');

export const setContainerWidths = () => {
    setConfiguration({ containerWidths: theme.containerWidths });
};
