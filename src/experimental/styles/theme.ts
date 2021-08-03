/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

// Colors
import React from 'react';

const black = '#0f0f0f';
const darkgray = '#21171F';
const green = '#6CC39A';
const lightgray = '#f2f2f2';
const lightgray2 = '#E7E7E7';
const mediumgray = '#262626';
const red = '#df5252';
const white = '#ffffff';
const offWhite = '#f5f5f5';
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

type Colors = {
    background: string;
    primary: string;
    secondary: string;
    tertiary: string;
    black: string;
    mediumgray: string;
    lightgray: string;
    lightgray2: string;
    white: string;
    offWhite: string;
};
type Fonts = {
    heading: string;
    paragraph: string;
    menu: string;
};

type FontWeights = {
    light: number;
    regular: number;
    bold: number;
};

type TypographyElement = {
    size?: string;
    height?: string;
    spacing?: string;
    font?: string;
    weight?: number;
    color?: string;
    border?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
};
type Body = TypographyElement & {
    height: string;
    spacing: string;
    font: string;
    weight: number;
    color: string;
};
type TextElement = TypographyElement & {
    spacing: string;
    font: string;
    weight: number;
    color: string;
    marginBottom: string;
};
type ListItem = TypographyElement & {
    spacing: string;
    font: string;
    weight: number;
    color: string;
    marginTop: string;
    marginBottom: string;
};
type UnorderedList = TypographyElement & {
    marginTop: string;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
};
type HTMLElement = TypographyElement & {
    size: string;
    height: string;
    spacing: string;
    font: string;
    weight: number;
    color: string;
};
type Introduction = HTMLElement;
type Caption = HTMLElement;
type Subtitle = HTMLElement;
type Button = HTMLElement;
type MenuItem = HTMLElement;
type Form = HTMLElement;
export type Typography = {
    body: Body;
    h1: TextElement;
    h2: TextElement;
    h3: TextElement;
    h4: TextElement;
    h5: TextElement;
    h6: TextElement;
    p: TextElement;
    li: ListItem;
    ul: UnorderedList;
    introduction: Introduction;
    caption: Caption;
    subtitle: Subtitle;
    button: Button;
    menuitem: MenuItem;
    form: Form;
};
type Breakpoints = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl?: string;
};
interface Bytecode {
    colors: Colors;
    fonts: Fonts;
    fontWeights: FontWeights;
    typography: Typography;
    breakpoint: Breakpoints;
    containerWidth: Breakpoints;
    breakpointMobileMenu: string;
    mediaQueryMin: Breakpoints;
}
const breakpoints: Breakpoints = {
    xs: '48em',
    sm: '64em',
    md: '85.375em',
    lg: '120em',
    xl: '160em',
    xxl: '200em',
};
// Bytecode theme
const bytecode: Bytecode = {
    colors: {
        background: '#21171F',
        primary: '#6CC39A',
        secondary: '#271C25',
        tertiary: '#9B5B5B',
        black,
        mediumgray: '#392B37',
        lightgray,
        lightgray2,
        white,
        offWhite: '#E8E8E8',
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
            height: '1.58em',
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
            size: '0.85rem',
            height: '1.48em',
            spacing: '0em',
            font: paragraph,
            weight: light,
            color: lightgray2,
        },
        subtitle: {
            size: '0.75rem',
            height: '1.2em',
            spacing: '0.35em',
            font: paragraph,
            weight: bold,
            color: green,
            marginBottom: '1em',
        },
        button: {
            size: '1rem',
            height: '1.2em',
            spacing: 'normal',
            font: paragraph,
            weight: regular,
            color: white,
            border: `.1rem solid${red}`,
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
    breakpoint: breakpoints,
    containerWidth: {
        xs: '2vw',
        sm: '4vw',
        md: '8vw',
        lg: '11vw',
        xl: '15vw',
    },
    mediaQueryMin: {
        xs: `min-width: ${breakpoints.xs}`,
        sm: `min-width: ${breakpoints.sm}`,
        md: `min-width: ${breakpoints.md}`,
        lg: `min-width: ${breakpoints.lg}`,
        xl: `min-width: ${breakpoints.xl}`,
        xxl: `-webkit-min-device-pixel-ratio: 2) and
             (min-resolution: 192dpi) and
             (min-width: ${breakpoints.xxl}`,
    },
};

const theme = bytecode;
export default theme;
