import React from 'react';

export default interface HeaderProps {
    title: string;
    subtitle: string;
    tagline?: string;
    img: string;
    children?: React.ReactNode;
    text?: string;
    href?: string;
    button?: string;
    useGatsbyLink?: boolean;
}
