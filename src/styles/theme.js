/* eslint-disable no-unused-vars */

// Colors
const black = '#0f0f0f';
const darkgray = '#1a1a1a';
const green = '#23be87';
const lightgray = '#f2f2f2';
const mediumgray = '#252525';
const red = '#df5252';
const white = '#ffffff';

// Fonts
const heading = 'Lato';
const paragraph = 'Lato';
const menu = 'Cousine';

// Font weights
const regular = 400;
const bold = 700;
const medium = 500;
const extrabold = 900;

// Global Header settings
const GlobalHeadingSettings = {
    height: '1em',
    spacing: '0em',
    color: white,
    weight: bold,
    marginBottom: '0.66em',
};

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
        body: {
            size: '1.8rem',
            height: '1.2em',
            spacing: '0.0em',
            font: paragraph,
            weight: regular,
            color: lightgray,
        },
        h1: {
            size: '4.292rem',

            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h2: {
            size: '3.433rem',

            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h3: {
            size: '2.747rem',
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h4: {
            size: '2.197rem',
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h5: {
            size: '1.758rem',
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h6: {
            size: '1.406rem',
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: '0.33em',
        },
        p: {
            spacing: '0em',
            font: paragraph,
            weight: regular,
            color: lightgray,
            marginBottom: '1.66em',
        },
        big: {
            size: '133%',
            height: '1.33em',
            spacing: '0em',
            font: paragraph,
            weight: regular,
            color: lightgray,
            marginBottom: '3em',
            marginTop: '1.66em',
        },
        small: {
            size: '66%',
            spacing: '0em',
            font: paragraph,
            weight: regular,
            color: lightgray,
            marginBottom: '1.66em',
        },
        li: {
            spacing: '0em',
            font: paragraph,
            weight: regular,
            color: white,
            marginTop: '1em',
            marginBottom: '1.33em',
        },
        ul: {
            marginTop: '1.33em',
            marginBottom: '1em',
            marginLeft: '1em',
            marginRight: '1.66m',
        },
        introduction: {
            size: '1.9rem',
            height: '1.2em',
            spacing: '0.01em',
            font: paragraph,
            weight: regular,
            color: lightgray,
        },
        subtitle: {
            size: '1rem',
            height: '1.2em',
            spacing: '0.35em',
            font: paragraph,
            weight: bold,
            color: green,
        },
        button: {
            size: '1.125rem',
            height: '1.2em',
            spacing: 'normal',
            font: paragraph,
            weight: regular,
            color: red,
        },
        menuitem: {
            size: '1.125rem',
            height: '1.2em',
            spacing: '0.17em',
            font: menu,
            weight: regular,
            color: lightgray,
        },
        form: {
            size: '2.4rem',
            height: '2.7em',
            spacing: 'normal',
            font: paragraph,
            weight: regular,
            color: white,
        },
    },
    breakpointMobileMenu: '63rem',
    breakpoints: [540, 750, 960, 1400],
    containerWidths: [540, 750, 960, 1600],
};

const theme = bytecode;
export default theme;
