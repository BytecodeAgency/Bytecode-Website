/* eslint-disable no-unused-vars */

// Colors
const black = '#0f0f0f';
const darkgray = '#1a1a1a';
const green = '#23be87';
const lightgray = '#c1c1c1';
const mediumgray = '#303030';
const red = '#df5252';
const white = '#ffffff';

// Fonts
const heading = 'Lato';
const paragraph = 'Lato';
const menu = 'Space Mono';

// Font weights
const regular = 400;
const bold = 700;
const medium = 500;
const extrabold = 900;

/**
 * Used font combinations:
 * Lato: 900, 700, 400
 * Space Mono: 400
 */

// Bytecode theme
const bytecode = {
    colors: {
        background: darkgray,
        primary: green,
        secondary: mediumgray,
        tertiary: red,
        black,
        mediumgray,
        lightgray,
        white,
    },
    typography: {
        h1: {
            size: '4.8rem',
            height: '1.05em',
            spacing: '0.02em',
            font: heading,
            weight: extrabold,
            color: white,
        },
        h2: {
            size: '3.6rem',
            height: '1.05em',
            spacing: '0.02em',
            font: heading,
            weight: medium,
            color: white,
        },
        h3: {
            size: '2.4rem',
            height: '1.2em',
            spacing: '0.02em',
            font: heading,
            weight: medium,
            color: white,
        },
        h4: {
            size: '2.0rem',
            height: '1.2em',
            spacing: '0.04em',
            font: heading,
            weight: medium,
            color: white,
        },
        h5: {
            size: '1.4rem',
            height: '1.4em',
            spacing: '0.1em',
            font: heading,
            weight: medium,
            color: white,
        },
        p: {
            size: '1.8rem',
            height: '1.2em',
            spacing: '0.16em',
            font: paragraph,
            weight: regular,
            color: lightgray,
        },
        text: {
            size: '1.8rem',
            height: '1.2em',
            spacing: '0.16em',
            font: paragraph,
            weight: regular,
            color: lightgray,
        },
        subtitle: {
            size: '1.6rem',
            height: '1.2em',
            spacing: '0.31em',
            font: paragraph,
            weight: bold,
            color: green,
        },
        button: {
            size: '1.4rem',
            height: '1.2em',
            spacing: 'normal',
            font: paragraph,
            weight: regular,
            color: red,
        },
        menuitem: {
            size: '1.6rem',
            height: '1.2em',
            spacing: '0.17em',
            font: menu,
            weight: regular,
            color: lightgray,
        },
    },
    breakpointMobileMenu: '60rem',
    containerWidths: [540, 750, 960, 1400],
};

const theme = bytecode;
export default theme;
