/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';
import styleUtils from '../lib/style-utils';
import theme from './theme';

const typographyElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'p'];

const typographyClasses = ['text', 'subtitle', 'button', 'menuitem'];

const addStylingExceptions = element => {
    switch (element) {
        case 'subtitle':
            return 'text-transform: uppercase;';
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

injectGlobal`
    ${styleUtils.reset()}
    html {
        font-size: 62.5%;
        background: ${theme.colors.background}
    }
    ${typographyElementStyling}
    ${typographyClassStyling}
`;
