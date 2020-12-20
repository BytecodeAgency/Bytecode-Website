/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

// Colors
import React from 'react';

const black = '#0f0f0f';
const darkgray = '#1a1a1a';
const green = '#23be87';
const lightgray = '#f2f2f2';
const lightgray2 = '#E7E7E7';
const mediumgray = '#262626';
const red = '#df5252';
const white = '#ffffff';
const lightgreen = '#70C197';

// Fonts
const heading = 'Lato';
const paragraph = 'Lato';
const menu = 'Cousine';

// Font weights
const light = 300;
const regular = 300;
const bold = 700;

// Global Header settings
const GlobalHeadingSettings = {
    height: '1em',
    spacing: '0em',
    color: white,
    weight: bold,
    marginBottom: '0.66em',
};

// TODO: add typing to theme interface, for now they will accept any object (Record<string, unknown>)
interface Bytecode {
    colors: Record<string, unknown>;
    fonts: Record<string, unknown>;
    fontWeights: Record<string, unknown>;
    typography: Record<string, unknown>;
    breakpoint: Record<string, unknown>;
    containerWidth: Record<string, unknown>;
    breakpointMobileMenu: string;
    mediaQueryMin: Record<string, unknown> | null;
}
// Bytecode theme
const bytecode: Bytecode = {
    colors: {
        background: darkgray,
        primary: green,
        secondary: mediumgray,
        tertiary: red,
        black,
        mediumgray,
        lightgray,
        lightgray2,
        white,
    },
    fonts: {
        heading,
        paragraph,
        menu,
    },
    fontWeights: {
        light,
        regular,
        bold,
    },
    typography: {
        body: {
            height: '1.2em',
            spacing: '0.0em',
            font: paragraph,
            weight: regular,
            color: lightgray,
        },
        h1: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h2: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h3: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h4: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h5: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            height: '1.33em',
            weight: regular,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h6: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            height: '1.1em',
            weight: regular,
            color: GlobalHeadingSettings.color,
            marginBottom: '0.33em',
        },
        p: {
            spacing: '0.015em',
            height: '1.33em',
            font: paragraph,
            weight: regular,
            color: lightgray2,
            marginBottom: '1.33em',
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
            size: '1.22em',
            height: '1.44em',
            spacing: '0.01em',
            font: paragraph,
            weight: regular,
            color: lightgray,
        },
        caption: {
            size: '0.9rem',
            height: '1.48em',
            spacing: '0em',
            font: menu,
            weight: light,
            color: lightgray2,
        },
        subtitle: {
            size: '0.85rem',
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
            spacing: '0.05em',
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
    breakpointMobileMenu: '68rem',
    breakpoint: {
        xs: '48em',
        sm: '64em',
        md: '85.375em',
        lg: '120em',
        xl: '160em',
        xxl: '200em',
    },
    containerWidth: {
        xs: '2vw',
        sm: '4vw',
        md: '8vw',
        lg: '11vw',
        xl: '15vw',
    },
    mediaQueryMin: null,
};

bytecode.mediaQueryMin = {
    xs: `min-width: ${bytecode.breakpoint.xs}`,
    sm: `min-width: ${bytecode.breakpoint.sm}`,
    md: `min-width: ${bytecode.breakpoint.md}`,
    lg: `min-width: ${bytecode.breakpoint.lg}`,
    xl: `min-width: ${bytecode.breakpoint.xl}`,
    xxl: `-webkit-min-device-pixel-ratio: 2) and
    (min-resolution: 192dpi) and
    (min-width: ${bytecode.breakpoint.xxl}`,
};

const theme = bytecode;
export default theme;
