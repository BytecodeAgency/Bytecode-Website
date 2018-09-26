/* eslint-disable no-unused-expressions, function-paren-newline */
import { injectGlobal } from 'styled-components';
import { reset, debug } from 'styled-components-style-utils';
import { setConfiguration } from 'react-grid-system';
import theme from './theme';

const typographyElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'body'];

const typographyClasses = ['text', 'subtitle', 'button', 'menuitem', 'form'];

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
    element => `${element} {
        font-size: ${theme.typography[element].size}
        line-height: ${theme.typography[element].height}
        letter-spacing: ${theme.typography[element].spacing}
        font-family: ${theme.typography[element].font}
        font-weight: ${theme.typography[element].weight}
        color: ${theme.typography[element].color}
        ${addStylingExceptions(element)}
    }`,
);

const typographyClassStyling = typographyClasses.map(
    element => `.${element} {
        font-size: ${theme.typography[element].size}
        line-height: ${theme.typography[element].height}
        letter-spacing: ${theme.typography[element].spacing}
        font-family: ${theme.typography[element].font}
        font-weight: ${theme.typography[element].weight}
        color: ${theme.typography[element].color}
        ${addStylingExceptions(element)}
    }`,
);

const enableCssReset = false;
injectGlobal`
    ${reset()}
    ${enableCssReset ? debug() : ''}
    html { font-size: 62.5%; background: ${theme.colors.background} }
    a { color: inherit; }
    img { width: 100%; height: auto; margin:0; padding: 0}
    ${typographyElementStyling}
    ${typographyClassStyling}
`;

setConfiguration({ containerWidths: theme.containerWidths });
