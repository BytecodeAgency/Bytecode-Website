import React from 'react';

export interface ButtonProps {
    href?: string;
    useGatsbyLink?: boolean;
    rel?: string;
    submit?: boolean;
    target?: string;
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}
