import React from 'react';

export interface ButtonProps {
    href?: string;
    useGatsbyLink?: boolean;
    rel?: string;
    submit?: boolean;
    target?: string;
    onClick?: () => void;
    wide?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
}
